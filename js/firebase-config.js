/* ==========================================================================
   KONFIGURASI FIREBASE (REALTIME DATABASE)
   ==========================================================================
   1. Buka https://console.firebase.google.com  -> buat project baru (gratis)
   2. Build -> Realtime Database -> Create Database -> pilih lokasi (mis. singapore)
      -> Start in **test mode** -> Enable
   3. Project Overview (ikon gerigi ⚙️ di samping Project Overview) ->
      Project settings -> bagian "Your apps" -> ikon </> (Web) -> daftarkan app
      (nama bebas, mis. arithmaschool) -> salin isi firebaseConfig di bawah ini
   4. Tempel nilainya ke object di bawah ini, lalu selesai!
   ========================================================================== */

const firebaseConfig = {
  apiKey: "AIzaSyADvAiGS4iKFztdleBXlzq1Ld90i-5o8WQ",
  authDomain: "arithmaschool.firebaseapp.com",
  databaseURL: "https://arithmaschool-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "arithmaschool",
  storageBucket: "arithmaschool.firebasestorage.app",
  messagingSenderId: "903765807012",
  appId: "1:903765807012:web:415fb65fe8e181e8ce3b31",
  measurementId: "G-ZNF5PWRWTX"
};

/* Jangan edit bagian di bawah ini */
const FIREBASE_DB_PATH = 'arithmaschool_data'; // lokasi data di Realtime Database
window.__firebaseReady = false;

/*
  CARA MEMASANG CONFIG YANG SUDAH DIDAPAT DARI FIREBASE:
  Ganti nilai "ISI_..." di object firebaseConfig di atas dengan nilai asli
  dari Firebase Console (Project settings -> Your apps -> Web app).
  Contoh setelah terisi:

  const firebaseConfig = {
    apiKey: "AIzaSyBxyz123...",
    authDomain: "arithmaschool-abc123.firebaseapp.com",
    databaseURL: "https://arithmaschool-abc123-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "arithmaschool-abc123",
    storageBucket: "arithmaschool-abc123.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abc123def456"
  };

  Lalu simpan file ini, jalankan website dengan Live Server,
  dan buka Console browser (F12). Jika muncul:
    "✅ Firebase terhubung! Data sinkron antar device."
  berarti pemasangan BERHASIL.
*/

