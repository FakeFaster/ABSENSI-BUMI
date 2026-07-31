const firebaseConfig = {
  apiKey: "AIzaSyB1QyN7vKKmXfqcYiDaZg09xBQilfEpbqA",
  authDomain: "web-absensi-bumi.firebaseapp.com",
  databaseURL: "https://web-absensi-bumi-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "web-absensi-bumi",
  storageBucket: "web-absensi-bumi.firebasestorage.app",
  messagingSenderId: "968709969409",
  appId: "1:968709969409:web:72e214505b0f4e806b5200"
};

const FIREBASE_CONFIGURED = firebaseConfig.apiKey !== "PASTE_API_KEY" && !!firebaseConfig.apiKey;

let fbApp = null, fbAuth = null, fbDb = null;

if (FIREBASE_CONFIGURED) {
  try {
    fbApp = firebase.initializeApp(firebaseConfig);
    fbAuth = firebase.auth();
    fbDb = firebase.firestore();
    console.log('[Firebase] Terhubung ke project:', firebaseConfig.projectId);
  } catch (err) {
    console.warn('[Firebase] Gagal inisialisasi:', err.message);
  }
} else {
  console.info('[Firebase] Belum dikonfigurasi (masih placeholder) — aplikasi jalan normal tanpa Firebase.');
}

window.fb = { app: fbApp, auth: fbAuth, db: fbDb, ready: FIREBASE_CONFIGURED };
