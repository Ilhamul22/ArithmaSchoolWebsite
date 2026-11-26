/* ==========================================================================
   SISTEM NAVIGASI ANTARHALAMAN & MODAL POPUP
   ========================================================================== */
let currentPageIndex = 1;
let currentSessionStudent = null;
let isTeacherLoggedIn = false;

function navigateTo(pageNumber) {
  playSFX('click');
  
  // Proteksi Halaman Guru (Halaman 6 khusus guru yang telah login)
  if (pageNumber === 6 && !isTeacherLoggedIn) {
    showAudioToast('⚠️ Khusus Guru/Admin! Silakan masuk sebagai Guru.', 'fa-lock');
    pageNumber = 4;
  }

  // Proteksi Halaman Siswa (Halaman 5, profil, 7, 8, 9, 10 khusus siswa login)
  const studentProtectedPages = [5, 'profile', 7, 8, 9, 10];
  if (studentProtectedPages.includes(pageNumber) && !currentSessionStudent) {
    showAudioToast('⚠️ Silakan masuk sebagai siswa terlebih dahulu ya! 🦉', 'fa-lock');
    pageNumber = 2;
  }

  // SISTEM KUNCI BERURUTAN: SEMENTARA DINONAKTIFKAN untuk keperluan pengecekan konten
  // TODO: Aktifkan kembali blok ini setelah pengecekan selesai:
  // const p = currentSessionStudent ? currentSessionStudent.progress : {};
  // const m1Done = p && (p.menu1Completed || (p.menu1Correct || 0) >= 10);
  // const m2Done = p && (p.menu2Completed || (p.menu2CompletedCases || []).length >= 4);
  // if (pageNumber === 8 && !m1Done) {
  //   showAudioToast('🔒 Menu 2 masih TERKUNCI!...', 'fa-lock'); return;
  // }
  // if (pageNumber === 9 && !m2Done) {
  //   showAudioToast('🔒 Menu 3 masih TERKUNCI!...', 'fa-lock'); return;
  // }

  const pages = document.querySelectorAll('.screen-page');
  pages.forEach(p => p.classList.remove('active'));

  const targetPage = document.getElementById(`page-${pageNumber}`);
  if (targetPage) {
    targetPage.classList.add('active');
    currentPageIndex = pageNumber;
  }

  // Trigger Aksi Khusus Tiap Halaman
  if (pageNumber === 5) {
    updateStudentMenuGreeting();
    updateMenuLocksUI();
  } else if (pageNumber === 'profile') {
    loadProfilePageData();
  } else if (pageNumber === 6) {
    renderTeacherDashboard();
  } else if (pageNumber === 7) {
    initFlipCardsMenu1();
  } else if (pageNumber === 8) {
    initArchitectStudioMenu2();
  } else if (pageNumber === 9) {
    initMenu3Assessment();
  } else if (pageNumber === 10) {
    triggerGraduationCelebration();
  }

  if (typeof typesetMath === 'function') {
    setTimeout(() => typesetMath(targetPage || document.body), 40);
  }
}

function updateStudentMenuGreeting() {
  let student = currentSessionStudent;
  if (!student) {
    const savedUser = localStorage.getItem(CURRENT_USER_KEY);
    if (savedUser) {
      try { student = JSON.parse(savedUser); currentSessionStudent = student; } catch(e) {}
    }
  }

  let studentName = "Petualang";
  let studentAvatar = "🦉";
  let progressPct = 0;

  if (student) {
    ensureStudentProgress(student);
    studentName = student.name || "Petualang";
    studentAvatar = student.avatar || "🦉";
    progressPct = calculateProgressPercentage(student);
  }

  const welcomeTitle = document.getElementById('student-welcome-title');
  if (welcomeTitle) welcomeTitle.textContent = `Halo, ${studentName}! Mau mulai petualangan dari mana? 🌟`;
  
  const menuAvatar = document.getElementById('menu-avatar-display');
  if (menuAvatar) menuAvatar.textContent = studentAvatar;

  const menuName = document.getElementById('menu-profile-name');
  if (menuName) menuName.textContent = studentName;

  const menuProg = document.getElementById('menu-progress-badge');
  if (menuProg) menuProg.textContent = `Progress: ${progressPct}%`;
}
function updateMenuLocksUI() {
  const p = (currentSessionStudent && currentSessionStudent.progress) || {};
  const m1Done = p.menu1Completed || (p.menu1Correct || 0) >= 10;
  const m2Done = p.menu2Completed || (p.menu2CompletedCases || []).length >= 4;

  const card2 = document.querySelector('.card-tantangan');
  const card3 = document.querySelector('.card-asesmen');
  if (card2) {
    card2.style.opacity = m1Done ? '1' : '0.55';
    card2.style.filter = m1Done ? 'none' : 'grayscale(0.6)';
    card2.title = m1Done ? 'Buka Menu 2' : '🔒 Terkunci! Selesaikan Menu 1 (10 kartu benar) dulu';
  }
  if (card3) {
    card3.style.opacity = m2Done ? '1' : '0.55';
    card3.style.filter = m2Done ? 'none' : 'grayscale(0.6)';
    card3.title = m2Done ? 'Buka Menu 3' : '🔒 Terkunci! Selesaikan Menu 2 (4 kasus) dulu';
  }

  const lock2 = document.getElementById('lock-badge-menu2');
  const lock3 = document.getElementById('lock-badge-menu3');
  if (lock2) lock2.style.display = m1Done ? 'none' : 'inline-block';
  if (lock3) lock3.style.display = m2Done ? 'none' : 'inline-block';
}

/* Modal Popup Helpers */
let modalConfirmCallback = null;

function showModal(title, msg, type = 'info', onConfirm = null, isConfirm = false) {
  const modalTitle = document.getElementById('modal-title');
  const modalMsg = document.getElementById('modal-message');
  const iconWrap = document.getElementById('modal-icon-wrap');
  if (modalTitle) modalTitle.textContent = title;
  if (modalMsg) modalMsg.innerHTML = msg;

  if (iconWrap) {
    if (type === 'danger') iconWrap.textContent = '⚠️';
    else if (type === 'success') iconWrap.textContent = '🎉';
    else iconWrap.textContent = '📖';
  }

  modalConfirmCallback = onConfirm;

  const actions = document.getElementById('modal-actions');
  if (actions) {
    if (isConfirm) {
      actions.innerHTML = `
        <button class="arcade-btn btn-secondary btn-sm" onclick="closeModal()">Batal</button>
        <button class="arcade-btn btn-danger btn-sm" onclick="executeModalConfirm()">Ya, Lanjutkan</button>
      `;
    } else {
      actions.innerHTML = `
        <button class="arcade-btn btn-mint btn-sm" onclick="executeModalConfirm()">Tutup Panduan</button>
      `;
    }
  }

  const modal = document.getElementById('arcade-modal');
  if (modal) modal.style.display = 'flex';
}

function closeModal() {
  playSFX('click');
  const modal = document.getElementById('arcade-modal');
  if (modal) modal.style.display = 'none';
}

function executeModalConfirm() {
  closeModal();
  if (modalConfirmCallback) modalConfirmCallback();
}

function showFeatureInfoModal() {
  playSFX('click');
  showModal(
    '📖 Panduan Lengkap 3 Menu Utama',
    `<strong>C. Menu 1: Penguatan Konsep (Kartu Flip Interaktif)</strong><br>
    Menguji ingatan mengenai definisi barisan dan deret, nilai beda, serta rumus dasar. Posisi kartu diacak otomatis setiap kali masuk menu dan tetap sama selama membuka kartu. Setiap kartu diklik akan membalik menampilkan pertanyaan & pilihan jawaban, disertai umpan balik warna, efek suara, dan penjelasan singkat.<br><br>
    <strong>D. Menu 2: Tantangan & Pemodelan Mandiri (Studio Arsitek)</strong><br>
    Menyusun objek visual dan merumuskan bentuk matematikanya secara mandiri lewat 4 pilihan kasus nyata: Penataan kursi teater, penumpukan pipa konstruksi, pengamatan sel biologi, dan perencanaan tabungan. Siswa mengatur stok objek dengan tombol (+)/(-), mengetikkan barisan manual, memasukkan nilai suku pertama (a), beda (b), merumuskan Un dan Sn, lalu menekan tombol uji kecocokan.<br><br>
    <strong>E. Menu 3: Asesmen, Refleksi, dan Sertifikat Digital</strong><br>
    Memuat game petualangan karakter berjalan dari rumah ke sekolah dengan rintangan kuis (pilihan ganda, benar/salah, isian singkat) lengkap pembahasan detail langkah hitung. Dilanjutkan jurnal refleksi diri (Ya/Tidak/Ragu-Ragu) dan penerbitan Sertifikat Kelulusan Digital 3 Aspek Utama yang dapat diunduh langsung sebagai file gambar PNG!`,
    'info'
  );
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
