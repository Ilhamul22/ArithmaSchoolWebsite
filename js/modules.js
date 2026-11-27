/* ==========================================================================
   ARITHMASCHOOL: MODUL UTAMA GAME, KONSEP, STUDIO ARSITEK & ASESMEN
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. MENU 1: PENGUATAN KONSEP (KARTU MISTERI PASTEL ARITHMASCHOOL)
   -------------------------------------------------------------------------- */
const MASTER_PASTEL_CARDS = [
  {
    id: 1,
    color: 'blue',
    topic: 'Definisi Barisan Aritmatika',
    question: 'Manakah di bawah ini yang merupakan barisan aritmatika?',
    options: [
      { text: 'A. 2, 5, 8, 11, ... (selisih antarsuku tetap +3)', correct: true },
      { text: 'B. 2, 4, 8, 16, ... (setiap suku dikali 2)', correct: false },
      { text: 'C. 1, 4, 9, 16, ... (pola bilangan kuadrat n²)', correct: false },
      { text: 'D. 2, 6, 18, 54, ... (setiap suku dikali 3)', correct: false }
    ],
    explanation: 'Barisan aritmatika memiliki ciri khas selisih antarsuku berurutan (beda) yang selalu konstan: 5 - 2 = 8 - 5 = 11 - 8 = 3. Pilihan B dan D merupakan barisan geometri, sedangkan C adalah barisan kuadrat.'
  },
  {
    id: 2,
    color: 'coral',
    topic: 'Menentukan Beda (b)',
    question: 'Diketahui suatu barisan aritmatika memiliki suku ke-4 (U₄) = 17 dan suku ke-9 (U₉) = 37. Berapakah nilai beda (b) barisan tersebut?',
    options: [
      { text: 'A. b = 3', correct: false },
      { text: 'B. b = 4', correct: true },
      { text: 'C. b = 5', correct: false },
      { text: 'D. b = 6', correct: false }
    ],
    explanation: 'Selisih suku: U₉ - U₄ = (9 - 4)b → 37 - 17 = 5b → 20 = 5b → b = 4. Jadi beda barisan tersebut adalah 4.'
  },
  {
    id: 3,
    color: 'mint',
    topic: 'Menghitung Suku ke-16 (U₁₆)',
    question: 'Diketahui barisan aritmatika: 3, 7, 11, 15, ... Berapakah nilai suku ke-16 (U₁₆) dari barisan tersebut?',
    options: [
      { text: 'A. 59', correct: false },
      { text: 'B. 63', correct: true },
      { text: 'C. 67', correct: false },
      { text: 'D. 71', correct: false }
    ],
    explanation: 'Suku pertama a = 3 dan beda b = 7 - 3 = 4. Rumus suku ke-n: Uₙ = a + (n - 1)b. Maka U₁₆ = 3 + (16 - 1) × 4 = 3 + 15 × 4 = 3 + 60 = 63.'
  },
  {
    id: 4,
    color: 'yellow',
    topic: 'Rumus Jumlah Deret Aritmatika (Sn)',
    question: 'Rumus umum jumlah n suku pertama (Sₙ) deret aritmatika dengan suku pertama a dan beda b dinyatakan oleh...',
    options: [
      { text: 'A. Sₙ = n/2 × [2a + (n - 1)b]', correct: true },
      { text: 'B. Sₙ = n × [2a + (n - 1)b]', correct: false },
      { text: 'C. Sₙ = n/2 × [a + (n - 1)b]', correct: false },
      { text: 'D. Sₙ = 2n × [a + Uₙ]', correct: false }
    ],
    explanation: 'Rumus jumlah n suku pertama deret aritmatika adalah Sₙ = n/2 × [2a + (n - 1)b] atau ekuivalen dengan Sₙ = n/2 × (a + Uₙ).'
  },
  {
    id: 5,
    color: 'purple',
    topic: 'Perbedaan Barisan & Deret',
    question: 'Apa perbedaan mendasar antara "barisan aritmatika" dan "deret aritmatika"?',
    options: [
      { text: 'A. Barisan adalah penjumlahan semua suku, deret adalah daftar suku berurutan', correct: false },
      { text: 'B. Barisan adalah susunan bilangan berurutan dengan beda konstan, sedangkan deret adalah hasil penjumlahan suku-suku barisan', correct: true },
      { text: 'C. Keduanya sama persis tanpa perbedaan makna matematis', correct: false },
      { text: 'D. Barisan hanya berlaku untuk bilangan bulat, deret untuk bilangan pecahan', correct: false }
    ],
    explanation: 'Barisan adalah susunan bilangan berurutan yang dipisahkan koma (contoh: 2, 5, 8, 11, ...), sedangkan deret adalah penjumlahan dari suku-suku barisan tersebut yang dihubungkan tanda tambah (contoh: 2 + 5 + 8 + 11 + ...).'
  },
  {
    id: 6,
    color: 'pink',
    topic: 'Jumlah 20 Suku Pertama Deret Genap',
    question: 'Berapakah hasil penjumlahan 20 suku pertama (S₂₀) dari deret bilangan genap: 2 + 4 + 6 + 8 + ...?',
    options: [
      { text: 'A. 380', correct: false },
      { text: 'B. 400', correct: false },
      { text: 'C. 420', correct: true },
      { text: 'D. 440', correct: false }
    ],
    explanation: 'Diketahui a = 2, b = 2, dan n = 20. S₂₀ = 20/2 × [2(2) + (20 - 1) × 2] = 10 × [4 + 38] = 10 × 42 = 420. (Atau gunakan rumus deret genap: Sₙ = n(n + 1) = 20 × 21 = 420).'
  },
  {
    id: 7,
    color: 'blue',
    topic: 'Suku Tengah Barisan Aritmatika (Ut)',
    question: 'Suatu barisan aritmatika memiliki suku pertama a = 6 dan suku terakhir Uₙ = 90. Jika banyaknya suku ganjil, berapakah nilai suku tengahnya (Ut)?',
    options: [
      { text: 'A. 42', correct: false },
      { text: 'B. 45', correct: false },
      { text: 'C. 48', correct: true },
      { text: 'D. 52', correct: false }
    ],
    explanation: 'Nilai suku tengah dari barisan aritmatika dengan banyak suku ganjil dirumuskan oleh: Ut = 1/2 × (a + Uₙ) = 1/2 × (6 + 90) = 1/2 × 96 = 48.'
  },
  {
    id: 8,
    color: 'coral',
    topic: 'Karakteristik Barisan Menurun',
    question: 'Suatu barisan aritmatika disebut sebagai barisan menurun jika nilai bedanya (b) memenuhi kondisi...',
    options: [
      { text: 'A. b > 0 (positif)', correct: false },
      { text: 'B. b < 0 (negatif)', correct: true },
      { text: 'C. b = 0 (konstan)', correct: false },
      { text: 'D. b ≥ 1', correct: false }
    ],
    explanation: 'Jika beda b < 0 (negatif), nilai suku berikutnya selalu berkurang dibandingkan suku sebelumnya sehingga grafik suku-sukunya terus menurun.'
  },
  {
    id: 9,
    color: 'mint',
    topic: 'Barisan Menurun & Beda Negatif',
    question: 'Perhatikan barisan aritmatika menurun berikut: 50, 43, 36, 29, ... Berapakah nilai suku ke-15 (U₁₅) dari barisan tersebut?',
    options: [
      { text: 'A. -41', correct: false },
      { text: 'B. -48', correct: true },
      { text: 'C. -55', correct: false },
      { text: 'D. -34', correct: false }
    ],
    explanation: 'Suku pertama a = 50 dan beda b = 43 - 50 = -7. Suku ke-15: U₁₅ = a + (15 - 1)b = 50 + 14 × (-7) = 50 - 98 = -48.'
  },
  {
    id: 10,
    color: 'yellow',
    topic: 'Menentukan Beda & Suku ke-15',
    question: 'Diketahui barisan aritmatika: 100, 92, 84, 76, ... Berapakah nilai beda (b) dan suku ke-15 (U₁₅) dari barisan tersebut?',
    options: [
      { text: 'A. b = -8 dan U₁₅ = -12', correct: true },
      { text: 'B. b = 8 dan U₁₅ = 12', correct: false },
      { text: 'C. b = -8 dan U₁₅ = -4', correct: false },
      { text: 'D. b = -6 dan U₁₅ = 16', correct: false }
    ],
    explanation: 'Beda b = 92 - 100 = -8. Suku ke-15: U₁₅ = a + 14b = 100 + 14 × (-8) = 100 - 112 = -12.'
  },
  {
    id: 11,
    color: 'purple',
    topic: 'Menghitung Suku ke-18 (U₁₈)',
    question: 'Suatu barisan aritmatika memiliki suku pertama a = 7 dan beda b = 5. Berapakah nilai suku ke-18 (U₁₈) dari barisan tersebut?',
    options: [
      { text: 'A. 87', correct: false },
      { text: 'B. 92', correct: true },
      { text: 'C. 97', correct: false },
      { text: 'D. 102', correct: false }
    ],
    explanation: 'Rumus suku ke-n: Uₙ = a + (n - 1)b. Maka U₁₈ = 7 + (18 - 1) × 5 = 7 + 17 × 5 = 7 + 85 = 92.'
  },
  {
    id: 12,
    color: 'pink',
    topic: 'Trik Penjumlahan Cepat Gauss',
    question: 'Bagaimanakah prinsip metode Gauss dalam menghitung cepat hasil penjumlahan deret 1 + 2 + 3 + ... + 100?',
    options: [
      { text: 'A. Mengalikan suku terbesar dengan kuadrat banyak suku: 100 × 100² = 1.000.000', correct: false },
      { text: 'B. Memasangkan suku awal dan akhir (1 + 100 = 101, 2 + 99 = 101, dst) sehingga terbentuk 50 pasang bernilai 101, lalu dihitung 50 × 101 = 5.050', correct: true },
      { text: 'C. Membagi seluruh suku dengan suku tengah (50) lalu dijumlahkan berulang kali', correct: false },
      { text: 'D. Mengkuadratkan penjumlahan suku pertama dan suku terakhir: (1 + 100)² = 10.201', correct: false }
    ],
    explanation: 'Metode Gauss memasangkan suku pertama dengan suku terakhir: (1 + 100) = 101, (2 + 99) = 101, (3 + 98) = 101, dan seterusnya. Karena terdapat 100 bilangan, terbentuk 50 pasang yang masing-masing bernilai 101. Maka total jumlahnya: S₁₀₀ = 50 × 101 = 5.050.'
  },
  {
    id: 13,
    color: 'blue',
    topic: 'Menghitung Suku ke-15 (U₁₅)',
    question: 'Diketahui barisan aritmatika: 12, 19, 26, 33, ... Berapakah nilai suku ke-15 (U₁₅) dari barisan tersebut?',
    options: [
      { text: 'A. 103', correct: false },
      { text: 'B. 110', correct: true },
      { text: 'C. 117', correct: false },
      { text: 'D. 124', correct: false }
    ],
    explanation: 'Suku pertama a = 12 dan beda b = 19 - 12 = 7. Rumus suku ke-n: Uₙ = a + (n - 1)b. Maka U₁₅ = 12 + (15 - 1) × 7 = 12 + 14 × 7 = 12 + 98 = 110.'
  },
  {
    id: 14,
    color: 'coral',
    topic: 'Menentukan Banyaknya Suku (n)',
    question: 'Diketahui barisan aritmatika: 8, 13, 18, 23, ..., 118. Berapakah banyaknya suku (n) dalam barisan tersebut?',
    options: [
      { text: 'A. 21 suku', correct: false },
      { text: 'B. 22 suku', correct: false },
      { text: 'C. 23 suku', correct: true },
      { text: 'D. 24 suku', correct: false }
    ],
    explanation: 'Diketahui a = 8, b = 13 - 8 = 5, dan Uₙ = 118. Uₙ = a + (n - 1)b → 118 = 8 + (n - 1) × 5 → 110 = 5(n - 1) → n - 1 = 22 → n = 23 suku.'
  },
  {
    id: 15,
    color: 'mint',
    topic: 'Hubungan Sn dan Un',
    question: 'Jika Sₙ adalah jumlah n suku pertama deret aritmatika, bagaimanakah hubungan matematis untuk mencari suku ke-n (Uₙ)?',
    options: [
      { text: 'A. Uₙ = Sₙ - Sₙ₋₁', correct: true },
      { text: 'B. Uₙ = Sₙ + Sₙ₋₁', correct: false },
      { text: 'C. Uₙ = Sₙ / n', correct: false },
      { text: 'D. Uₙ = Sₙ × Sₙ₋₁', correct: false }
    ],
    explanation: 'Karena Sₙ = U₁ + U₂ + ... + Uₙ₋₁ + Uₙ dan Sₙ₋₁ = U₁ + U₂ + ... + Uₙ₋₁, maka jika keduanya dikurangkan diperoleh: Uₙ = Sₙ - Sₙ₋₁. Rumus ini sangat penting dalam analisis deret.'
  },
  {
    id: 16,
    color: 'yellow',
    topic: 'Letak & Nilai Suku Tengah (Ut)',
    question: 'Suatu barisan aritmatika memiliki 21 suku (n = 21). Jika suku pertama a = 4 dan suku terakhir U₂₁ = 84, suku tengah berada pada suku keberapakah dan berapa nilainya?',
    options: [
      { text: 'A. Suku ke-10 dengan nilai 40', correct: false },
      { text: 'B. Suku ke-11 dengan nilai 44', correct: true },
      { text: 'C. Suku ke-11 dengan nilai 48', correct: false },
      { text: 'D. Suku ke-12 dengan nilai 44', correct: false }
    ],
    explanation: 'Letak suku tengah barisan ganjil: t = (n + 1)/2 = (21 + 1)/2 = 11 (yaitu suku ke-11). Nilai suku tengah: Ut = 1/2 × (a + Uₙ) = 1/2 × (4 + 84) = 1/2 × 88 = 44.'
  },
  {
    id: 17,
    color: 'purple',
    topic: 'Menjumlahkan 17 Suku Pertama (S₁₇)',
    question: 'Berapakah hasil penjumlahan 17 suku pertama (S₁₇) dari deret aritmatika: 4 + 7 + 10 + 13 + ...?',
    options: [
      { text: 'A. 442', correct: false },
      { text: 'B. 459', correct: false },
      { text: 'C. 476', correct: true },
      { text: 'D. 493', correct: false }
    ],
    explanation: 'Diketahui a = 4, beda b = 7 - 4 = 3, dan n = 17. Gunakan rumus jumlah deret: Sₙ = n/2 × [2a + (n - 1)b]. S₁₇ = 17/2 × [2(4) + (17 - 1) × 3] = 17/2 × [8 + 16 × 3] = 17/2 × [8 + 48] = 17/2 × 56 = 17 × 28 = 476.'
  },
  {
    id: 18,
    color: 'pink',
    topic: 'Menjumlahkan 16 Suku Pertama (S₁₆)',
    question: 'Berapakah hasil penjumlahan 16 suku pertama (S₁₆) dari deret aritmatika: 5 + 9 + 13 + 17 + ...?',
    options: [
      { text: 'A. 520', correct: false },
      { text: 'B. 540', correct: false },
      { text: 'C. 560', correct: true },
      { text: 'D. 580', correct: false }
    ],
    explanation: 'Diketahui suku pertama a = 5, beda b = 9 - 5 = 4, dan n = 16. Gunakan rumus jumlah deret: Sₙ = n/2 × [2a + (n - 1)b]. S₁₆ = 16/2 × [2(5) + (16 - 1) × 4] = 8 × [10 + 15 × 4] = 8 × [10 + 60] = 8 × 70 = 560.'
  }
];

let activePastelCardsPool = [];
let currentlyOpenZoomCardIdx = null;

function initFlipCardsMenu1() {
  if (currentSessionStudent) {
    ensureStudentProgress(currentSessionStudent);
  }

  const p = currentSessionStudent ? currentSessionStudent.progress : {};
  const answeredIds = p.menu1AnsweredCards || [];
  const correctCount = p.menu1Correct || 0;
  const isShuffled = p.menu1Shuffled || false;

  // Siapkan pool kartu
  activePastelCardsPool = MASTER_PASTEL_CARDS.map(c => ({
    ...c,
    answered: answeredIds.includes(c.id)
  }));

  updateMenu1ProgressUI();

  const shuffleScreen = document.getElementById('menu1-shuffle-screen');
  const cardsArea = document.getElementById('menu1-active-cards-area');
  const compBox = document.getElementById('menu1-completion-box');
  const exhaustBox = document.getElementById('menu1-all-exhausted-box');

  const isAllAnswered = activePastelCardsPool.length > 0 && answeredIds.length >= activePastelCardsPool.length;

  if (isAllAnswered) {
    if (shuffleScreen) shuffleScreen.style.display = 'none';
    if (cardsArea) cardsArea.style.display = 'none';
    if (compBox) compBox.style.display = 'none';
    if (exhaustBox) exhaustBox.style.display = 'block';
    return;
  }

  if (exhaustBox) exhaustBox.style.display = 'none';

  if (!isShuffled && correctCount === 0) {
    // Belum pernah acak -> tampilkan tombol acak di awal
    if (shuffleScreen) shuffleScreen.style.display = 'flex';
    if (cardsArea) cardsArea.style.display = 'none';
    if (compBox) compBox.style.display = 'none';
  } else {
    // Sudah pernah acak -> tampilkan kartu
    if (shuffleScreen) shuffleScreen.style.display = 'none';

    const isFinished = correctCount >= 10 && p.menu1Completed;
    const wantExplore = p.menu1ExploreMore || false;

    if (isFinished && !wantExplore) {
      if (cardsArea) cardsArea.style.display = 'none';
      if (compBox) compBox.style.display = 'block';
    } else {
      if (cardsArea) cardsArea.style.display = 'block';
      if (compBox) compBox.style.display = 'none';
      renderPastelCards();
    }
  }
}

function startShuffleAnimation() {
  playSFX('click');
  const btn = document.getElementById('btn-shuffle-cards');
  const stack = document.getElementById('shuffle-stack-anim');
  if (btn) btn.disabled = true;

  if (stack) {
    stack.classList.add('shuffling');
  }

  setTimeout(() => {
    // Acak urutan kartu
    activePastelCardsPool = [...MASTER_PASTEL_CARDS].sort(() => Math.random() - 0.5);

    if (currentSessionStudent) {
      ensureStudentProgress(currentSessionStudent);
      currentSessionStudent.progress.menu1Shuffled = true;
      saveStudentProgress();
    }

    const shuffleScreen = document.getElementById('menu1-shuffle-screen');
    const cardsArea = document.getElementById('menu1-active-cards-area');
    if (shuffleScreen) shuffleScreen.style.display = 'none';
    if (cardsArea) cardsArea.style.display = 'block';

    renderPastelCards();
    playSFX('fanfare');
    showAudioToast('Kartu misteri berhasil diacak! Klik kartu untuk menjawab ✨', 'fa-wand-magic-sparkles');
    if (btn) btn.disabled = false;
  }, 1100);
}

function renderPastelCards() {
  const grid = document.getElementById('pastel-cards-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const answeredIds = (currentSessionStudent && currentSessionStudent.progress.menu1AnsweredCards) || [];
  let remainingCount = 0;

  activePastelCardsPool.forEach((card, idx) => {
    if (answeredIds.includes(card.id)) {
      return; // Sudah dijawab benar -> kartu menghilang dari grid
    }
    remainingCount++;

    const cardEl = document.createElement('div');
    cardEl.className = `pastel-arcade-card card-theme-${card.color}`;
    cardEl.id = `pastel-card-${card.id}`;
    cardEl.setAttribute('role', 'button');
    cardEl.setAttribute('tabindex', '0');
    cardEl.title = `Klik Kartu #${card.id} (${card.topic}) untuk Membuka Soal`;

    cardEl.onclick = () => openCardZoomModal(idx);

    cardEl.innerHTML = `
      <div class="pac-inner-frame"></div>
      <div class="pac-header">ArithmaSchool</div>
      <div class="pac-center-motif">
        <span class="pac-line"></span>
        <div class="pac-medallion">
          <div class="pac-sunburst"></div>
          <div class="pac-medallion-core">
            <span class="pac-icon-cap">🎓</span>
            <span class="pac-icon-face">🦉</span>
          </div>
        </div>
        <span class="pac-line"></span>
      </div>
      <div class="pac-dots-row">
        <span class="pac-dot active"></span>
        <span class="pac-dot"></span>
        <span class="pac-dot"></span>
        <span class="pac-dot"></span>
        <span class="pac-dot"></span>
      </div>
    `;

    grid.appendChild(cardEl);
  });

  const remLabel = document.getElementById('cards-remaining-count');
  if (remLabel) {
    remLabel.textContent = `Sisa Kartu Aktif: ${remainingCount}`;
  }

  const exhaustBox = document.getElementById('menu1-all-exhausted-box');
  const cardsArea = document.getElementById('menu1-active-cards-area');
  const compBox = document.getElementById('menu1-completion-box');

  if (remainingCount === 0 && activePastelCardsPool.length > 0) {
    if (exhaustBox) exhaustBox.style.display = 'block';
    if (cardsArea) cardsArea.style.display = 'none';
    if (compBox) compBox.style.display = 'none';
    if (window.confetti) confetti({ particleCount: 110, spread: 85, origin: { y: 0.6 } });
    playSFX('fanfare');
  } else {
    if (exhaustBox) exhaustBox.style.display = 'none';
  }
}

function openCardZoomModal(cardIdx) {
  playSFX('click');
  currentlyOpenZoomCardIdx = cardIdx;
  const card = activePastelCardsPool[cardIdx];
  if (!card) return;

  // Reset status ronde jawaban agar kartu bisa dijawab ulang setiap kali dibuka
  card.__alreadyAnsweredThisRound = false;

  const modal = document.getElementById('card-zoom-modal');
  const banner = document.getElementById('card-zoom-banner');
  const topicEl = document.getElementById('zoom-card-topic');
  const numEl = document.getElementById('zoom-card-number');
  const qEl = document.getElementById('zoom-question-text');
  const optsGrid = document.getElementById('zoom-options-grid');
  const fb = document.getElementById('zoom-feedback-box');

  const colorThemes = {
    blue: '#3B82F6',
    coral: '#EF4444',
    mint: '#10B981',
    yellow: '#F59E0B',
    purple: '#8B5CF6',
    pink: '#EC4899'
  };

  if (banner) {
    banner.style.background = colorThemes[card.color] || '#3B82F6';
  }
  if (topicEl) topicEl.textContent = card.topic;
  if (numEl) numEl.textContent = `Kartu #${card.id} • Kategori: ${card.color.toUpperCase()}`;
  if (qEl) qEl.innerHTML = card.question;
  if (fb) fb.style.display = 'none';

  if (optsGrid) {
    optsGrid.innerHTML = card.options.map((opt, oIdx) => `
      <button class="card-choice-btn" id="zoom-opt-${oIdx}" onclick="handleChoiceAnswer(${cardIdx}, ${oIdx})">
        <span style="display:inline-flex; width:22px; height:22px; border-radius:50%; background:#E2E8F0; align-items:center; justify-content:center; font-size:11px; font-weight:800; flex-shrink:0;">
          ${String.fromCharCode(65 + oIdx)}
        </span>
        <span>${opt.text.replace(/^[A-D]\.\s*/, '')}</span>
      </button>
    `).join('');
  }

  // Pastikan tidak ada tombol yang masih disabled dari ronde sebelumnya
  card.options.forEach((_, i) => {
    const b = document.getElementById(`zoom-opt-${i}`);
    if (b) b.disabled = false;
  });

  if (modal) modal.style.display = 'flex';
}

function closeCardZoomModal() {
  playSFX('click');
  const modal = document.getElementById('card-zoom-modal');
  if (modal) modal.style.display = 'none';
  currentlyOpenZoomCardIdx = null;
}

function handleChoiceAnswer(cardIdx, optIdx) {
  const card = activePastelCardsPool[cardIdx];
  if (!card) return;
  if (card.__alreadyAnsweredThisRound) return; // cegah dobel-klik saat feedback tampil

  const fb = document.getElementById('zoom-feedback-box');
  const clickedBtn = document.getElementById(`zoom-opt-${optIdx}`);

  // Nonaktifkan semua opsi saat pembahasan ditampilkan
  card.options.forEach((_, i) => {
    const b = document.getElementById(`zoom-opt-${i}`);
    if (b) b.disabled = true;
  });
  card.__alreadyAnsweredThisRound = true;

  const isCorrect = card.options[optIdx].correct;
  let fbHtml = '';

  if (isCorrect) {
    playSFX('success');
    if (clickedBtn) clickedBtn.classList.add('correct');

    if (currentSessionStudent) {
      ensureStudentProgress(currentSessionStudent);
      const prog = currentSessionStudent.progress;
      prog.menu1Correct = (prog.menu1Correct || 0) + 1;
      if (!prog.menu1AnsweredCards) prog.menu1AnsweredCards = [];
      if (!prog.menu1AnsweredCards.includes(card.id)) {
        prog.menu1AnsweredCards.push(card.id);
      }

      if (prog.menu1Correct >= 10) {
        prog.menu1Completed = true;
        prog.conceptViewed = true;
      }
      saveStudentProgress();
    }

    fbHtml = `
      🎉 <strong>JAWABAN BENAR!</strong><br>${card.explanation}
      <div style="margin-top:10px; text-align:center;">
        <button class="arcade-btn btn-mint btn-sm" onclick="pickAnotherCardFromZoom()">
          <i class="fa-solid fa-shuffle"></i> PILIH KARTU LAGI
        </button>
      </div>`;
    if (fb) {
      fb.style.display = 'block';
      fb.style.background = '#DCFCE7';
      fb.style.color = '#15803D';
      fb.style.border = '2px solid #86EFAC';
      fb.innerHTML = fbHtml;
    }
    updateMenu1ProgressUI();

    const prog2 = currentSessionStudent ? currentSessionStudent.progress : {};
    if ((prog2.menu1Correct || 0) >= 10) {
      if (window.confetti) {
        confetti({ particleCount: 90, spread: 75, origin: { y: 0.6 } });
      }
      playSFX('fanfare');
      showAudioToast('🎉 Selamat! Menu 1 Telah TUNTAS (10 Kartu Benar)! Buka Menu 2 sekarang!', 'fa-trophy');
    }

  } else {
    playSFX('warning');
    if (clickedBtn) clickedBtn.classList.add('wrong');

    const correctIdx = card.options.findIndex(o => o.correct);
    const correctBtn = document.getElementById(`zoom-opt-${correctIdx}`);
    if (correctBtn) correctBtn.classList.add('correct');

    if (currentSessionStudent) {
      ensureStudentProgress(currentSessionStudent);
      currentSessionStudent.progress.menu1Wrong = (currentSessionStudent.progress.menu1Wrong || 0) + 1;
      saveStudentProgress();
    }

    fbHtml = `
      ❌ <strong>KURANG TEPAT!</strong><br>Jawaban yang benar adalah <strong>${String.fromCharCode(65 + correctIdx)}</strong>.<br>${card.explanation}
      <div style="margin-top:10px; text-align:center;">
        <button class="arcade-btn btn-yellow btn-sm" onclick="pickAnotherCardFromZoom()">
          <i class="fa-solid fa-shuffle"></i> PILIH KARTU LAGI
        </button>
      </div>`;
    if (fb) {
      fb.style.display = 'block';
      fb.style.background = '#FEE2E2';
      fb.style.color = '#B91C1C';
      fb.style.border = '2px solid #FCA5A5';
      fb.innerHTML = fbHtml;
    }
    updateMenu1ProgressUI();
  }
}

// Tombol "PILIH KARTU LAGI": tutup modal, tandai kartu selesai (jika benar), lalu kembali ke grid kartu
function pickAnotherCardFromZoom() {
  playSFX('click');
  const card = currentlyOpenZoomCardIdx !== null ? activePastelCardsPool[currentlyOpenZoomCardIdx] : null;
  const prog = currentSessionStudent ? currentSessionStudent.progress : {};
  const wasCorrect = card && ((prog.menu1AnsweredCards || []).includes(card.id));

  closeCardZoomModal();

  if (wasCorrect && card) {
    const cardEl = document.getElementById(`pastel-card-${card.id}`);
    if (cardEl) cardEl.classList.add('card-vanish');
    setTimeout(() => {
      renderPastelCards();
      updateMenu1ProgressUI();
      if ((prog.menu1Correct || 0) >= 10 && !prog.menu1ExploreMore) {
        const compBox = document.getElementById('menu1-completion-box');
        const cardsArea = document.getElementById('menu1-active-cards-area');
        if (compBox) compBox.style.display = 'block';
        if (cardsArea) cardsArea.style.display = 'none';
      }
    }, 550);
  } else {
    renderPastelCards();
    updateMenu1ProgressUI();
  }
  showAudioToast('Silakan pilih kartu misteri berikutnya! 🎴', 'fa-shuffle');
}

function updateMenu1ProgressUI() {
  const p = currentSessionStudent ? currentSessionStudent.progress : {};
  const correct = p.menu1Correct || 0;
  const badge = document.getElementById('card-progress-badge');
  if (badge) {
    if (correct >= 10) {
      badge.style.background = 'var(--pastel-mint)';
      badge.style.color = '#065F46';
      badge.innerHTML = `🏆 TUNTAS: ${correct} Soal Benar`;
    } else {
      badge.style.background = '#FEF3C7';
      badge.style.color = '#92400E';
      badge.innerHTML = `✅ Benar: ${correct} / 10 (Target Tuntas)`;
    }
  }
}

function continueMoreCards() {
  playSFX('click');

  // Tandai bahwa siswa memilih menjelajah kartu tambahan, lalu tampilkan grid kartu
  if (currentSessionStudent) {
    ensureStudentProgress(currentSessionStudent);
    currentSessionStudent.progress.menu1ExploreMore = true;
    saveStudentProgress();
  }

  const compBox = document.getElementById('menu1-completion-box');
  if (compBox) compBox.style.display = 'none';

  const cardsArea = document.getElementById('menu1-active-cards-area');
  if (cardsArea) {
    cardsArea.style.display = 'block';
    renderPastelCards();
    cardsArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  updateMenu1ProgressUI();
  showAudioToast('Silakan eksplorasi kartu misteri berikutnya! 🦉', 'fa-wand-magic-sparkles');
}

// Pintu masuk Menu 2 — sementara tidak dikunci agar bebas dicek
function tryGoToMenu2() {
  playSFX('click');
  navigateTo(8);
}

function resetMenu1WithConfirmation() {
  playSFX('click');
  if (!confirm('Apakah kamu yakin ingin mengacak ulang kartu di Menu 1? Progres reset kamu akan dicatat dalam laporan.')) {
    return;
  }

  if (currentSessionStudent) {
    ensureStudentProgress(currentSessionStudent);
    const prog = currentSessionStudent.progress;
    prog.menu1Resets = (prog.menu1Resets || 0) + 1;
    prog.menu1AnsweredCards = [];
    prog.menu1Correct = 0;
    prog.menu1Wrong = 0;
    prog.menu1Completed = false;
    prog.menu1ExploreMore = false;
    prog.menu1Shuffled = false;
    saveStudentProgress();
  }

  initFlipCardsMenu1();
  showAudioToast('Menu 1 berhasil di-reset ke tumpukan awal! 🎴', 'fa-rotate-right');
}

/* --------------------------------------------------------------------------
   2. MENU 2: STUDIO ARSITEK & PEMODELAN MANDIRI 10 SUKU (4 KASUS NYATA)
   -------------------------------------------------------------------------- */
const ARCHITECT_CASES = [
  {
    id: 0,
    title: '🎭 Kasus 1: Penataan Kursi Gedung Teater',
    name: 'Kursi Gedung Teater',
    desc: 'Gedung Teater Arithma ingin menata 10 baris kursi penonton. Rancanglah banyaknya kursi tiap baris agar bertambah secara konstan membentuk barisan aritmatika.',
    icon: '🪑',
    unit: 'kursi',
    rowLabel: 'Baris ke-',
    themeClass: 'stage-theme-theater'
  },
  {
    id: 1,
    title: '🔬 Kasus 2: Pengamatan Pembelahan Sel Biologi',
    name: 'Pembelahan Sel Biologi',
    desc: 'Laboratorium Biologi mengamati pertambahan sel kultur selama 10 hari pengamatan. Aturlah pertambahan jumlah sel tiap hari agar membentuk barisan aritmatika dengan beda konstan.',
    icon: '🧬',
    unit: 'sel',
    rowLabel: 'Hari ke-',
    themeClass: 'stage-theme-biology'
  },
  {
    id: 2,
    title: '💰 Kasus 3: Perencanaan Tabungan Siswa',
    name: 'Tabungan Siswa',
    desc: 'Siswa menabung berjenjang selama 10 minggu berturut-turut. Tentukan besar tabungan awal dan pertambahan tiap minggu agar membentuk barisan aritmatika.',
    icon: '🪙',
    unit: 'rupiah',
    rowLabel: 'Tabungan Minggu ke-',
    themeClass: 'stage-theme-money'
  },
  {
    id: 3,
    title: '🏗️ Kasus 4: Penumpukan Pipa Baja Konstruksi',
    name: 'Tumpukan Pipa Baja',
    desc: 'Mandor proyek menyusun pipa baja dalam 10 lapisan bertingkat. Susunlah banyaknya pipa tiap lapis agar bertambah konstan membentuk barisan aritmatika.',
    icon: '🧱',
    unit: 'pipa',
    rowLabel: 'Lapisan ke-',
    themeClass: 'stage-theme-pipe'
  }
];

let currentCaseIdx = 0;
let currentRowStocks = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let menu2ViewingReview = false;

function initArchitectStudioMenu2() {
  if (currentSessionStudent) {
    ensureStudentProgress(currentSessionStudent);
  }
  showMenu2Selection();
  updateMenu2StatusUI();
}

// Tampilkan layar 4 pilihan kasus & sembunyikan workspace
function showMenu2Selection() {
  playSFX('click');
  const ws = document.getElementById('menu2-workspace');
  const sel = document.getElementById('menu2-cases-selection');
  const intro = document.getElementById('menu2-selection-intro');
  const compBox = document.getElementById('menu2-completion-box');
  if (ws) ws.style.display = 'none';

  const p = currentSessionStudent ? currentSessionStudent.progress : {};
  const isAll4Done = (p.menu2CompletedCases || []).length >= 4;

  if (isAll4Done && !menu2ViewingReview) {
    // Jika 4 kasus tuntas & belum klik "Lihat Model": langsung munculkan banner tuntas saja
    if (sel) sel.style.display = 'none';
    if (intro) intro.style.display = 'none';
    if (compBox) compBox.style.display = 'block';
  } else {
    // Belum tuntas 4 kasus ATAU sedang dalam mode lihat review model:
    if (sel) sel.style.display = 'grid';
    if (intro) intro.style.display = 'block';
    if (compBox) compBox.style.display = 'none';
  }
  updateMenu2StatusUI();
  currentCaseIdx = -1; // tidak ada kasus aktif saat di layar pilihan
}

// Tombol "LIHAT MODEL YANG SAYA BUAT" di banner tuntas Menu 2
function showCompletedCasesReview() {
  playSFX('click');
  menu2ViewingReview = true;
  const sel = document.getElementById('menu2-cases-selection');
  const intro = document.getElementById('menu2-selection-intro');
  const compBox = document.getElementById('menu2-completion-box');

  if (compBox) compBox.style.display = 'none';
  if (sel) sel.style.display = 'grid';
  if (intro) {
    intro.style.display = 'block';
    intro.innerHTML = `
      <p style="font-size: 13px; font-weight: 800; color: #065F46;">
        👇 Klik salah satu dari 4 kasus di bawah untuk meninjau kembali riwayat model visual dan rumus yang telah kamu selesaikan:
      </p>
    `;
  }
  updateMenu2StatusUI();
}

function updateMenu2StatusUI() {
  const p = currentSessionStudent ? currentSessionStudent.progress : {};
  const completed = p.menu2CompletedCases || [];

  for (let i = 0; i < 4; i++) {
    const badge = document.getElementById(`badge-case-${i}`);
    const card = document.getElementById(`case-card-${i}`);
    const isDone = completed.includes(i);
    if (badge) {
      if (isDone) {
        badge.className = 'status-badge status-disetujui';
        badge.textContent = '✅ Sudah Dikerjakan';
      } else {
        badge.className = 'status-badge status-menunggu';
        badge.textContent = '⏳ Belum';
      }
    }
    if (card) {
      card.classList.toggle('tuntas', isDone);
      // Kartu yang sudah dikerjakan ditandai secara visual
      card.style.outline = isDone ? '3px dashed #10B981' : 'none';
    }
  }

  const starsBadge = document.getElementById('architect-stars-badge');
  if (starsBadge) {
    starsBadge.textContent = `⭐ Kasus Tuntas: ${completed.length} / 4`;
  }

  const compBox = document.getElementById('menu2-completion-box');
  if (compBox) {
    compBox.style.display = completed.length >= 4 ? 'block' : 'none';
  }
}

function switchArchitectCase(idx) {
  playSFX('click');

  // ATURAN: harus menuntaskan kasus yang sedang dikerjakan dulu sebelum pilih kasus lain
  const prog = currentSessionStudent ? currentSessionStudent.progress : {};
  const completed = prog.menu2CompletedCases || [];
  if (currentCaseIdx !== -1 && currentCaseIdx !== idx && !completed.includes(currentCaseIdx)) {
    showAudioToast('⛔ Kamu harus MENUNTASKAN kasus yang sedang dikerjakan dulu sebelum memilih kasus lain!', 'fa-lock');
    return;
  }

  currentCaseIdx = idx;
  const c = ARCHITECT_CASES[idx];

  // Tampilkan workspace & sembunyikan layar pilihan kasus
  const ws = document.getElementById('menu2-workspace');
  const sel = document.getElementById('menu2-cases-selection');
  const intro = document.getElementById('menu2-selection-intro');
  const compBox = document.getElementById('menu2-completion-box');
  const backWrap = document.getElementById('menu2-back-to-selection-wrap');
  if (ws) ws.style.display = 'grid';
  if (sel) sel.style.display = 'none';
  if (intro) intro.style.display = 'none';
  if (compBox) compBox.style.display = 'none';
  if (backWrap) backWrap.style.display = completed.includes(idx) ? 'block' : 'none';

  for (let i = 0; i < 4; i++) {
    const card = document.getElementById(`case-card-${i}`);
    if (card) card.classList.toggle('active', i === idx);
  }

  const titleEl = document.getElementById('case-title-text');
  const descEl = document.getElementById('case-story-desc');
  const badgeEl = document.getElementById('case-status-badge');
  const stageEl = document.getElementById('architect-visual-stage');
  const labelSeq = document.getElementById('label-model-seq');
  const labelA = document.getElementById('label-model-a');
  const labelB = document.getElementById('label-model-b');
  const labelUn = document.getElementById('label-model-un');
  const labelSn = document.getElementById('label-model-sn');

  if (titleEl) titleEl.textContent = c.title;
  if (descEl) descEl.textContent = c.desc;

  const hintSeq = document.getElementById('hint-model-seq');
  const seqInput = document.getElementById('input-model-seq');
  const aInputEl = document.getElementById('input-model-a');
  const bInputEl = document.getElementById('input-model-b');

  if (idx === 2) {
    if (labelSeq) labelSeq.textContent = `Barisan Tabungan (${c.rowLabel}1 s.d. 10, pisahkan koma):`;
    if (labelA) labelA.textContent = `Suku Pertama a (Minggu ke-1):`;
    if (labelB) labelB.textContent = `Beda Konstan (b):`;
    if (hintSeq) hintSeq.style.display = 'block';
    if (seqInput) seqInput.placeholder = 'Contoh: 1.000, 3.000, 5.000, ... atau 1000, 3000, 5000, ...';
    if (aInputEl) aInputEl.placeholder = 'Contoh: 1.000 atau 1000';
    if (bInputEl) bInputEl.placeholder = 'Contoh: 2.000 atau 2000';
  } else {
    if (labelSeq) labelSeq.textContent = `Barisan Bilangan (${c.rowLabel}1 s.d. 10, pisahkan koma):`;
    if (labelA) labelA.textContent = `Suku Pertama a (${c.rowLabel}1):`;
    if (labelB) labelB.textContent = `Nilai Beda Konstan (b):`;
    if (hintSeq) hintSeq.style.display = 'none';
    if (seqInput) seqInput.placeholder = 'Tuliskan 10 suku visualmu, misal: 2, 5, 8, 11, ...';
    if (aInputEl) aInputEl.placeholder = 'Nilai baris ke-1';
    if (bInputEl) bInputEl.placeholder = 'Beda selisih konstan';
  }
  if (labelUn) labelUn.textContent = `Rumus Suku ke-n (Uₙ):`;
  if (labelSn) labelSn.textContent = `Rumus Jumlah n Suku Pertama (Sₙ):`;

  if (stageEl) {
    stageEl.className = `architect-stage ${c.themeClass}`;
  }

  const completedList = (currentSessionStudent && currentSessionStudent.progress.menu2CompletedCases) || [];
  if (badgeEl) {
    if (completedList.includes(idx)) {
      badgeEl.className = 'status-badge status-disetujui';
      badgeEl.textContent = '✅ Terverifikasi Tuntas';
    } else {
      badgeEl.className = 'status-badge status-menunggu';
      badgeEl.textContent = 'Belum Teruji';
    }
  }

  const studentProg = currentSessionStudent ? currentSessionStudent.progress : {};
  const savedModel = (studentProg.menu2SavedModels && studentProg.menu2SavedModels[idx]);


  const seq = document.getElementById('input-model-seq');
  const a = document.getElementById('input-model-a');
  const b = document.getElementById('input-model-b');
  const un = document.getElementById('input-model-un');
  const sn = document.getElementById('input-model-sn');
  const fb = document.getElementById('architect-feedback-box');

  if (completedList.includes(idx) && savedModel) {
    // KASUS SUDAH SELESAI: Muat kembali riwayat pemodelan yang tadi telah diisi
    currentRowStocks = [...savedModel.stocks];
    renderArchitectVisualStage();
    renderRowAdjusters();

    if (seq) seq.value = savedModel.seq || '';
    if (a) a.value = savedModel.a !== undefined ? savedModel.a : '';
    if (b) b.value = savedModel.b !== undefined ? savedModel.b : '';
    if (un) un.value = savedModel.un || '';
    if (sn) sn.value = savedModel.sn || '';

    if (fb) {
      fb.style.display = 'block';
      fb.style.background = '#DCFCE7';
      fb.style.color = '#15803D';
      fb.innerHTML = `✅ <strong>RIWAYAT PEMODELAN TUNTAS:</strong> Kasus ini telah berhasil kamu selesaikan.<br>• Nilai awal a = <strong>${savedModel.a}</strong>, beda b = <strong>${savedModel.b}</strong><br>• Rumus Uₙ: <code>${savedModel.un}</code><br>• Rumus Sₙ: <code>${savedModel.sn}</code>`;
    }
    if (backWrap) backWrap.style.display = 'block';
  } else {
    // KASUS BELUM SELESAI: Mulai dari 1 (atau 1000 untuk kasus tabungan)
    const minVal = currentCaseIdx === 2 ? 1000 : 1;
    currentRowStocks = Array(10).fill(minVal);
    renderArchitectVisualStage();
    renderRowAdjusters();

    if (seq) seq.value = '';
    if (a) a.value = '';
    if (b) b.value = '';
    if (un) un.value = '';
    if (sn) sn.value = '';
    if (fb) fb.style.display = 'none';
    if (backWrap) backWrap.style.display = 'none';
  }
}

function renderArchitectVisualStage() {
  const stage = document.getElementById('architect-visual-stage');
  if (!stage) return;
  stage.innerHTML = '';
  const c = ARCHITECT_CASES[currentCaseIdx];

  currentRowStocks.forEach((count, rIdx) => {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'stage-row';

    let displayCount = 0;
    let unitLabel = '';

    if (currentCaseIdx === 2) {
      // Kasus Uang / Tabungan (rupiah)
      displayCount = Math.min(12, Math.floor(count / 2000));
      unitLabel = `Rp ${count.toLocaleString('id-ID')}`;
    } else {
      displayCount = Math.min(count, 14);
      unitLabel = `${count} ${c.unit}`;
    }

    const iconItems = Array(displayCount).fill(c.icon).map(() => `<span class="stage-item">${c.icon}</span>`).join('');
    const extraDots = (currentCaseIdx !== 2 && count > 14) ? '<span style="font-size:11px; color:#64748B;">...</span>' : '';

    rowDiv.innerHTML = `
      <strong style="font-size: 11px; width: 85px; color: #334155; flex-shrink: 0;">${c.rowLabel}${rIdx + 1}:</strong>
      <div style="display: flex; gap: 3px; align-items: center; flex: 1; flex-wrap: wrap;">${iconItems} ${extraDots}</div>
      <span style="font-size: 11px; font-weight: 800; color: #0284C7; flex-shrink: 0; background: #F0F9FF; padding: 2px 6px; border-radius: 6px;">
        ${unitLabel}
      </span>
    `;
    stage.appendChild(rowDiv);
  });
}

function renderRowAdjusters() {
  const container = document.getElementById('rows-adjust-grid-container');
  if (!container) return;
  container.innerHTML = '';
  const c = ARCHITECT_CASES[currentCaseIdx];

  currentRowStocks.forEach((count, rIdx) => {
    const item = document.createElement('div');
    item.className = 'row-adjust-item';

    const displayVal = currentCaseIdx === 2 ? `${Math.floor(count / 1000)}k` : count;

    item.innerHTML = `
      <span style="font-size: 10px; font-weight: 800; color: #475569;">#${rIdx + 1}</span>
      <div style="display: flex; align-items: center; gap: 4px;">
        <button class="row-adjust-btn" onclick="adjustRowStock(${rIdx}, -1)" title="Kurangi">−</button>
        <span id="row-count-badge-${rIdx}" style="font-size: 11px; font-weight: 800; min-width: 26px; text-align: center;">${displayVal}</span>
        <button class="row-adjust-btn" onclick="adjustRowStock(${rIdx}, 1)" title="Tambah">+</button>
      </div>
    `;
    container.appendChild(item);
  });
}

function adjustRowStock(rowIdx, delta) {
  playSFX('click');
  const step = currentCaseIdx === 2 ? 1000 : 1;
  const minVal = currentCaseIdx === 2 ? 1000 : 1;
  currentRowStocks[rowIdx] = Math.max(minVal, currentRowStocks[rowIdx] + delta * step);

  renderArchitectVisualStage();

  const countBadge = document.getElementById(`row-count-badge-${rowIdx}`);
  if (countBadge) {
    countBadge.textContent = currentCaseIdx === 2 ? `${Math.floor(currentRowStocks[rowIdx] / 1000)}k` : currentRowStocks[rowIdx];
  }
}

// Helper evaluasi matematis rumus Un (suku ke-n)
// Siswa WAJIB mengganti nilai a dan b dengan angka pemodelannya (bukan huruf umum)
function evaluateFormulaUn(exprStr, a, b) {
  if (!exprStr || typeof exprStr !== 'string') return { valid: false, message: 'Rumus Uₙ belum diisi!' };
  let clean = exprStr.toLowerCase()
    .replace(/\s+/g, '')
    .replace(/^u_?n\s*[:=]/, '')
    .replace(/^u\(n\)\s*[:=]/, '');

  if (!clean.includes('n')) {
    return { valid: false, message: 'Rumus Uₙ harus memuat variabel suku <strong>n</strong>!' };
  }

  // JIKA SISWA MASIH MENULIS HURUF 'a' ATAU 'b' UMUM (BELUM DIGANTI ANGKA): TOLAK!
  if (clean.includes('a') || clean.includes('b')) {
    return {
      valid: false,
      message: `Ganti nilai variabel <strong>a</strong> dan <strong>b</strong> dengan angka pemodelanmu (a = ${a}, b = ${b}) ke dalam rumus! Jangan biarkan dalam bentuk huruf umum.<br><small>Contoh yang tepat: <code>${a} + (n - 1)${b}</code> atau bentuk sederhana <code>${b}n ${(a - b) >= 0 ? '+ ' + (a - b) : '- ' + Math.abs(a - b)}</code>.</small>`
    };
  }

  // Persiapkan ekspresi aljabar numerik dengan variabel n
  let mathExpr = clean
    .replace(/(\d)n/g, '$1*n')
    .replace(/n(\d)/g, 'n*$1')
    .replace(/\)([\d\w(])/g, ')*$1')
    .replace(/([\d\w)])\(/g, '$1*(')
    .replace(/n\(/g, 'n*(')
    .replace(/\)n/g, ')*n');

  try {
    for (const n of [1, 2, 5, 10]) {
      const expected = a + (n - 1) * b;
      const res = Function('n', `'use strict'; return (${mathExpr});`)(n);
      if (typeof res !== 'number' || isNaN(res) || Math.abs(res - expected) > 0.001) {
        return {
          valid: false,
          message: `Rumus Uₙ yang kamu tulis tidak menghasilkan nilai suku yang tepat untuk a = ${a} dan b = ${b}. Periksa kembali perhitungan rumusnya!`
        };
      }
    }
    return { valid: true };
  } catch (e) {
    const cTerm = a - b;
    const simplified = `${b}n${cTerm > 0 ? '+' + cTerm : (cTerm < 0 ? cTerm : '')}`;
    const altForm = `${a}+(n-1)${b}`;
    const altForm2 = `${a}+${b}(n-1)`;
    if (clean.includes(simplified) || clean.includes(altForm) || clean.includes(altForm2)) {
      return { valid: true };
    }
    return {
      valid: false,
      message: `Format penulisan rumus Uₙ belum tepat. Tuliskan dengan nilai a dan b yang diganti angka (misal: <code>${a} + (n - 1)${b}</code> atau <code>${b}n ${(a - b) >= 0 ? '+ ' + (a - b) : '- ' + Math.abs(a - b)}</code>).`
    };
  }
}

// Helper evaluasi matematis rumus Sn (deret n suku pertama)
// Siswa WAJIB mengganti nilai a dan b dengan angka pemodelannya (bukan huruf umum)
function evaluateFormulaSn(exprStr, a, b) {
  if (!exprStr || typeof exprStr !== 'string') return { valid: false, message: 'Rumus Sₙ belum diisi!' };
  let clean = exprStr.toLowerCase()
    .replace(/\s+/g, '')
    .replace(/^s_?n\s*[:=]/, '')
    .replace(/^s\(n\)\s*[:=]/, '');

  if (!clean.includes('n') && !clean.includes('s')) {
    return { valid: false, message: 'Rumus Sₙ harus memuat variabel <strong>n</strong>!' };
  }

  // JIKA SISWA MASIH MENULIS HURUF 'a' ATAU 'b' UMUM: TOLAK!
  const cleanWithoutUn = clean.replace(/u_?n/g, '').replace(/u\(n\)/g, '');
  if (cleanWithoutUn.includes('a') || cleanWithoutUn.includes('b')) {
    return {
      valid: false,
      message: `Ganti nilai variabel <strong>a</strong> dan <strong>b</strong> dengan angka pemodelanmu (a = ${a}, b = ${b}) ke dalam rumus Sₙ! Jangan biarkan dalam bentuk huruf umum.<br><small>Contoh yang tepat: <code>n/2(2(${a}) + (n - 1)${b})</code> atau <code>n/2(${a} + Uₙ)</code>.</small>`
    };
  }

  // Coba substitusi aljabar ke bentuk matematika
  let mathExpr = clean
    .replace(/un/g, `(${a}+(n-1)*${b})`)
    .replace(/u_?n/g, `(${a}+(n-1)*${b})`)
    .replace(/(\d)n/g, '$1*n')
    .replace(/n(\d)/g, 'n*$1')
    .replace(/\)([\d\w(])/g, ')*$1')
    .replace(/([\d\w)])\(/g, '$1*(')
    .replace(/n\(/g, 'n*(')
    .replace(/\)n/g, ')*n')
    .replace(/\^2/g, '**2');

  try {
    for (const n of [1, 2, 4, 10]) {
      const expected = (n / 2) * (2 * a + (n - 1) * b);
      const res = Function('n', `'use strict'; return (${mathExpr});`)(n);
      if (typeof res !== 'number' || isNaN(res) || Math.abs(res - expected) > 0.001) {
        return {
          valid: false,
          message: `Rumus Sₙ yang kamu tulis tidak menghasilkan jumlah deret yang tepat untuk a = ${a} dan b = ${b}. Periksa kembali perhitungan rumusnya!`
        };
      }
    }
    return { valid: true };
  } catch (e) {
    if (clean.includes('n/2') && (clean.includes('un') || clean.includes(String(a)))) {
      return { valid: true };
    }
    return {
      valid: false,
      message: `Format penulisan rumus Sₙ belum tepat. Tuliskan dengan nilai a dan b yang diganti angka (misal: <code>n/2(${2 * a} + (n - 1)${b})</code> atau <code>n/2(${a} + Uₙ)</code>).`
    };
  }
}

function clearAllRowStocks() {
  playSFX('click');
  const minVal = currentCaseIdx === 2 ? 1000 : 1;
  currentRowStocks = Array(10).fill(minVal);
  renderArchitectVisualStage();
  renderRowAdjusters();
}

function testArchitectModel() {
  const c = ARCHITECT_CASES[currentCaseIdx];
  const seqVal = document.getElementById('input-model-seq').value.trim();
  const aInput = document.getElementById('input-model-a').value.trim();
  const bInput = document.getElementById('input-model-b').value.trim();
  const unVal = document.getElementById('input-model-un').value.trim();
  const snVal = document.getElementById('input-model-sn').value.trim();

  const fb = document.getElementById('architect-feedback-box');
  if (!fb) return;
  fb.style.display = 'block';

  // Cek kelengkapan pengisian
  if (!seqVal || aInput === '' || bInput === '' || !unVal || !snVal) {
    playSFX('warning');
    fb.style.background = '#FEE2E2';
    fb.style.color = '#B91C1C';
    fb.innerHTML = '⚠️ <strong>Isian Belum Lengkap!</strong> Harap lengkapi seluruh kolom: Barisan 10 Suku, Nilai a, Nilai b, Rumus Uₙ, dan Rumus Sₙ.';
    return;
  }

  // Bersihkan format titik ribuan dan teks 'Rp' jika ada
  const aVal = parseInt(aInput.replace(/rp\.?/gi, '').replace(/\./g, '').trim());
  const bVal = parseInt(bInput.replace(/rp\.?/gi, '').replace(/\./g, '').trim());
  if (isNaN(aVal) || isNaN(bVal)) {
    playSFX('warning');
    fb.style.background = '#FEE2E2';
    fb.style.color = '#B91C1C';
    fb.innerHTML = '⚠️ <strong>Nilai a dan b Harus Berupa Angka!</strong> Periksa kembali kolom suku awal (a) dan beda konstan (b).';
    return;
  }

  // =========================================================================
  // ATURAN 1: Susunan visual di panggung membentuk barisan aritmatika atau tidak
  // =========================================================================
  const bVisual = currentRowStocks[1] - currentRowStocks[0];
  if (bVisual === 0) {
    playSFX('warning');
    fb.style.background = '#FEF3C7';
    fb.style.color = '#92400E';
    fb.innerHTML = `⚠️ <strong>Panggung Belum Membentuk Pola Barisan!</strong> Selisih pertambahan antar baris saat ini adalah 0 (seluruh baris bernilai ${currentRowStocks[0]}). Gunakan tombol (+) pada baris-baris berikutnya agar terbentuk selisih bertingkat konstan (b > 0).`;
    return;
  }

  let isVisualArith = true;
  let brokenRow = -1;
  for (let i = 1; i < 10; i++) {
    if (currentRowStocks[i] - currentRowStocks[i - 1] !== bVisual) {
      isVisualArith = false;
      brokenRow = i + 1;
      break;
    }
  }

  if (!isVisualArith) {
    playSFX('warning');
    fb.style.background = '#FEF3C7';
    fb.style.color = '#92400E';
    fb.innerHTML = `❌ <strong>Susunan Visual Belum Membentuk Barisan Aritmatika!</strong><br>Pada ${c.rowLabel}${brokenRow}, pertambahan objeknya (${currentRowStocks[brokenRow - 1] - currentRowStocks[brokenRow - 2]}) berbeda dengan selisih baris sebelumnya (${bVisual}). Pastikan selisih penambahan antar baris selalu konstan!`;
    return;
  }

  // =========================================================================
  // ATURAN 2: Bilangan yang disusun sebanyak 10 sesuai dengan visualisasi atau tidak
  // =========================================================================
  const parsedSeq = seqVal.split(/[,;\n]+/).map(s => parseInt(s.replace(/rp\.?/gi, '').replace(/\./g, '').trim())).filter(n => !isNaN(n));
  if (parsedSeq.length < 10) {
    playSFX('warning');
    fb.style.background = '#FEF3C7';
    fb.style.color = '#92400E';
    fb.innerHTML = `⚠️ <strong>Jumlah Suku Belum Lengkap!</strong> Kamu baru menuliskan ${parsedSeq.length} suku. Tuliskan 10 suku yang sesuai dengan susunan visual di panggung (pisahkan dengan koma).`;
    return;
  }

  let mismatchRow = -1;
  for (let i = 0; i < 10; i++) {
    if (parsedSeq[i] !== currentRowStocks[i]) {
      mismatchRow = i + 1;
      break;
    }
  }

  if (mismatchRow !== -1) {
    playSFX('warning');
    fb.style.background = '#FEF3C7';
    fb.style.color = '#92400E';
    fb.innerHTML = `❌ <strong>Barisan Bilangan Tidak Cocok dengan Visual!</strong><br>Pada ${c.rowLabel}${mismatchRow}, jumlah objek di panggung adalah ${currentRowStocks[mismatchRow - 1]}, tetapi kamu menuliskan angka ${parsedSeq[mismatchRow - 1]}. Sesuaikan barisan bilanganmu dengan panggung visual!`;
    return;
  }

  // =========================================================================
  // ATURAN 3: Nilai awal (a) dan beda (b) sesuai dengan yang dimodelkan di no 1 & 2
  // =========================================================================
  if (aVal !== currentRowStocks[0]) {
    playSFX('warning');
    fb.style.background = '#FEF3C7';
    fb.style.color = '#92400E';
    fb.innerHTML = `❌ <strong>Nilai Suku Pertama (a) Tidak Sesuai!</strong><br>Suku pertama pada panggung visual dan barisanmu adalah ${currentRowStocks[0]}, tetapi kamu menuliskan a = ${aVal}.`;
    return;
  }

  if (bVal !== bVisual) {
    playSFX('warning');
    fb.style.background = '#FEF3C7';
    fb.style.color = '#92400E';
    fb.innerHTML = `❌ <strong>Nilai Beda Konstan (b) Tidak Sesuai!</strong><br>Selisih pertambahan antar baris pada panggung visualmu adalah ${bVisual}, tetapi kamu menuliskan b = ${bVal}.`;
    return;
  }

  // =========================================================================
  // ATURAN 4: Rumus Un sudah benar atau tidak dengan nilai a dan b yang ditulis
  // =========================================================================
  const unCheck = evaluateFormulaUn(unVal, aVal, bVal);
  if (!unCheck.valid) {
    playSFX('warning');
    fb.style.background = '#FEE2E2';
    fb.style.color = '#991B1B';
    fb.innerHTML = `❌ <strong>Rumus Suku ke-n (Uₙ) Belum Tepat!</strong><br>${unCheck.message}`;
    return;
  }

  // =========================================================================
  // ATURAN 5: Rumus Sn sudah benar atau tidak dengan nilai a dan b yang ditulis
  // =========================================================================
  const snCheck = evaluateFormulaSn(snVal, aVal, bVal);
  if (!snCheck.valid) {
    playSFX('warning');
    fb.style.background = '#FEE2E2';
    fb.style.color = '#991B1B';
    fb.innerHTML = `❌ <strong>Rumus Jumlah n Suku Pertama (Sₙ) Belum Tepat!</strong><br>${snCheck.message}`;
    return;
  }

  // =========================================================================
  // KELIMA ATURAN TERPENUHI: BERHASIL SEMPURNA!
  // =========================================================================
  playSFX('success');
  fb.style.background = '#DCFCE7';
  fb.style.color = '#15803D';
  fb.innerHTML = `🎉 <strong>PEMODELAN MANDIRI ARSITEK BERHASIL DAN TERUJI SEMPURNA!</strong><br>
    ✅ 1. Visualisasi panggung membentuk barisan aritmatika bertingkat.<br>
    ✅ 2. Barisan 10 bilangan cocok presisi dengan panggung visual.<br>
    ✅ 3. Nilai suku pertama a = ${aVal} dan beda konstan b = ${bVal} sesuai.<br>
    ✅ 4. Rumus suku ke-n: <code>${unVal}</code> terverifikasi benar!<br>
    ✅ 5. Rumus jumlah n suku pertama: <code>${snVal}</code> terverifikasi benar!`;

  const badgeEl = document.getElementById('case-status-badge');
  if (badgeEl) {
    badgeEl.className = 'status-badge status-disetujui';
    badgeEl.textContent = '✅ Terverifikasi Tuntas';
  }

  if (currentSessionStudent) {
    ensureStudentProgress(currentSessionStudent);
    const prog = currentSessionStudent.progress;
    if (!prog.menu2CompletedCases) prog.menu2CompletedCases = [];
    if (!prog.menu2CompletedCases.includes(currentCaseIdx)) {
      prog.menu2CompletedCases.push(currentCaseIdx);
    }
    // Simpan riwayat jawaban pemodelan per kasus
    if (!prog.menu2SavedModels) prog.menu2SavedModels = {};
    prog.menu2SavedModels[currentCaseIdx] = {
      stocks: [...currentRowStocks],
      seq: seqVal,
      a: aVal,
      b: bVal,
      un: unVal,
      sn: snVal
    };

    prog.challengeScore = (prog.menu2CompletedCases.length) * 100;
    prog.challengeStars = Math.min(4, prog.menu2CompletedCases.length);

    if (prog.menu2CompletedCases.length >= 4) {
      prog.menu2Completed = true;
      prog.challengeCompleted = true;
    }
    saveStudentProgress();
  }

  updateMenu2StatusUI();

  // Tampilkan tombol kembali ke 4 pilihan setelah tuntas
  const backWrapOk = document.getElementById('menu2-back-to-selection-wrap');
  if (backWrapOk) backWrapOk.style.display = 'block';

  const prog = currentSessionStudent ? currentSessionStudent.progress : {};
  if ((prog.menu2CompletedCases || []).length >= 4) {
    // Sembunyikan meja kerja dan 4 pilihan kasus, langsung tampilkan banner tuntas saja
    const ws = document.getElementById('menu2-workspace');
    const sel = document.getElementById('menu2-cases-selection');
    const intro = document.getElementById('menu2-selection-intro');
    const compBox = document.getElementById('menu2-completion-box');

    if (ws) ws.style.display = 'none';
    if (sel) sel.style.display = 'none';
    if (intro) intro.style.display = 'none';
    if (compBox) compBox.style.display = 'block';

    if (window.confetti) {
      confetti({ particleCount: 110, spread: 85, origin: { y: 0.6 } });
    }
    playSFX('fanfare');
    showAudioToast('🏆 Luar biasa! Seluruh 4 Kasus Pemodelan Menu 2 Tuntas!', 'fa-trophy');
  }
}

function resetMenu2WithConfirmation() {
  playSFX('click');
  if (!confirm('Apakah kamu yakin ingin mengulang seluruh pemodelan di Menu 2? Progres reset akan dicatat dalam laporan.')) {
    return;
  }

  menu2ViewingReview = false;

  if (currentSessionStudent) {
    ensureStudentProgress(currentSessionStudent);
    const prog = currentSessionStudent.progress;
    prog.menu2Resets = (prog.menu2Resets || 0) + 1;
    prog.menu2CompletedCases = [];
    prog.menu2SavedModels = {};
    prog.menu2Completed = false;
    prog.challengeCompleted = false;
    prog.challengeStars = 0;
    saveStudentProgress();
  }

  initArchitectStudioMenu2();
  showAudioToast('Menu 2 Studio Arsitek berhasil di-reset! 🏗️', 'fa-rotate-right');
}

/* --------------------------------------------------------------------------
   MENU 3: pilihan bertingkat (sistem sama seperti Menu 2: tuntas dulu baru lanjut)
   -------------------------------------------------------------------------- */
// Kembali ke layar 3 pilihan Menu 3
function showMenu3Landing() {
  playSFX('click');
  if (typeof exitGameMobileFullscreen === 'function') exitGameMobileFullscreen();
  const landing = document.getElementById('menu3-landing-screen');
  if (landing) landing.style.display = 'block';
  const insideHeader = document.getElementById('menu3-inside-header');
  if (insideHeader) insideHeader.style.display = 'flex';
  const gameHeader = document.getElementById('game-page-header');
  if (gameHeader) gameHeader.style.display = 'none';
  const gameControls = document.getElementById('game-footer-controls');
  if (gameControls) gameControls.style.display = 'none';
  const c = document.getElementById('container-menu3-content');
  if (c) c.style.overflowY = 'auto';
  [1, 2, 3].forEach(i => {
    const content = document.getElementById(`subtab-${i}-content`);
    if (content) content.style.display = 'none';
    const btn = document.getElementById(`menu3-tab-${i}`);
    if (btn) btn.className = 'arcade-btn btn-secondary btn-sm';
  });
  updateMenu3LandingLocks();
}

// Perbarui ikon kunci & badge status pada 3 pilihan Menu 3 sesuai progres (sistem sama seperti Menu 2)
function updateMenu3LandingLocks() {
  const student = (typeof getActiveSessionStudent === 'function') ? getActiveSessionStudent() : currentSessionStudent;
  const p = (student && student.progress) || {};
  const gRight   = p.menu3GameRight  || 0;
  const gWrong   = p.menu3GameWrong  || 0;
  const gScore   = p.menu3GameScore  || 0;
  const gGems    = p.menu3GameGems   || 0;
  const gWin     = !!(p.menu3GameWin);
  const gamePlayed = (gScore > 0 || gRight > 0 || gWrong > 0 || gGems > 0);
  // Tuntas = minimal 10 soal benar (ada/tidaknya rute sekolah hanya bedakan label)
  const gameTuntas = gamePlayed && (gRight >= 10);

  const refDone    = !!(p.menu3ReflectionDone || p.reflectionDone);
  const reportDone = refDone;

  const icon2 = document.getElementById('menu3-lock-2');
  const icon3 = document.getElementById('menu3-lock-3');
  if (icon2) icon2.textContent = '📝';
  if (icon3) icon3.textContent = '📊';

  // ── Badge kartu Game (5 kondisi) ────────────────────────────────────────
  const badge1 = document.getElementById('menu3-status-1');
  if (badge1) {
    badge1.style.cssText = '';          // reset inline style dulu
    badge1.className = 'status-badge';
    if (!gamePlayed) {
      // Belum pernah main
      badge1.className += ' status-menunggu';
      badge1.textContent = '⏳ Belum Dimainkan';
    } else if (gWin && gRight >= 10) {
      // Sampai sekolah + 10/10 benar → Tuntas Sempurna
      badge1.className += ' status-disetujui';
      badge1.textContent = '✅ Tuntas Sempurna';
    } else if (!gWin && gRight >= 10) {
      // Tidak sampai sekolah + 10/10 benar → Tuntas
      badge1.className += ' status-disetujui';
      badge1.textContent = '✅ Tuntas';
    } else if (gWin && gRight < 10) {
      // Sampai sekolah TAPI soal kurang → Belum Tuntas (kuning)
      badge1.style.background   = '#FEF3C7';
      badge1.style.color        = '#92400E';
      badge1.style.borderColor  = '#D97706';
      badge1.textContent = '⚠️ Belum Tuntas';
    } else {
      // Tidak sampai sekolah DAN soal kurang → Tidak Tuntas (merah)
      badge1.style.background   = '#FEE2E2';
      badge1.style.color        = '#991B1B';
      badge1.style.borderColor  = '#DC2626';
      badge1.textContent = '❌ Tidak Tuntas';
    }
  }

  // ── Badge Refleksi & Laporan ─────────────────────────────────────────────
  [
    { id: 'menu3-status-2', done: refDone },
    { id: 'menu3-status-3', done: reportDone }
  ].forEach(({ id, done }) => {
    const badge = document.getElementById(id);
    if (!badge) return;
    badge.style.cssText = '';
    if (done) {
      badge.className = 'status-badge status-disetujui';
      badge.textContent = '✅ Sudah Dikerjakan';
    } else {
      badge.className = 'status-badge status-menunggu';
      badge.textContent = '⏳ Belum';
    }
  });

  // ── Warna kartu (class tuntas = hijau): hanya jika benar-benar tuntas ───
  const opt1 = document.getElementById('menu3-opt-1');
  const opt2 = document.getElementById('menu3-opt-2');
  const opt3 = document.getElementById('menu3-opt-3');
  if (opt1) opt1.classList.toggle('tuntas', gameTuntas);
  if (opt2) opt2.classList.toggle('tuntas', refDone);
  if (opt3) opt3.classList.toggle('tuntas', reportDone);
}

function openMenu3SubTab(tabIdx) {
  playSFX('click');
  // Sementara kunci dilepas agar user leluasa memeriksa isi masing-masing sub-menu
  switchMenu3SubTab(tabIdx);
}

/* --------------------------------------------------------------------------
   3. MENU 3: GAME SUPER MARIO, JURNAL REFLEKSI & LAPORAN HASIL BELAJAR
   -------------------------------------------------------------------------- */
function initMenu3Assessment() {
  if (typeof getActiveSessionStudent === 'function') getActiveSessionStudent();
  // Tampilkan landing screen dulu, sembunyikan semua sub-tab
  showMenu3Landing();
  // Isi laporan & sertifikat di awal agar nama dan progress selalu sinkron
  renderLearningReportAndCertificate();

  // Pastikan pad kontrol game di footer sudah ter-binding setiap kali halaman 9 dibuka
  if (typeof bindGamePad === 'function') setTimeout(bindGamePad, 100);

  // Listener untuk pesan postMessage dari game iframe
  if (!window.__arithmaGameMsgBound) {
    window.__arithmaGameMsgBound = true;
    window.addEventListener('message', (ev) => {
      if (!ev.data) return;
      if (ev.data.type === 'ARITHMASCHOOL_GAME_UPDATE' || ev.data.type === 'GAUSSY_GAME_RESULT') {
        onAssessmentGameResult(ev.data);
      } else if (ev.data.type === 'ARITHMA_GAME_FULLSCREEN') {
        setGameMobileFullscreen(!!ev.data.active);
      }
    });
  }
}

function isTouchMobileDevice() {
  return (
    (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) ||
    ('ontouchstart' in window && window.matchMedia && window.matchMedia('(hover: none)').matches)
  );
}

function syncTouchBodyClass() {
  document.body.classList.toggle('touch-device', isTouchMobileDevice());
}
syncTouchBodyClass();
window.addEventListener('resize', syncTouchBodyClass);

function setGameMobileFullscreen(active) {
  const wrap = document.getElementById('game-iframe-container');
  if (!wrap) return;
  if (active && isTouchMobileDevice()) {
    wrap.classList.add('game-pseudo-fullscreen');
  } else {
    wrap.classList.remove('game-pseudo-fullscreen');
  }
}

function exitGameMobileFullscreen() {
  setGameMobileFullscreen(false);
  const frame = document.getElementById('assessment-game-frame');
  if (frame && frame.contentWindow) {
    try { frame.contentWindow.postMessage({ type: 'ARITHMA_EXIT_GAME' }, '*'); } catch (e) {}
  }
  try {
    if (screen.orientation && typeof screen.orientation.unlock === 'function') {
      screen.orientation.unlock();
    }
  } catch (e) {}
  try {
    const fsEl = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
    if (fsEl) {
      const ex = document.exitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen;
      if (ex) ex.call(document);
    }
  } catch (e) {}
}

function reloadAssessmentGame() {
  playSFX('click');
  const frame = document.getElementById('assessment-game-frame');
  if (frame) {
    frame.src = 'game-asesmen.html?v=' + Date.now();
  }
  showAudioToast('Game petualangan dimuat ulang! 🎮', 'fa-rotate-right');
}

function switchMenu3SubTab(tabIdx) {
  playSFX('click');
  const c = document.getElementById('container-menu3-content');
  if (c) {
    c.style.overflowY = (tabIdx === 1) ? 'hidden' : 'auto';
    c.style.overflow = (tabIdx === 1) ? 'hidden' : '';
    if (tabIdx === 1) c.scrollTop = 0;
  }
  [1, 2, 3].forEach(i => {
    const btn = document.getElementById(`menu3-tab-${i}`);
    const content = document.getElementById(`subtab-${i}-content`);
    if (btn) {
      btn.className = (i === tabIdx) ? 'arcade-btn btn-mint btn-sm' : 'arcade-btn btn-secondary btn-sm';
    }
    if (content) {
      if (i === tabIdx) {
        content.style.display = (i === 1) ? 'flex' : 'block';
        if (i === 1) {
          content.style.flexDirection = 'column';
          content.style.flex = '1';
          content.style.minHeight = '0';
          content.style.height = '100%';
        }
      } else {
        content.style.display = 'none';
      }
    }
  });
  const landing = document.getElementById('menu3-landing-screen');
  if (landing) landing.style.display = 'none';

  // Header "Menu 3" di dalam kotak putih disembunyikan saat halaman GAME aktif (digantikan header khusus game di atas kotak putih)
  const insideHeader = document.getElementById('menu3-inside-header');
  if (insideHeader) insideHeader.style.display = (tabIdx === 1) ? 'none' : 'flex';
  const gameHeader = document.getElementById('game-page-header');
  if (gameHeader) gameHeader.style.display = (tabIdx === 1) ? 'flex' : 'none';

  // Kontrol game (◀ ▶ ▲ ⚔) di footer: hanya tampil saat halaman game aktif
  const gameControls = document.getElementById('game-footer-controls');
  if (gameControls) gameControls.style.display = (tabIdx === 1) ? 'flex' : 'none';

  if (tabIdx === 1) {
    setTimeout(() => {
      const frame = document.getElementById('assessment-game-frame');
      if (frame) {
        try { frame.focus(); } catch (e) {}
        try { if (frame.contentWindow) frame.contentWindow.focus(); } catch (e) {}
      }
    }, 100);
  }

  if (tabIdx === 3) {
    renderLearningReportAndCertificate();
  }

  if (typeof typesetMath === 'function') {
    setTimeout(() => typesetMath(document.getElementById(`subtab-${tabIdx}-content`) || document.body), 40);
  }
}

function onAssessmentGameResult(res) {
  const student = (typeof getActiveSessionStudent === 'function') ? getActiveSessionStudent() : currentSessionStudent;
  if (student) {
    ensureStudentProgress(student);
    const p = student.progress;
    const gRight = res.right || 0;
    const gWrong = res.wrong || 0;
    const gGems = res.gems || 0;
    const gScore = res.score || 0;
    const isWin = !!res.win;

    p.menu3GameScore = gScore;
    p.menu3GameRight = gRight;
    p.menu3GameWrong = gWrong;
    p.menu3GameGems = gGems;
    p.menu3GameWin = isWin;
    p.menu3GameDuration = res.durationSeconds || 0;

    // Bobot penilaian game sesuai instruksi:
    // 1. Kebenaran soal: 85%  (gRight/10 × 85)
    // 2. Kecepatan (durasi): 17%  (makin cepat makin tinggi, batas 600 detik)
    // 3. Permata: 3%  (gGems/25 × 3)
    // Total dikap di 100
    const nilaiSoal = Math.min(85, Math.round((gRight / 10) * 85));
    const duration = p.menu3GameDuration || 0;
    const MAX_SECS = 600;
    const nilaiKecepatan = duration > 0
      ? Math.min(17, Math.round(Math.max(0, (MAX_SECS - duration) / MAX_SECS) * 17))
      : 0;
    const nilaiPermata = Math.min(3, Math.round((gGems / 25) * 3));
    const totalScore = Math.min(100, Math.max(0, nilaiSoal + nilaiKecepatan + nilaiPermata));

    p.assessmentScore = totalScore;
    // Ketuntasan game: minimal 10 soal benar dari 10 soal
    p.menu3GameCompleted = (gRight >= 10);
    saveStudentProgress();
    updateMenu3LandingLocks();
    renderLearningReportAndCertificate();
  }

  if (res.win) {
    playSFX('fanfare');
    showAudioToast(`🏆 Sekolah Tercapai! Skor: ${res.score} • Soal Benar: ${res.right || 0}. Lanjut isi refleksi!`, 'fa-trophy');
  } else {
    showAudioToast(`⚔️ Petualangan Selesai. Skor: ${res.score} • Soal Benar: ${res.right || 0}.`, 'fa-gamepad');
  }
}

function saveStudentReflectionForm(e) {
  if (e) e.preventDefault();
  playSFX('click');

  const r1 = document.querySelector('input[name="ref1"]:checked');
  const r2 = document.querySelector('input[name="ref2"]:checked');
  const r3 = document.querySelector('input[name="ref3"]:checked');
  const r4 = document.querySelector('input[name="ref4"]:checked');
  const r5 = document.querySelector('input[name="ref5"]:checked');
  const notesEl = document.getElementById('reflection-notes-input');

  const ans = [
    r1 ? r1.value : 'Ya',
    r2 ? r2.value : 'Ya',
    r3 ? r3.value : 'Ya',
    r4 ? r4.value : 'Ya',
    r5 ? r5.value : 'Ya'
  ];
  const notes = notesEl ? notesEl.value.trim() : '';

  if (currentSessionStudent) {
    ensureStudentProgress(currentSessionStudent);
    const p = currentSessionStudent.progress;
    p.menu3ReflectionAnswers = ans;
    p.menu3ReflectionNotes = notes;
    p.menu3ReflectionDone = true;
    p.reflectionDone = true;
    saveStudentProgress();
  }

  const badge = document.getElementById('reflection-status-badge');
  if (badge) {
    badge.className = 'status-badge status-disetujui';
    badge.textContent = '✅ Berhasil Disimpan';
  }

  playSFX('success');
  showAudioToast('Jurnal Refleksi Berhasil Disimpan! Membuka Laporan Belajar... 📊', 'fa-circle-check');
  setTimeout(() => {
    switchMenu3SubTab(3);
  }, 600);
}

function updateBadgeElement(el, text, type) {
  if (!el) return;
  el.textContent = text;
  el.className = 'status-badge';
  if (type === 'success') {
    el.style.background = '#D1FAE5';
    el.style.color = '#065F46';
    el.style.borderColor = '#059669';
  } else if (type === 'warning') {
    el.style.background = '#FEF3C7';
    el.style.color = '#92400E';
    el.style.borderColor = '#D97706';
  } else if (type === 'danger') {
    el.style.background = '#FEE2E2';
    el.style.color = '#991B1B';
    el.style.borderColor = '#DC2626';
  } else {
    el.style.background = '#F1F5F9';
    el.style.color = '#475569';
    el.style.borderColor = '#94A3B8';
  }
}

function evaluateStudentPerformance(p) {
  // 1. Menu 1: Penguatan Konsep
  const m1Correct = p.menu1Correct || 0;
  const m1Wrong = p.menu1Wrong || 0;
  const m1Resets = p.menu1Resets || 0;
  const m1Total = m1Correct + m1Wrong;
  const m1Acc = m1Total > 0 ? Math.round((m1Correct / m1Total) * 100) : 0;

  let m1StatusText = '';
  let m1StatusType = '';
  let m1CardDesc = '';
  let m1TableDesc = '';
  let m1IsTuntas = false;

  if (m1Correct >= 10) {
    if (m1Wrong === 0) {
      m1StatusText = '✅ Tuntas Sempurna';
      m1StatusType = 'success';
      m1CardDesc = `Istimewa! Siswa menguasai konsep dasar barisan dan deret aritmatika dengan akurasi sempurna (100%), menjawab ${m1Correct} soal dengan benar tanpa kesalahan. Pemahaman mengenai beda, suku ke-n, dan deret Gauss terbukti sangat presisi.`;
      m1TableDesc = `Menguasai konsep dasar barisan dan deret aritmatika dengan akurasi sempurna (100%).`;
      m1IsTuntas = true;
    } else if (m1Wrong <= 2) {
      m1StatusText = '✅ Tuntas (Sangat Baik)';
      m1StatusType = 'success';
      m1CardDesc = `Sangat baik. Siswa memahami karakteristik suku konstan, beda, dan rumus aritmatika dengan akurasi tinggi (${m1Acc}%), dengan ${m1Wrong} kesalahan kalkulasi yang masih dalam batas wajar.`;
      m1TableDesc = `Memahami konsep barisan dan deret aritmatika dengan akurasi tinggi (${m1Acc}%).`;
      m1IsTuntas = true;
    } else if (m1Wrong <= 5) {
      m1StatusText = '✅ Tuntas (Cukup Baik)';
      m1StatusType = 'warning';
      m1CardDesc = `Cukup baik. Siswa telah mencapai batas minimal ${m1Correct} soal benar dengan akurasi ${m1Acc}% (${m1Wrong} kesalahan). Disarankan meningkatkan ketelitian pada perhitungan deret menurun dan metode Gauss.`;
      m1TableDesc = `Mencapai batas tuntas ${m1Correct} soal benar dengan akurasi ${m1Acc}%, perlu lebih teliti.`;
      m1IsTuntas = true;
    } else {
      m1StatusText = '⚠️ Tuntas Bersyarat';
      m1StatusType = 'warning';
      m1CardDesc = `Siswa telah menjawab ${m1Correct} soal benar, namun masih mencatat ${m1Wrong} kesalahan sehingga tingkat akurasi baru mencapai ${m1Acc}%. Diperlukan penguatan konsep dasar agar pemahaman lebih stabil.`;
      m1TableDesc = `Mencapai ${m1Correct} soal benar dengan akurasi ${m1Acc}%; masih memerlukan penguatan konsep.`;
      m1IsTuntas = false;
    }
  } else if (m1Correct > 0) {
    m1StatusText = `⏳ Berproses (${m1Correct}/10)`;
    m1StatusType = 'warning';
    m1CardDesc = `Siswa sedang berproses dan baru menjawab ${m1Correct} dari minimal 10 soal benar (${m1Wrong} kali salah, akurasi ${m1Acc}%). Lanjutkan latihan pada Menu 1 hingga mencapai batas ketuntasan.`;
    m1TableDesc = `Sedang berproses dengan capaian ${m1Correct} dari 10 soal benar (akurasi ${m1Acc}%); belum tuntas.`;
  } else if (m1Wrong > 0) {
    m1StatusText = '❌ Belum Tuntas';
    m1StatusType = 'danger';
    m1CardDesc = `Siswa telah mencoba mengerjakan latihan, namun belum memperoleh jawaban benar (${m1Wrong} kali salah). Disarankan mempelajari kembali konsep dasar barisan aritmatika sebelum mencoba ulang.`;
    m1TableDesc = `Belum memperoleh jawaban benar dari ${m1Wrong} percobaan; perlu mempelajari ulang materi dasar.`;
  } else {
    m1StatusText = '❌ Belum Dikerjakan';
    m1StatusType = 'danger';
    m1CardDesc = `Siswa belum mengerjakan latihan penguatan konsep pada Menu 1. Silakan kerjakan kartu latihan hingga minimal 10 soal terjawab dengan benar.`;
    m1TableDesc = `Belum mengerjakan latihan penguatan konsep pada Menu 1.`;
  }

  // 2. Menu 2: Pemodelan 10 Suku
  const m2Cases = (p.menu2CompletedCases || []).length;
  const m2Resets = p.menu2Resets || 0;
  let m2StatusText = '';
  let m2StatusType = '';
  let m2CardDesc = '';
  let m2TableDesc = '';
  let m2IsTuntas = false;

  if (m2Cases >= 4) {
    m2StatusText = '✅ Tuntas (4/4 Kasus)';
    m2StatusType = 'success';
    m2CardDesc = `Kemampuan representasi matematis siswa sangat unggul. Seluruh 4 skenario kontekstual 10 suku berhasil ditranslasikan dari model visual ke bentuk rumus aljabar dengan tepat.`;
    m2TableDesc = `Berhasil memodelkan seluruh 4 skenario kontekstual 10 suku ke dalam rumus aljabar secara tepat.`;
    m2IsTuntas = true;
  } else if (m2Cases > 0) {
    m2StatusText = `⏳ Berproses (${m2Cases}/4 Kasus)`;
    m2StatusType = 'warning';
    m2CardDesc = `Siswa telah menyelesaikan ${m2Cases} dari 4 skenario pemodelan kontekstual. Selesaikan sisa kasus yang ada untuk memantapkan kemampuan translasi visual ke rumus matematika.`;
    m2TableDesc = `Baru menyelesaikan ${m2Cases} dari 4 skenario pemodelan visual 10 suku; belum tuntas.`;
  } else {
    m2StatusText = '❌ Belum Dikerjakan (0/4)';
    m2StatusType = 'danger';
    m2CardDesc = `Siswa belum menyelesaikan satu pun kasus pemodelan visual 10 suku pada Menu 2. Buka menu pemodelan untuk berlatih menyusun representasi barisan dari situasi nyata.`;
    m2TableDesc = `Belum menyelesaikan kasus pemodelan visual 10 suku pada Menu 2.`;
  }

  // 3. Menu 3: Game Petualangan Sekolah
  const gScore = p.menu3GameScore || 0;
  const gRight = p.menu3GameRight || 0;
  const gWrong = p.menu3GameWrong || 0;
  const gGems = p.menu3GameGems || 0;
  const gWin  = !!(p.menu3GameWin);                              // sampai sekolah?
  const gPlayed = (gScore > 0 || gRight > 0 || gWrong > 0 || gGems > 0);

  // Bobot presisi: Soal 85%, Kecepatan 17%, Permata 3%
  const nilaiSoal = Math.min(85, Math.round((gRight / 10) * 85));
  const nilaiPermata = Math.min(3, Math.round((gGems / 25) * 3));
  const gDuration = p.menu3GameDuration || 0;
  const MAX_SECS = 600;
  const nilaiKecepatan = gDuration > 0
    ? Math.min(17, Math.round(Math.max(0, (MAX_SECS - gDuration) / MAX_SECS) * 17))
    : 0;
  const totalGameScore = Math.min(100, nilaiSoal + nilaiKecepatan + nilaiPermata);

  let gStatusText = '';
  let gStatusType = '';
  let gCardDesc = '';
  let gTableDesc = '';
  let gIsTuntas = false;

  // Aturan ketuntasan:
  //   Tuntas Sempurna  = sampai sekolah (win) DAN ≥10 benar
  //   Tuntas           = tidak sampai sekolah DAN ≥10 benar
  //   Belum Tuntas     = sampai sekolah TAPI <10 benar
  //   Tidak Tuntas     = tidak sampai sekolah DAN <10 benar
  if (!gPlayed) {
    gStatusText = '⏳ Belum Main';
    gStatusType = 'secondary';
    gCardDesc   = `Siswa belum memainkan simulasi Game Petualangan pada Menu 3. Silakan mainkan game untuk menguji ketangkasan pemecahan masalah matematika secara kontekstual.`;
    gTableDesc  = `Belum memainkan simulasi Game Petualangan pada Menu 3.`;
  } else if (gWin && gRight >= 10) {
    // Sampai sekolah + 10/10 benar → Tuntas Sempurna
    gStatusText = `✅ Tuntas Sempurna (${gRight}/10)`;
    gStatusType = 'success';
    gCardDesc   = `Luar biasa! Siswa berhasil mencapai garis akhir sekolah sekaligus menjawab seluruh ${gRight} soal kontekstual dengan benar (${gWrong} salah), dengan skor asesmen ${totalGameScore}/100. Kemampuan pemecahan masalah terbukti sangat baik.`;
    gTableDesc  = `Tuntas sempurna: berhasil menyelesaikan misi ke sekolah dengan seluruh 10 soal terjawab benar.`;
    gIsTuntas   = true;
  } else if (!gWin && gRight >= 10) {
    // Tidak sampai sekolah + 10/10 benar → Tuntas
    gStatusText = `✅ Tuntas (${gRight}/10)`;
    gStatusType = 'success';
    gCardDesc   = `Siswa berhasil memenuhi ketuntasan akademik dengan menjawab ${gRight} soal kontekstual secara benar (${gWrong} salah), meskipun misi perjalanan menuju sekolah belum selesai. Disarankan mencoba kembali untuk menuntaskan rute petualangan.`;
    gTableDesc  = `Memenuhi ketuntasan soal (${gRight}/10 benar), namun misi perjalanan ke sekolah belum selesai.`;
    gIsTuntas   = true;
  } else if (gWin && gRight < 10) {
    // Sampai sekolah TAPI soal kurang dari 10 → Belum Tuntas
    gStatusText = `⚠️ Belum Tuntas (${gRight}/10)`;
    gStatusType = 'warning';
    gCardDesc   = `Siswa berhasil menyelesaikan rute perjalanan ke sekolah, namun capaian pemecahan masalah matematika belum tuntas karena baru menjawab ${gRight} dari 10 soal dengan benar (${gWrong} salah). Ulangi permainan dan jawab seluruh 10 soal dengan tepat.`;
    gTableDesc  = `Berhasil mencapai garis akhir game, namun ketuntasan soal belum terpenuhi (${gRight}/10 soal benar).`;
  } else {
    // Tidak sampai sekolah DAN soal kurang dari 10 → Tidak Tuntas sama sekali
    gStatusText = `❌ Tidak Tuntas (${gRight}/10)`;
    gStatusType = 'danger';
    gCardDesc   = `Siswa belum mencapai garis akhir sekolah dan baru menjawab ${gRight} dari 10 soal dengan benar (${gWrong} salah). Kedua kriteria ketuntasan game belum terpenuhi; pelajari kembali materi dan ulangi permainan.`;
    gTableDesc  = `Belum tuntas pada capaian misi game maupun ketuntasan soal (${gRight}/10 soal benar).`;
  } 
  

  // 4. Menu 4: Jurnal Refleksi Mandiri
  const refDone = !!(p.menu3ReflectionDone || p.reflectionDone);
  let refStatusText = '';
  let refStatusType = '';
  let refCardDesc = '';
  let refTableDesc = '';

  if (refDone) {
    refStatusText = '✅ Selesai (100%)';
    refStatusType = 'success';
    refCardDesc = `Siswa telah melengkapi seluruh instrumen jurnal refleksi mandiri, menunjukkan kesadaran metakognitif dan evaluasi diri yang baik terhadap proses belajarnya.`;
    refTableDesc = `Telah melengkapi seluruh instrumen refleksi diri dan evaluasi pembelajaran.`;
  } else {
    refStatusText = '❌ Belum Mengisi (0%)';
    refStatusType = 'danger';
    refCardDesc = `Siswa belum mengisi jurnal refleksi mandiri. Silakan lengkapi 5 pertanyaan refleksi pada sub-menu ke-2 untuk melengkapi catatan evaluasi diri.`;
    refTableDesc = `Belum mengisi kuesioner jurnal refleksi mandiri.`;
  }

  const isAllGraduated = (m1IsTuntas && m2IsTuntas && gIsTuntas && refDone);

  return {
    m1: { correct: m1Correct, wrong: m1Wrong, resets: m1Resets, acc: m1Acc, statusText: m1StatusText, statusType: m1StatusType, cardDesc: m1CardDesc, tableDesc: m1TableDesc, isTuntas: m1IsTuntas },
    m2: { cases: m2Cases, resets: m2Resets, statusText: m2StatusText, statusType: m2StatusType, cardDesc: m2CardDesc, tableDesc: m2TableDesc, isTuntas: m2IsTuntas },
    g: { score: gScore, right: gRight, wrong: gWrong, gems: gGems, nilaiSoal, nilaiPermata, nilaiKecepatan, totalScore: totalGameScore, statusText: gStatusText, statusType: gStatusType, cardDesc: gCardDesc, tableDesc: gTableDesc, isTuntas: gIsTuntas },
    ref: { done: refDone, statusText: refStatusText, statusType: refStatusType, cardDesc: refCardDesc, tableDesc: refTableDesc },
    isAllGraduated
  };
}

function renderLearningReportAndCertificate() {
  const student = (typeof getActiveSessionStudent === 'function') ? getActiveSessionStudent() : currentSessionStudent;
  const p = student ? student.progress : {};
  const studentName = (student && student.name) ? student.name : 'Siswa';
  const evalData = evaluateStudentPerformance(p);

  // 1. EVALUASI MENU 1 (PENGUATAN KONSEP)
  const repM1Status = document.getElementById('rep-menu1-status');
  const repM1Correct = document.getElementById('rep-menu1-correct');
  const repM1Wrong = document.getElementById('rep-menu1-wrong');
  const repM1Resets = document.getElementById('rep-menu1-resets');
  const repM1Interpret = document.getElementById('rep-menu1-interpret');

  if (repM1Status) updateBadgeElement(repM1Status, evalData.m1.statusText, evalData.m1.statusType);
  if (repM1Correct) repM1Correct.textContent = `${evalData.m1.correct} Soal`;
  if (repM1Wrong) repM1Wrong.textContent = `${evalData.m1.wrong} Soal`;
  if (repM1Resets) repM1Resets.textContent = `${evalData.m1.resets} kali`;
  if (repM1Interpret) repM1Interpret.innerHTML = `<strong>Interpretasi Pedagogis:</strong> ${evalData.m1.cardDesc}`;

  // 2. EVALUASI MENU 2 (STUDIO ARSITEK)
  const repM2Status = document.getElementById('rep-menu2-status');
  const repM2Cases = document.getElementById('rep-menu2-cases');
  const repM2Resets = document.getElementById('rep-menu2-resets');
  const repM2Interpret = document.getElementById('rep-menu2-interpret');

  if (repM2Status) updateBadgeElement(repM2Status, evalData.m2.statusText, evalData.m2.statusType);
  if (repM2Cases) repM2Cases.textContent = `${evalData.m2.cases} / 4 Kasus`;
  if (repM2Resets) repM2Resets.textContent = `${evalData.m2.resets} kali`;
  if (repM2Interpret) repM2Interpret.innerHTML = `<strong>Interpretasi Pedagogis:</strong> ${evalData.m2.cardDesc}`;

  // 3. EVALUASI MENU 3 (GAME SUPER MARIO)
  const repGStatus = document.getElementById('rep-game-status');
  const repGScore = document.getElementById('rep-game-score');
  const repGGems = document.getElementById('rep-game-gems');
  const repGRight = document.getElementById('rep-game-right');
  const repGWrong = document.getElementById('rep-game-wrong');
  const repGInterpret = document.getElementById('rep-game-interpret');

  if (repGStatus) updateBadgeElement(repGStatus, evalData.g.statusText, evalData.g.statusType);
  if (repGScore) repGScore.textContent = `${evalData.g.score} Poin (Asesmen: ${evalData.g.totalScore} • Kecepatan 17%: ${evalData.g.nilaiKecepatan}p)`;
  if (repGGems) repGGems.textContent = `${evalData.g.gems} Permata (Bobot 3%: ${evalData.g.nilaiPermata}p)`;
  if (repGRight) repGRight.textContent = `${evalData.g.right} Soal (Bobot 85%: ${evalData.g.nilaiSoal}p)`;
  if (repGWrong) repGWrong.textContent = `${evalData.g.wrong} Soal`;
  if (repGInterpret) repGInterpret.innerHTML = `<strong>Interpretasi Pedagogis:</strong> ${evalData.g.cardDesc}`;

  // 4. EVALUASI REFLEKSI DIRI
  const repRStatus = document.getElementById('rep-ref-status');
  const repRScore = document.getElementById('rep-ref-score');
  const repRInterpret = document.getElementById('rep-ref-interpret');

  if (repRStatus) updateBadgeElement(repRStatus, evalData.ref.statusText, evalData.ref.statusType);
  if (repRScore) repRScore.textContent = evalData.ref.done ? 'Sangat Positif (100% Terisi)' : 'Belum Terdata';
  if (repRInterpret) repRInterpret.innerHTML = `<strong>Interpretasi Pedagogis:</strong> ${evalData.ref.cardDesc}`;

  // 5. ISI DATA PIAGAM SERTIFIKAT DIGITAL
  const certName = document.getElementById('cert-student-name');
  const certDate = document.getElementById('cert-date-label');
  const certReg = document.getElementById('cert-reg-no');
  const certStatementEl = document.getElementById('cert-statement-p');

  if (certName) certName.textContent = studentName;
  if (certDate) certDate.textContent = new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
  if (certReg) certReg.textContent = `AS-MATH/${new Date().getFullYear()}/${(currentSessionStudent ? currentSessionStudent.id : 101).toString().padStart(4, '0')}`;

  if (certStatementEl) {
    if (evalData.isAllGraduated) {
      certStatementEl.innerHTML = `Telah dinyatakan <strong>LULUS & TUNTAS LENGKAP</strong> pada pembelajaran matematika materi <strong>Barisan & Deret Aritmatika</strong> dengan rincian ketuntasan kompetensi sebagai berikut:`;
      certStatementEl.style.color = '#065F46';
    } else {
      certStatementEl.innerHTML = `Saat ini berstatus <strong style="color: #B45309;">DALAM PROSES PEMBELAJARAN (BELUM TUNTAS LENGKAP)</strong> pada materi <strong>Barisan & Deret Aritmatika</strong>. Harap lengkapi dan perbaiki aspek yang belum tuntas di bawah ini untuk memperoleh predikat Lulus Penuh:`;
      certStatementEl.style.color = '#78350F';
    }
  }

  // Tabel Kompetensi di Piagam (Skor, Status, dan Keterangan Pedagogis Dinamis)
  const tM1 = document.getElementById('table-score-menu1');
  const tM2 = document.getElementById('table-score-menu2');
  const tM3 = document.getElementById('table-score-menu3');
  const tRef = document.getElementById('table-score-ref');

  if (tM1) tM1.textContent = `${evalData.m1.correct} / 10 Soal`;
  if (tM2) tM2.textContent = `${evalData.m2.cases} / 4 Kasus`;
  if (tM3) tM3.textContent = `${evalData.g.right} / 10 Soal`;
  if (tRef) tRef.textContent = evalData.ref.done ? '100% Terisi' : '0%';

  const tableStatusM1 = document.getElementById('table-status-menu1');
  const tableDescM1 = document.getElementById('table-desc-menu1');
  if (tableStatusM1) updateBadgeElement(tableStatusM1, evalData.m1.statusText, evalData.m1.statusType);
  if (tableDescM1) tableDescM1.textContent = evalData.m1.tableDesc;

  const tableStatusM2 = document.getElementById('table-status-menu2');
  const tableDescM2 = document.getElementById('table-desc-menu2');
  if (tableStatusM2) updateBadgeElement(tableStatusM2, evalData.m2.statusText, evalData.m2.statusType);
  if (tableDescM2) tableDescM2.textContent = evalData.m2.tableDesc;

  const tableStatusM3 = document.getElementById('table-status-menu3');
  const tableDescM3 = document.getElementById('table-desc-menu3');
  if (tableStatusM3) updateBadgeElement(tableStatusM3, evalData.g.statusText, evalData.g.statusType);
  if (tableDescM3) tableDescM3.textContent = evalData.g.tableDesc;

  const tableStatusRef = document.getElementById('table-status-ref');
  const tableDescRef = document.getElementById('table-desc-ref');
  if (tableStatusRef) updateBadgeElement(tableStatusRef, evalData.ref.statusText, evalData.ref.statusType);
  if (tableDescRef) tableDescRef.textContent = evalData.ref.tableDesc;

  if (typeof typesetMath === 'function') {
    setTimeout(() => typesetMath(document.getElementById('subtab-3-content') || document.body), 30);
  }
}

function drawRoundPill(ctx, x, y, w, h, r, fill, stroke) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
  if (fill) { ctx.fillStyle = fill; ctx.fill(); }
  if (stroke) { ctx.strokeStyle = stroke; ctx.stroke(); }
}

function drawWrappedCanvasText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 2) {
  const words = (text || '').split(' ');
  let line = '';
  let lines = [];
  for (let n = 0; n < words.length; n++) {
    const testLine = line + (line ? ' ' : '') + words[n];
    if (ctx.measureText(testLine).width > maxWidth && n > 0) {
      lines.push(line);
      line = words[n];
      if (lines.length === maxLines - 1) {
        const remaining = words.slice(n).join(' ');
        let fit = '';
        for (let i = 0; i < remaining.length; i++) {
          if (ctx.measureText(fit + remaining[i] + '...').width > maxWidth) break;
          fit += remaining[i];
        }
        lines.push(fit + '...');
        line = '';
        break;
      }
    } else {
      line = testLine;
    }
  }
  if (line) lines.push(line);

  const startY = (lines.length === 1) ? y : y - (lineHeight / 2) + 2;
  lines.forEach((l, idx) => {
    ctx.fillText(l, x, startY + (idx * lineHeight));
  });
}

function downloadCertificateImage() {
  playSFX('fanfare');
  const student = (typeof getActiveSessionStudent === 'function') ? getActiveSessionStudent() : currentSessionStudent;
  const studentName = (student && student.name) ? student.name : 'Siswa';
  const p = student ? student.progress : {};
  const evalData = evaluateStudentPerformance(p);
  const studentId = student ? student.id : 101;

  const canvas = document.createElement('canvas');
  canvas.width = 1400;
  canvas.height = 950;
  const ctx = canvas.getContext('2d');

  // 1. Latar Belakang Gradasi Mewah (Soft Ivory Parchment)
  const bgGrad = ctx.createLinearGradient(0, 0, 1400, 950);
  bgGrad.addColorStop(0, '#FFFDF8');
  bgGrad.addColorStop(0.3, '#FAF7EE');
  bgGrad.addColorStop(0.7, '#F4F7FB');
  bgGrad.addColorStop(1, '#EEF4FF');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 1400, 950);

  // 2. Motif Pola Keamanan Garis Halus (Security Guilloche Pattern Faint)
  ctx.save();
  ctx.strokeStyle = 'rgba(217, 119, 6, 0.04)';
  ctx.lineWidth = 1;
  for (let x = 60; x < 1340; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x, 60);
    ctx.lineTo(x + 20, 890);
    ctx.stroke();
  }
  for (let y = 60; y < 890; y += 40) {
    ctx.beginPath();
    ctx.moveTo(60, y);
    ctx.lineTo(1340, y + 20);
    ctx.stroke();
  }
  ctx.restore();

  // 3. Watermark Lambang Matematika Tengah Faint
  ctx.save();
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = 'bold 130px "Fredoka", sans-serif';
  ctx.fillStyle = 'rgba(180, 83, 9, 0.035)';
  ctx.fillText('∑ Un = Sn', 700, 480);
  ctx.font = 'bold 24px "Nunito", sans-serif';
  ctx.fillStyle = 'rgba(30, 27, 75, 0.03)';
  ctx.fillText('ARITHMASCHOOL ACADEMY • FASE E', 700, 560);
  ctx.restore();

  // 4. Bingkai Ganda Berkelas (Royal Navy & Emas Berornamen)
  // Bingkai luar emas tua
  ctx.strokeStyle = '#D97706';
  ctx.lineWidth = 10;
  ctx.strokeRect(22, 22, 1356, 906);

  // Garis aksen emas muda
  ctx.strokeStyle = '#FDE68A';
  ctx.lineWidth = 2.5;
  ctx.strokeRect(30, 30, 1340, 890);

  // Bingkai utama Royal Navy
  ctx.strokeStyle = '#1E1B4B';
  ctx.lineWidth = 4.5;
  ctx.strokeRect(40, 40, 1320, 870);

  // Garis ornamen putus-putus emas bagian dalam
  ctx.strokeStyle = '#F59E0B';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([6, 5]);
  ctx.strokeRect(50, 50, 1300, 850);
  ctx.setLineDash([]);

  // Ornamen Sudut Mewah (Baroque Corner Ornaments)
  const drawCornerFlourish = (cx, cy, flipX, flipY) => {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(flipX ? -1 : 1, flipY ? -1 : 1);
    ctx.fillStyle = '#D97706';
    ctx.strokeStyle = '#D97706';
    ctx.lineWidth = 2;

    // Diamond jewel
    ctx.beginPath();
    ctx.moveTo(14, 0); ctx.lineTo(24, 10); ctx.lineTo(14, 20); ctx.lineTo(4, 10);
    ctx.closePath();
    ctx.fill();

    // Corner brackets
    ctx.beginPath();
    ctx.arc(14, 14, 22, Math.PI, 1.5 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 14); ctx.lineTo(36, 14);
    ctx.moveTo(14, 0); ctx.lineTo(14, 36);
    ctx.stroke();
    ctx.restore();
  };
  drawCornerFlourish(56, 56, false, false);
  drawCornerFlourish(1344, 56, true, false);
  drawCornerFlourish(56, 894, false, true);
  drawCornerFlourish(1344, 894, true, true);

  // 5. Medali Lambang Akademik Kiri & Kanan Header
  const drawAcademyEmblem = (x, y, icon) => {
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, 32, 0, Math.PI * 2);
    ctx.fillStyle = '#FEF3C7';
    ctx.fill();
    ctx.strokeStyle = '#F59E0B';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x, y, 26, 0, Math.PI * 2);
    ctx.strokeStyle = '#D97706';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.font = '24px "Fredoka", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#1E1B4B';
    ctx.fillText(icon, x, y + 2);
    ctx.restore();
  };
  drawAcademyEmblem(160, 118, '🎓');
  drawAcademyEmblem(1240, 118, '🦉');

  // 6. Header Sertifikat
  ctx.textAlign = 'center';
  ctx.fillStyle = '#B45309';
  ctx.font = 'bold 13px "Nunito", sans-serif';
  ctx.fillText('KEMENTERIAN PENDIDIKAN • ARITHMASCHOOL ACADEMY FASE E', 700, 92);

  ctx.fillStyle = '#1E1B4B';
  ctx.font = 'bold 36px "Fredoka", sans-serif';
  ctx.fillText('SERTIFIKAT KELULUSAN DIGITAL', 700, 134);

  // Pita pembatas ornamen emas di bawah judul
  ctx.fillStyle = '#F59E0B';
  ctx.font = '14px "Nunito", sans-serif';
  ctx.fillText('♦ ────────────────── ❖ ────────────────── ♦', 700, 156);

  // Badge Pill Nomor Registrasi Resmi & Akreditasi
  const regNo = `No. Registrasi: AS-MATH/${new Date().getFullYear()}/${studentId.toString().padStart(4, '0')} • Akreditasi Standar Kurikulum Merdeka`;
  drawRoundPill(ctx, 420, 168, 560, 26, 13, '#FEF3C7', '#F59E0B');
  ctx.fillStyle = '#92400E';
  ctx.font = 'bold 12px "Nunito", sans-serif';
  ctx.fillText(regNo, 700, 185);

  // 7. Bagian Nama Siswa dalam Plakat Eksklusif
  ctx.fillStyle = '#475569';
  ctx.font = 'italic 14px "Nunito", serif';
  ctx.fillText('Sertifikat kelulusan kompetensi ini secara resmi diberikan kepada:', 700, 222);

  // Plakat Nama Siswa
  const plaqueX = 350, plaqueY = 236, plaqueW = 700, plaqueH = 62;
  const plaqueGrad = ctx.createLinearGradient(plaqueX, plaqueY, plaqueX + plaqueW, plaqueY + plaqueH);
  plaqueGrad.addColorStop(0, '#FFFDF5');
  plaqueGrad.addColorStop(0.5, '#FEF9C3');
  plaqueGrad.addColorStop(1, '#FFFBEB');
  drawRoundPill(ctx, plaqueX, plaqueY, plaqueW, plaqueH, 16, plaqueGrad, '#F59E0B');
  ctx.strokeStyle = '#CA8A04';
  ctx.lineWidth = 1;
  ctx.strokeRect(plaqueX + 6, plaqueY + 6, plaqueW - 12, plaqueH - 12);

  // Nama Siswa
  ctx.fillStyle = '#0F172A';
  ctx.font = 'bold 34px "Fredoka", sans-serif';
  ctx.fillText(studentName, 700, 277);

  // Pernyataan Kelulusan
  ctx.font = 'bold 14.5px "Nunito", sans-serif';
  if (evalData.isAllGraduated) {
    ctx.fillStyle = '#065F46';
    ctx.fillText('Telah berhasil menuntaskan seluruh misi pembelajaran materi Barisan dan Deret Aritmatika', 700, 322);
  } else {
    ctx.fillStyle = '#B45309';
    ctx.fillText('Laporan Kemajuan Belajar Sementara — Masih Dalam Proses Menyelesaikan Seluruh Aspek', 700, 322);
  }

  // 8. TABEL KETUNTASAN KOMPETENSI (LEBAR 1200px, FIT TOTAL TANPA OVERFLOW)
  const tX = 100;
  const tY = 345;
  const tW = 1200;
  const headerH = 40;
  const rowH = 56;

  // Header Tabel
  ctx.fillStyle = '#1E1B4B';
  ctx.fillRect(tX, tY, tW, headerH);
  ctx.strokeStyle = '#0F172A';
  ctx.lineWidth = 2;
  ctx.strokeRect(tX, tY, tW, headerH);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 13px "Nunito", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('No', tX + 25, tY + 25);
  ctx.textAlign = 'left';
  ctx.fillText('Aspek Pembelajaran (Kompetensi)', tX + 65, tY + 25);
  ctx.textAlign = 'center';
  ctx.fillText('Capaian / Skor', tX + 380, tY + 25);
  ctx.fillText('Status Ketuntasan', tX + 535, tY + 25);
  ctx.textAlign = 'left';
  ctx.fillText('Keterangan Pedagogis & Hasil Evaluasi', tX + 645, tY + 25);

  // Data 4 Aspek
  const tableData = [
    {
      no: '1',
      title: 'Penguatan Konsep (Menu 1)',
      subtitle: 'Identifikasi Beda (b), Rumus Un, dan Deret Gauss',
      score: `${evalData.m1.correct} / 10 Soal`,
      status: evalData.m1.statusText,
      statusType: evalData.m1.statusType,
      desc: evalData.m1.tableDesc
    },
    {
      no: '2',
      title: 'Pemodelan 10 Suku (Menu 2)',
      subtitle: 'Translasi 4 Objek Visual Nyata ke Rumus Aritmatika',
      score: `${evalData.m2.cases} / 4 Kasus`,
      status: evalData.m2.statusText,
      statusType: evalData.m2.statusType,
      desc: evalData.m2.tableDesc
    },
    {
      no: '3',
      title: 'Game Petualangan (Menu 3)',
      subtitle: 'Problem Solving Matematika Kontekstual',
      score: `${evalData.g.right} / 10 Soal`,
      status: evalData.g.statusText,
      statusType: evalData.g.statusType,
      desc: evalData.g.tableDesc
    },
    {
      no: '4',
      title: 'Jurnal Refleksi Mandiri',
      subtitle: 'Kesadaran Metakognitif & Evaluasi Belajar',
      score: evalData.ref.done ? '100% Terisi' : '0% Terisi',
      status: evalData.ref.statusText,
      statusType: evalData.ref.statusType,
      desc: evalData.ref.tableDesc
    }
  ];

  tableData.forEach((row, i) => {
    const curY = tY + headerH + rowH * i;

    // Background selang-seling
    ctx.fillStyle = (i % 2 === 0) ? '#FFFFFF' : '#F8FAFC';
    ctx.fillRect(tX, curY, tW, rowH);
    ctx.strokeStyle = '#E2E8F0';
    ctx.lineWidth = 1;
    ctx.strokeRect(tX, curY, tW, rowH);

    // Garis pemisah kolom vertikal
    ctx.strokeStyle = '#E2E8F0';
    [50, 315, 445, 625].forEach(dx => {
      ctx.beginPath();
      ctx.moveTo(tX + dx, curY);
      ctx.lineTo(tX + dx, curY + rowH);
      ctx.stroke();
    });

    // 1. Kolom No
    ctx.fillStyle = '#334155';
    ctx.font = 'bold 13px "Nunito", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(row.no, tX + 25, curY + 33);

    // 2. Kolom Aspek Pembelajaran (Judul & Subtitle)
    ctx.textAlign = 'left';
    ctx.fillStyle = '#0F172A';
    ctx.font = 'bold 12.5px "Nunito", sans-serif';
    ctx.fillText(row.title, tX + 62, curY + 24);
    ctx.fillStyle = '#64748B';
    ctx.font = '10.5px "Nunito", sans-serif';
    ctx.fillText(row.subtitle, tX + 62, curY + 41);

    // 3. Kolom Capaian / Skor
    ctx.textAlign = 'center';
    ctx.fillStyle = '#0284C7';
    ctx.font = 'bold 13px "Nunito", sans-serif';
    ctx.fillText(row.score, tX + 380, curY + 33);

    // 4. Kolom Status Ketuntasan (Pill Badge)
    const pillW = 150, pillH = 30;
    const pillX = tX + 460, pillY = curY + 13;
    let pFill = '#F1F5F9', pStroke = '#94A3B8', pColor = '#475569';
    if (row.statusType === 'success') {
      pFill = '#D1FAE5'; pStroke = '#059669'; pColor = '#065F46';
    } else if (row.statusType === 'warning') {
      pFill = '#FEF3C7'; pStroke = '#D97706'; pColor = '#92400E';
    } else if (row.statusType === 'danger') {
      pFill = '#FEE2E2'; pStroke = '#DC2626'; pColor = '#991B1B';
    }
    drawRoundPill(ctx, pillX, pillY, pillW, pillH, 15, pFill, pStroke);
    ctx.fillStyle = pColor;
    ctx.font = 'bold 11.5px "Nunito", sans-serif';
    ctx.fillText(row.status, pillX + pillW / 2, pillY + 19);

    // 5. Kolom Keterangan Pedagogis (Lebar 555px - Anti Kepotong/Overflow)
    ctx.textAlign = 'left';
    ctx.fillStyle = '#334155';
    ctx.font = '11.5px "Nunito", sans-serif';
    drawWrappedCanvasText(ctx, row.desc, tX + 645, curY + 28, 545, 17, 2);
  });

  // Border luar tabel tebal
  ctx.strokeStyle = '#CBD5E1';
  ctx.lineWidth = 2;
  ctx.strokeRect(tX, tY, tW, headerH + rowH * 4);

  // 9. FOOTER SERTIFIKAT (TANGGAL, CAP STEMPEL RESMI, MEDALI EMAS & TANDA TANGAN GURU)
  const fY = 645;

  // Garis Emas Penutup Tabel
  ctx.strokeStyle = '#FCD34D';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([8, 5]);
  ctx.beginPath();
  ctx.moveTo(100, fY);
  ctx.lineTo(1300, fY);
  ctx.stroke();
  ctx.setLineDash([]);

  // --- KOLOM KIRI: Tanggal & Cap Stempel Resmi ArithmaSchool ---
  ctx.textAlign = 'center';
  ctx.fillStyle = '#64748B';
  ctx.font = '12px "Nunito", sans-serif';
  ctx.fillText('Diterbitkan Resmi di Malang, Indonesia', 280, fY + 28);
  ctx.fillStyle = '#1E293B';
  ctx.font = 'bold 15px "Nunito", sans-serif';
  ctx.fillText(new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }), 280, fY + 50);

  // Cap Stempel Lembaga ArithmaSchool (Rotated -5deg authentic ink stamp)
  ctx.save();
  ctx.translate(280, fY + 130);
  ctx.rotate(-5 * Math.PI / 180);
  ctx.strokeStyle = '#7C3AED';
  ctx.lineWidth = 2.5;
  ctx.beginPath(); ctx.arc(0, 0, 48, 0, Math.PI * 2); ctx.stroke();
  ctx.lineWidth = 1;
  ctx.beginPath(); ctx.arc(0, 0, 43, 0, Math.PI * 2); ctx.stroke();
  ctx.fillStyle = '#7C3AED';
  ctx.font = 'bold 8.5px "Nunito", sans-serif';
  ctx.fillText('★ ARITHMASCHOOL ACADEMY ★', 0, -25);
  ctx.font = 'bold 13px "Fredoka", sans-serif';
  ctx.fillText('RESMI / SAH', 0, -4);
  ctx.font = 'bold 9px "Nunito", sans-serif';
  ctx.fillText('TERVERIFIKASI', 0, 14);
  ctx.font = 'bold 8px "Nunito", sans-serif';
  ctx.fillText('TAHUN 2026', 0, 28);
  ctx.restore();

  // --- KOLOM TENGAH: Medali Segel Emas Keunggulan (Gold Foil Ribbon Seal) ---
  const sealX = 700, sealY = fY + 80;

  // Pita Medali Gantung (Ribbon Tails)
  ctx.save();
  ctx.fillStyle = '#DC2626';
  ctx.beginPath();
  ctx.moveTo(sealX - 18, sealY + 20); ctx.lineTo(sealX - 32, sealY + 82); ctx.lineTo(sealX - 18, sealY + 70); ctx.lineTo(sealX - 4, sealY + 82); ctx.lineTo(sealX - 4, sealY + 20);
  ctx.closePath(); ctx.fill();

  ctx.fillStyle = '#D97706';
  ctx.beginPath();
  ctx.moveTo(sealX + 4, sealY + 20); ctx.lineTo(sealX + 4, sealY + 82); ctx.lineTo(sealX + 18, sealY + 70); ctx.lineTo(sealX + 32, sealY + 82); ctx.lineTo(sealX + 18, sealY + 20);
  ctx.closePath(); ctx.fill();

  // 16-Point Sunburst Cogwheel Seal
  ctx.fillStyle = '#F59E0B';
  ctx.beginPath();
  for (let k = 0; k < 16; k++) {
    const angle = (k * Math.PI) / 8;
    const rOuter = 46, rInner = 39;
    const ox = sealX + Math.cos(angle) * rOuter;
    const oy = sealY + Math.sin(angle) * rOuter;
    const ix = sealX + Math.cos(angle + Math.PI / 16) * rInner;
    const iy = sealY + Math.sin(angle + Math.PI / 16) * rInner;
    if (k === 0) ctx.moveTo(ox, oy);
    else ctx.lineTo(ox, oy);
    ctx.lineTo(ix, iy);
  }
  ctx.closePath(); ctx.fill();

  // Gold Dome Inner Medallion
  const medalGrad = ctx.createRadialGradient(sealX - 10, sealY - 10, 5, sealX, sealY, 36);
  medalGrad.addColorStop(0, '#FEF9C3');
  medalGrad.addColorStop(0.5, '#F59E0B');
  medalGrad.addColorStop(1, '#B45309');
  ctx.fillStyle = medalGrad;
  ctx.beginPath(); ctx.arc(sealX, sealY, 36, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = '#FEF08A'; ctx.lineWidth = 1.5; ctx.stroke();

  ctx.fillStyle = '#78350F';
  ctx.font = 'bold 8px "Nunito", sans-serif';
  ctx.fillText('EXCELLENCE', sealX, sealY - 10);
  ctx.font = 'bold 16px "Fredoka", sans-serif';
  ctx.fillText('★ 10 ★', sealX, sealY + 5);
  ctx.font = 'bold 7.5px "Nunito", sans-serif';
  ctx.fillText('MATHEMATICS', sealX, sealY + 18);
  ctx.restore();

  // Digital Security Hash Label
  ctx.fillStyle = '#64748B';
  ctx.font = '10.5px monospace';
  ctx.fillText(`KODE DIGITAL: SHA256-${studentId}-MATH-${new Date().getFullYear()} • TERDAFTAR RESMI`, 700, fY + 195);

  // --- KOLOM KANAN: Pengesahan & Tanda Tangan Guru Pengampu ---
  const signX = 1120;
  ctx.textAlign = 'center';
  ctx.fillStyle = '#64748B';
  ctx.font = '12px "Nunito", sans-serif';
  ctx.fillText('Guru Pengampu Matematika Fase E:', signX, fY + 28);

  // Simulasi Tanda Tangan Tinta Biru Otentik (Artistic Bezier Curve Signature)
  ctx.save();
  ctx.strokeStyle = '#1D4ED8';
  ctx.lineWidth = 2.4;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(signX - 90, fY + 86);
  ctx.bezierCurveTo(signX - 70, fY + 45, signX - 40, fY + 110, signX - 20, fY + 68);
  ctx.bezierCurveTo(signX - 10, fY + 48, signX + 15, fY + 95, signX + 35, fY + 70);
  ctx.bezierCurveTo(signX + 55, fY + 50, signX + 45, fY + 105, signX + 90, fY + 78);
  ctx.stroke();

  // Garis coretan bawah tanda tangan khas guru
  ctx.lineWidth = 1.8;
  ctx.beginPath();
  ctx.moveTo(signX - 80, fY + 98);
  ctx.lineTo(signX + 75, fY + 98);
  ctx.stroke();
  ctx.restore();

  // Nama & NIP Guru
  ctx.fillStyle = '#0F172A';
  ctx.font = 'bold 16px "Nunito", sans-serif';
  ctx.fillText('Admin Gaussy, M.Pd.', signX, fY + 124);
  ctx.fillStyle = '#64748B';
  ctx.font = '11.5px "Nunito", sans-serif';
  ctx.fillText('NIP. 19850315 201101 1 008', signX, fY + 144);

  // Pill Tanda Tangan Digital Tersertifikasi
  drawRoundPill(ctx, signX - 110, fY + 158, 220, 24, 12, '#ECFDF5', '#10B981');
  ctx.fillStyle = '#047857';
  ctx.font = 'bold 10.5px "Nunito", sans-serif';
  ctx.fillText('✓ Tanda Tangan Digital Terverifikasi', signX, fY + 174);

  // 10. Trigger Download File Gambar PNG
  const link = document.createElement('a');
  link.download = `Sertifikat_ArithmaSchool_${studentName.replace(/\s+/g, '_')}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
  showAudioToast('Piagam Sertifikat berhasil diunduh sebagai gambar PNG! 📥', 'fa-file-image');
}

function triggerGraduationCelebration() {
  const student = (typeof getActiveSessionStudent === 'function') ? getActiveSessionStudent() : currentSessionStudent;
  const p = student ? student.progress : {};
  const studentName = (student && student.name) ? student.name : 'Siswa';
  const ev = evaluateStudentPerformance(p);

  // Hitung jumlah modul yang benar-benar tuntas
  const tuntasList = [ev.m1.isTuntas, ev.m2.isTuntas, ev.g.isTuntas, ev.ref.done];
  const tuntasCount = tuntasList.filter(Boolean).length;

  // Elemen DOM
  const gradName    = document.getElementById('grad-student-name');
  const gradTitle   = document.getElementById('grad-title-h2');
  const gradBadge   = document.getElementById('grad-badge-label');
  const gradSpeech  = document.getElementById('grad-speech-text');
  const gradBox     = document.getElementById('grad-summary-box');
  const gradPred    = document.getElementById('grad-predikat-text');
  const gradModul   = document.getElementById('grad-modul-text');

  if (gradName) gradName.textContent = `Petualang Tangguh: ${studentName}`;

  if (ev.isAllGraduated) {
    // ✅ SEMUA TUNTAS — Lulus Sempurna
    if (gradTitle)  { gradTitle.textContent = 'Selamat, Kamu Lulus! 🎉'; gradTitle.style.color = '#059669'; }
    if (gradBadge)  { gradBadge.textContent = '🏆 KELULUSAN ARITHMASCHOOL 🏆'; gradBadge.className = 'status-badge status-disetujui'; }
    if (gradSpeech) gradSpeech.innerHTML = `"Hebat sekali! Kamu telah menuntaskan seluruh petualangan Barisan & Deret Aritmatika. Sampai ketemu di materi berikutnya!" 🎓📜`;
    if (gradBox)    { gradBox.style.background = '#D1FAE5'; gradBox.style.borderColor = '#059669'; }
    if (gradPred)   { gradPred.textContent = 'ISTIMEWA (LULUS SEMPURNA)'; gradPred.style.color = '#059669'; }
    if (gradModul)  gradModul.textContent = 'Semua 4 Modul Tuntas ⭐⭐⭐⭐';
    playSFX('fanfare');
    if (window.confetti) confetti({ particleCount: 180, spread: 90, origin: { y: 0.6 } });

  } else {
    // ❌ BELUM SEMUA TUNTAS — Belum Lulus
    // Tentukan pesan berdasarkan berapa modul yang belum selesai
    const missing = [];
    if (!ev.m1.isTuntas) missing.push('Penguatan Konsep (Menu 1)');
    if (!ev.m2.isTuntas) missing.push('Pemodelan 10 Suku (Menu 2)');
    if (!ev.g.isTuntas)  missing.push('Game Petualangan (Menu 3)');
    if (!ev.ref.done)    missing.push('Refleksi Mandiri');

    // Predikat & warna berdasarkan jumlah modul tuntas
    let predikatTeks, predikatWarna, bintang, bgColor, borderColor;
    if (tuntasCount === 3) {
      predikatTeks  = 'BAIK (HAMPIR TUNTAS)';
      predikatWarna = '#1D4ED8';
      bintang       = '⭐⭐⭐';
      bgColor       = '#DBEAFE';
      borderColor   = '#1D4ED8';
    } else if (tuntasCount === 2) {
      predikatTeks  = 'CUKUP (MASIH BERKEMBANG)';
      predikatWarna = '#92400E';
      bintang       = '⭐⭐';
      bgColor       = '#FEF3C7';
      borderColor   = '#D97706';
    } else if (tuntasCount === 1) {
      predikatTeks  = 'PERLU BIMBINGAN (BARU MULAI)';
      predikatWarna = '#C2410C';
      bintang       = '⭐';
      bgColor       = '#FFEDD5';
      borderColor   = '#EA580C';
    } else {
      predikatTeks  = 'BELUM TUNTAS (SEGERA MULAI)';
      predikatWarna = '#991B1B';
      bintang       = '';
      bgColor       = '#FEE2E2';
      borderColor   = '#DC2626';
    }

    if (gradTitle)  { gradTitle.textContent = 'Terus Semangat! 💪'; gradTitle.style.color = '#B45309'; }
    if (gradBadge)  { gradBadge.textContent = '⏳ LAPORAN KEMAJUAN BELAJAR'; gradBadge.className = 'status-badge'; gradBadge.style.cssText = 'font-size:12px;padding:4px 14px;background:#FEF3C7;color:#92400E;border:1.5px solid #D97706;border-radius:20px;'; }
    if (gradSpeech) gradSpeech.innerHTML = `"Jangan menyerah! Masih ada ${missing.length} modul yang perlu diselesaikan: <strong>${missing.join(', ')}</strong>. Kembali ke menu dan tuntaskan semuanya!" 💡📚`;
    if (gradBox)    { gradBox.style.background = bgColor; gradBox.style.borderColor = borderColor; }
    if (gradPred)   { gradPred.textContent = predikatTeks; gradPred.style.color = predikatWarna; }
    if (gradModul)  gradModul.textContent = `${tuntasCount} dari 4 Modul Tuntas ${bintang}`;
    playSFX('click');
  }
}

/* --------------------------------------------------------------------------
   4. PROFIL SISWA & PROGRESS TRACKING MULTI-FITUR
   -------------------------------------------------------------------------- */
let currentSelectedProfileAvatar = '🦉';

function ensureStudentProgress(student) {
  if (!student.progress) student.progress = {};
  const p = student.progress;
  if (p.conceptViewed === undefined) p.conceptViewed = false;
  if (p.menu1Correct === undefined) p.menu1Correct = 0;
  if (p.menu1Wrong === undefined) p.menu1Wrong = 0;
  if (p.menu1Resets === undefined) p.menu1Resets = 0;
  if (p.menu1AnsweredCards === undefined) p.menu1AnsweredCards = [];
  if (p.menu1Completed === undefined) p.menu1Completed = false;
  if (p.menu1Shuffled === undefined) p.menu1Shuffled = false;

  if (p.menu2CompletedCases === undefined) p.menu2CompletedCases = [];
  if (p.menu2Resets === undefined) p.menu2Resets = 0;
  if (p.menu2Completed === undefined) p.menu2Completed = false;
  if (p.challengeCompleted === undefined) p.challengeCompleted = false;
  if (p.challengeScore === undefined) p.challengeScore = 0;
  if (p.challengeStars === undefined) p.challengeStars = 0;

  if (p.menu3GameScore === undefined) p.menu3GameScore = 0;
  if (p.menu3GameRight === undefined) p.menu3GameRight = 0;
  if (p.menu3GameWrong === undefined) p.menu3GameWrong = 0;
  if (p.menu3GameGems === undefined) p.menu3GameGems = 0;
  if (p.menu3GameCompleted === undefined) p.menu3GameCompleted = false;
  if (p.menu3GameDuration === undefined) p.menu3GameDuration = 0;
  if (p.menu3ReflectionAnswers === undefined) p.menu3ReflectionAnswers = [];
  if (p.menu3ReflectionDone === undefined) p.menu3ReflectionDone = false;
  if (p.reflectionDone === undefined) p.reflectionDone = false;
  if (p.assessmentScore === undefined) p.assessmentScore = null;
}

function calculateProgressPercentage(student) {
  if (!student || !student.progress) return 0;
  ensureStudentProgress(student);
  const p = student.progress;
  let pct = 0;

  // Menu 1: bobot 33% (target 10 soal benar)
  const m1Ratio = Math.min(1, (p.menu1Correct || 0) / 10);
  pct += m1Ratio * 33;

  // Menu 2: bobot 33% (target 4 kasus)
  const m2Ratio = Math.min(1, (p.menu2CompletedCases || []).length / 4);
  pct += m2Ratio * 33;

  // Menu 3: bobot 34% (game 17% + refleksi 17%)
  if (p.menu3GameCompleted || (p.menu3GameScore || 0) > 0) pct += 17;
  if (p.menu3ReflectionDone || p.reflectionDone) pct += 17;

  return Math.min(100, Math.round(pct));
}

function saveStudentProgress() {
  if (!currentSessionStudent) return;
  const data = getAppData();
  let idx = data.students.findIndex(s => s.id === currentSessionStudent.id);
  if (idx === -1 && currentSessionStudent.name) {
    idx = data.students.findIndex(s => s.name && s.name.toLowerCase() === currentSessionStudent.name.toLowerCase());
  }
  if (idx !== -1) {
    data.students[idx] = currentSessionStudent;
    saveAppData(data);
  }
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentSessionStudent));
  if (typeof updateStudentMenuGreeting === 'function') {
    updateStudentMenuGreeting();
  }
}

function loadProfilePageData() {
  const savedUser = localStorage.getItem(CURRENT_USER_KEY);
  let student = currentSessionStudent;
  if (savedUser) {
    try { student = JSON.parse(savedUser); currentSessionStudent = student; } catch(e) {}
  }
  if (!student) {
    student = { id: 101, name: 'Budi Santoso', password: '123', avatar: '🦉', progress: {} };
    currentSessionStudent = student;
  }

  ensureStudentProgress(student);

  const nameInput = document.getElementById('profile-page-name');
  const passInput = document.getElementById('profile-page-password');
  const preview = document.getElementById('profile-page-avatar-preview');
  if (nameInput) nameInput.value = student.name || '';
  if (passInput) passInput.value = student.password || '';

  currentSelectedProfileAvatar = student.avatar || '🦉';
  if (preview) preview.textContent = currentSelectedProfileAvatar;
  highlightProfileAvatar(currentSelectedProfileAvatar);

  const totalPct = calculateProgressPercentage(student);
  const pctLabel = document.getElementById('page-progress-percentage-label');
  const barTotal = document.getElementById('page-progress-bar-total');
  if (pctLabel) pctLabel.textContent = `${totalPct}%`;
  if (barTotal) barTotal.style.width = `${totalPct}%`;

  const p = student.progress;
  const kStat = document.getElementById('page-progress-konsep-status');
  const tStat = document.getElementById('page-progress-tantangan-status');
  const aStat = document.getElementById('page-progress-asesmen-status');

  const m1Done = p.menu1Completed || (p.menu1Correct || 0) >= 10;
  const m2Done = p.menu2Completed || (p.menu2CompletedCases || []).length >= 4;
  const m3Done = (p.menu3GameCompleted || (p.menu3GameScore || 0) > 0) && (p.menu3ReflectionDone || p.reflectionDone);

  if (kStat) {
    kStat.innerHTML = m1Done ? '<span style="color:#15803D;font-weight:800;">✅ Tuntas (10+ Kartu)</span>' : `<span style="color:#E65100;font-weight:700;">⏳ Berproses (${p.menu1Correct || 0}/10)</span>`;
  }
  if (tStat) {
    tStat.innerHTML = m2Done ? '<span style="color:#15803D;font-weight:800;">✅ Tuntas (4/4 Kasus)</span>' : `<span style="color:#E65100;font-weight:700;">⏳ Berproses (${(p.menu2CompletedCases || []).length}/4)</span>`;
  }
  if (aStat) {
    aStat.innerHTML = m3Done ? '<span style="color:#15803D;font-weight:800;">✅ Game & Refleksi Selesai</span>' : '<span style="color:#E65100;font-weight:700;">⏳ Belum Selesai</span>';
  }
}

function selectProfileAvatar(avatarChar) {
  playSFX('click');
  currentSelectedProfileAvatar = avatarChar;
  const preview = document.getElementById('profile-page-avatar-preview');
  if (preview) preview.textContent = avatarChar;
  highlightProfileAvatar(avatarChar);
}

function highlightProfileAvatar(avatarChar) {
  document.querySelectorAll('.avatar-preset-item').forEach(btn => {
    btn.classList.toggle('selected', btn.textContent.trim() === avatarChar);
  });
}

function saveProfileChangesFromPage() {
  const nameEl = document.getElementById('profile-page-name');
  const passEl = document.getElementById('profile-page-password');
  const newName = nameEl ? nameEl.value.trim() : '';
  const newPass = passEl ? passEl.value.trim() : '';

  if (!newName || !newPass) {
    alert('Nama lengkap dan kata sandi tidak boleh kosong!');
    return;
  }

  if (!currentSessionStudent) {
    currentSessionStudent = { id: 101, name: newName, password: newPass, avatar: currentSelectedProfileAvatar };
  }

  currentSessionStudent.name = newName;
  currentSessionStudent.password = newPass;
  currentSessionStudent.avatar = currentSelectedProfileAvatar;

  const data = getAppData();
  const idx = data.students.findIndex(s => s.id === currentSessionStudent.id);
  if (idx !== -1) {
    data.students[idx] = currentSessionStudent;
    saveAppData(data);
  }
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentSessionStudent));

  playSFX('success');
  const alertEl = document.getElementById('profile-page-alert');
  const alertText = document.getElementById('profile-page-alert-text');
  if (alertEl) alertEl.classList.add('show');
  if (alertText) alertText.textContent = '✅ Perubahan profil berhasil disimpan!';
  updateStudentMenuGreeting();
  setTimeout(() => { if (alertEl) alertEl.classList.remove('show'); }, 3000);
}

/* --------------------------------------------------------------------------
   KONTROL GAME PETUALANGAN DI FOOTER HALAMAN 9 (◀ ▶ ▲ ⚔)
   Mengirim status tombol ke iframe game via postMessage (keyboard virtual)
   -------------------------------------------------------------------------- */
(function initGameFooterControls() {
  function bindGamePad() {
    const controls = document.getElementById('game-footer-controls');
    if (!controls || controls.dataset.bound) return;
    controls.dataset.bound = '1';

    controls.querySelectorAll('.game-pad-btn').forEach(btn => {
      const k = btn.dataset.gkey;
      const press = (e) => {
        e.preventDefault();
        sendGameKey(k, true);
        btn.classList.add('pressed');
      };
      const release = () => {
        sendGameKey(k, false);
        btn.classList.remove('pressed');
      };
      btn.addEventListener('pointerdown', press);
      ['pointerup', 'pointerleave', 'pointercancel'].forEach(ev => btn.addEventListener(ev, release));
    });
  }
  window.bindGamePad = bindGamePad;  // diekspos agar initMenu3Assessment bisa memanggilnya saat halaman 9 dibuka

  function sendGameKey(k, down) {
    const frame = document.getElementById('assessment-game-frame');
    if (frame && frame.contentWindow) {
      frame.contentWindow.postMessage({ type: 'ARITHMA_GAME_KEY', key: k, down: !!down }, '*');
    }
  }

  // Pastikan binding dijalankan setiap kali halaman 9 dibuka
  const origNavigate = window.navigateTo;
  if (typeof origNavigate === 'function' && !window.__arithmaPadNavWrapped) {
    window.__arithmaPadNavWrapped = true;
    window.navigateTo = function(page) {
      if (page !== 9 && typeof exitGameMobileFullscreen === 'function') {
        exitGameMobileFullscreen();
      }
      const r = origNavigate.apply(this, arguments);
      if (page === 9) setTimeout(bindGamePad, 100);
      return r;
    };
  }

  // Teruskan input keyboard dari halaman induk ke iframe game saat subtab Game aktif
  if (!window.__arithmaParentKeyBound) {
    window.__arithmaParentKeyBound = true;
    const isGameActive = () => {
      const p9 = document.getElementById('page-9');
      const sub1 = document.getElementById('subtab-1-content');
      return p9 && p9.classList.contains('active') && sub1 && sub1.style.display !== 'none';
    };
    const isTyping = (el) => el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT');
    const gameKeys = new Set([
      'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
      'a', 'A', 'd', 'D', 'w', 'W', 's', 'S',
      'x', 'X', 'z', 'Z', 'k', 'K', ' ', 'Enter', '1', '2', '3', '4'
    ]);

    window.addEventListener('keydown', (e) => {
      if (!isGameActive() || isTyping(document.activeElement)) return;
      if (!gameKeys.has(e.key)) return;
      const frame = document.getElementById('assessment-game-frame');
      if (frame && frame.contentWindow) {
        frame.contentWindow.postMessage({ type: 'ARITHMA_PARENT_KEY', eventType: 'keydown', key: e.key }, '*');
        e.preventDefault();
      }
    });

    window.addEventListener('keyup', (e) => {
      if (!isGameActive() || isTyping(document.activeElement)) return;
      if (!gameKeys.has(e.key)) return;
      const frame = document.getElementById('assessment-game-frame');
      if (frame && frame.contentWindow) {
        frame.contentWindow.postMessage({ type: 'ARITHMA_PARENT_KEY', eventType: 'keyup', key: e.key }, '*');
        e.preventDefault();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', bindGamePad);
  if (document.readyState !== 'loading') bindGamePad();
})();
