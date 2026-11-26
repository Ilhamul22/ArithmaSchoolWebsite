/* ==========================================================================
   PAGE LOADER: MEMUAT POTONGAN HTML DARI FOLDER pages/ SECARA OTOMATIS
   ========================================================================== */
const PAGE_FILES = [
  'pages/1-cover.html',
  'pages/2-login.html',
  'pages/3-register.html',
  'pages/waiting.html',
  'pages/4-guru.html',
  'pages/5-menu.html',
  'pages/6-dashboard-guru.html',
  'pages/7-konsep.html',
  'pages/8-tantangan.html',
  'pages/9-asesmen.html',
  'pages/10-kelulusan.html',
  'pages/profile.html'
];

async function loadPages() {
  const container = document.getElementById('pages-container');
  if (!container) return;

  try {
    const pagesHtml = await Promise.all(
      PAGE_FILES.map(async (file) => {
        const res = await fetch(file);
        if (!res.ok) throw new Error(`Gagal memuat ${file}`);
        return await res.text();
      })
    );

    container.innerHTML = pagesHtml.join('\n');

    // Panggil fungsi inisialisasi setelah semua elemen HTML terpasang di DOM
    if (typeof getActiveSessionStudent === 'function') getActiveSessionStudent();
    if (typeof renderTeacherDashboard === 'function') renderTeacherDashboard();
    if (typeof updateStudentMenuGreeting === 'function') updateStudentMenuGreeting();
    if (typeof typesetMath === 'function') typesetMath(container);

  } catch (err) {
    console.warn('Live Server diperlukan untuk memuat file dari folder pages/:', err);
    container.innerHTML = `
      <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; padding: 24px; box-sizing: border-box;">
        <div class="arcade-panel" style="max-width: 520px; text-align: center;">
          <div style="font-size: 42px; margin-bottom: 8px;">🚀</div>
          <h3 style="font-family: var(--font-arcade); font-size: 19px; color: var(--dark-outline); margin-bottom: 8px;">
            Jalankan dengan Live Server di VS Code
          </h3>
          <p style="font-size: 12px; color: var(--text-muted); line-height: 1.5; margin-bottom: 12px;">
            Karena seluruh kode halaman sudah <strong>dipisah per file di folder pages/</strong>, browser membutuhkan koneksi lokal (Live Server) untuk memanggilnya demi alasan keamanan.
          </p>
          <div style="background: var(--pastel-yellow-light); border: 2px dashed #E0A800; border-radius: 12px; padding: 10px 14px; font-size: 12px; font-weight: 700; color: #5D4037; text-align: left; line-height: 1.5;">
            👉 <strong>Langkah Mudah di VS Code:</strong><br>
            1. Klik kanan pada file <code>index.html</code><br>
            2. Pilih menu <strong>"Open with Live Server"</strong>
          </div>
        </div>
      </div>
    `;
  }
}

document.addEventListener('DOMContentLoaded', loadPages);
