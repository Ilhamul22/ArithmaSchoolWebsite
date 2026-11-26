/* ==========================================================================
   DATABASE SISWA & GURU (LOCAL STORAGE SYSTEM)
   ========================================================================== */
const STORAGE_KEY = 'arithmaschool_users_v4';
const CURRENT_USER_KEY = 'arithmaschool_session_user';

const DEFAULT_DATA = {
  teachers: [
    { id: 1, username: 'Admin Gaussy', name: 'Admin Gaussy (Guru)', password: 'KendaliArithmaSchool', role: 'guru' }
  ],
  students: [
    { 
      id: 101, 
      name: 'Budi Santoso', 
      password: '123', 
      avatar: '🦉',
      status: 'disetujui', 
      registeredAt: '2026-10-30 08:30',
      progress: {
        conceptViewed: true,
        challengeScore: 300,
        challengeStars: 3,
        challengeCompleted: true,
        assessmentScore: 100,
        reflectionDone: true
      }
    }
  ]
};

/* Mirror data di memori (sumber utama saat runtime) */
let __appData = null;
let __fbReady = false;       // true jika Firebase terhubung
let __fbSuppressed = false;  // cegah loop tulis saat menerima data dari Firebase

function sanitizeData(data) {
  if (!data || typeof data !== 'object') data = {};
  if (!data.teachers || !Array.isArray(data.teachers) || data.teachers.length === 0) {
    data.teachers = JSON.parse(JSON.stringify(DEFAULT_DATA.teachers));
  }
  if (!data.students || !Array.isArray(data.students)) {
    data.students = [];
  }
  // Pastikan akun admin guru selalu ada & valid
  const adminObj = data.teachers.find(t => t.username.toLowerCase() === 'admin gaussy');
  if (!adminObj) {
    data.teachers.push({ id: 1, username: 'Admin Gaussy', name: 'Admin Gaussy (Guru)', password: 'KendaliArithmaSchool', role: 'guru' });
  } else if (adminObj.password !== 'KendaliArithmaSchool') {
    adminObj.password = 'KendaliArithmaSchool';
  }
  return data;
}

function getAppData() {
  if (__appData) return __appData;

  // Fallback localStorage (dipakai saat Firebase belum di-setup)
  const saved = localStorage.getItem(STORAGE_KEY);
  let data = null;
  if (saved) {
    try { data = JSON.parse(saved); } catch (e) { data = null; }
  }
  __appData = sanitizeData(data);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(__appData));
  return __appData;
}

function getActiveSessionStudent() {
  let session = (typeof currentSessionStudent !== 'undefined') ? currentSessionStudent : null;
  if (!session) {
    const saved = localStorage.getItem(CURRENT_USER_KEY);
    if (saved) {
      try { session = JSON.parse(saved); } catch (e) { session = null; }
    }
  }
  if (!session) return null;

  const data = getAppData();
  if (data && Array.isArray(data.students)) {
    const fresh = data.students.find(s => s.id === session.id)
               || data.students.find(s => s.name && session.name && s.name.toLowerCase() === session.name.toLowerCase());
    if (fresh) {
      session = fresh;
    }
  }
  if (typeof ensureStudentProgress === 'function') {
    ensureStudentProgress(session);
  }
  currentSessionStudent = session;
  try { localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(session)); } catch (e) {}
  return session;
}

function saveAppData(data) {
  __appData = sanitizeData(data);

  // 1. Simpan juga ke localStorage (cadangan offline)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(__appData));

  // 2. Simpan ke Firebase (agar semua device terhubung)
  if (__fbReady && typeof firebase !== 'undefined') {
    try {
      firebase.database().ref(FIREBASE_DB_PATH).set(JSON.parse(JSON.stringify(__appData)));
    } catch (e) {
      console.warn('Gagal menulis ke Firebase:', e);
    }
  }
}

/* Sinkronisasi dua arah dengan Firebase Realtime Database */
function initFirebaseSync() {
  if (typeof firebase === 'undefined') {
    console.warn('Firebase SDK tidak termuat, memakai localStorage saja.');
    return;
  }
  try {
    if (firebaseConfig.apiKey.startsWith('ISI_')) {
      console.warn('firebaseConfig belum diisi di js/firebase-config.js, memakai localStorage saja.');
      return;
    }
    firebase.initializeApp(firebaseConfig);
    const dbRef = firebase.database().ref(FIREBASE_DB_PATH);

    // Ambil data pertama kali: jika database kosong, kirim data lokal/bawaan ke cloud
    dbRef.once('value').then(snapshot => {
      const remote = snapshot.val();
      if (remote) {
        // Data di cloud lebih utama (punya device lain)
        __appData = sanitizeData(remote);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(__appData));
      } else {
        const local = sanitizeData(getAppData());
        dbRef.set(JSON.parse(JSON.stringify(local)));
        __appData = local;
      }
      __fbReady = true;

      // Dengarkan perubahan dari device lain secara real-time
      dbRef.on('value', snap => {
        if (__fbSuppressed) return;
        __fbSuppressed = true;
        const val = snap.val();
        if (val) {
          __appData = sanitizeData(val);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(__appData));
          // Segarkan tampilan yang sedang terbuka
          if (typeof renderTeacherDashboard === 'function') {
            const dashVisible = document.getElementById('student-table-body');
            if (dashVisible && document.getElementById('page-6') && document.getElementById('page-6').classList.contains('active')) {
              renderTeacherDashboard();
            }
          }
        }
        __fbSuppressed = false;
      });

      console.log('✅ Firebase terhubung! Data sinkron antar device.');
      if (typeof renderTeacherDashboard === 'function') renderTeacherDashboard();
    }).catch(err => {
      console.warn('Gagal menghubungkan Firebase:', err);
    });
  } catch (e) {
    console.warn('Inisialisasi Firebase gagal:', e);
  }
}
initFirebaseSync();

function resetDefaultData() {
  playSFX('warning');
  if (confirm('Yakin ingin mereset data siswa kembali ke data bawaan?')) {
    __appData = JSON.parse(JSON.stringify(DEFAULT_DATA));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(__appData));
    saveAppData(__appData);
    renderTeacherDashboard();
    playSFX('success');
    showModal('🔄 Reset Berhasil', 'Data pendaftar siswa telah dikembalikan ke kondisi awal bawaan.', 'info');
  }
}

/* Autentikasi Login & Registrasi Siswa */
function showLoginAlert(msg, type = 'warning') {
  const alertBox = document.getElementById('login-alert');
  const alertText = document.getElementById('login-alert-text');
  alertBox.className = `arcade-alert alert-${type} show`;
  alertText.textContent = msg;
  playSFX(type);
}

function hideLoginAlert() {
  document.getElementById('login-alert').classList.remove('show');
}

function handleStudentLogin() {
  hideLoginAlert();
  const userVal = document.getElementById('login-username').value.trim();
  const passVal = document.getElementById('login-password').value.trim();

  if (!userVal || !passVal) {
    showLoginAlert('Mohon ketik nama lengkap dan kata sandi terlebih dahulu!', 'warning');
    return;
  }

  const data = getAppData();
  const found = data.students.find(s => s.name.toLowerCase() === userVal.toLowerCase() && s.password === passVal);

  if (!found) {
    showLoginAlert('Nama atau password belum cocok, coba lagi ya! 🦉', 'danger');
    return;
  }

  if (found.status === 'menunggu') {
    const waitingName = document.getElementById('waiting-student-name');
    if (waitingName) waitingName.textContent = found.name;
    showLoginAlert('Akunmu masih menunggu persetujuan guru ⏳ Harap hubungi guru/admin agar akunmu disetujui di Ruang Guru.', 'warning');
    return;
  }

  if (found.status === 'disetujui') {
    ensureStudentProgress(found);
    currentSessionStudent = found;
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(found));
    playSFX('success');
    showAudioToast(`🎉 Selamat datang, ${found.name}!`, 'fa-graduation-cap');
    navigateTo(5);
  }
}

function handleStudentRegister() {
  const nameInput = document.getElementById('reg-name');
  const passInput = document.getElementById('reg-password');
  const nameVal = nameInput.value.trim();
  const passVal = passInput.value.trim();

  if (!nameVal || !passVal) return;

  const data = getAppData();
  const isExist = data.students.some(s => s.name.toLowerCase() === nameVal.toLowerCase());
  if (isExist) {
    const regAlert = document.getElementById('reg-alert');
    regAlert.classList.add('show');
    document.getElementById('reg-alert-text').textContent = 'Nama tersebut sudah terdaftar! Gunakan nama lengkap lain atau hubungi guru.';
    playSFX('warning');
    return;
  }

  const newStudent = {
    id: Date.now(),
    name: nameVal,
    password: passVal,
    avatar: '🦉',
    status: 'menunggu',
    registeredAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
    progress: { conceptViewed: false, challengeScore: 0, challengeStars: 0, challengeCompleted: false, assessmentScore: null, reflectionDone: false }
  };

  data.students.push(newStudent);
  saveAppData(data);
  playSFX('success');

  nameInput.value = '';
  passInput.value = '';
  document.getElementById('reg-alert').classList.remove('show');

  const waitingName = document.getElementById('waiting-student-name');
  if (waitingName) waitingName.textContent = newStudent.name;
  const loginUserInput = document.getElementById('login-username');
  if (loginUserInput) loginUserInput.value = newStudent.name;

  navigateTo('waiting');
}

function handleTeacherLogin() {
  const user = document.getElementById('teacher-user').value.trim();
  const pass = document.getElementById('teacher-pass').value.trim();
  const data = getAppData();

  const teacher = data.teachers.find(t => t.username.toLowerCase() === user.toLowerCase() && t.password === pass);
  const isMasterAdmin = (user.toLowerCase() === 'admin gaussy' && pass === 'KendaliArithmaSchool');

  if (teacher || isMasterAdmin) {
    playSFX('success');
    isTeacherLoggedIn = true;
    showAudioToast('🍎 Selamat datang di Ruang Guru!', 'fa-chalkboard-user');
    navigateTo(6);
  } else {
    const alertBox = document.getElementById('teacher-alert');
    alertBox.classList.add('show');
    document.getElementById('teacher-alert-text').textContent = 'ID atau password guru salah. Masukkan ID: Admin Gaussy & Sandi: KendaliArithmaSchool';
    playSFX('warning');
  }
}

function handleTeacherLogout() {
  playSFX('click');
  isTeacherLoggedIn = false;
  document.getElementById('teacher-user').value = '';
  document.getElementById('teacher-pass').value = '';
  showAudioToast('👋 Berhasil keluar dari Ruang Guru', 'fa-arrow-right-from-bracket');
  navigateTo(2);
}

function handleLogout() {
  playSFX('click');
  currentSessionStudent = null;
  localStorage.removeItem(CURRENT_USER_KEY);
  document.getElementById('login-username').value = '';
  document.getElementById('login-password').value = '';
  hideLoginAlert();
  showAudioToast('👋 Kamu telah keluar. Sampai jumpa!', 'fa-arrow-right-from-bracket');
  navigateTo(2);
}

/* Dashboard Guru & Manajemen Siswa */
function renderTeacherDashboard() {
  const data = getAppData();
  const tbody = document.getElementById('student-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';

  let total = data.students.length;
  let pendingCount = 0;
  let approvedCount = 0;

  if (total === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:18px; color:#888;">Belum ada pendaftar siswa.</td></tr>`;
  } else {
    data.students.forEach((s, idx) => {
      if (s.status === 'menunggu') pendingCount++;
      if (s.status === 'disetujui') approvedCount++;

      const tr = document.createElement('tr');
      const isPending = s.status === 'menunggu';
      const badgeClass = isPending ? 'status-menunggu' : 'status-disetujui';
      const badgeLabel = isPending ? '⏳ Menunggu' : '✅ Disetujui';

      tr.innerHTML = `
        <td>${idx + 1}</td>
        <td><strong>${escapeHtml(s.name)}</strong></td>
        <td style="color:#666; font-size:12px;">${s.registeredAt || '-'}</td>
        <td><span class="status-badge ${badgeClass}">${badgeLabel}</span></td>
        <td style="text-align: center;">
          ${isPending ? `
            <button class="arcade-btn btn-mint btn-sm" onclick="approveStudent(${s.id})" title="Setujui agar siswa bisa login">
              <i class="fa-solid fa-check"></i> ACC
            </button>
          ` : `
            <button class="arcade-btn btn-secondary btn-sm" style="opacity: 0.65; cursor: default;" disabled>
              <i class="fa-solid fa-check-double"></i> SUDAH ACC
            </button>
          `}
          <button class="arcade-btn btn-danger btn-sm" onclick="deleteStudent(${s.id}, '${escapeHtml(s.name)}')" title="Hapus akun siswa">
            <i class="fa-solid fa-trash"></i> HAPUS
          </button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }

  const statTotal = document.getElementById('stat-total-students');
  const statPending = document.getElementById('stat-pending-students');
  const statApproved = document.getElementById('stat-approved-students');
  if (statTotal) statTotal.textContent = total;
  if (statPending) statPending.textContent = pendingCount;
  if (statApproved) statApproved.textContent = approvedCount;
}

function approveStudent(id) {
  const data = getAppData();
  const student = data.students.find(s => s.id === id);
  if (student) {
    student.status = 'disetujui';
    saveAppData(data);
    playSFX('success');
    renderTeacherDashboard();
  }
}

function deleteStudent(id, name) {
  playSFX('warning');
  showModal('⚠️ Konfirmasi Hapus Akun', `Yakin ingin menghapus akun siswa "${name}"?`, 'danger', () => {
    const data = getAppData();
    data.students = data.students.filter(s => s.id !== id);
    saveAppData(data);
    playSFX('click');
    renderTeacherDashboard();
  }, true);
}



/* Modal Tambah Akun Siswa Baru oleh Guru (Langsung Di-ACC) */
function openAddStudentModal() {
  if (typeof playSFX === 'function') playSFX('click');
  const modal = document.getElementById('modal-add-student');
  if (modal) modal.style.display = 'flex';
  const nameInput = document.getElementById('new-student-name');
  if (nameInput) {
    nameInput.value = '';
    nameInput.focus();
  }
  const passInput = document.getElementById('new-student-password');
  if (passInput) passInput.value = '';
}

function closeAddStudentModal() {
  if (typeof playSFX === 'function') playSFX('click');
  const modal = document.getElementById('modal-add-student');
  if (modal) modal.style.display = 'none';
}

function saveNewStudent(e) {
  if (e) e.preventDefault();
  const nameInput = document.getElementById('new-student-name');
  const passInput = document.getElementById('new-student-password');
  const nameVal = nameInput ? nameInput.value.trim() : '';
  const passVal = passInput ? passInput.value.trim() : '';

  if (!nameVal || !passVal) {
    alert('Nama dan password tidak boleh kosong!');
    return;
  }

  const data = getAppData();
  const isExist = data.students.some(s => s.name.toLowerCase() === nameVal.toLowerCase());
  if (isExist) {
    alert('Nama siswa tersebut sudah ada! Gunakan nama pembeda.');
    return;
  }

  const newStudent = {
    id: Date.now(),
    name: nameVal,
    password: passVal,
    avatar: '🦉',
    status: 'disetujui', // Langsung ter-ACC otomatis!
    registeredAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
    progress: {
      conceptViewed: false,
      menu1Correct: 0,
      menu1Wrong: 0,
      menu1Resets: 0,
      menu1AnsweredCards: [],
      menu1Completed: false,
      menu2CompletedCases: [],
      menu2Resets: 0,
      menu2Completed: false,
      challengeCompleted: false,
      challengeScore: 0,
      challengeStars: 0,
      assessmentScore: null,
      reflectionDone: false
    }
  };

  data.students.push(newStudent);
  saveAppData(data);
  if (typeof playSFX === 'function') playSFX('success');
  closeAddStudentModal();
  renderTeacherDashboard();
  if (typeof showAudioToast === 'function') {
    showAudioToast(`Akun siswa "${nameVal}" berhasil ditambahkan & langsung di-ACC! 🎉`, 'fa-user-check');
  }
}

/* ==========================================================================
   FITUR LIHAT / SEMBUNYIKAN PASSWORD (TOGGLE VISIBILITY)
   ========================================================================== */
function togglePasswordVisibility(inputId, btnEl) {
  if (typeof playSFX === 'function') playSFX('click');
  const input = document.getElementById(inputId);
  if (!input) return;
  const icon = btnEl ? btnEl.querySelector('i') : null;

  if (input.type === 'password') {
    input.type = 'text';
    if (icon) {
      icon.className = 'fa-solid fa-eye-slash';
    }
    if (btnEl) btnEl.title = 'Sembunyikan Password';
  } else {
    input.type = 'password';
    if (icon) {
      icon.className = 'fa-solid fa-eye';
    }
    if (btnEl) btnEl.title = 'Lihat Password';
  }
}
