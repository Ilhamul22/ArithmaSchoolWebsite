/* ==========================================================================
   ENTRY POINT UTAMA (GLOBAL LISTENERS & INISIALISASI APLIKASI)
   ========================================================================== */

document.addEventListener('click', (e) => {
  const btn = e.target.closest('.arcade-btn, .ref-card, .ref-capsule-btn, .icon-round-btn, .avatar-preset-item, button');
  if (btn && !btn.hasAttribute('disabled')) {
    playSFX('click');
  }
});

document.addEventListener('mouseover', (e) => {
  const btn = e.target.closest('.arcade-btn, .ref-card, .ref-capsule-btn, .icon-round-btn, .avatar-preset-item');
  if (btn && !btn.hasAttribute('disabled')) {
    playSFX('hover');
  }
});

document.addEventListener('mousemove', (e) => {
  const mascots = document.querySelectorAll('.gaussy-3d-img');
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const moveX = (e.clientX - centerX) / 45;
  const moveY = (e.clientY - centerY) / 45;

  mascots.forEach(img => {
    img.style.transform = `perspective(600px) rotateY(${moveX}deg) rotateX(${-moveY}deg)`;
  });
});

window.typesetMath = function(root) {
  if (typeof renderMathInElement !== 'function') return;
  try {
    renderMathInElement(root || document.body, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false },
        { left: '\\(', right: '\\)', display: false },
        { left: '\\[', right: '\\]', display: true }
      ],
      throwOnError: false
    });
  } catch (e) {}
};

window.addEventListener('DOMContentLoaded', () => {
  renderTeacherDashboard();
  updateStudentMenuGreeting();
  if (window.typesetMath) window.typesetMath();
});
