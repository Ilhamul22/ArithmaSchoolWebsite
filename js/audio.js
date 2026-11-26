/* ==========================================================================
   WEB AUDIO API SYNTHESIZER (RETRO ARCADE SFX & BGM - 100% OFFLINE)
   ========================================================================== */
let isSoundMuted = false;
let isBgmPlaying = false;
let audioCtx = null;
let bgmInterval = null;
let lastClickSFXTime = 0;
let lastHoverSFXTime = 0;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playSFX(type) {
  if (isSoundMuted) return;
  const nowMs = Date.now();
  if (type === 'click') {
    if (nowMs - lastClickSFXTime < 45) return;
    lastClickSFXTime = nowMs;
  }
  if (type === 'hover') {
    if (nowMs - lastHoverSFXTime < 85) return;
    lastHoverSFXTime = nowMs;
  }

  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    if (type === 'click') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(560, now);
      osc.frequency.exponentialRampToValueAtTime(840, now + 0.05);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.06);
    } else if (type === 'hover') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(920, now);
      gain.gain.setValueAtTime(0.035, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.03);
    } else if (type === 'success') {
      [523.25, 659.25, 783.99, 1046.50].forEach((f, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(f, now + idx * 0.07);
        gain.gain.setValueAtTime(0.16, now + idx * 0.07);
        gain.gain.linearRampToValueAtTime(0.001, now + idx * 0.07 + 0.22);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.07);
        osc.stop(now + idx * 0.07 + 0.22);
      });
    } else if (type === 'coin') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(987.77, now);
      osc.frequency.setValueAtTime(1318.51, now + 0.07);
      gain.gain.setValueAtTime(0.11, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.22);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.22);
    } else if (type === 'warning') {
      [440, 330].forEach((f, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, now + idx * 0.09);
        gain.gain.setValueAtTime(0.15, now + idx * 0.09);
        gain.gain.linearRampToValueAtTime(0.001, now + idx * 0.09 + 0.12);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.09);
        osc.stop(now + idx * 0.09 + 0.12);
      });
    } else if (type === 'fanfare') {
      [392.00, 523.25, 659.25, 783.99, 1046.50].forEach((f, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(f, now + idx * 0.1);
        gain.gain.setValueAtTime(0.15, now + idx * 0.1);
        gain.gain.linearRampToValueAtTime(0.001, now + idx * 0.1 + 0.38);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + 0.38);
      });
    }
  } catch (err) {}
}

let bgmStep = 0;
const BGM_MELODY = [523.25, 0, 659.25, 0, 783.99, 880.00, 783.99, 0, 659.25, 0, 587.33, 0, 523.25, 0, 0, 0];
const BGM_BASS = [130.81, 130.81, 110.00, 110.00, 87.31, 87.31, 98.00, 98.00];

function playBgmTick() {
  if (!isBgmPlaying || isSoundMuted) return;
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    const noteFreq = BGM_MELODY[bgmStep % BGM_MELODY.length];
    if (noteFreq > 0) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1100, now);
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(noteFreq, now);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.18);
    }
    if (bgmStep % 2 === 0) {
      const bassFreq = BGM_BASS[Math.floor(bgmStep / 2) % BGM_BASS.length];
      const bassOsc = ctx.createOscillator();
      const bassGain = ctx.createGain();
      bassOsc.type = 'sine';
      bassOsc.frequency.setValueAtTime(bassFreq, now);
      bassGain.gain.setValueAtTime(0.035, now);
      bassGain.exponentialRampToValueAtTime(0.001, now + 0.35);
      bassOsc.connect(bassGain);
      bassGain.connect(ctx.destination);
      bassOsc.start(now);
      bassOsc.stop(now + 0.35);
    }
    bgmStep++;
  } catch (e) {}
}

function startBGM() {
  if (bgmInterval) clearInterval(bgmInterval);
  isBgmPlaying = true;
  getAudioContext();
  bgmStep = 0;
  bgmInterval = setInterval(playBgmTick, 240);
  updateBgmUI();
}

function stopBGM() {
  isBgmPlaying = false;
  if (bgmInterval) { clearInterval(bgmInterval); bgmInterval = null; }
  updateBgmUI();
}

function toggleBGM() {
  if (isBgmPlaying) {
    stopBGM();
    showAudioToast('Musik Latar: Nonaktif 🔇', 'fa-volume-xmark');
  } else {
    if (isSoundMuted) toggleSound();
    startBGM();
    showAudioToast('Musik Latar: Aktif 🎵', 'fa-music');
  }
}

function updateBgmUI() {
  const btn = document.getElementById('btn-bgm-toggle');
  if (!btn) return;
  if (isBgmPlaying) {
    btn.classList.add('active-bgm');
    btn.title = "Musik Latar Arcade: Aktif (Klik untuk Matikan)";
  } else {
    btn.classList.remove('active-bgm');
    btn.title = "Musik Latar Arcade: Nonaktif (Klik untuk Menyalakan)";
  }
}

function toggleSound() {
  isSoundMuted = !isSoundMuted;
  const soundBtn = document.getElementById('btn-sound-toggle');
  const icon = document.getElementById('sound-icon');
  if (isSoundMuted) {
    if (icon) icon.className = 'fa-solid fa-volume-xmark';
    if (soundBtn) { soundBtn.classList.add('muted'); soundBtn.title = "Efek Suara SFX: Bisu (Klik untuk Menyalakan)"; }
    showAudioToast('Suara Efek: Dibisukan 🔇', 'fa-volume-xmark');
  } else {
    if (icon) icon.className = 'fa-solid fa-volume-high';
    if (soundBtn) { soundBtn.classList.remove('muted'); soundBtn.title = "Efek Suara SFX: Aktif (Klik untuk Matikan)"; }
    playSFX('success');
    showAudioToast('Suara Efek: Dinyalakan 🔊', 'fa-volume-high');
  }
}

let toastTimer = null;
function showAudioToast(msg, iconClass = 'fa-volume-high') {
  const toast = document.getElementById('audio-toast');
  const icon = document.getElementById('audio-toast-icon');
  const text = document.getElementById('audio-toast-text');
  if (!toast) return;
  if (icon) icon.className = `fa-solid ${iconClass}`;
  if (text) text.textContent = msg;
  toast.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.classList.remove('show'); }, 1900);
}

function playGaussyGreeting() {
  if (isSoundMuted) return;

  // 1. Ambil teks dari balon ucapan di halaman yang sedang aktif saat ini
  let textToSpeak = "Halo, petualang! Siap jelajahi dunia Barisan dan Deret bareng aku?";
  
  const activePage = document.querySelector('.screen-page.active');
  if (activePage) {
    const bubble = activePage.querySelector('.gaussy-speech-bubble');
    if (bubble) {
      // Hilangkan emoji dan tanda kutip agar pengucapan terdengar lancar
      textToSpeak = bubble.textContent.replace(/[🦉✨⭐🍎📚🎓📜⏳\n\r"“”]/g, '').trim();
    } else {
      // Jika di Menu Utama (teks ada di bilah bawah maskot)
      const miniNotice = activePage.querySelector('span[style*="border-radius: 999px"]');
      if (miniNotice) {
        textToSpeak = miniNotice.textContent.replace(/🦉\s*Gaussy:\s*/i, '').replace(/[🦉✨⭐🍎📚🎓📜⏳\n\r"“”]/g, '').trim();
      }
    }
  }

  // 2. Hentikan suara sebelumnya jika masih berbicara
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();

    // 3. Konfigurasi Suara Text-To-Speech
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'id-ID'; // Bahasa Indonesia
    utterance.pitch = 1.1;   // Nada sedikit dinaikkan agar terdengar ceria & bersahabat
    utterance.rate = 1.05;   // Kecepatan bicara pas dan energik

    // 4. Pilih suara cowok (Male Voice) bahasa Indonesia bawaan komputer/browser
    const voices = window.speechSynthesis.getVoices();
    const maleVoice = voices.find(v => 
      v.lang.includes('id') && (
        v.name.toLowerCase().includes('male') || 
        v.name.toLowerCase().includes('ardi') || 
        v.name.toLowerCase().includes('david') ||
        v.name.toLowerCase().includes('cowok')
      )
    ) || voices.find(v => v.lang.includes('id'));

    if (maleVoice) {
      utterance.voice = maleVoice;
    }

    // 5. Gaussy berbicara
    window.speechSynthesis.speak(utterance);
  }
}
