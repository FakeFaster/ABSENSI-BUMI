/* ---------------------------------------------------------------- */
/* Icons (minimal inline SVG helpers)                                */
/* ---------------------------------------------------------------- */
function icon(name, size, color){
  size = size || 16; color = color || 'currentColor';
  const s = `width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"`;
  const paths = {
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    login: '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/>',
    logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>',
    mappin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    check: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
    x: '<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',
    chart: '<line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    clipboard: '<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>',
    building: '<rect x="4" y="2" width="16" height="20" rx="1"/><line x1="9" y1="7" x2="9" y2="7.01"/><line x1="15" y1="7" x2="15" y2="7.01"/><line x1="9" y1="12" x2="9" y2="12.01"/><line x1="15" y1="12" x2="15" y2="12.01"/><line x1="9" y1="17" x2="9" y2="17.01"/><line x1="15" y1="17" x2="15" y2="17.01"/>',
    chevron: '<polyline points="9 18 15 12 9 6"/>',
    plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>',
    arrowleft: '<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>',
    alert: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>',
    wallet: '<path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/>',
    grid: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
    calclock: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M12 14v3l2 1"/>',
    user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    trash: '<path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/>',
    info: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="11"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
    swap: '<polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>',
    moonclock: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 1.5"/><path d="M9 2h6"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
    lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8Z"/>',
    key: '<circle cx="7.5" cy="15.5" r="4.5"/><path d="M10.6 12.4 19 4"/><path d="M15.5 8 19 11.5"/><path d="M18 5 21 8"/>',
    idcard: '<rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="8" cy="12" r="2"/><line x1="14" y1="10" x2="19" y2="10"/><line x1="14" y1="14" x2="19" y2="14"/>',
    menu: '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
  };
  return `<svg ${s}>${paths[name] || ''}</svg>`;
}

function googleIcon(size){
  size = size || 16;
  return `<svg width="${size}" height="${size}" viewBox="0 0 48 48" class="icon">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.9-2.26 5.36-4.78 7.02l7.73 6c4.51-4.18 7.09-10.36 7.09-17.49z"/>
    <path fill="#FBBC05" d="M10.53 28.59A14.5 14.5 0 0 1 9.5 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A24 24 0 0 0 0 24c0 3.87.92 7.53 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.97 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>`;
}
/* ---------------------------------------------------------------- */
/* Constants & helpers                                               */
/* ---------------------------------------------------------------- */
const STATUS_COLOR = { Hadir:'#2F9E6F', Terlambat:'#D98E2D', Izin:'#C98A2C', Sakit:'#3C6E96', Alpha:'#C0392B' };
const DAY_NAMES = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
const MONTH_NAMES = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
const LATE_AFTER_MIN = 8*60+15;

const pad = n => String(n).padStart(2,'0');
const timeStr = d => `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
const dateKey = d => `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const prettyDate = key => { const [y,m,d]=key.split('-').map(Number); const dt=new Date(y,m-1,d); return `${DAY_NAMES[dt.getDay()]}, ${d} ${MONTH_NAMES[m-1]} ${y}`; };
const rupiah = n => 'Rp' + Number(n||0).toLocaleString('id-ID');
const uid = (p='id') => `${p}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,7)}`;
const monthLabel = ym => { const [y,m]=ym.split('-').map(Number); return `${MONTH_NAMES[m-1]} ${y}`; };
function esc(s){ if(s===null||s===undefined) return ''; return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function isWeekday(date){ const d=date.getDay(); return d!==0 && d!==6; }
function monthWeekdaysUpTo(year, monthIdx, cap){
  const days=[]; const daysInMonth = new Date(year, monthIdx+1, 0).getDate();
  for(let d=1; d<=daysInMonth; d++){ const dt=new Date(year,monthIdx,d); if(dt>cap) break; if(isWeekday(dt)) days.push(dateKey(dt)); }
  return days;
}
function computeStats(employeeId, year, monthIdx, attendance){
  const cap = new Date(); let weekdays = monthWeekdaysUpTo(year, monthIdx, cap);
  const emp = state.employees.find(e=>e.id===employeeId);
  if(emp && emp.joinDate){ weekdays = weekdays.filter(key => key >= emp.joinDate); }
  const s = {Hadir:0,Terlambat:0,Izin:0,Sakit:0,Alpha:0};
  weekdays.forEach(key=>{
    const rec = attendance.find(a=>a.employeeId===employeeId && a.date===key);
    if(!rec){ s.Alpha++; return; }
    if(s[rec.status]!==undefined) s[rec.status]++; else s.Alpha++;
  });
  return {...s, total: weekdays.length};
}
function statusFromClockIn(hhmm){ const [h,m]=hhmm.split(':').map(Number); return (h*60+m) > LATE_AFTER_MIN ? 'Terlambat' : 'Hadir'; }
function getLocation(){
  return new Promise((resolve,reject)=>{
    if(!navigator.geolocation){ reject(new Error('Perangkat tidak mendukung deteksi lokasi.')); return; }
    navigator.geolocation.getCurrentPosition(
      pos => resolve({lat:pos.coords.latitude, lng:pos.coords.longitude, accuracy:pos.coords.accuracy}),
      err => reject(new Error(err.message || 'Gagal mengambil lokasi. Izinkan akses lokasi pada browser Anda.')),
      { enableHighAccuracy:true, timeout:15000, maximumAge:0 }
    );
  });
}
async function reverseGeocode(lat,lng){
  try{
    const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=16`);
    if(!res.ok) throw new Error('gagal');
    const data = await res.json();
    return data.display_name || null;
  }catch(e){ return null; }
}
function mapEmbedUrl(lat,lng,delta){
  delta = delta || 0.0055;
  const left=(lng-delta).toFixed(6), right=(lng+delta).toFixed(6), bottom=(lat-delta).toFixed(6), top=(lat+delta).toFixed(6);
  return `https://www.openstreetmap.org/export/embed.html?bbox=${left}%2C${bottom}%2C${right}%2C${top}&layer=mapnik&marker=${lat}%2C${lng}`;
}
function mapCard(loc, label){
  if(!loc){
    return `<div style="margin-top:8px;height:120px;border-radius:10px;background:#fff;border:1px dashed var(--border);
         display:flex;align-items:center;justify-content:center;gap:6px;color:var(--ink-faint);font-size:11.5px;">
      ${icon('mappin',14,'#8B93A7')} Peta belum tersedia</div>`;
  }
  const mapsUrl = `https://www.google.com/maps?q=${loc.lat},${loc.lng}`;
  return `
  <div class="map-embed" style="margin-top:8px;border-radius:10px;overflow:hidden;border:1px solid var(--border);position:relative;">
    <iframe src="${mapEmbedUrl(loc.lat,loc.lng)}" style="width:100%;height:120px;border:0;display:block;" loading="lazy" title="Peta lokasi ${esc(label||'')}"></iframe>
  </div>
  <div style="margin-top:6px;font-size:11.5px;color:var(--ink-soft);display:flex;gap:4px;align-items:flex-start;">
    <span style="margin-top:1px;">${icon('mappin',13,'#5B6478')}</span>
    <span>${esc(loc.address ? loc.address : loc.lat.toFixed(5)+', '+loc.lng.toFixed(5))} · akurasi ±${Math.round(loc.accuracy)}m ·
    <a href="${mapsUrl}" target="_blank" rel="noreferrer" style="color:var(--primary);font-weight:600;">buka di Google Maps</a></span>
  </div>`;
}

const SEED_EMPLOYEES = [];
const HRD_USERNAME = "hrd";
// Jadwal shift sekarang SAMA setiap hari (Senin–Minggu): Pagi/Middle/Siang, atau Libur.
const SHIFT_TIMES = { Pagi:'07:00', Middle:'08:00', Siang:'14:00', Minggu:'13:00' }; // 'Minggu' disisakan hanya utk kompatibilitas data lama
const WEEKDAY_SHIFT_NAMES = ["Pagi","Middle","Siang"]; // dipakai setiap hari, termasuk Minggu
const ALL_SHIFT_NAMES = ["Pagi","Middle","Siang"];
const SHIFT_OPTIONS = ALL_SHIFT_NAMES; // dipakai di form "Ganti/Tukar Shift"
const SCHEDULE_SHIFT_OPTIONS = [...ALL_SHIFT_NAMES, "Libur"]; // dipakai di legend kalender
const SHIFT_COLOR = { Pagi:'#3C6E96', Middle:'#2F9E6F', Siang:'#C98A2C', Minggu:'#8E44AD', Libur:'#8B93A7' };
function shiftLabel(name){ return SHIFT_TIMES[name] ? `${name} (${SHIFT_TIMES[name]})` : name; }
// Dulu Minggu punya shift khusus sendiri; sekarang semua hari (termasuk Minggu) pakai
// pilihan shift yang sama: Pagi/Middle/Siang/Libur.
function shiftNamesForDate(dateStr){
  return WEEKDAY_SHIFT_NAMES;
}

const K = { employees:'app-employees', attendance:'app-attendance', leaveRequests:'app-leave-requests', payslips:'app-payslips', shiftRequests:'app-shift-requests', announcements:'app-announcements',
  overtimeRequests:'app-overtime-requests', attendanceRequests:'app-attendance-requests', files:'app-files', shiftSchedule:'app-shift-schedule', hrdAuth:'app-hrd-auth' };
const ATT_REQUEST_TYPES = ["Lupa Absen Masuk","Lupa Absen Keluar","Lupa Absen Masuk & Keluar","Kendala Teknis / Error Sistem"];
const MAX_FILE_BYTES = 1.5 * 1024 * 1024;

/* ---------------------------------------------------------------- */
/* Global state                                                      */
/* ---------------------------------------------------------------- */
let state = {
  loading:true, role:null, currentEmpId:null,
  employees:[], attendance:[], leaveRequests:[], payslips:[], shiftRequests:[], announcements:[],
  overtimeRequests:[], attendanceRequests:[], files:[], shiftSchedule:[], hrdAuth:null,
  loginError:'', loginBusy:false, loginMode:'login', registerSuccessMsg:'',
  empTab:'absensi', hrdTab:'dashboard', empProfileTab:'personal',
  clockBusy:false, clockError:'',
  statsMonth:new Date().getMonth(), statsYear:new Date().getFullYear(),
  hrdStatsMonth:new Date().getMonth(), hrdStatsYear:new Date().getFullYear(),
  shiftCalMonth:new Date().getMonth(), shiftCalYear:new Date().getFullYear(),
  hrdShiftMonth:new Date().getMonth(), hrdShiftYear:new Date().getFullYear(), hrdShiftEmpId:null,
  hrdEmployeeDetailId:null, hrdMoreMenuOpen:false,
  selectedPayslipId:null, expandedAttId:null,
  fileUploadBusy:false, fileUploadError:'',
  profileSavedMsg:'', profileError:'',
  modal:null,
};
let chartInstances = {};

/* ---------------------------------------------------------------- */
/* Hashing password (Web Crypto API) — dipakai untuk login lokal     */
/* (mode tanpa Firebase) supaya password TIDAK pernah disimpan       */
/* dalam bentuk plaintext di storage/Firestore.                      */
/* ---------------------------------------------------------------- */
function randomHex(byteLen){
  const arr = new Uint8Array(byteLen);
  crypto.getRandomValues(arr);
  return Array.from(arr).map(b=>b.toString(16).padStart(2,'0')).join('');
}
async function sha256Hex(text){
  const enc = new TextEncoder().encode(text);
  const buf = await crypto.subtle.digest('SHA-256', enc);
  return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');
}
async function hashPassword(password, salt){
  return sha256Hex(`${salt}:${password}`);
}

async function loadKey(key, fallback){
  if(fbReady()){
    try{
      const doc = await window.fb.db.collection('app-data').doc(key).get();
      if(doc.exists) return doc.data().value;
    }catch(e){ console.warn(`Gagal ambil "${key}" dari Firestore, pakai data lokal:`, e.message); }
  }
  if(window.storage){
    try{ const res = await window.storage.get(key, true); return res ? JSON.parse(res.value) : fallback; }
    catch(e){ return fallback; }
  }
  return fallback;
}
async function persist(key, arrName, data){
  state[arrName] = data;
  if(window.storage){
    try{ await window.storage.set(key, JSON.stringify(data), true); }catch(e){ console.warn('window.storage tidak tersedia di lingkungan ini (normal untuk situs yang di-hosting sendiri).'); }
  }
  if(fbReady()){
    try{ await window.fb.db.collection('app-data').doc(key).set({ value:data, updatedAt:new Date().toISOString() }); }
    catch(e){ console.warn(`Gagal sinkron "${key}" ke Firestore:`, e.message); }
  }
}

/* ---------------------------------------------------------------- */
/* Firebase — Auth & Firestore (opsional, aman kalau belum di-setup) */
/* Semua fungsi ini mengecek window.fb.ready lebih dulu. Kalau       */
/* firebase-config.js masih pakai placeholder, fungsi ini langsung   */
/* return tanpa melempar error, jadi aplikasi tidak pernah crash.    */
/* ---------------------------------------------------------------- */
function fbReady(){ return !!(window.fb && window.fb.ready && window.fb.auth && window.fb.db); }
function fbErrorMsg(code){
  const map = {
    'auth/email-already-in-use':'Username sudah terdaftar sebelumnya.',
    'auth/weak-password':'Password minimal 6 karakter.',
    'auth/invalid-email':'Username mengandung karakter yang tidak valid.',
    'auth/wrong-password':'Password salah.',
    'auth/user-not-found':'Akun tidak ditemukan.',
    'auth/too-many-requests':'Terlalu banyak percobaan, coba lagi beberapa saat lagi.',
    'auth/network-request-failed':'Gagal terhubung ke server, cek koneksi internet kamu.',
  };
  return map[code] || 'Terjadi kesalahan, silakan coba lagi.';
}
function fbEmailFor(username){ return `${username}@absensi-bumi.local`; }

async function fbSignUp(email, password){
  if(!fbReady()) return { ok:false, reason:'not-configured' };
  try{
    const cred = await window.fb.auth.createUserWithEmailAndPassword(email, password);
    return { ok:true, user: cred.user };
  }catch(e){ return { ok:false, reason: e.code || e.message }; }
}
// Membuat akun Firebase Auth untuk KARYAWAN LAIN (dipanggil HRD dari panel HRD).
// createUserWithEmailAndPassword pada instance auth utama otomatis SIGN-IN sebagai
// akun baru itu — kalau dipakai langsung, HRD yang sedang login akan ke-gantikan
// sesinya oleh karyawan baru itu. Makanya di sini dipakai instance Firebase App
// KEDUA yang terpisah, khusus untuk membuat akun, supaya sesi HRD tidak terganggu.
let fbSecondaryAuth = null;
function getFbSecondaryAuth(){
  if(!fbReady()) return null;
  if(!fbSecondaryAuth){
    let secApp;
    try{ secApp = firebase.app('Secondary'); }
    catch(e){ secApp = firebase.initializeApp(window.fb.app.options, 'Secondary'); }
    fbSecondaryAuth = secApp.auth();
  }
  return fbSecondaryAuth;
}
async function fbSignUpAsAdmin(email, password){
  const auth2 = getFbSecondaryAuth();
  if(!auth2) return { ok:false, reason:'not-configured' };
  try{
    const cred = await auth2.createUserWithEmailAndPassword(email, password);
    const uid = cred.user.uid;
    await auth2.signOut(); // sesi kedua ini cuma dipakai sesaat, tidak memengaruhi sesi HRD di auth utama
    return { ok:true, uid };
  }catch(e){ return { ok:false, reason: e.code || e.message }; }
}
async function fbSignIn(email, password){
  if(!fbReady()) return { ok:false, reason:'not-configured' };
  try{
    const cred = await window.fb.auth.signInWithEmailAndPassword(email, password);
    return { ok:true, user: cred.user };
  }catch(e){ return { ok:false, reason: e.code || e.message }; }
}
async function fbSignInWithGoogle(){
  if(!fbReady()) return { ok:false, reason:'not-configured' };
  try{
    const provider = new firebase.auth.GoogleAuthProvider();
    const cred = await window.fb.auth.signInWithPopup(provider);
    return { ok:true, user: cred.user };
  }catch(e){ return { ok:false, reason: e.code || e.message }; }
}
async function fbSignOut(){
  if(!fbReady()) return;
  try{ await window.fb.auth.signOut(); }catch(e){ console.warn('fbSignOut gagal:', e.message); }
}
async function fbSaveDoc(collection, docId, data){
  if(!fbReady()) return { ok:false, reason:'not-configured' };
  try{ await window.fb.db.collection(collection).doc(docId).set(data, { merge:true }); return { ok:true }; }
  catch(e){ console.warn(`fbSaveDoc(${collection}) gagal:`, e.message); return { ok:false, reason: e.message }; }
}
async function fbLoadCollection(collection){
  if(!fbReady()) return [];
  try{
    const snap = await window.fb.db.collection(collection).get();
    return snap.docs.map(d => d.data());
  }catch(e){ console.warn(`fbLoadCollection(${collection}) gagal:`, e.message); return []; }
}

async function loadAllData(){
  let emp = await loadKey(K.employees, null);
  if(!emp){
    emp = SEED_EMPLOYEES;
    try{ await window.storage.set(K.employees, JSON.stringify(emp), true); }catch(e){}
    if(fbReady()){
      try{ await window.fb.db.collection('app-data').doc(K.employees).set({ value:emp, updatedAt:new Date().toISOString() }); }
      catch(e){ console.warn('Gagal sinkron seed employees ke Firestore:', e.message); }
    }
  }
  const att = await loadKey(K.attendance, []);
  const lr = await loadKey(K.leaveRequests, []);
  const ps = await loadKey(K.payslips, []);
  const sr = await loadKey(K.shiftRequests, []);
  const an = await loadKey(K.announcements, []);
  const ot = await loadKey(K.overtimeRequests, []);
  const ar = await loadKey(K.attendanceRequests, []);
  const fl = await loadKey(K.files, []);
  const sc = await loadKey(K.shiftSchedule, []);
  state.employees = emp; state.attendance = att; state.leaveRequests = lr; state.payslips = ps;
  state.shiftRequests = sr; state.announcements = an;
  state.overtimeRequests = ot; state.attendanceRequests = ar; state.files = fl; state.shiftSchedule = sc;
}

/* ---------------------------------------------------------------- */
/* Realtime sync — dokumen yang sering berubah mendadak (absensi &   */
/* semua jenis pengajuan) dipantau langsung lewat Firestore listener */
/* (onSnapshot), jadi perubahan dari user lain langsung muncul tanpa */
/* perlu refresh halaman.                                            */
/* ---------------------------------------------------------------- */
let rtUnsubscribers = [];
function stopRealtimeSync(){
  rtUnsubscribers.forEach(unsub => { try{ unsub(); }catch(e){} });
  rtUnsubscribers = [];
}
function startRealtimeSync(){
  if(!fbReady()) return;
  stopRealtimeSync();
  const REALTIME_MAP = {
    [K.attendance]: 'attendance',
    [K.leaveRequests]: 'leaveRequests',
    [K.shiftRequests]: 'shiftRequests',
    [K.overtimeRequests]: 'overtimeRequests',
    [K.attendanceRequests]: 'attendanceRequests',
  };
  Object.keys(REALTIME_MAP).forEach(docId => {
    const field = REALTIME_MAP[docId];
    const unsub = window.fb.db.collection('app-data').doc(docId).onSnapshot(
      snap => { state[field] = (snap.exists && snap.data().value) || []; render(); },
      err => console.warn(`Realtime "${docId}" terputus:`, err.message)
    );
    rtUnsubscribers.push(unsub);
  });
}

async function init(){
  await loadAllData();

  // hrdAuth hanya relevan untuk mode tanpa Firebase (fallback lokal).
  // Kalau Firebase sudah aktif, login HRD sepenuhnya lewat Firebase Auth + custom claim,
  // jadi kita tidak perlu (dan tidak boleh) menyimpan hash password HRD di sini.
  if(!fbReady()){
    let hrdAuth = await loadKey(K.hrdAuth, null);
    if(!hrdAuth){
      // Seed sekali di percobaan pertama dengan password default "hrd123" (SUDAH DI-HASH,
      // tidak pernah ada di source code). SEGERA ganti lewat menu "Ubah Password HRD".
      const salt = randomHex(16);
      const hash = await hashPassword('hrd123', salt);
      hrdAuth = { salt, hash };
      try{ await window.storage.set(K.hrdAuth, JSON.stringify(hrdAuth), true); }catch(e){}
    }
    state.hrdAuth = hrdAuth;
  }

  state.loading = false;
  render();

  // Firestore Rules mengharuskan login dulu sebelum bisa membaca data — jadi begitu
  // status login Firebase berubah (baik sesi lama otomatis pulih saat refresh, maupun
  // login/registrasi baru selama sesi ini berjalan), muat ulang datanya supaya tidak
  // nyangkut kosong gara-gara sempat gagal baca saat belum login.
  if(fbReady()){
    window.fb.auth.onAuthStateChanged(async (user) => {
      if(user){ await loadAllData(); startRealtimeSync(); render(); }
      else{ stopRealtimeSync(); }
    });
  }
}

/* ---------------------------------------------------------------- */
/* Actions                                                           */
/* ---------------------------------------------------------------- */
let loginAttempts = {}; // { username: { count, lockUntil } } — throttling ringan di sisi client.
                         // Proteksi sungguhan tetap dari Firebase Auth (kalau aktif) dan Firestore Rules.
function isLockedOut(username){
  const a = loginAttempts[username];
  if(!a || !a.lockUntil) return 0;
  const remain = a.lockUntil - Date.now();
  return remain > 0 ? Math.ceil(remain/1000) : 0;
}
function registerFailedAttempt(username){
  const a = loginAttempts[username] || { count:0, lockUntil:0 };
  a.count += 1;
  if(a.count >= 5){ a.lockUntil = Date.now() + 30000; a.count = 0; }
  loginAttempts[username] = a;
}
function clearAttempts(username){ delete loginAttempts[username]; }

async function actionLogin(){
  const userEl = document.getElementById('login-username');
  const passEl = document.getElementById('login-password');
  const username = (userEl?.value || '').trim().toLowerCase();
  const password = passEl?.value || '';
  if(!username || !password){ state.loginError = 'Username dan password wajib diisi.'; render(); return; }
  const lockedFor = isLockedOut(username);
  if(lockedFor > 0){ state.loginError = `Terlalu banyak percobaan gagal. Coba lagi dalam ${lockedFor} detik.`; render(); return; }
  state.loginBusy = true; state.loginError=''; render();
  await new Promise(r=>setTimeout(r, 250));

  if(fbReady()){
    const fbRes = await fbSignIn(fbEmailFor(username), password);
    if(fbRes.ok){
      // Cek custom claim role:'hrd' — TIDAK dibatasi hanya untuk username "hrd" lagi.
      // Akun SIAPAPUN yang sudah diberi claim ini secara manual (lewat skrip
      // administrator/Firebase Admin SDK) otomatis masuk sebagai HRD/Admin, apapun
      // username-nya. Inilah cara HRD memberi akses admin ke supervisor atau staf
      // HR lain: jalankan skrip pemberi-claim itu terhadap UID akun mereka (lihat
      // UID di halaman detail karyawan pada panel HRD).
      const tokenResult = await fbRes.user.getIdTokenResult(true).catch(()=>null);
      if(tokenResult && tokenResult.claims && tokenResult.claims.role === 'hrd'){
        clearAttempts(username);
        state.role='hrd'; state.loginBusy=false; state.registerSuccessMsg=''; render(); return;
      }
      // Bukan admin — coba cocokkan sebagai karyawan biasa. Firestore baru boleh
      // dibaca SETELAH login berhasil — pastikan data karyawan benar-benar sudah
      // termuat dulu sebelum dicari, jangan andalkan reload di latar belakang
      // (bisa saja belum selesai persis di titik ini).
      await loadAllData();
      const emp = state.employees.find(e => (e.username||'').toLowerCase()===username);
      if(emp){ clearAttempts(username); state.role='employee'; state.currentEmpId=emp.id; state.loginBusy=false; state.registerSuccessMsg=''; render(); return; }
      await fbSignOut();
      state.loginBusy=false;
      state.loginError = username===HRD_USERNAME
        ? 'Akun ini belum diberi akses HRD. Hubungi administrator sistem.'
        : 'Username atau password salah.';
      render(); return;
    }
  } else if(username === HRD_USERNAME && state.hrdAuth){
    const inputHash = await hashPassword(password, state.hrdAuth.salt);
    if(inputHash === state.hrdAuth.hash){
      clearAttempts(username);
      state.role='hrd'; state.loginBusy=false; state.registerSuccessMsg=''; render(); return;
    }
    registerFailedAttempt(username);
    state.loginBusy = false;
    state.loginError = 'Username atau password salah.';
    render(); return;
  }

  const emp = state.employees.find(e => (e.username||'').toLowerCase()===username);
  if(emp){
    let matched = false;
    if(emp.passwordHash && emp.passwordSalt){
      matched = (await hashPassword(password, emp.passwordSalt)) === emp.passwordHash;
    } else if(emp.password){
      // Kompatibilitas data lama (plaintext) — kalau cocok, langsung migrasi ke hash dan buang plaintext-nya.
      matched = emp.password === password;
      if(matched){
        if(fbReady()){ await fbSignUp(fbEmailFor(username), password).catch(()=>({ok:false})); }
        const salt = randomHex(16);
        const hash = await hashPassword(password, salt);
        const next = state.employees.map(e => {
          if(e.id!==emp.id) return e;
          const { password: _drop, ...rest } = e;
          return { ...rest, passwordHash:hash, passwordSalt:salt };
        });
        await persist(K.employees, 'employees', next);
      }
    }
    if(matched){ clearAttempts(username); state.role='employee'; state.currentEmpId=emp.id; state.loginBusy=false; state.registerSuccessMsg=''; render(); return; }
  }
  registerFailedAttempt(username);
  state.loginBusy = false;
  state.loginError = 'Username atau password salah.';
  render();
}
async function actionGoogleLogin(){
  if(!fbReady()){
    state.loginError = 'Login Google belum aktif — Firebase belum terhubung.';
    render(); return;
  }
  state.loginBusy = true; state.loginError=''; render();
  const res = await fbSignInWithGoogle();
  if(!res.ok){
    state.loginBusy = false;
    state.loginError = (res.reason==='auth/popup-closed-by-user' || res.reason==='auth/cancelled-popup-request')
      ? '' : fbErrorMsg(res.reason);
    render(); return;
  }
  const email = (res.user.email || '').toLowerCase();
  // Sama seperti login biasa: pastikan data karyawan sudah termuat dulu (baru bisa
  // dibaca setelah login) sebelum dicek — supaya tidak salah bikin akun baru padahal
  // akun Google ini sudah pernah daftar sebelumnya.
  await loadAllData();
  let emp = state.employees.find(e => (e.googleEmail||'').toLowerCase()===email);
  if(!emp){
    emp = { id:uid('E'), name: res.user.displayName || 'Karyawan Baru', position:'', dept:'',
      joinDate:dateKey(new Date()), username:'', googleEmail: email, googleUid: res.user.uid };
    await persist(K.employees, 'employees', [...state.employees, emp]);
  }
  state.role='employee'; state.currentEmpId=emp.id; state.loginBusy=false; state.registerSuccessMsg='';
  render();
}
async function actionRegister(){
  const name = (document.getElementById('reg-name')?.value || '').trim();
  const position = (document.getElementById('reg-position')?.value || '').trim();
  const dept = (document.getElementById('reg-dept')?.value || '').trim();
  const username = (document.getElementById('reg-username')?.value || '').trim().toLowerCase();
  const password = document.getElementById('reg-password')?.value || '';
  const confirm = document.getElementById('reg-confirm')?.value || '';

  if(!name || !position || !username || !password || !confirm){
    state.loginError = 'Semua field wajib diisi.'; render(); return;
  }
  if(password.length < 6){ state.loginError = 'Password minimal 6 karakter.'; render(); return; }
  if(password !== confirm){ state.loginError = 'Konfirmasi password tidak cocok.'; render(); return; }
  const taken = state.employees.some(e => (e.username||'').toLowerCase()===username) || username===HRD_USERNAME;
  if(taken){ state.loginError = 'Username sudah digunakan, pilih username lain.'; render(); return; }

  state.loginBusy = true; state.loginError=''; render();

  if(fbReady()){
    const fbRes = await fbSignUp(fbEmailFor(username), password);
    if(!fbRes.ok){
      state.loginBusy = false;
      state.loginError = fbErrorMsg(fbRes.reason);
      render(); return;
    }
    // Firebase Auth sudah memegang credential secara aman di server — jangan duplikasi password di sini sama sekali.
    const newEmp = { id:uid('E'), name, position, dept, joinDate:dateKey(new Date()), username };
    await persist(K.employees, 'employees', [...state.employees, newEmp]);
  } else {
    // Mode tanpa Firebase: simpan password dalam bentuk hash + salt, tidak pernah plaintext.
    const salt = randomHex(16);
    const hash = await hashPassword(password, salt);
    const newEmp = { id:uid('E'), name, position, dept, joinDate:dateKey(new Date()), username, passwordHash:hash, passwordSalt:salt };
    await persist(K.employees, 'employees', [...state.employees, newEmp]);
  }
  state.loginBusy = false;
  state.loginMode = 'login';
  state.registerSuccessMsg = `Akun berhasil terdaftar! Silakan masuk menggunakan username "${username}".`;
  render();
}
async function actionClockIn(){
  state.clockError=''; state.clockBusy=true; render();
  try{
    const loc = await getLocation();
    loc.address = await reverseGeocode(loc.lat, loc.lng);
    const now = new Date(); const ci = timeStr(now);
    const rec = { id:uid('ATT'), employeeId:state.currentEmpId, date:dateKey(now),
      clockIn:ci, clockOut:null, clockInLoc:loc, clockOutLoc:null, status:statusFromClockIn(ci) };
    await persist(K.attendance, 'attendance', [...state.attendance, rec]);
  }catch(e){ state.clockError = e.message || 'Gagal absen masuk.'; }
  state.clockBusy=false; render();
}
async function actionClockOut(){
  state.clockError=''; state.clockBusy=true; render();
  try{
    const loc = await getLocation();
    loc.address = await reverseGeocode(loc.lat, loc.lng);
    const today = dateKey(new Date());
    const next = state.attendance.map(a => (a.employeeId===state.currentEmpId && a.date===today)
      ? {...a, clockOut:timeStr(new Date()), clockOutLoc:loc} : a);
    await persist(K.attendance, 'attendance', next);
  }catch(e){ state.clockError = e.message || 'Gagal absen keluar.'; }
  state.clockBusy=false; render();
}
async function actionSubmitLeave(){
  const type = document.getElementById('lv-type').value;
  const start = document.getElementById('lv-start').value;
  const end = document.getElementById('lv-end').value;
  const reason = document.getElementById('lv-reason').value.trim();
  if(!reason) return;
  const data = { id:uid('LV'), employeeId:state.currentEmpId, type, startDate:start, endDate:end, reason, status:'pending', submittedAt:Date.now() };
  await persist(K.leaveRequests, 'leaveRequests', [...state.leaveRequests, data]);
  state.modal=null; render();
}
async function actionDecideLeave(leaveId, decision){
  const leave = state.leaveRequests.find(l=>l.id===leaveId);
  const nextLeaves = state.leaveRequests.map(l => l.id===leaveId ? {...l, status:decision} : l);
  await persist(K.leaveRequests, 'leaveRequests', nextLeaves);
  if(decision==='approved' && leave){
    const start=new Date(leave.startDate), end=new Date(leave.endDate);
    const newRecords=[];
    for(let d=new Date(start); d<=end; d.setDate(d.getDate()+1)){
      if(!isWeekday(d)) continue;
      const key = dateKey(d);
      const exists = state.attendance.find(a=>a.employeeId===leave.employeeId && a.date===key);
      if(!exists) newRecords.push({ id:uid('ATT'), employeeId:leave.employeeId, date:key, clockIn:null, clockOut:null, clockInLoc:null, clockOutLoc:null, status:leave.type });
    }
    if(newRecords.length) await persist(K.attendance, 'attendance', [...state.attendance, ...newRecords]);
  }
  render();
}
async function actionAddEmployee(){
  const name = document.getElementById('ae-name').value.trim();
  const position = document.getElementById('ae-position').value.trim();
  const dept = document.getElementById('ae-dept').value.trim();
  const joinDate = document.getElementById('ae-join').value;
  const username = document.getElementById('ae-username').value.trim().toLowerCase();
  const password = document.getElementById('ae-password').value;
  const errEl = document.getElementById('ae-error');
  if(!name || !position || !username || !password){
    if(errEl) errEl.textContent = 'Nama, jabatan, username, dan password wajib diisi.';
    return;
  }
  if(password.length < 6){ if(errEl) errEl.textContent = 'Password minimal 6 karakter.'; return; }
  const taken = state.employees.some(e => (e.username||'').toLowerCase()===username) || username===HRD_USERNAME;
  if(taken){ if(errEl) errEl.textContent = 'Username sudah digunakan, pilih username lain.'; return; }
  const base = {id:uid('E'), name, position, dept, joinDate, username};
  if(fbReady()){
    const fbRes = await fbSignUpAsAdmin(fbEmailFor(username), password);
    if(!fbRes.ok){ if(errEl) errEl.textContent = fbErrorMsg(fbRes.reason); return; }
    // Simpan UID Firebase karyawan ini — dipakai HRD kalau nanti mau memberi akses
    // admin (custom claim role:'hrd') ke akun ini lewat skrip administrator.
    base.uid = fbRes.uid;
    await persist(K.employees, 'employees', [...state.employees, base]);
  } else {
    const salt = randomHex(16);
    const hash = await hashPassword(password, salt);
    await persist(K.employees, 'employees', [...state.employees, {...base, passwordHash:hash, passwordSalt:salt}]);
  }
  state.modal=null; render();
}
async function actionDeleteEmployee(empId){
  await persist(K.employees, 'employees', state.employees.filter(e=>e.id!==empId));
  await persist(K.attendance, 'attendance', state.attendance.filter(a=>a.employeeId!==empId));
  await persist(K.leaveRequests, 'leaveRequests', state.leaveRequests.filter(l=>l.employeeId!==empId));
  await persist(K.shiftRequests, 'shiftRequests', state.shiftRequests.filter(s=>s.employeeId!==empId && s.partnerId!==empId));
  await persist(K.shiftSchedule, 'shiftSchedule', state.shiftSchedule.filter(s=>s.employeeId!==empId));
  await persist(K.payslips, 'payslips', state.payslips.filter(p=>p.employeeId!==empId));
  if(state.hrdEmployeeDetailId===empId) state.hrdEmployeeDetailId=null;
  state.modal=null; render();
}
async function actionResetStats(){
  await persist(K.attendance, 'attendance', []);
  state.modal=null; render();
}
async function actionSubmitShift(){
  const type = document.getElementById('sh-type').value;
  const date = document.getElementById('sh-date').value;
  const currentShift = document.getElementById('sh-current').value;
  const reason = document.getElementById('sh-reason').value.trim();
  if(!date || !reason) return;
  const data = { id:uid('SH'), employeeId:state.currentEmpId, type, date, currentShift, reason, status:'pending', submittedAt:Date.now() };
  if(type==='Ganti Shift'){
    data.requestedShift = document.getElementById('sh-target')?.value || '';
  } else {
    const partnerId = document.getElementById('sh-partner')?.value || '';
    if(!partnerId) return;
    data.partnerId = partnerId;
  }
  await persist(K.shiftRequests, 'shiftRequests', [...state.shiftRequests, data]);
  state.modal=null; render();
}
async function actionDecideShift(shiftId, decision){
  const next = state.shiftRequests.map(s => s.id===shiftId ? {...s, status:decision} : s);
  await persist(K.shiftRequests, 'shiftRequests', next);
  render();
}
async function actionSetShift(){
  if(!state.modal || state.modal.type!=='setShift') return;
  const { employeeId, date } = state.modal;
  const val = document.getElementById('ss-shift').value;
  let next = state.shiftSchedule.filter(s=>!(s.employeeId===employeeId && s.date===date));
  if(val) next = [...next, { id:uid('SC'), employeeId, date, shift:val }];
  await persist(K.shiftSchedule, 'shiftSchedule', next);
  state.modal=null; render();
}
async function actionAddAnnouncement(){
  const title = document.getElementById('an-title').value.trim();
  const message = document.getElementById('an-message').value.trim();
  const important = document.getElementById('an-important').checked;
  if(!title || !message) return;
  const data = { id:uid('AN'), title, message, important, createdAt:Date.now() };
  await persist(K.announcements, 'announcements', [data, ...state.announcements]);
  state.modal=null; render();
}
async function actionDeleteAnnouncement(id){
  if(!confirm('Hapus informasi ini?')) return;
  await persist(K.announcements, 'announcements', state.announcements.filter(a=>a.id!==id));
  render();
}
async function actionSavePayslip(existingId){
  const employeeId = document.getElementById('ps-employee').value;
  const month = document.getElementById('ps-month').value;
  const basicSalary = Number(document.getElementById('ps-basic').value)||0;
  const allowanceAttendance = Number(document.getElementById('ps-allowance-kehadiran').value)||0;
  const allowancePerformance = Number(document.getElementById('ps-allowance-kinerja').value)||0;
  const overtime = Number(document.getElementById('ps-overtime').value)||0;
  const deductionKopKomi = Number(document.getElementById('ps-deduction-komi').value)||0;
  const deductionIhbs = Number(document.getElementById('ps-deduction-ihbs').value)||0;
  const notes = document.getElementById('ps-notes').value;
  if(!employeeId || !month) return;
  const totalEarnings = basicSalary + allowanceAttendance + allowancePerformance + overtime;
  const totalDeductions = deductionKopKomi + deductionIhbs;
  const netSalary = totalEarnings - totalDeductions;
  const data = { id: existingId || uid('PS'), employeeId, month, basicSalary, allowanceAttendance, allowancePerformance, overtime, totalEarnings, deductionKopKomi, deductionIhbs, totalDeductions, netSalary, notes };
  const idx = state.payslips.findIndex(p=>p.id===data.id);
  const next = idx>=0 ? state.payslips.map(p=>p.id===data.id?data:p) : [...state.payslips, data];
  await persist(K.payslips, 'payslips', next);
  state.modal=null; render();
}

/* ---------------------------------------------------------------- */
/* Actions: Lembur (Overtime)                                        */
/* ---------------------------------------------------------------- */
async function actionSubmitOvertime(){
  const date = document.getElementById('ot-date').value;
  const start = document.getElementById('ot-start').value;
  const end = document.getElementById('ot-end').value;
  const reason = document.getElementById('ot-reason').value.trim();
  if(!date || !start || !end || !reason) return;
  const data = { id:uid('OT'), employeeId:state.currentEmpId, date, start, end, reason, status:'pending', submittedAt:Date.now() };
  await persist(K.overtimeRequests, 'overtimeRequests', [...state.overtimeRequests, data]);
  state.modal=null; render();
}
async function actionDecideOvertime(id, decision){
  const next = state.overtimeRequests.map(o => o.id===id ? {...o, status:decision} : o);
  await persist(K.overtimeRequests, 'overtimeRequests', next);
  render();
}

/* ---------------------------------------------------------------- */
/* Actions: Pengajuan Absensi (Attendance correction requests)       */
/* ---------------------------------------------------------------- */
async function actionSubmitAttendanceRequest(){
  const date = document.getElementById('ar-date').value;
  const type = document.getElementById('ar-type').value;
  const clockIn = document.getElementById('ar-clockin')?.value || '';
  const clockOut = document.getElementById('ar-clockout')?.value || '';
  const reason = document.getElementById('ar-reason').value.trim();
  if(!date || !reason) return;
  const data = { id:uid('AR'), employeeId:state.currentEmpId, date, type, requestedClockIn:clockIn||null, requestedClockOut:clockOut||null, reason, status:'pending', submittedAt:Date.now() };
  await persist(K.attendanceRequests, 'attendanceRequests', [...state.attendanceRequests, data]);
  state.modal=null; render();
}
async function actionDecideAttendanceRequest(id, decision){
  const req = state.attendanceRequests.find(a=>a.id===id);
  const next = state.attendanceRequests.map(a => a.id===id ? {...a, status:decision} : a);
  await persist(K.attendanceRequests, 'attendanceRequests', next);
  if(decision==='approved' && req){
    const existing = state.attendance.find(a=>a.employeeId===req.employeeId && a.date===req.date);
    const clockIn = req.requestedClockIn || existing?.clockIn || null;
    const clockOut = req.requestedClockOut || existing?.clockOut || null;
    const status = clockIn ? statusFromClockIn(clockIn) : (existing?.status || 'Hadir');
    if(existing){
      const nextAtt = state.attendance.map(a => (a.employeeId===req.employeeId && a.date===req.date)
        ? {...a, clockIn: clockIn, clockOut: clockOut, status} : a);
      await persist(K.attendance, 'attendance', nextAtt);
    } else {
      const rec = { id:uid('ATT'), employeeId:req.employeeId, date:req.date, clockIn, clockOut, clockInLoc:null, clockOutLoc:null, status };
      await persist(K.attendance, 'attendance', [...state.attendance, rec]);
    }
  }
  render();
}

/* ---------------------------------------------------------------- */
/* Actions: Profile — info pribadi, kepegawaian, kontak darurat      */
/* ---------------------------------------------------------------- */
async function actionSavePersonalInfo(){
  const nik = document.getElementById('pi-nik').value.trim();
  const phone = document.getElementById('pi-phone').value.trim();
  const address = document.getElementById('pi-address').value.trim();
  const dob = document.getElementById('pi-dob').value;
  const gender = document.getElementById('pi-gender').value;
  const next = state.employees.map(e => e.id===state.currentEmpId ? {...e, personal:{nik, phone, address, dob, gender}} : e);
  await persist(K.employees, 'employees', next);
  state.profileSavedMsg = 'Info pribadi berhasil disimpan.'; render();
}
async function actionSaveEmergencyContact(){
  const name = document.getElementById('ec-name').value.trim();
  const relation = document.getElementById('ec-relation').value.trim();
  const phone = document.getElementById('ec-phone').value.trim();
  const address = document.getElementById('ec-address').value.trim();
  const next = state.employees.map(e => e.id===state.currentEmpId ? {...e, emergencyContact:{name, relation, phone, address}} : e);
  await persist(K.employees, 'employees', next);
  state.profileSavedMsg = 'Kontak darurat berhasil disimpan.'; render();
}
async function actionChangePassword(){
  state.profileError=''; state.profileSavedMsg='';
  const employee = state.employees.find(e=>e.id===state.currentEmpId);
  const oldPass = document.getElementById('pw-old').value;
  const newPass = document.getElementById('pw-new').value;
  const confirm = document.getElementById('pw-confirm').value;
  if(newPass.length < 6){ state.profileError='Password baru minimal 6 karakter.'; render(); return; }
  if(newPass !== confirm){ state.profileError='Konfirmasi password baru tidak cocok.'; render(); return; }

  if(fbReady() && window.fb.auth.currentUser){
    // Firebase mewajibkan re-autentikasi sebelum ganti password — ini sekaligus jadi
    // pengecekan resmi bahwa "password lama" yang diinput benar-benar valid.
    try{
      const cred = firebase.auth.EmailAuthProvider.credential(window.fb.auth.currentUser.email, oldPass);
      await window.fb.auth.currentUser.reauthenticateWithCredential(cred);
      await window.fb.auth.currentUser.updatePassword(newPass);
    }catch(e){
      state.profileError = e.code==='auth/wrong-password' ? 'Password lama tidak sesuai.' : fbErrorMsg(e.code);
      render(); return;
    }
    state.profileSavedMsg = 'Password berhasil diubah.'; render(); return;
  }

  // Mode tanpa sesi Firebase aktif: verifikasi & simpan sebagai hash (tidak pernah plaintext).
  let oldOk = false;
  if(employee.passwordHash && employee.passwordSalt){
    oldOk = (await hashPassword(oldPass, employee.passwordSalt)) === employee.passwordHash;
  } else if(employee.password){
    oldOk = oldPass === employee.password;
  }
  if(!oldOk){ state.profileError='Password lama tidak sesuai.'; render(); return; }
  const salt = randomHex(16);
  const hash = await hashPassword(newPass, salt);
  const next = state.employees.map(e => {
    if(e.id!==state.currentEmpId) return e;
    const { password:_drop, ...rest } = e;
    return { ...rest, passwordHash:hash, passwordSalt:salt };
  });
  await persist(K.employees, 'employees', next);
  state.profileSavedMsg = 'Password berhasil diubah.'; render();
}
async function actionChangePin(){
  state.profileError='';
  const newPin = document.getElementById('pin-new').value.trim();
  const confirm = document.getElementById('pin-confirm').value.trim();
  if(!/^\d{4,6}$/.test(newPin)){ state.profileError='PIN harus berupa 4-6 digit angka.'; render(); return; }
  if(newPin !== confirm){ state.profileError='Konfirmasi PIN tidak cocok.'; render(); return; }
  const next = state.employees.map(e => e.id===state.currentEmpId ? {...e, pin:newPin} : e);
  await persist(K.employees, 'employees', next);
  state.profileSavedMsg = 'PIN berhasil disimpan.'; render();
}

/* ---------------------------------------------------------------- */
/* Actions: Foto Profil                                               */
/* ---------------------------------------------------------------- */
function actionUploadPhoto(inputEl){
  state.profileError=''; state.profileSavedMsg='';
  const file = inputEl.files && inputEl.files[0];
  if(!file) return;
  if(!file.type || !file.type.startsWith('image/')){ state.profileError='File harus berupa gambar (JPG/PNG).'; render(); return; }
  if(file.size > MAX_FILE_BYTES){ state.profileError='Ukuran foto maksimal 1.5MB.'; render(); return; }
  state.fileUploadBusy = true; render();
  const reader = new FileReader();
  reader.onload = async () => {
    const next = state.employees.map(e => e.id===state.currentEmpId ? {...e, photo:reader.result} : e);
    await persist(K.employees, 'employees', next);
    state.fileUploadBusy = false; state.profileSavedMsg = 'Foto profil berhasil diperbarui.'; render();
  };
  reader.onerror = () => { state.profileError='Gagal membaca file foto.'; state.fileUploadBusy=false; render(); };
  reader.readAsDataURL(file);
}
async function actionRemovePhoto(){
  state.profileError=''; state.profileSavedMsg='';
  const next = state.employees.map(e => e.id===state.currentEmpId ? {...e, photo:null} : e);
  await persist(K.employees, 'employees', next);
  state.profileSavedMsg = 'Foto profil dihapus.'; render();
}

/* ---------------------------------------------------------------- */
/* Actions: Files                                                     */
/* ---------------------------------------------------------------- */
function actionUploadFile(inputEl, ownerId){
  state.fileUploadError='';
  const file = inputEl.files && inputEl.files[0];
  if(!file) return;
  if(file.size > MAX_FILE_BYTES){
    state.fileUploadError = 'Ukuran file maksimal 1.5MB.'; render(); return;
  }
  state.fileUploadBusy = true; render();
  const reader = new FileReader();
  reader.onload = async () => {
    const data = { id:uid('FL'), employeeId: ownerId, name:file.name, size:file.size, mime:file.type||'application/octet-stream', dataUrl:reader.result, uploadedAt:Date.now() };
    await persist(K.files, 'files', [...state.files, data]);
    state.fileUploadBusy = false; render();
  };
  reader.onerror = () => { state.fileUploadError='Gagal membaca file.'; state.fileUploadBusy=false; render(); };
  reader.readAsDataURL(file);
}
async function actionDeleteFile(id){
  if(!confirm('Hapus file ini?')) return;
  await persist(K.files, 'files', state.files.filter(f=>f.id!==id));
  render();
}

/* ---------------------------------------------------------------- */
/* Shared UI fragments                                                */
/* ---------------------------------------------------------------- */
function badge(status){
  const color = STATUS_COLOR[status] || '#8B93A7';
  return `<span class="badge" style="background:${color}1a;color:${color}"><span class="dot" style="background:${color}"></span>${status}</span>`;
}
function emptyState(iconName, text){
  return `<div class="empty-state">${icon(iconName,30,'#8B93A7')}<div style="margin-top:10px;font-size:13.5px;">${text}</div></div>`;
}
function topBar(name, sub, photo){
  const initials = name && name!=='Panel HRD' ? name.split(' ').map(w=>w[0]).slice(0,2).join('') : '';
  return `
  <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;">
    <div style="display:flex;align-items:center;gap:10px;">
      <div style="width:40px;height:40px;border-radius:10px;background:var(--primary);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;overflow:hidden;">
        ${photo ? `<img src="${photo}" style="width:100%;height:100%;object-fit:cover;">` : (initials || icon('shield',18,'#fff'))}
      </div>
      <div>
        <div style="font-weight:700;font-size:14.5px;">${esc(name)}</div>
        <div style="font-size:12px;color:var(--ink-faint);">${esc(sub||'')}</div>
      </div>
    </div>
    <button class="btn btn-outline" style="font-size:12.5px;padding:8px 12px;" data-action="logout">Keluar</button>
  </div>`;
}
/* ---------------------------------------------------------------- */
/* Landing / Login screen                                            */
/* ---------------------------------------------------------------- */
function renderLogin(){
  const now = new Date();

  const features = [
    { icon:'target', title:'Lokasi Akurat', desc:'Absen masuk & keluar tercatat dengan titik GPS dan estimasi akurasi.' },
    { icon:'wallet', title:'Slip Gaji Digital', desc:'Rincian gaji pokok, tunjangan, dan potongan bisa dilihat kapan saja.' },
    { icon:'chart', title:'Statistik Kehadiran', desc:'Pantau hadir, telat, izin, sakit, dan alpha dalam satu tampilan.' },
    { icon:'shield', title:'Keamanan 100%', desc:'Data pengelolaan karyawan terpusat.' },
  ];

  const isRegister = state.loginMode === 'register';

  const errorBox = state.loginError ? `<div style="background:#FCEDEC;color:var(--danger);padding:9px 11px;border-radius:9px;font-size:12.5px;display:flex;gap:7px;align-items:center;">${icon('alert',15,'#C0392B')} ${esc(state.loginError)}</div>` : '';
  const successBox = (!isRegister && state.registerSuccessMsg) ? `<div style="background:var(--primary-soft);color:var(--primary);padding:9px 11px;border-radius:9px;font-size:12.5px;display:flex;gap:7px;align-items:center;">${icon('check',15,'#25473D')} ${esc(state.registerSuccessMsg)}</div>` : '';

  const loginFormBody = `
    <div style="display:grid;gap:14px;">
      <div>
        <label>Username</label>
        <input id="login-username" placeholder="Masukkan username" autocomplete="username" ${state.loginBusy?'disabled':''}>
      </div>
      <div>
        <label>Password</label>
        <input type="password" id="login-password" placeholder="Masukkan password" autocomplete="current-password" ${state.loginBusy?'disabled':''}>
      </div>
      ${successBox}
      ${errorBox}
      <button class="btn btn-primary" style="width:100%;margin-top:2px;" data-action="do-login" ${state.loginBusy?'disabled':''}>
        ${state.loginBusy ? `<span class="spin">${icon('clock',16)}</span>` : icon('login',16)} Masuk
      </button>
      ${fbReady() ? `
      <div style="display:flex;align-items:center;gap:10px;margin:2px 0;">
        <div style="flex:1;height:1px;background:var(--border);"></div>
        <span style="font-size:11.5px;color:var(--ink-faint);">atau</span>
        <div style="flex:1;height:1px;background:var(--border);"></div>
      </div>
      <button class="btn btn-outline" style="width:100%;" data-action="do-google-login" ${state.loginBusy?'disabled':''}>
        ${googleIcon()} Masuk dengan Google
      </button>` : ''}
      <div style="text-align:center;font-size:12.5px;color:var(--ink-soft);">
        Belum punya akun? <a href="#" data-action="show-register" style="color:var(--primary);font-weight:600;">Daftar sebagai karyawan</a>
      </div>
    </div>`;

  const registerFormBody = `
    <div style="display:grid;gap:12px;">
      <div><label>Nama lengkap</label><input id="reg-name" placeholder="Nama Anda" ${state.loginBusy?'disabled':''}></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
        <div><label>Jabatan</label><input id="reg-position" placeholder="Contoh: Staff Marketing" ${state.loginBusy?'disabled':''}></div>
        <div><label>Departemen</label><input id="reg-dept" placeholder="Contoh: Marketing" ${state.loginBusy?'disabled':''}></div>
      </div>
      <div><label>Username</label><input id="reg-username" placeholder="Pilih username" autocomplete="off" ${state.loginBusy?'disabled':''}></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
        <div><label>Password</label><input type="password" id="reg-password" placeholder="Min. 4 karakter" autocomplete="new-password" ${state.loginBusy?'disabled':''}></div>
        <div><label>Ulangi Password</label><input type="password" id="reg-confirm" placeholder="Ulangi password" autocomplete="new-password" ${state.loginBusy?'disabled':''}></div>
      </div>
      ${errorBox}
      <button class="btn btn-primary" style="width:100%;margin-top:2px;" data-action="do-register" ${state.loginBusy?'disabled':''}>
        ${state.loginBusy ? `<span class="spin">${icon('clock',16)}</span>` : icon('plus',16)} Daftar Akun
      </button>
      <div style="text-align:center;font-size:12.5px;color:var(--ink-soft);">
        Sudah punya akun? <a href="#" data-action="show-login-form" style="color:var(--primary);font-weight:600;">Masuk di sini</a>
      </div>
    </div>`;

  const formBody = isRegister ? registerFormBody : loginFormBody;

  return `
  <div class="landing-wrap">
    <div class="landing-brand">
      <div class="landing-ring r1"></div>
      <div class="landing-ring r2"></div>
      <div class="landing-blob b1"></div>
      <div class="landing-blob b2"></div>

      <div class="landing-brand-top">
        <div class="landing-brand-mark">${icon('clock',19,'#fff')}</div>
        <div class="landing-brand-name">BUMI IHBS - Absensi Karyawan</div>
      </div>

      <div class="landing-hero">
        <div class="landing-eyebrow">Waktu Server Saat Ini</div>
        <div class="landing-clock mono live-time">${timeStr(now)}</div>
        <div class="landing-date live-date">${DAY_NAMES[now.getDay()]}, ${now.getDate()} ${MONTH_NAMES[now.getMonth()]} ${now.getFullYear()}</div>
        <h1 class="landing-heading">Satu sistem untuk seluruh kehadiran tim Anda</h1>
        <p class="landing-sub">Absen dengan lokasi akurat, pantau statistik kehadiran, dan kelola slip gaji — semua dalam satu tempat.</p>
      </div>

      <div class="landing-features">
        ${features.map(f=>`
          <div class="landing-feature">
            <div class="landing-feature-icon">${icon(f.icon,16,'#fff')}</div>
            <div>
              <div class="landing-feature-title">${f.title}</div>
              <div class="landing-feature-desc">${f.desc}</div>
            </div>
          </div>`).join('')}
      </div>

      <div class="landing-brand-foot">Sistem Absensi Karyawan &middot; IHBS TEAM Developer.</div>
    </div>

    <div class="landing-form-side">
      <div class="landing-form-card">
        <div class="landing-form-title">${isRegister ? 'Daftar akun karyawan' : 'Silahkan Masuk ke akun Anda'}</div>
        <div class="landing-form-sub">${isRegister ? 'Buat akun baru untuk mulai absen secara mandiri.' : 'Gunakan username &amp; password yang terdaftar !!!.'}</div>
        <div class="card" style="padding:22px;">${formBody}</div>
        ${!isRegister ? `
        <div style="margin-top:14px;background:var(--primary-soft);border:1px solid var(--primary-line);border-radius:10px;padding:12px 14px;font-size:11.5px;color:var(--ink-soft);line-height:1.6;">
          <strong>Catatan:</strong> Jika Anda belum memiliki akun, silakan mendaftar terlebih dahulu melalui HRD atau melakukan pendaftaran mandiri.  

        </div>` : ''}
      </div>
    </div>
  </div>`;
}

/* ---------------------------------------------------------------- */
/* Employee: Clock card                                              */
/* ---------------------------------------------------------------- */
function renderClockCard(employee){
  const today = dateKey(new Date());
  const record = state.attendance.find(a=>a.employeeId===employee.id && a.date===today);
  const st = !record ? 'belum-masuk' : !record.clockOut ? 'sudah-masuk' : 'selesai';
  const btnBg = st==='selesai' ? 'var(--border)' : st==='sudah-masuk' ? 'var(--danger)' : 'var(--primary)';
  const btnColor = st==='selesai' ? 'var(--ink-faint)' : '#fff';
  const btnIcon = state.clockBusy ? `<span class="spin">${icon('clock',22,btnColor)}</span>` :
    st==='selesai' ? icon('check',22,btnColor) : st==='sudah-masuk' ? icon('logout',22,btnColor) : icon('login',22,btnColor);
  const btnLabel = st==='belum-masuk' ? 'Absen Masuk' : st==='sudah-masuk' ? 'Absen Keluar' : 'Selesai';
  const action = st==='belum-masuk' ? 'clock-in' : 'clock-out';

  return `
  <div class="card" style="padding:22px;">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:16px;">
      <div>
        <div style="font-size:12px;font-weight:700;color:var(--ink-faint);text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Waktu sekarang</div>
        <div class="mono live-time" style="font-size:40px;font-weight:700;line-height:1;">${timeStr(new Date())}</div>
        <div class="live-date" style="font-size:13px;color:var(--ink-faint);margin-top:4px;font-weight:500;">${DAY_NAMES[new Date().getDay()]}, ${new Date().getDate()} ${MONTH_NAMES[new Date().getMonth()]} ${new Date().getFullYear()}</div>
      </div>
      <div style="position:relative;width:96px;height:96px;flex-shrink:0;">
        ${st==='sudah-masuk' ? '<div class="pulse-ring"></div>' : ''}
        <button class="btn" ${state.clockBusy || st==='selesai' ? 'disabled' : ''} data-action="${action}"
          style="width:96px;height:96px;border-radius:999px;flex-direction:column;gap:4px;background:${btnBg};color:${btnColor};position:relative;z-index:1;box-shadow:0 6px 18px rgba(18,23,43,.15);">
          ${btnIcon}
          <span style="font-size:11.5px;font-weight:700;">${btnLabel}</span>
        </button>
      </div>
    </div>
    ${state.clockError ? `<div style="margin-top:14px;background:#FCEDEC;color:var(--danger);padding:10px 12px;border-radius:10px;font-size:12.5px;display:flex;gap:8px;">${icon('alert',16,'#C0392B')} ${esc(state.clockError)}</div>` : ''}
    <div style="margin-top:18px;display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;">
      <div style="background:var(--bg);border-radius:10px;padding:12px 14px;">
        <div style="font-size:11px;color:var(--ink-faint);font-weight:700;text-transform:uppercase;margin-bottom:4px;">Jam Masuk</div>
        <div class="mono" style="font-size:17px;font-weight:700;">${record?.clockIn || '--:--:--'}</div>
        ${record ? `<div style="margin-top:6px;">${badge(record.status)}</div>` : ''}
        ${mapCard(record?.clockInLoc, 'absen masuk')}
      </div>
      <div style="background:var(--bg);border-radius:10px;padding:12px 14px;">
        <div style="font-size:11px;color:var(--ink-faint);font-weight:700;text-transform:uppercase;margin-bottom:4px;">Jam Keluar</div>
        <div class="mono" style="font-size:17px;font-weight:700;">${record?.clockOut || '--:--:--'}</div>
        ${mapCard(record?.clockOutLoc, 'absen keluar')}
      </div>
    </div>
  </div>`;
}

function renderHistoryTable(employeeId){
  const rows = state.attendance.filter(a=>a.employeeId===employeeId).sort((a,b)=>a.date<b.date?1:-1).slice(0,30);
  return `
  <div class="card" style="padding:0;overflow:hidden;">
    <div style="padding:16px 18px 10px;"><h3 style="font-size:15px;">Riwayat Absensi</h3></div>
    ${rows.length===0 ? emptyState('calendar','Belum ada riwayat absensi.') : `
    <div style="overflow-x:auto;">
      <table>
        <thead><tr><th>Tanggal</th><th>Masuk</th><th>Keluar</th><th>Status</th><th>Lokasi</th></tr></thead>
        <tbody>
          ${rows.map(r=>{
            const hasLoc = !!(r.clockInLoc || r.clockOutLoc);
            const expanded = state.expandedAttId===r.id;
            const row = `<tr>
              <td style="font-weight:600;">${prettyDate(r.date)}</td>
              <td class="mono">${r.clockIn || '-'}</td>
              <td class="mono">${r.clockOut || '-'}</td>
              <td>${badge(r.status)}</td>
              <td>${hasLoc ? `
                <div style="display:flex;gap:4px;">
                  <button class="btn btn-ghost" style="padding:5px 8px;font-size:11.5px;white-space:nowrap;" data-action="toggle-att-row" data-id="${r.id}">
                    ${icon('mappin',13)} ${expanded ? 'Tutup' : 'Peta'}
                  </button>
                  <button class="btn btn-ghost" style="padding:5px 6px;" data-action="view-att-detail" data-id="${r.id}" title="Buka detail lokasi">${icon('chevron',13)}</button>
                </div>` : '<span style="color:var(--ink-faint);font-size:12px;">-</span>'}</td>
            </tr>`;
            const expandRow = expanded ? `<tr><td colspan="5" style="background:var(--bg);padding:12px 16px;">
              <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;">
                <div><div style="font-size:11px;font-weight:700;color:var(--ink-faint);text-transform:uppercase;margin-bottom:2px;">Absen Masuk</div>${mapCard(r.clockInLoc,'absen masuk')}</div>
                <div><div style="font-size:11px;font-weight:700;color:var(--ink-faint);text-transform:uppercase;margin-bottom:2px;">Absen Keluar</div>${mapCard(r.clockOutLoc,'absen keluar')}</div>
              </div>
            </td></tr>` : '';
            return row + expandRow;
          }).join('')}
        </tbody>
      </table>
    </div>`}
  </div>
  ${state.modal && state.modal.type==='attDetail' ? renderAttendanceDetailModal(state.modal.id) : ''}`;
}
function renderAttendanceDetailModal(attId){
  const r = state.attendance.find(a=>a.id===attId);
  if(!r) return '';
  const emp = state.employees.find(e=>e.id===r.employeeId);
  return `
  <div class="modal-overlay" data-action="close-modal-overlay">
    <div class="modal" style="max-width:520px;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:14px;">
        <div>
          <h3 style="font-size:16px;font-weight:700;">Detail Lokasi Absensi</h3>
          <div style="font-size:12px;color:var(--ink-faint);margin-top:2px;">${esc(emp ? emp.name : '')} · ${prettyDate(r.date)}</div>
        </div>
        <button class="btn btn-ghost" style="padding:6px;" data-action="close-modal">${icon('x',18)}</button>
      </div>
      <div style="display:grid;gap:16px;">
        <div>
          <div style="font-size:11px;font-weight:700;color:var(--ink-faint);text-transform:uppercase;margin-bottom:4px;">Absen Masuk ${r.clockIn ? '· '+r.clockIn : ''}</div>
          ${mapCard(r.clockInLoc,'absen masuk')}
        </div>
        <div>
          <div style="font-size:11px;font-weight:700;color:var(--ink-faint);text-transform:uppercase;margin-bottom:4px;">Absen Keluar ${r.clockOut ? '· '+r.clockOut : ''}</div>
          ${mapCard(r.clockOutLoc,'absen keluar')}
        </div>
      </div>
    </div>
  </div>`;
}

/* ---------------------------------------------------------------- */
/* Employee: Stats panel                                             */
/* ---------------------------------------------------------------- */
function renderStatsPanel(employeeId, canvasId, monthKey, yearKey){
  const monthIdx = state[monthKey], year = state[yearKey];
  const stats = computeStats(employeeId, year, monthIdx, state.attendance);
  const nowY = new Date().getFullYear();
  return `
  <div class="card" style="padding:20px;">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;flex-wrap:wrap;gap:10px;">
      <h3 style="font-size:15px;">Statistik Kehadiran</h3>
      <div style="display:flex;gap:8px;">
        <select style="width:140px;" data-bind="${monthKey}" data-parse="int">
          ${MONTH_NAMES.map((m,i)=>`<option value="${i}" ${monthIdx===i?'selected':''}>${m}</option>`).join('')}
        </select>
        <select style="width:90px;" data-bind="${yearKey}" data-parse="int">
          ${[nowY-1, nowY].map(y=>`<option value="${y}" ${year===y?'selected':''}>${y}</option>`).join('')}
        </select>
      </div>
    </div>
    <div class="grid5" style="margin-bottom:18px;">
      ${['Hadir','Terlambat','Izin','Sakit','Alpha'].map(k=>`
        <div style="background:var(--bg);border-radius:10px;padding:10px 8px;text-align:center;">
          <div style="font-size:20px;font-weight:700;color:${STATUS_COLOR[k]};">${stats[k]}</div>
          <div style="font-size:10.5px;color:var(--ink-faint);font-weight:600;margin-top:2px;">${k}</div>
        </div>`).join('')}
    </div>
    ${Object.values(stats).some((v,i)=>i<5 && v>0) ? `<div style="height:220px;"><canvas id="${canvasId}"></canvas></div>` : emptyState('chart','Belum ada data untuk periode ini.')}
    <div style="font-size:11.5px;color:var(--ink-faint);margin-top:8px;text-align:center;">Dihitung dari ${stats.total} hari kerja (Senin–Jumat) hingga hari ini.</div>
  </div>`;
}

/* ---------------------------------------------------------------- */
/* Employee: Leave                                                   */
/* ---------------------------------------------------------------- */
function renderLeaveHistoryList(employeeId){
  const rows = state.leaveRequests.filter(l=>l.employeeId===employeeId).sort((a,b)=>b.submittedAt-a.submittedAt);
  const sb = { pending:{c:'#C98A2C',t:'Menunggu'}, approved:{c:'#2F9E6F',t:'Disetujui'}, rejected:{c:'#C0392B',t:'Ditolak'} };
  return `
  <div class="card" style="padding:0;">
    <div style="padding:16px 18px 10px;"><h3 style="font-size:15px;">Riwayat Pengajuan</h3></div>
    ${rows.length===0 ? emptyState('clipboard','Belum ada pengajuan izin/sakit.') : `
    <div style="padding:0 18px 16px;display:grid;gap:10px;">
      ${rows.map(r=>{ const s=sb[r.status];
        return `<div style="background:var(--bg);border-radius:10px;padding:12px;font-size:13px;">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span style="font-weight:700;">${esc(r.type)}</span>
            <span class="badge" style="background:${s.c}1a;color:${s.c};">${s.t}</span>
          </div>
          <div style="color:var(--ink-soft);margin-top:4px;font-size:12.5px;">${prettyDate(r.startDate)}${r.startDate!==r.endDate ? ' – '+prettyDate(r.endDate) : ''}</div>
          <div style="color:var(--ink-faint);margin-top:4px;font-size:12px;">${esc(r.reason)}</div>
        </div>`; }).join('')}
    </div>`}
  </div>`;
}
function renderLeaveFormModal(){
  const todayK = dateKey(new Date());
  return `
  <div class="modal-overlay" data-action="close-modal-overlay">
    <div class="modal">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
        <h3 style="font-size:17px;font-weight:700;">Ajukan Izin / Sakit</h3>
        <button class="btn btn-ghost" style="padding:6px;" data-action="close-modal">${icon('x',18)}</button>
      </div>
      <div style="display:grid;gap:14px;">
        <div><label>Jenis pengajuan</label>
          <select id="lv-type"><option value="Izin">Izin</option><option value="Sakit">Sakit</option></select>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <div><label>Tanggal mulai</label><input type="date" id="lv-start" value="${todayK}"></div>
          <div><label>Tanggal selesai</label><input type="date" id="lv-end" value="${todayK}"></div>
        </div>
        <div><label>Alasan</label><textarea rows="3" id="lv-reason" placeholder="Jelaskan alasan pengajuan..."></textarea></div>
        <button class="btn btn-primary" data-action="submit-leave">Kirim Pengajuan</button>
      </div>
    </div>
  </div>`;
}

/* ---------------------------------------------------------------- */
/* Jadwal Shift — kalender bulanan (dipakai karyawan & HRD)          */
/* ---------------------------------------------------------------- */
function renderShiftCalendar(employeeId, monthKey, yearKey, opts){
  opts = opts || {};
  const monthIdx = state[monthKey], year = state[yearKey];
  const nowY = new Date().getFullYear();
  const daysInMonth = new Date(year, monthIdx+1, 0).getDate();
  const firstDow = new Date(year, monthIdx, 1).getDay();
  const cells = [];
  for(let i=0;i<firstDow;i++) cells.push(null);
  for(let d=1; d<=daysInMonth; d++) cells.push(d);
  while(cells.length % 7 !== 0) cells.push(null);
  const todayKey = dateKey(new Date());
  return `
  <div class="card" style="padding:18px;">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:10px;">
      <h3 style="font-size:15px;">${esc(opts.title || 'Jadwal Shift')}</h3>
      <div style="display:flex;gap:8px;">
        <select style="width:140px;" data-bind="${monthKey}" data-parse="int">
          ${MONTH_NAMES.map((m,i)=>`<option value="${i}" ${monthIdx===i?'selected':''}>${m}</option>`).join('')}
        </select>
        <select style="width:90px;" data-bind="${yearKey}" data-parse="int">
          ${[nowY-1, nowY, nowY+1].map(y=>`<option value="${y}" ${year===y?'selected':''}>${y}</option>`).join('')}
        </select>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:6px;margin-bottom:6px;">
      ${DAY_NAMES.map(d=>`<div style="text-align:center;font-size:10.5px;font-weight:700;color:var(--ink-faint);text-transform:uppercase;">${d.slice(0,3)}</div>`).join('')}
    </div>
    <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:6px;">
      ${cells.map(d=>{
        if(!d) return `<div></div>`;
        const key = `${year}-${pad(monthIdx+1)}-${pad(d)}`;
        const rec = state.shiftSchedule.find(s=>s.employeeId===employeeId && s.date===key);
        const isToday = key===todayKey;
        const color = rec ? SHIFT_COLOR[rec.shift] : null;
        const dataAttr = opts.editable ? `data-action="open-set-shift" data-emp="${employeeId}" data-date="${key}"` : '';
        return `<div ${dataAttr} style="min-height:54px;border-radius:8px;padding:5px 6px;border:1px solid ${isToday?'var(--primary)':'var(--border)'};background:${color?color+'17':'#fff'};${opts.editable?'cursor:pointer;':''}">
          <div style="font-size:11px;font-weight:700;color:${isToday?'var(--primary)':'var(--ink-faint)'};">${d}</div>
          ${rec ? `<div style="margin-top:3px;font-size:10px;font-weight:700;color:${color};line-height:1.2;" title="${esc(shiftLabel(rec.shift))}">${esc(rec.shift)}${SHIFT_TIMES[rec.shift]?` <span style="font-weight:600;opacity:.85;">${SHIFT_TIMES[rec.shift]}</span>`:''}</div>` : ''}
        </div>`;
      }).join('')}
    </div>
    <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:14px;">
      ${SCHEDULE_SHIFT_OPTIONS.map(s=>`<div style="display:flex;align-items:center;gap:5px;font-size:11px;color:var(--ink-soft);"><span class="dot" style="background:${SHIFT_COLOR[s]};"></span>${shiftLabel(s)}</div>`).join('')}
    </div>
    ${opts.editable ? `<div style="margin-top:10px;font-size:11px;color:var(--ink-faint);">Klik tanggal untuk mengatur shift. Berlaku setiap hari (termasuk Minggu): Pagi (07:00) / Middle (08:00) / Siang (14:00) / Libur.</div>` : ''}
  </div>`;
}
function renderSetShiftDayModal(){
  const { employeeId, date } = state.modal;
  const emp = state.employees.find(e=>e.id===employeeId);
  const existing = state.shiftSchedule.find(s=>s.employeeId===employeeId && s.date===date);
  const dayShiftNames = shiftNamesForDate(date); // otomatis sesuai hari: Minggu vs Senin-Sabtu
  return `
  <div class="modal-overlay" data-action="close-modal-overlay">
    <div class="modal" style="max-width:380px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
        <h3 style="font-size:16px;font-weight:700;">Atur Shift</h3>
        <button class="btn btn-ghost" style="padding:6px;" data-action="close-modal">${icon('x',18)}</button>
      </div>
      <div style="font-size:12.5px;color:var(--ink-soft);margin-bottom:14px;">${esc(emp ? emp.name : '')} · ${prettyDate(date)}</div>
      <div style="display:grid;gap:14px;">
        <div><label>Shift</label>
          <select id="ss-shift">
            <option value="">Belum diatur</option>
            ${dayShiftNames.map(s=>`<option value="${s}" ${existing && existing.shift===s ? 'selected' : ''}>${shiftLabel(s)}</option>`).join('')}
            <option value="Libur" ${existing && existing.shift==='Libur' ? 'selected' : ''}>Libur</option>
          </select>
        </div>
        <button class="btn btn-primary" data-action="submit-set-shift">Simpan</button>
      </div>
    </div>
  </div>`;
}
function renderHrdPasswordModal(){
  if(fbReady()){
    return `
    <div class="modal-overlay" data-action="close-modal-overlay">
      <div class="modal" style="max-width:380px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
          <h3 style="font-size:16px;font-weight:700;">Ubah Password HRD</h3>
          <button class="btn btn-ghost" style="padding:6px;" data-action="close-modal">${icon('x',18)}</button>
        </div>
        ${profileMsgBox()}
        <p style="font-size:12.5px;color:var(--ink-soft);line-height:1.6;margin-bottom:14px;">
          Akun HRD memakai Firebase Authentication. Klik tombol di bawah untuk mengirim link reset password ke email HRD yang terdaftar.
        </p>
        <button class="btn btn-primary" data-action="hrd-send-reset">Kirim Email Reset Password</button>
      </div>
    </div>`;
  }
  return `
  <div class="modal-overlay" data-action="close-modal-overlay">
    <div class="modal" style="max-width:380px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
        <h3 style="font-size:16px;font-weight:700;">Ubah Password HRD</h3>
        <button class="btn btn-ghost" style="padding:6px;" data-action="close-modal">${icon('x',18)}</button>
      </div>
      ${profileMsgBox()}
      <div style="display:grid;gap:12px;">
        <div><label>Password Lama</label><input type="password" id="hp-old"></div>
        <div><label>Password Baru</label><input type="password" id="hp-new"></div>
        <div><label>Konfirmasi Password Baru</label><input type="password" id="hp-confirm"></div>
        <button class="btn btn-primary" data-action="submit-hrd-password">Simpan</button>
      </div>
    </div>
  </div>`;
}
async function actionHrdSendResetEmail(){
  state.profileError=''; state.profileSavedMsg='';
  const email = fbEmailFor(HRD_USERNAME);
  try{
    await window.fb.auth.sendPasswordResetEmail(email);
    state.profileSavedMsg = 'Email reset password sudah dikirim (jika akun terdaftar).';
  }catch(e){ state.profileError = fbErrorMsg(e.code); }
  render();
}
async function actionSubmitHrdPassword(){
  state.profileError=''; state.profileSavedMsg='';
  const oldPass = document.getElementById('hp-old')?.value || '';
  const newPass = document.getElementById('hp-new')?.value || '';
  const confirm = document.getElementById('hp-confirm')?.value || '';
  if(!state.hrdAuth){ state.profileError='Tidak tersedia di mode ini.'; render(); return; }
  const oldHash = await hashPassword(oldPass, state.hrdAuth.salt);
  if(oldHash !== state.hrdAuth.hash){ state.profileError='Password lama tidak sesuai.'; render(); return; }
  if(newPass.length < 6){ state.profileError='Password baru minimal 6 karakter.'; render(); return; }
  if(newPass !== confirm){ state.profileError='Konfirmasi password baru tidak cocok.'; render(); return; }
  const salt = randomHex(16);
  const hash = await hashPassword(newPass, salt);
  const hrdAuth = { salt, hash };
  try{ await window.storage.set(K.hrdAuth, JSON.stringify(hrdAuth), true); }catch(e){}
  state.hrdAuth = hrdAuth;
  state.modal=null; state.profileSavedMsg='Password HRD berhasil diubah.'; render();
}

/* ---------------------------------------------------------------- */
/* Employee: Ganti / Tukar Shift                                     */
/* ---------------------------------------------------------------- */
function shiftBadge(status){
  const sb = { pending:{c:'#C98A2C',t:'Menunggu'}, approved:{c:'#2F9E6F',t:'Disetujui'}, rejected:{c:'#C0392B',t:'Ditolak'} };
  const s = sb[status] || sb.pending;
  return `<span class="badge" style="background:${s.c}1a;color:${s.c};">${s.t}</span>`;
}
function renderShiftHistoryList(employeeId){
  const rows = state.shiftRequests.filter(s=>s.employeeId===employeeId).sort((a,b)=>b.submittedAt-a.submittedAt);
  return `
  <div class="card" style="padding:0;">
    <div style="padding:16px 18px 10px;"><h3 style="font-size:15px;">Riwayat Permintaan Shift</h3></div>
    ${rows.length===0 ? emptyState('swap','Belum ada permintaan ganti/tukar shift.') : `
    <div style="padding:0 18px 16px;display:grid;gap:10px;">
      ${rows.map(r=>{
        const partner = r.partnerId ? state.employees.find(e=>e.id===r.partnerId) : null;
        return `<div style="background:var(--bg);border-radius:10px;padding:12px;font-size:13px;">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span style="font-weight:700;">${esc(r.type)}</span>
            ${shiftBadge(r.status)}
          </div>
          <div style="color:var(--ink-soft);margin-top:4px;font-size:12.5px;">${prettyDate(r.date)} · Shift ${esc(shiftLabel(r.currentShift))}
            ${r.type==='Ganti Shift' ? ` &rarr; ${esc(shiftLabel(r.requestedShift))}` : partner ? ` dengan ${esc(partner.name)}` : ''}
          </div>
          <div style="color:var(--ink-faint);margin-top:4px;font-size:12px;">${esc(r.reason)}</div>
        </div>`; }).join('')}
    </div>`}
  </div>`;
}
function renderShiftFormModal(){
  const todayK = dateKey(new Date());
  const partners = state.employees.filter(e=>e.id!==state.currentEmpId);
  const initialShiftNames = shiftNamesForDate(todayK);
  const shiftOptionsHtml = initialShiftNames.map(s=>`<option value="${s}">${shiftLabel(s)}</option>`).join('');
  return `
  <div class="modal-overlay" data-action="close-modal-overlay">
    <div class="modal">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
        <h3 style="font-size:17px;font-weight:700;">Ajukan Ganti / Tukar Shift</h3>
        <button class="btn btn-ghost" style="padding:6px;" data-action="close-modal">${icon('x',18)}</button>
      </div>
      <div style="display:grid;gap:14px;">
        <div><label>Jenis permintaan</label>
          <select id="sh-type" onchange="document.getElementById('sh-ganti-fields').style.display=this.value==='Ganti Shift'?'grid':'none';document.getElementById('sh-tukar-fields').style.display=this.value==='Tukar Shift'?'grid':'none';">
            <option value="Ganti Shift">Ganti Shift</option>
            <option value="Tukar Shift" ${partners.length===0?'disabled':''}>Tukar Shift (dengan rekan kerja)</option>
          </select>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <div><label>Tanggal</label><input type="date" id="sh-date" value="${todayK}" onchange="updateShiftDateOptions(this.value)"></div>
          <div><label>Shift Saat Ini</label>
            <select id="sh-current">${shiftOptionsHtml}</select>
          </div>
        </div>
        <div id="sh-ganti-fields" style="display:grid;">
          <label>Shift Yang Diinginkan</label>
          <select id="sh-target">${shiftOptionsHtml}</select>
        </div>
        <div id="sh-tukar-fields" style="display:none;">
          <label>Tukar Dengan (Rekan Kerja)</label>
          ${partners.length===0 ? `<div style="font-size:12.5px;color:var(--ink-faint);">Belum ada rekan kerja lain yang terdaftar.</div>` :
          `<select id="sh-partner">${partners.map(p=>`<option value="${p.id}">${esc(p.name)}</option>`).join('')}</select>`}
        </div>
        <div style="font-size:11px;color:var(--ink-faint);">Berlaku setiap hari (termasuk Minggu): Pagi (07:00) / Middle (08:00) / Siang (14:00).</div>
        <div><label>Alasan</label><textarea rows="3" id="sh-reason" placeholder="Jelaskan alasan permintaan..."></textarea></div>
        <button class="btn btn-primary" data-action="submit-shift">Kirim Permintaan</button>
      </div>
    </div>
  </div>`;
}
function updateShiftDateOptions(dateStr){
  const optsHtml = shiftNamesForDate(dateStr).map(s=>`<option value="${s}">${shiftLabel(s)}</option>`).join('');
  ['sh-current','sh-target'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.innerHTML = optsHtml;
  });
}

/* ---------------------------------------------------------------- */
/* Employee: Lembur (Overtime)                                       */
/* ---------------------------------------------------------------- */
function overtimeBadge(status){
  const sb = { pending:{c:'#C98A2C',t:'Menunggu'}, approved:{c:'#2F9E6F',t:'Disetujui'}, rejected:{c:'#C0392B',t:'Ditolak'} };
  const s = sb[status] || sb.pending;
  return `<span class="badge" style="background:${s.c}1a;color:${s.c};">${s.t}</span>`;
}
function renderOvertimeHistoryList(employeeId){
  const rows = state.overtimeRequests.filter(o=>o.employeeId===employeeId).sort((a,b)=>b.submittedAt-a.submittedAt);
  return `
  <div class="card" style="padding:0;">
    <div style="padding:16px 18px 10px;"><h3 style="font-size:15px;">Riwayat Pengajuan Lembur</h3></div>
    ${rows.length===0 ? emptyState('moonclock','Belum ada pengajuan lembur.') : `
    <div style="padding:0 18px 16px;display:grid;gap:10px;">
      ${rows.map(r=>`<div style="background:var(--bg);border-radius:10px;padding:12px;font-size:13px;">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span style="font-weight:700;">${prettyDate(r.date)}</span>
            ${overtimeBadge(r.status)}
          </div>
          <div style="color:var(--ink-soft);margin-top:4px;font-size:12.5px;" class="mono">${esc(r.start)} – ${esc(r.end)}</div>
          <div style="color:var(--ink-faint);margin-top:4px;font-size:12px;">${esc(r.reason)}</div>
        </div>`).join('')}
    </div>`}
  </div>`;
}
function renderOvertimeFormModal(){
  const todayK = dateKey(new Date());
  return `
  <div class="modal-overlay" data-action="close-modal-overlay">
    <div class="modal">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
        <h3 style="font-size:17px;font-weight:700;">Ajukan Lembur</h3>
        <button class="btn btn-ghost" style="padding:6px;" data-action="close-modal">${icon('x',18)}</button>
      </div>
      <div style="display:grid;gap:14px;">
        <div><label>Tanggal</label><input type="date" id="ot-date" value="${todayK}"></div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <div><label>Jam Mulai</label><input type="time" id="ot-start"></div>
          <div><label>Jam Selesai</label><input type="time" id="ot-end"></div>
        </div>
        <div><label>Alasan / Keterangan Pekerjaan</label><textarea rows="3" id="ot-reason" placeholder="Jelaskan pekerjaan yang dilembur..."></textarea></div>
        <button class="btn btn-primary" data-action="submit-overtime">Kirim Pengajuan</button>
      </div>
    </div>
  </div>`;
}

/* ---------------------------------------------------------------- */
/* Employee: Pengajuan Absensi (koreksi absen masuk/keluar error)    */
/* ---------------------------------------------------------------- */
function attReqBadge(status){
  const sb = { pending:{c:'#C98A2C',t:'Menunggu'}, approved:{c:'#2F9E6F',t:'Disetujui'}, rejected:{c:'#C0392B',t:'Ditolak'} };
  const s = sb[status] || sb.pending;
  return `<span class="badge" style="background:${s.c}1a;color:${s.c};">${s.t}</span>`;
}
function renderAttendanceRequestHistoryList(employeeId){
  const rows = state.attendanceRequests.filter(a=>a.employeeId===employeeId).sort((a,b)=>b.submittedAt-a.submittedAt);
  return `
  <div class="card" style="padding:0;">
    <div style="padding:16px 18px 10px;"><h3 style="font-size:15px;">Riwayat Pengajuan Absensi</h3></div>
    ${rows.length===0 ? emptyState('alert','Belum ada pengajuan koreksi absensi.') : `
    <div style="padding:0 18px 16px;display:grid;gap:10px;">
      ${rows.map(r=>`<div style="background:var(--bg);border-radius:10px;padding:12px;font-size:13px;">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span style="font-weight:700;">${prettyDate(r.date)}</span>
            ${attReqBadge(r.status)}
          </div>
          <div style="color:var(--ink-soft);margin-top:4px;font-size:12.5px;">${esc(r.type)}
            ${r.requestedClockIn ? ` · Masuk: <span class="mono">${esc(r.requestedClockIn)}</span>` : ''}
            ${r.requestedClockOut ? ` · Keluar: <span class="mono">${esc(r.requestedClockOut)}</span>` : ''}
          </div>
          <div style="color:var(--ink-faint);margin-top:4px;font-size:12px;">${esc(r.reason)}</div>
        </div>`).join('')}
    </div>`}
  </div>`;
}
function renderAttendanceRequestFormModal(){
  const todayK = dateKey(new Date());
  return `
  <div class="modal-overlay" data-action="close-modal-overlay">
    <div class="modal">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
        <h3 style="font-size:17px;font-weight:700;">Ajukan Koreksi Absensi</h3>
        <button class="btn btn-ghost" style="padding:6px;" data-action="close-modal">${icon('x',18)}</button>
      </div>
      <div style="background:var(--primary-soft);border:1px solid var(--primary-line);border-radius:9px;padding:10px 12px;font-size:12px;color:var(--ink-soft);margin-bottom:14px;">
        Gunakan formulir ini apabila Absen Masuk / Absen Keluar gagal atau terjadi error pada sistem.
      </div>
      <div style="display:grid;gap:14px;">
        <div><label>Tanggal</label><input type="date" id="ar-date" value="${todayK}"></div>
        <div><label>Jenis Kendala</label>
          <select id="ar-type">${ATT_REQUEST_TYPES.map(t=>`<option value="${t}">${t}</option>`).join('')}</select>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <div><label>Jam Masuk (jika ada)</label><input type="time" id="ar-clockin"></div>
          <div><label>Jam Keluar (jika ada)</label><input type="time" id="ar-clockout"></div>
        </div>
        <div><label>Penjelasan</label><textarea rows="3" id="ar-reason" placeholder="Jelaskan kendala yang terjadi..."></textarea></div>
        <button class="btn btn-primary" data-action="submit-attendance-request">Kirim Pengajuan</button>
      </div>
    </div>
  </div>`;
}

/* ---------------------------------------------------------------- */
/* Shared: Files section (used in top-level Files tab & Profile>My Files) */
/* ---------------------------------------------------------------- */
function fileIconFor(mime){ return (mime||'').startsWith('image/') ? 'file' : 'file'; }
function formatFileSize(bytes){
  if(bytes < 1024) return bytes + ' B';
  if(bytes < 1024*1024) return (bytes/1024).toFixed(1) + ' KB';
  return (bytes/(1024*1024)).toFixed(2) + ' MB';
}
function renderFilesSection(ownerId, opts){
  opts = opts || {};
  const rows = state.files.filter(f=>f.employeeId===ownerId).sort((a,b)=>b.uploadedAt-a.uploadedAt);
  const inputId = opts.inputId || 'file-upload-input-'+ownerId;
  return `
  <div class="card" style="padding:18px;">
    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:4px;">
      <h3 style="font-size:15px;">${opts.title || 'File Saya'}</h3>
    </div>
    <div style="margin-top:10px;border:1px dashed var(--border);border-radius:10px;padding:14px;display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;">
      <div style="font-size:12px;color:var(--ink-faint);">Unggah dokumen (KTP, ijazah, surat, dll). Maks. 1.5MB per file.</div>
      <label class="btn btn-outline" style="font-size:12.5px;padding:8px 12px;cursor:pointer;">
        ${state.fileUploadBusy ? `<span class="spin">${icon('clock',14)}</span> Mengunggah...` : `${icon('upload',14)} Unggah File`}
        <input type="file" id="${esc(inputId)}" style="display:none;" ${state.fileUploadBusy?'disabled':''} onchange="actionUploadFile(this, '${ownerId}')">
      </label>
    </div>
    ${state.fileUploadError ? `<div style="margin-top:10px;background:#FCEDEC;color:var(--danger);padding:9px 11px;border-radius:9px;font-size:12.5px;">${icon('alert',14,'#C0392B')} ${esc(state.fileUploadError)}</div>` : ''}
    <div style="margin-top:14px;">
      ${rows.length===0 ? emptyState('file','Belum ada file yang diunggah.') : `
      <div style="display:grid;gap:8px;">
        ${rows.map(f=>`
        <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;background:var(--bg);border-radius:10px;padding:10px 12px;">
          <div style="display:flex;align-items:center;gap:10px;min-width:0;">
            <div style="width:34px;height:34px;border-radius:8px;background:var(--primary-soft);color:var(--primary);display:flex;align-items:center;justify-content:center;flex-shrink:0;">${icon(fileIconFor(f.mime),16,'#25473D')}</div>
            <div style="min-width:0;">
              <div style="font-weight:600;font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:220px;">${esc(f.name)}</div>
              <div style="font-size:11px;color:var(--ink-faint);">${formatFileSize(f.size)} · ${prettyDate(dateKey(new Date(f.uploadedAt)))}${opts.showOwnerName ? ' · '+esc((state.employees.find(e=>e.id===f.employeeId)||{}).name || '') : ''}</div>
            </div>
          </div>
          <div style="display:flex;gap:4px;flex-shrink:0;">
            <a class="btn btn-ghost" style="padding:6px;" href="${f.dataUrl}" download="${esc(f.name)}" title="Unduh">${icon('download',15)}</a>
            <button class="btn btn-ghost" style="padding:6px;color:var(--danger);" data-action="delete-file" data-id="${f.id}" title="Hapus">${icon('trash',15)}</button>
          </div>
        </div>`).join('')}
      </div>`}
    </div>
  </div>`;
}

/* ---------------------------------------------------------------- */
/* Employee: Profile (Info Pribadi, Kepegawaian, Kontak Darurat,     */
/* File Saya, Ubah Password, PIN)                                    */
/* ---------------------------------------------------------------- */
function profileMsgBox(){
  let box = '';
  if(state.profileSavedMsg) box = `<div style="background:#E4EEE9;color:var(--primary);padding:9px 11px;border-radius:9px;font-size:12.5px;display:flex;gap:7px;align-items:center;margin-bottom:14px;">${icon('check',15,'#25473D')} ${esc(state.profileSavedMsg)}</div>`;
  if(state.profileError) box = `<div style="background:#FCEDEC;color:var(--danger);padding:9px 11px;border-radius:9px;font-size:12.5px;display:flex;gap:7px;align-items:center;margin-bottom:14px;">${icon('alert',15,'#C0392B')} ${esc(state.profileError)}</div>`;
  return box;
}
function renderProfilePersonal(employee){
  const p = employee.personal || {};
  const initials = (employee.name||'').split(' ').map(w=>w[0]).slice(0,2).join('').toUpperCase();
  return `
  <div class="card profile-grid" style="padding:20px;max-width:640px;">
    <div style="display:flex;flex-direction:column;align-items:center;gap:10px;text-align:center;">
      <div style="width:104px;height:104px;border-radius:16px;overflow:hidden;background:var(--primary);color:#fff;
           display:flex;align-items:center;justify-content:center;font-weight:700;font-size:28px;flex-shrink:0;">
        ${employee.photo ? `<img src="${employee.photo}" style="width:100%;height:100%;object-fit:cover;">` : (initials || icon('user',30,'#fff'))}
      </div>
      <label class="btn btn-outline" style="font-size:11.5px;padding:7px 10px;cursor:pointer;">
        ${state.fileUploadBusy ? `<span class="spin">${icon('clock',13)}</span> Mengunggah...` : `${icon('upload',13)} Ubah Foto`}
        <input type="file" accept="image/*" style="display:none;" ${state.fileUploadBusy?'disabled':''} onchange="actionUploadPhoto(this)">
      </label>
      ${employee.photo ? `<button class="btn btn-ghost" style="font-size:11px;color:var(--danger);padding:4px 8px;" data-action="remove-photo">Hapus Foto</button>` : ''}
      <div style="font-size:10.5px;color:var(--ink-faint);">JPG/PNG, maks. 1.5MB</div>
    </div>
    <div>
      <h3 style="font-size:15px;margin-bottom:14px;">Info Pribadi</h3>
      ${profileMsgBox()}
      <div style="display:grid;gap:12px;">
        <div><label>NIK (No. KTP)</label><input id="pi-nik" value="${esc(p.nik||'')}" placeholder="16 digit NIK"></div>
        <div><label>No. Telepon</label><input id="pi-phone" value="${esc(p.phone||'')}" placeholder="08xxxxxxxxxx"></div>
        <div><label>Tanggal Lahir</label><input type="date" id="pi-dob" value="${esc(p.dob||'')}"></div>
        <div><label>Jenis Kelamin</label>
          <select id="pi-gender">
            <option value="">Pilih</option>
            <option value="Laki-laki" ${p.gender==='Laki-laki'?'selected':''}>Laki-laki</option>
            <option value="Perempuan" ${p.gender==='Perempuan'?'selected':''}>Perempuan</option>
          </select>
        </div>
        <div><label>Alamat</label><textarea rows="2" id="pi-address" placeholder="Alamat domisili">${esc(p.address||'')}</textarea></div>
        <button class="btn btn-primary" style="justify-self:start;" data-action="save-personal-info">Simpan</button>
      </div>
    </div>
  </div>`;
}
function renderProfileEmployment(employee){
  return `
  <div class="card" style="padding:20px;max-width:520px;">
    <h3 style="font-size:15px;margin-bottom:14px;">Info Kepegawaian</h3>
    <div style="display:grid;gap:10px;">
      ${[['Nama', employee.name],['Jabatan', employee.position],['Departemen', employee.dept||'-'],
        ['Tanggal Bergabung', prettyDate(employee.joinDate)],['Username', employee.username]].map(([label,val])=>`
        <div style="display:flex;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--border);font-size:13.5px;">
          <span style="color:var(--ink-soft);">${label}</span><span style="font-weight:600;">${esc(val)}</span>
        </div>`).join('')}
    </div>
    <div style="margin-top:14px;font-size:11.5px;color:var(--ink-faint);">Data kepegawaian dikelola oleh HRD. Hubungi HRD apabila ada perubahan.</div>
  </div>`;
}
function renderProfileEmergency(employee){
  const c = employee.emergencyContact || {};
  return `
  <div class="card" style="padding:20px;max-width:520px;">
    <h3 style="font-size:15px;margin-bottom:14px;">Kontak Darurat</h3>
    ${profileMsgBox()}
    <div style="display:grid;gap:12px;">
      <div><label>Nama Kontak</label><input id="ec-name" value="${esc(c.name||'')}" placeholder="Nama lengkap"></div>
      <div><label>Hubungan</label><input id="ec-relation" value="${esc(c.relation||'')}" placeholder="Contoh: Orang Tua, Pasangan"></div>
      <div><label>No. Telepon</label><input id="ec-phone" value="${esc(c.phone||'')}" placeholder="08xxxxxxxxxx"></div>
      <div><label>Alamat</label><textarea rows="2" id="ec-address" placeholder="Alamat kontak darurat">${esc(c.address||'')}</textarea></div>
      <button class="btn btn-primary" style="justify-self:start;" data-action="save-emergency-contact">Simpan</button>
    </div>
  </div>`;
}
function renderProfilePassword(){
  return `
  <div class="card" style="padding:20px;max-width:420px;">
    <h3 style="font-size:15px;margin-bottom:14px;">Ubah Password</h3>
    ${profileMsgBox()}
    <div style="display:grid;gap:12px;">
      <div><label>Password Lama</label><input type="password" id="pw-old" autocomplete="current-password"></div>
      <div><label>Password Baru</label><input type="password" id="pw-new" placeholder="Min. 4 karakter" autocomplete="new-password"></div>
      <div><label>Konfirmasi Password Baru</label><input type="password" id="pw-confirm" autocomplete="new-password"></div>
      <button class="btn btn-primary" style="justify-self:start;" data-action="change-password">Simpan Password</button>
    </div>
  </div>`;
}
function renderProfilePin(employee){
  return `
  <div class="card" style="padding:20px;max-width:420px;">
    <h3 style="font-size:15px;margin-bottom:14px;">PIN</h3>
    <div style="font-size:12px;color:var(--ink-faint);margin-bottom:12px;">${employee.pin ? 'PIN sudah diatur. Masukkan PIN baru untuk menggantinya.' : 'Anda belum mengatur PIN.'}</div>
    ${profileMsgBox()}
    <div style="display:grid;gap:12px;">
      <div><label>PIN Baru (4-6 digit)</label><input type="password" inputmode="numeric" maxlength="6" id="pin-new" placeholder="••••"></div>
      <div><label>Konfirmasi PIN</label><input type="password" inputmode="numeric" maxlength="6" id="pin-confirm" placeholder="••••"></div>
      <button class="btn btn-primary" style="justify-self:start;" data-action="change-pin">Simpan PIN</button>
    </div>
  </div>`;
}
function renderEmployeeProfile(employee){
  const subTabs = [
    {id:'personal', label:'Info Pribadi', icon:'idcard'},
    {id:'employment', label:'Info Kepegawaian', icon:'briefcase'},
    {id:'emergency', label:'Kontak Darurat', icon:'heart'},
    {id:'myfiles', label:'File Saya', icon:'file'},
    {id:'password', label:'Ubah Password', icon:'lock'},
    {id:'pin', label:'PIN', icon:'key'},
  ];
  let body = '';
  if(state.empProfileTab==='personal') body = renderProfilePersonal(employee);
  else if(state.empProfileTab==='employment') body = renderProfileEmployment(employee);
  else if(state.empProfileTab==='emergency') body = renderProfileEmergency(employee);
  else if(state.empProfileTab==='myfiles') body = renderFilesSection(employee.id, {title:'File Saya'});
  else if(state.empProfileTab==='password') body = renderProfilePassword();
  else if(state.empProfileTab==='pin') body = renderProfilePin(employee);
  return `
  <div>
    <div class="tab-row" style="margin-bottom:16px;">
      ${subTabs.map(t=>`<div class="tab-item ${state.empProfileTab===t.id?'active':''}" data-action="profile-tab" data-tab="${t.id}">
        ${icon(t.icon,15)} ${t.label}
      </div>`).join('')}
    </div>
    <div>${body}</div>
  </div>
  `;
}

/* ---------------------------------------------------------------- */
/* Employee: Informasi dari HRD                                      */
/* ---------------------------------------------------------------- */
function renderEmployeeAnnouncements(){
  const rows = [...state.announcements].sort((a,b)=>b.createdAt-a.createdAt);
  return `
  <div class="card" style="padding:0;">
    <div style="padding:16px 18px 10px;"><h3 style="font-size:15px;">Informasi dari HRD</h3></div>
    ${rows.length===0 ? emptyState('info','Belum ada informasi dari HRD.') : `
    <div style="padding:0 18px 16px;display:grid;gap:10px;">
      ${rows.map(a=>`
      <div style="background:${a.important?'#FCEDEC':'var(--bg)'};border-radius:10px;padding:14px;border:1px solid ${a.important?'#F0C9C3':'transparent'};">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;">
          <div style="font-weight:700;font-size:14px;display:flex;align-items:center;gap:6px;">
            ${a.important ? icon('alert',15,'#C0392B') : icon('info',15,'#25473D')} ${esc(a.title)}
          </div>
          ${a.important ? `<span class="badge" style="background:#C0392B1a;color:#C0392B;flex-shrink:0;">Penting</span>` : ''}
        </div>
        <div style="color:var(--ink-soft);font-size:13px;margin-top:6px;white-space:pre-wrap;">${esc(a.message)}</div>
        <div style="color:var(--ink-faint);font-size:11.5px;margin-top:8px;">${prettyDate(dateKey(new Date(a.createdAt)))}</div>
      </div>`).join('')}
    </div>`}
  </div>`;
}

/* ---------------------------------------------------------------- */
/* Employee: Payslip                                                 */
/* ---------------------------------------------------------------- */
function renderPayslipView(employee){
  const rows = state.payslips.filter(p=>p.employeeId===employee.id).sort((a,b)=>a.month<b.month?1:-1);
  const openId = state.selectedPayslipId || (rows[0] && rows[0].id);
  const open = rows.find(r=>r.id===openId);
  return `
  <div class="payslip-grid" style="display:grid;grid-template-columns:1fr 1.3fr;gap:16px;">
    <div class="card" style="padding:0;">
      <div style="padding:16px 18px 10px;"><h3 style="font-size:15px;">Slip Gaji</h3></div>
      ${rows.length===0 ? emptyState('wallet','Belum ada slip gaji.') : `
      <div style="padding:0 10px 12px;">
        ${rows.map(r=>`
          <div data-action="select-payslip" data-id="${r.id}" style="padding:12px 10px;border-radius:10px;cursor:pointer;margin-bottom:4px;
               background:${openId===r.id?'var(--primary-soft)':'transparent'};display:flex;justify-content:space-between;align-items:center;">
            <div>
              <div style="font-weight:700;font-size:13.5px;">${monthLabel(r.month)}</div>
              <div style="font-size:12px;color:var(--ink-faint);">${rupiah(r.netSalary)}</div>
            </div>
            ${icon('chevron',15,'#8B93A7')}
          </div>`).join('')}
      </div>`}
    </div>
    <div class="card" style="padding:20px;">
      ${!open ? emptyState('file','Pilih periode untuk melihat rincian slip gaji.') : `
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:18px;">
          <div>
            <div style="font-size:12px;color:var(--ink-faint);font-weight:600;">Slip Gaji</div>
            <h3 style="font-size:18px;margin-top:2px;">${monthLabel(open.month)}</h3>
          </div>
          <button class="btn btn-outline" style="font-size:12.5px;padding:8px 12px;" onclick="window.print()">Cetak</button>
        </div>
        <div style="background:var(--bg);border-radius:10px;padding:14px;margin-bottom:14px;">
          <div style="font-size:12.5px;color:var(--ink-faint);">${esc(employee.name)} · ${esc(employee.position)}</div>
        </div>
        <div style="font-size:11.5px;font-weight:700;color:var(--ink-faint);text-transform:uppercase;letter-spacing:.04em;margin-bottom:2px;">Earnings</div>
        ${payslipRow('Gaji Pokok', open.basicSalary)}
        ${payslipRow('Tunjangan Kehadiran', open.allowanceAttendance, 'pos')}
        ${payslipRow('Tunjangan Kinerja Monthly', open.allowancePerformance, 'pos')}
        ${payslipRow('Overtime', open.overtime, 'pos')}
        <div style="border-top:1px dashed var(--border);margin:8px 0;"></div>
        ${payslipRow('Total Earnings', open.totalEarnings, null, true)}
        <div style="font-size:11.5px;font-weight:700;color:var(--ink-faint);text-transform:uppercase;letter-spacing:.04em;margin:16px 0 2px;">Deductions</div>
        ${payslipRow('Potongan Komi (Simpanan Wajib)', -open.deductionKopKomi, 'neg')}
        ${payslipRow('Potongan IHBS Card', -open.deductionIhbs, 'neg')}
        <div style="border-top:1px dashed var(--border);margin:8px 0;"></div>
        ${payslipRow('Total Deductions', -open.totalDeductions, null, true)}
        <div style="border-top:1px solid var(--border);margin:14px 0;"></div>
        ${payslipRow('Total Take Home Pay', open.netSalary, null, true)}
        ${open.notes ? `<div style="margin-top:14px;font-size:12.5px;color:var(--ink-soft);background:var(--bg);padding:10px;border-radius:8px;">Catatan: ${esc(open.notes)}</div>` : ''}
      `}
    </div>
  </div>`;
}
function payslipRow(label, value, kind, bold){
  const color = bold ? 'var(--primary)' : kind==='pos' ? 'var(--success)' : kind==='neg' ? 'var(--danger)' : 'var(--ink)';
  return `<div style="display:flex;justify-content:space-between;padding:7px 0;font-size:${bold?'15px':'13.5px'};font-weight:${bold?'700':'500'};">
    <span style="color:${bold?'var(--ink)':'var(--ink-soft)'};">${label}</span>
    <span class="mono" style="color:${color};">${value<0?'-':''}${rupiah(Math.abs(value))}</span>
  </div>`;
}

/* ---------------------------------------------------------------- */
/* Employee App shell                                                */
/* ---------------------------------------------------------------- */
function renderEmployeeApp(){
  const employee = state.employees.find(e=>e.id===state.currentEmpId);
  if(!employee) return emptyState('user','Karyawan tidak ditemukan.');
  const importantCount = state.announcements.filter(a=>a.important).length;
  const tabs = [
    {id:'absensi', label:'Absensi', icon:'clock'},
    {id:'gaji', label:'Slip Gaji', icon:'wallet'},
    {id:'statistik', label:'Statistik', icon:'chart'},
    {id:'izin', label:'Izin / Sakit', icon:'clipboard'},
    {id:'shift', label:'Ganti/Tukar Shift', icon:'swap'},
    {id:'lembur', label:'Lembur', icon:'moonclock'},
    {id:'absensiRequest', label:'Pengajuan Absensi', icon:'alert'},
    {id:'files', label:'Files', icon:'file'},
    {id:'informasi', label:'Informasi', icon:'info', badge: importantCount || null},
    {id:'profile', label:'Profile', icon:'user'},
  ];
  let content = '';
  if(state.empTab==='absensi'){
    content = `<div style="display:grid;gap:16px;">${renderClockCard(employee)}${renderHistoryTable(employee.id)}</div>`;
  } else if(state.empTab==='gaji'){
    content = renderPayslipView(employee);
  } else if(state.empTab==='statistik'){
    content = renderStatsPanel(employee.id, 'emp-stats-chart', 'statsMonth', 'statsYear');
  } else if(state.empTab==='izin'){
    content = `<div style="display:grid;gap:16px;">
      <button class="btn btn-primary" style="justify-self:start;" data-action="open-leave-form">${icon('plus',16)} Ajukan Izin / Sakit</button>
      ${renderLeaveHistoryList(employee.id)}
    </div>`;
  } else if(state.empTab==='shift'){
    content = `<div style="display:grid;gap:16px;">
      ${renderShiftCalendar(employee.id, 'shiftCalMonth', 'shiftCalYear', {title:'Jadwal Shift Saya'})}
      <button class="btn btn-primary" style="justify-self:start;" data-action="open-shift-form">${icon('swap',16)} Ajukan Ganti/Tukar Shift</button>
      ${renderShiftHistoryList(employee.id)}
    </div>`;
  } else if(state.empTab==='lembur'){
    content = `<div style="display:grid;gap:16px;">
      <button class="btn btn-primary" style="justify-self:start;" data-action="open-overtime-form">${icon('plus',16)} Ajukan Lembur</button>
      ${renderOvertimeHistoryList(employee.id)}
    </div>`;
  } else if(state.empTab==='absensiRequest'){
    content = `<div style="display:grid;gap:16px;">
      <button class="btn btn-primary" style="justify-self:start;" data-action="open-attendance-request-form">${icon('plus',16)} Ajukan Koreksi Absensi</button>
      ${renderAttendanceRequestHistoryList(employee.id)}
    </div>`;
  } else if(state.empTab==='files'){
    content = renderFilesSection(employee.id, {title:'Files'});
  } else if(state.empTab==='informasi'){
    content = renderEmployeeAnnouncements();
  } else if(state.empTab==='profile'){
    content = renderEmployeeProfile(employee);
  }
  return `
  <div style="max-width:880px;margin:0 auto;padding:20px 16px 60px;">
    ${topBar(employee.name, employee.position, employee.photo)}
    <div style="margin-top:18px;margin-bottom:18px;">
      <div class="tab-row">
        ${tabs.map(t=>`<div class="tab-item ${state.empTab===t.id?'active':''}" data-action="emp-tab" data-tab="${t.id}">${icon(t.icon,15)} ${t.label}
          ${t.badge ? `<span style="background:var(--danger);color:#fff;font-size:10px;font-weight:700;border-radius:999px;padding:1px 6px;">${t.badge}</span>` : ''}
        </div>`).join('')}
      </div>
    </div>
    ${content}
  </div>
  ${state.modal && state.modal.type==='leaveForm' ? renderLeaveFormModal() : ''}
  ${state.modal && state.modal.type==='shiftForm' ? renderShiftFormModal() : ''}
  ${state.modal && state.modal.type==='overtimeForm' ? renderOvertimeFormModal() : ''}
  ${state.modal && state.modal.type==='attendanceRequestForm' ? renderAttendanceRequestFormModal() : ''}
  `;
}

/* ---------------------------------------------------------------- */
/* HRD: Dashboard                                                    */
/* ---------------------------------------------------------------- */
function statCard(label, value, color, iconName){
  return `<div class="card" style="padding:16px;">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;">
      <div>
        <div style="font-size:24px;font-weight:700;color:${color};">${value}</div>
        <div style="font-size:11.5px;color:var(--ink-faint);font-weight:600;margin-top:2px;">${label}</div>
      </div>
      <div style="background:${color}1a;color:${color};border-radius:8px;padding:7px;">${icon(iconName,15,color)}</div>
    </div>
  </div>`;
}
function renderHrdDashboard(){
  const today = dateKey(new Date());
  const todayRecords = state.attendance.filter(a=>a.date===today);
  const hadir = todayRecords.filter(a=>a.status==='Hadir'||a.status==='Terlambat').length;
  const izin = todayRecords.filter(a=>a.status==='Izin').length;
  const sakit = todayRecords.filter(a=>a.status==='Sakit').length;
  const alpha = Math.max(state.employees.length - todayRecords.length, 0);
  const pendingLeaves = state.leaveRequests.filter(l=>l.status==='pending').length;

  return `
  <div style="display:grid;gap:16px;">
    <div class="statgrid">
      ${statCard('Total Karyawan', state.employees.length, 'var(--ink)', 'users')}
      ${statCard('Hadir Hari Ini', hadir, 'var(--success)', 'check')}
      ${statCard('Izin', izin, 'var(--warning)', 'clipboard')}
      ${statCard('Sakit', sakit, 'var(--info)', 'alert')}
      ${statCard('Alpha', alpha, 'var(--danger)', 'x')}
      ${statCard('Izin Menunggu', pendingLeaves, 'var(--accent)', 'calclock')}
    </div>
    <div class="card" style="padding:20px;">
      <h3 style="font-size:15px;margin-bottom:14px;">Status Kehadiran Hari Ini — ${prettyDate(today)}</h3>
      ${state.employees.length===0 ? emptyState('users','Belum ada karyawan.') : `
      <div style="overflow-x:auto;">
        <table>
          <thead><tr><th>Karyawan</th><th>Masuk</th><th>Keluar</th><th>Status</th><th>Lokasi Masuk</th></tr></thead>
          <tbody>
            ${state.employees.map(e=>{
              const rec = todayRecords.find(a=>a.employeeId===e.id);
              return `<tr>
                <td style="font-weight:600;">${esc(e.name)}<div style="font-weight:400;font-size:11.5px;color:var(--ink-faint);">${esc(e.position)}</div></td>
                <td class="mono">${rec?.clockIn || '-'}</td>
                <td class="mono">${rec?.clockOut || '-'}</td>
                <td>${badge(rec?.status || 'Alpha')}</td>
                <td>${rec ? `<button class="btn btn-ghost" style="padding:5px 8px;font-size:11.5px;white-space:nowrap;" data-action="view-att-detail" data-id="${rec.id}">${icon('mappin',13)} ${rec.clockInLoc ? 'Lihat Peta' : 'Detail'}</button>` : '<span style="color:var(--ink-faint);font-size:12px;">-</span>'}</td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>`}
    </div>
  </div>
  ${state.modal && state.modal.type==='attDetail' ? renderAttendanceDetailModal(state.modal.id) : ''}`;
}

/* ---------------------------------------------------------------- */
/* HRD: Employees                                                    */
/* ---------------------------------------------------------------- */
function renderHrdEmployees(){
  const detailEmp = state.employees.find(e=>e.id===state.hrdEmployeeDetailId);
  if(detailEmp){
    return `
    <div style="display:grid;gap:16px;">
      <button class="btn btn-ghost" style="padding:4px 6px;font-size:12.5px;justify-self:start;" data-action="hrd-back-employees">${icon('arrowleft',14)} Kembali ke daftar karyawan</button>
      <div class="card" style="padding:18px;display:flex;justify-content:space-between;align-items:flex-start;gap:12px;flex-wrap:wrap;">
        <div>
          <div style="font-weight:700;font-size:16px;">${esc(detailEmp.name)}</div>
          <div style="font-size:12.5px;color:var(--ink-faint);margin-top:2px;">${esc(detailEmp.position)} · ${esc(detailEmp.dept)} · Bergabung ${prettyDate(detailEmp.joinDate)}</div>
        </div>
        <button class="btn btn-outline" style="font-size:12.5px;padding:8px 12px;color:var(--danger);border-color:#F0C9C3;" data-action="open-delete-employee" data-id="${detailEmp.id}">${icon('trash',14)} Hapus Karyawan</button>
      </div>
      ${detailEmp.uid ? `
      <div class="card" style="padding:14px 16px;display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;">
        <div>
          <div style="font-size:11.5px;font-weight:700;color:var(--ink-faint);text-transform:uppercase;letter-spacing:.04em;">Akses Admin (HRD)</div>
          <div style="font-size:12.5px;color:var(--ink-soft);margin-top:3px;">Untuk memberi akses admin ke karyawan ini, jalankan skrip administrator (custom claim <span class="mono">role:'hrd'</span>) memakai UID berikut:</div>
          <div class="mono" style="margin-top:6px;font-size:12.5px;background:var(--bg);padding:6px 10px;border-radius:8px;border:1px solid var(--border);display:inline-block;">${esc(detailEmp.uid)}</div>
        </div>
        <button class="btn btn-outline" style="font-size:12px;padding:8px 12px;" onclick="navigator.clipboard && navigator.clipboard.writeText('${esc(detailEmp.uid)}')">${icon('clipboard',14)} Salin UID</button>
      </div>` : ''}
      ${renderStatsPanel(detailEmp.id, 'hrd-emp-detail-chart', 'statsMonth', 'statsYear')}
      ${renderHistoryTable(detailEmp.id)}
    </div>
    ${state.modal && state.modal.type==='deleteEmployee' ? renderDeleteEmployeeModal(state.modal.empId) : ''}
    `;
  }
  return `
  <div style="display:grid;gap:16px;">
    <div style="display:flex;justify-content:space-between;align-items:center;">
      <h3 style="font-size:15px;">Daftar Karyawan</h3>
      <button class="btn btn-primary" style="font-size:12.5px;padding:8px 12px;" data-action="open-add-employee">${icon('plus',15)} Tambah Karyawan</button>
    </div>
    <div class="card" style="padding:0;">
      ${state.employees.length===0 ? emptyState('users','Belum ada karyawan terdaftar.') : `
      <div style="overflow-x:auto;">
        <table>
          <thead><tr><th>Nama</th><th>Jabatan</th><th>Departemen</th><th>Bergabung</th><th></th><th></th></tr></thead>
          <tbody>
            ${state.employees.map(e=>`<tr>
              <td style="cursor:pointer;font-weight:600;" data-action="hrd-open-employee" data-id="${e.id}">${esc(e.name)}</td>
              <td style="cursor:pointer;" data-action="hrd-open-employee" data-id="${e.id}">${esc(e.position)}</td>
              <td style="cursor:pointer;" data-action="hrd-open-employee" data-id="${e.id}">${esc(e.dept)}</td>
              <td style="cursor:pointer;font-size:12.5px;color:var(--ink-faint);" data-action="hrd-open-employee" data-id="${e.id}">${prettyDate(e.joinDate)}</td>
              <td style="cursor:pointer;" data-action="hrd-open-employee" data-id="${e.id}">${icon('chevron',15,'#8B93A7')}</td>
              <td><button class="btn btn-ghost" style="padding:6px;color:var(--danger);" data-action="open-delete-employee" data-id="${e.id}">${icon('trash',15)}</button></td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>`}
    </div>
  </div>
  ${state.modal && state.modal.type==='addEmployee' ? renderAddEmployeeModal() : ''}
  ${state.modal && state.modal.type==='deleteEmployee' ? renderDeleteEmployeeModal(state.modal.empId) : ''}
  `;
}
function renderDeleteEmployeeModal(empId){
  const emp = state.employees.find(e=>e.id===empId);
  if(!emp) return '';
  return `
  <div class="modal-overlay" data-action="close-modal-overlay">
    <div class="modal" style="max-width:400px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
        <h3 style="font-size:16px;font-weight:700;color:var(--danger);">Hapus Karyawan</h3>
        <button class="btn btn-ghost" style="padding:6px;" data-action="close-modal">${icon('x',18)}</button>
      </div>
      <div style="font-size:13.5px;color:var(--ink-soft);line-height:1.6;">
        Yakin ingin menghapus <strong style="color:var(--ink);">${esc(emp.name)}</strong>? Seluruh data absensi, izin, permintaan shift, dan slip gaji milik karyawan ini akan ikut terhapus. Tindakan ini tidak dapat dibatalkan.
      </div>
      <div style="display:flex;gap:8px;margin-top:18px;">
        <button class="btn btn-outline" style="flex:1;" data-action="close-modal">Batal</button>
        <button class="btn btn-danger" style="flex:1;" data-action="confirm-delete-employee" data-id="${emp.id}">${icon('trash',15)} Hapus</button>
      </div>
    </div>
  </div>`;
}
function renderResetStatsModal(){
  return `
  <div class="modal-overlay" data-action="close-modal-overlay">
    <div class="modal" style="max-width:400px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
        <h3 style="font-size:16px;font-weight:700;color:var(--danger);">Reset Data Absensi</h3>
        <button class="btn btn-ghost" style="padding:6px;" data-action="close-modal">${icon('x',18)}</button>
      </div>
      <div style="font-size:13.5px;color:var(--ink-soft);line-height:1.6;">
        Semua riwayat absensi (clock-in/out) untuk <strong style="color:var(--ink);">seluruh karyawan</strong> akan dihapus sehingga statistik kembali ke 0, seperti akun baru. Data karyawan, slip gaji, dan pengajuan lainnya tidak terhapus. Tindakan ini tidak dapat dibatalkan.
      </div>
      <div style="display:flex;gap:8px;margin-top:18px;">
        <button class="btn btn-outline" style="flex:1;" data-action="close-modal">Batal</button>
        <button class="btn btn-danger" style="flex:1;" data-action="confirm-reset-stats">${icon('trash',15)} Reset ke 0</button>
      </div>
    </div>
  </div>`;
}
function renderAddEmployeeModal(){
  return `
  <div class="modal-overlay" data-action="close-modal-overlay">
    <div class="modal">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
        <h3 style="font-size:17px;font-weight:700;">Tambah Karyawan</h3>
        <button class="btn btn-ghost" style="padding:6px;" data-action="close-modal">${icon('x',18)}</button>
      </div>
      <div style="display:grid;gap:12px;">
        <div><label>Nama lengkap</label><input id="ae-name" placeholder="Nama karyawan"></div>
        <div><label>Jabatan</label><input id="ae-position" placeholder="Contoh: Staff Marketing"></div>
        <div><label>Departemen</label><input id="ae-dept" placeholder="Contoh: Marketing"></div>
        <div><label>Tanggal bergabung</label><input type="date" id="ae-join" value="${dateKey(new Date())}"></div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <div><label>Username login</label><input id="ae-username" placeholder="Contoh: dewi" autocomplete="off"></div>
          <div><label>Password login</label><input type="password" id="ae-password" placeholder="Password" autocomplete="new-password"></div>
        </div>
        <div id="ae-error" style="font-size:12px;color:var(--danger);min-height:14px;"></div>
        <button class="btn btn-primary" data-action="submit-add-employee">Simpan Karyawan</button>
      </div>
    </div>
  </div>`;
}

/* ---------------------------------------------------------------- */
/* HRD: Approvals                                                    */
/* ---------------------------------------------------------------- */
function renderHrdApprovals(){
  const empName = id => { const e = state.employees.find(x=>x.id===id); return e ? e.name : id; };
  const pending = state.leaveRequests.filter(l=>l.status==='pending').sort((a,b)=>a.submittedAt-b.submittedAt);
  const done = state.leaveRequests.filter(l=>l.status!=='pending').sort((a,b)=>b.submittedAt-a.submittedAt);
  return `
  <div style="display:grid;gap:16px;">
    <div class="card" style="padding:0;">
      <div style="padding:16px 18px 10px;"><h3 style="font-size:15px;">Menunggu Persetujuan (${pending.length})</h3></div>
      ${pending.length===0 ? emptyState('check','Tidak ada pengajuan yang menunggu.') : `
      <div style="padding:0 18px 16px;display:grid;gap:10px;">
        ${pending.map(l=>`
        <div style="background:var(--bg);border-radius:10px;padding:14px;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:8px;">
            <div>
              <div style="font-weight:700;font-size:13.5px;">${esc(empName(l.employeeId))} · <span style="color:${STATUS_COLOR[l.type]};">${esc(l.type)}</span></div>
              <div style="font-size:12.5px;color:var(--ink-soft);margin-top:2px;">${prettyDate(l.startDate)}${l.startDate!==l.endDate ? ' – '+prettyDate(l.endDate) : ''}</div>
              <div style="font-size:12px;color:var(--ink-faint);margin-top:4px;">${esc(l.reason)}</div>
            </div>
            <div style="display:flex;gap:6px;">
              <button class="btn btn-primary" style="padding:7px 10px;font-size:12px;" data-action="decide-leave" data-id="${l.id}" data-decision="approved">${icon('check',14)} Setujui</button>
              <button class="btn btn-outline" style="padding:7px 10px;font-size:12px;" data-action="decide-leave" data-id="${l.id}" data-decision="rejected">${icon('x',14)} Tolak</button>
            </div>
          </div>
        </div>`).join('')}
      </div>`}
    </div>
    <div class="card" style="padding:0;">
      <div style="padding:16px 18px 10px;"><h3 style="font-size:15px;">Riwayat Keputusan</h3></div>
      ${done.length===0 ? emptyState('clipboard','Belum ada riwayat keputusan.') : `
      <div style="overflow-x:auto;">
        <table>
          <thead><tr><th>Karyawan</th><th>Jenis</th><th>Tanggal</th><th>Status</th></tr></thead>
          <tbody>
            ${done.map(l=>{ const approved = l.status==='approved';
              return `<tr>
                <td style="font-weight:600;">${esc(empName(l.employeeId))}</td>
                <td>${esc(l.type)}</td>
                <td style="font-size:12.5px;">${prettyDate(l.startDate)}${l.startDate!==l.endDate ? ' – '+prettyDate(l.endDate) : ''}</td>
                <td><span class="badge" style="background:${approved?'#2F9E6F1a':'#C0392B1a'};color:${approved?'#2F9E6F':'#C0392B'};">${approved?'Disetujui':'Ditolak'}</span></td>
              </tr>`;}).join('')}
          </tbody>
        </table>
      </div>`}
    </div>
  </div>`;
}

/* ---------------------------------------------------------------- */
/* HRD: Shift request approvals                                      */
/* ---------------------------------------------------------------- */
function renderHrdShiftApprovals(){
  const empName = id => { const e = state.employees.find(x=>x.id===id); return e ? e.name : id; };
  const pending = state.shiftRequests.filter(s=>s.status==='pending').sort((a,b)=>a.submittedAt-b.submittedAt);
  const done = state.shiftRequests.filter(s=>s.status!=='pending').sort((a,b)=>b.submittedAt-a.submittedAt);
  return `
  <div style="display:grid;gap:16px;">
    <div class="card" style="padding:0;">
      <div style="padding:16px 18px 10px;"><h3 style="font-size:15px;">Menunggu Persetujuan (${pending.length})</h3></div>
      ${pending.length===0 ? emptyState('check','Tidak ada permintaan shift yang menunggu.') : `
      <div style="padding:0 18px 16px;display:grid;gap:10px;">
        ${pending.map(s=>{
          const partner = s.partnerId ? empName(s.partnerId) : null;
          return `
        <div style="background:var(--bg);border-radius:10px;padding:14px;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:8px;">
            <div>
              <div style="font-weight:700;font-size:13.5px;">${esc(empName(s.employeeId))} · <span style="color:var(--primary);">${esc(s.type)}</span></div>
              <div style="font-size:12.5px;color:var(--ink-soft);margin-top:2px;">${prettyDate(s.date)} · Shift ${esc(shiftLabel(s.currentShift))}${s.type==='Ganti Shift' ? ` &rarr; ${esc(shiftLabel(s.requestedShift))}` : partner ? ` dengan ${esc(partner)}` : ''}</div>
              <div style="font-size:12px;color:var(--ink-faint);margin-top:4px;">${esc(s.reason)}</div>
            </div>
            <div style="display:flex;gap:6px;">
              <button class="btn btn-primary" style="padding:7px 10px;font-size:12px;" data-action="decide-shift" data-id="${s.id}" data-decision="approved">${icon('check',14)} Setujui</button>
              <button class="btn btn-outline" style="padding:7px 10px;font-size:12px;" data-action="decide-shift" data-id="${s.id}" data-decision="rejected">${icon('x',14)} Tolak</button>
            </div>
          </div>
        </div>`;}).join('')}
      </div>`}
    </div>
    <div class="card" style="padding:0;">
      <div style="padding:16px 18px 10px;"><h3 style="font-size:15px;">Riwayat Keputusan</h3></div>
      ${done.length===0 ? emptyState('swap','Belum ada riwayat keputusan.') : `
      <div style="overflow-x:auto;">
        <table>
          <thead><tr><th>Karyawan</th><th>Jenis</th><th>Tanggal</th><th>Status</th></tr></thead>
          <tbody>
            ${done.map(s=>{ const approved = s.status==='approved';
              return `<tr>
                <td style="font-weight:600;">${esc(empName(s.employeeId))}</td>
                <td>${esc(s.type)}</td>
                <td style="font-size:12.5px;">${prettyDate(s.date)}</td>
                <td><span class="badge" style="background:${approved?'#2F9E6F1a':'#C0392B1a'};color:${approved?'#2F9E6F':'#C0392B'};">${approved?'Disetujui':'Ditolak'}</span></td>
              </tr>`;}).join('')}
          </tbody>
        </table>
      </div>`}
    </div>
  </div>`;
}

/* ---------------------------------------------------------------- */
/* HRD: Jadwal Shift (kalender bulanan per karyawan)                 */
/* ---------------------------------------------------------------- */
function renderHrdShiftSchedule(){
  if(state.employees.length===0) return emptyState('users','Belum ada karyawan terdaftar.');
  if(!state.hrdShiftEmpId || !state.employees.some(e=>e.id===state.hrdShiftEmpId)){
    state.hrdShiftEmpId = state.employees[0].id;
  }
  const emp = state.employees.find(e=>e.id===state.hrdShiftEmpId);
  return `
  <div style="display:grid;gap:16px;">
    <div class="card" style="padding:16px 18px;">
      <label>Pilih Karyawan</label>
      <select style="max-width:340px;" data-bind="hrdShiftEmpId">
        ${state.employees.map(e=>`<option value="${e.id}" ${state.hrdShiftEmpId===e.id?'selected':''}>${esc(e.name)} · ${esc(e.position)}</option>`).join('')}
      </select>
    </div>
    ${renderShiftCalendar(emp.id, 'hrdShiftMonth', 'hrdShiftYear', {editable:true, title:`Jadwal Shift — ${emp.name}`})}
  </div>
  ${state.modal && state.modal.type==='setShift' ? renderSetShiftDayModal() : ''}`;
}

/* ---------------------------------------------------------------- */
/* HRD: Lembur (Overtime) approvals                                  */
/* ---------------------------------------------------------------- */
function renderHrdOvertimeApprovals(){
  const empName = id => { const e = state.employees.find(x=>x.id===id); return e ? e.name : id; };
  const pending = state.overtimeRequests.filter(o=>o.status==='pending').sort((a,b)=>a.submittedAt-b.submittedAt);
  const done = state.overtimeRequests.filter(o=>o.status!=='pending').sort((a,b)=>b.submittedAt-a.submittedAt);
  return `
  <div style="display:grid;gap:16px;">
    <div class="card" style="padding:0;">
      <div style="padding:16px 18px 10px;"><h3 style="font-size:15px;">Menunggu Persetujuan (${pending.length})</h3></div>
      ${pending.length===0 ? emptyState('check','Tidak ada pengajuan lembur yang menunggu.') : `
      <div style="padding:0 18px 16px;display:grid;gap:10px;">
        ${pending.map(o=>`
        <div style="background:var(--bg);border-radius:10px;padding:14px;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:8px;">
            <div>
              <div style="font-weight:700;font-size:13.5px;">${esc(empName(o.employeeId))}</div>
              <div style="font-size:12.5px;color:var(--ink-soft);margin-top:2px;">${prettyDate(o.date)} · <span class="mono">${esc(o.start)} – ${esc(o.end)}</span></div>
              <div style="font-size:12px;color:var(--ink-faint);margin-top:4px;">${esc(o.reason)}</div>
            </div>
            <div style="display:flex;gap:6px;">
              <button class="btn btn-primary" style="padding:7px 10px;font-size:12px;" data-action="decide-overtime" data-id="${o.id}" data-decision="approved">${icon('check',14)} Setujui</button>
              <button class="btn btn-outline" style="padding:7px 10px;font-size:12px;" data-action="decide-overtime" data-id="${o.id}" data-decision="rejected">${icon('x',14)} Tolak</button>
            </div>
          </div>
        </div>`).join('')}
      </div>`}
    </div>
    <div class="card" style="padding:0;">
      <div style="padding:16px 18px 10px;"><h3 style="font-size:15px;">Riwayat Keputusan</h3></div>
      ${done.length===0 ? emptyState('moonclock','Belum ada riwayat keputusan.') : `
      <div style="overflow-x:auto;">
        <table>
          <thead><tr><th>Karyawan</th><th>Tanggal</th><th>Jam</th><th>Status</th></tr></thead>
          <tbody>
            ${done.map(o=>{ const approved = o.status==='approved';
              return `<tr>
                <td style="font-weight:600;">${esc(empName(o.employeeId))}</td>
                <td style="font-size:12.5px;">${prettyDate(o.date)}</td>
                <td class="mono" style="font-size:12.5px;">${esc(o.start)} – ${esc(o.end)}</td>
                <td><span class="badge" style="background:${approved?'#2F9E6F1a':'#C0392B1a'};color:${approved?'#2F9E6F':'#C0392B'};">${approved?'Disetujui':'Ditolak'}</span></td>
              </tr>`;}).join('')}
          </tbody>
        </table>
      </div>`}
    </div>
  </div>`;
}

/* ---------------------------------------------------------------- */
/* HRD: Pengajuan Absensi approvals                                   */
/* ---------------------------------------------------------------- */
function renderHrdAttendanceRequestApprovals(){
  const empName = id => { const e = state.employees.find(x=>x.id===id); return e ? e.name : id; };
  const pending = state.attendanceRequests.filter(a=>a.status==='pending').sort((a,b)=>a.submittedAt-b.submittedAt);
  const done = state.attendanceRequests.filter(a=>a.status!=='pending').sort((a,b)=>b.submittedAt-a.submittedAt);
  return `
  <div style="display:grid;gap:16px;">
    <div class="card" style="padding:0;">
      <div style="padding:16px 18px 10px;"><h3 style="font-size:15px;">Menunggu Persetujuan (${pending.length})</h3></div>
      ${pending.length===0 ? emptyState('check','Tidak ada pengajuan absensi yang menunggu.') : `
      <div style="padding:0 18px 16px;display:grid;gap:10px;">
        ${pending.map(a=>`
        <div style="background:var(--bg);border-radius:10px;padding:14px;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:8px;">
            <div>
              <div style="font-weight:700;font-size:13.5px;">${esc(empName(a.employeeId))} · <span style="color:var(--primary);">${esc(a.type)}</span></div>
              <div style="font-size:12.5px;color:var(--ink-soft);margin-top:2px;">${prettyDate(a.date)}
                ${a.requestedClockIn ? ` · Masuk: <span class="mono">${esc(a.requestedClockIn)}</span>` : ''}
                ${a.requestedClockOut ? ` · Keluar: <span class="mono">${esc(a.requestedClockOut)}</span>` : ''}
              </div>
              <div style="font-size:12px;color:var(--ink-faint);margin-top:4px;">${esc(a.reason)}</div>
            </div>
            <div style="display:flex;gap:6px;">
              <button class="btn btn-primary" style="padding:7px 10px;font-size:12px;" data-action="decide-attendance-request" data-id="${a.id}" data-decision="approved">${icon('check',14)} Setujui</button>
              <button class="btn btn-outline" style="padding:7px 10px;font-size:12px;" data-action="decide-attendance-request" data-id="${a.id}" data-decision="rejected">${icon('x',14)} Tolak</button>
            </div>
          </div>
        </div>`).join('')}
      </div>`}
    </div>
    <div class="card" style="padding:0;">
      <div style="padding:16px 18px 10px;"><h3 style="font-size:15px;">Riwayat Keputusan</h3></div>
      ${done.length===0 ? emptyState('clipboard','Belum ada riwayat keputusan.') : `
      <div style="overflow-x:auto;">
        <table>
          <thead><tr><th>Karyawan</th><th>Jenis</th><th>Tanggal</th><th>Status</th></tr></thead>
          <tbody>
            ${done.map(a=>{ const approved = a.status==='approved';
              return `<tr>
                <td style="font-weight:600;">${esc(empName(a.employeeId))}</td>
                <td style="font-size:12.5px;">${esc(a.type)}</td>
                <td style="font-size:12.5px;">${prettyDate(a.date)}</td>
                <td><span class="badge" style="background:${approved?'#2F9E6F1a':'#C0392B1a'};color:${approved?'#2F9E6F':'#C0392B'};">${approved?'Disetujui':'Ditolak'}</span></td>
              </tr>`;}).join('')}
          </tbody>
        </table>
      </div>`}
    </div>
  </div>`;
}

/* ---------------------------------------------------------------- */
/* HRD: Files (semua file karyawan)                                   */
/* ---------------------------------------------------------------- */
function renderHrdFiles(){
  const rows = [...state.files].sort((a,b)=>b.uploadedAt-a.uploadedAt);
  return `
  <div style="display:grid;gap:16px;">
    <h3 style="font-size:15px;">File Karyawan</h3>
    <div class="card" style="padding:18px;">
      ${rows.length===0 ? emptyState('file','Belum ada file yang diunggah karyawan.') : `
      <div style="display:grid;gap:8px;">
        ${rows.map(f=>{ const owner = state.employees.find(e=>e.id===f.employeeId);
          return `
        <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;background:var(--bg);border-radius:10px;padding:10px 12px;">
          <div style="display:flex;align-items:center;gap:10px;min-width:0;">
            <div style="width:34px;height:34px;border-radius:8px;background:var(--primary-soft);color:var(--primary);display:flex;align-items:center;justify-content:center;flex-shrink:0;">${icon('file',16,'#25473D')}</div>
            <div style="min-width:0;">
              <div style="font-weight:600;font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:260px;">${esc(f.name)}</div>
              <div style="font-size:11px;color:var(--ink-faint);">${esc(owner?owner.name:'-')} · ${formatFileSize(f.size)} · ${prettyDate(dateKey(new Date(f.uploadedAt)))}</div>
            </div>
          </div>
          <div style="display:flex;gap:4px;flex-shrink:0;">
            <a class="btn btn-ghost" style="padding:6px;" href="${f.dataUrl}" download="${esc(f.name)}" title="Unduh">${icon('download',15)}</a>
            <button class="btn btn-ghost" style="padding:6px;color:var(--danger);" data-action="delete-file" data-id="${f.id}" title="Hapus">${icon('trash',15)}</button>
          </div>
        </div>`;}).join('')}
      </div>`}
    </div>
  </div>`;
}

/* ---------------------------------------------------------------- */
/* HRD: Informasi / Pengumuman untuk Karyawan                        */
/* ---------------------------------------------------------------- */
function renderHrdAnnouncements(){
  const rows = [...state.announcements].sort((a,b)=>b.createdAt-a.createdAt);
  return `
  <div style="display:grid;gap:16px;">
    <div style="display:flex;justify-content:space-between;align-items:center;">
      <h3 style="font-size:15px;">Informasi untuk Karyawan</h3>
      <button class="btn btn-primary" style="font-size:12.5px;padding:8px 12px;" data-action="open-add-announcement">${icon('plus',15)} Buat Informasi</button>
    </div>
    <div class="card" style="padding:0;">
      ${rows.length===0 ? emptyState('info','Belum ada informasi yang dibuat.') : `
      <div style="padding:12px 18px 16px;display:grid;gap:10px;">
        ${rows.map(a=>`
        <div style="background:${a.important?'#FCEDEC':'var(--bg)'};border-radius:10px;padding:14px;border:1px solid ${a.important?'#F0C9C3':'transparent'};">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;">
            <div style="font-weight:700;font-size:14px;display:flex;align-items:center;gap:6px;">
              ${a.important ? icon('alert',15,'#C0392B') : icon('info',15,'#25473D')} ${esc(a.title)}
              ${a.important ? `<span class="badge" style="background:#C0392B1a;color:#C0392B;">Penting</span>` : ''}
            </div>
            <button class="btn btn-ghost" style="padding:6px;color:var(--danger);flex-shrink:0;" data-action="delete-announcement" data-id="${a.id}">${icon('trash',14)}</button>
          </div>
          <div style="color:var(--ink-soft);font-size:13px;margin-top:6px;white-space:pre-wrap;">${esc(a.message)}</div>
          <div style="color:var(--ink-faint);font-size:11.5px;margin-top:8px;">${prettyDate(dateKey(new Date(a.createdAt)))}</div>
        </div>`).join('')}
      </div>`}
    </div>
  </div>
  ${state.modal && state.modal.type==='announcementForm' ? renderAnnouncementFormModal() : ''}
  `;
}
function renderAnnouncementFormModal(){
  return `
  <div class="modal-overlay" data-action="close-modal-overlay">
    <div class="modal">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
        <h3 style="font-size:17px;font-weight:700;">Buat Informasi</h3>
        <button class="btn btn-ghost" style="padding:6px;" data-action="close-modal">${icon('x',18)}</button>
      </div>
      <div style="display:grid;gap:12px;">
        <div><label>Judul</label><input id="an-title" placeholder="Contoh: Perubahan Jam Kerja"></div>
        <div><label>Isi Informasi</label><textarea rows="4" id="an-message" placeholder="Tuliskan detail informasi..."></textarea></div>
        <label style="display:flex;align-items:center;gap:8px;font-size:13px;font-weight:600;color:var(--ink);cursor:pointer;">
          <input type="checkbox" id="an-important" style="width:auto;"> Tandai sebagai informasi penting
        </label>
        <button class="btn btn-primary" data-action="submit-announcement">Publikasikan</button>
      </div>
    </div>
  </div>`;
}
/* ---------------------------------------------------------------- */
/* HRD: Payslips                                                     */
/* ---------------------------------------------------------------- */
function renderHrdPayslips(){
  return `
  <div style="display:grid;gap:16px;">
    <div style="display:flex;justify-content:space-between;align-items:center;">
      <h3 style="font-size:15px;">Kelola Slip Gaji</h3>
      <button class="btn btn-primary" style="font-size:12.5px;padding:8px 12px;" data-action="open-payslip-form">${icon('plus',15)} Buat / Perbarui Slip</button>
    </div>
    <div class="card" style="padding:0;">
      ${state.payslips.length===0 ? emptyState('wallet','Belum ada slip gaji dibuat.') : `
      <div style="overflow-x:auto;">
        <table>
          <thead><tr><th>Karyawan</th><th>Periode</th><th>Total Gaji Take Home</th><th></th></tr></thead>
          <tbody>
            ${[...state.payslips].sort((a,b)=>a.month<b.month?1:-1).map(p=>{
              const emp = state.employees.find(e=>e.id===p.employeeId);
              return `<tr style="cursor:pointer;" data-action="open-payslip-form" data-id="${p.id}">
                <td style="font-weight:600;">${esc(emp ? emp.name : p.employeeId)}</td>
                <td>${monthLabel(p.month)}</td>
                <td class="mono">${rupiah(p.netSalary)}</td>
                <td>${icon('chevron',15,'#8B93A7')}</td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>`}
    </div>
  </div>
  ${state.modal && state.modal.type==='payslipForm' ? renderPayslipFormModal(state.modal.payslipId) : ''}
  `;
}
function renderPayslipFormModal(existingId){
  const initial = state.payslips.find(p=>p.id===existingId) || null;
  const now = new Date();
  const defaultMonth = `${now.getFullYear()}-${pad(now.getMonth()+1)}`;
  return `
  <div class="modal-overlay" data-action="close-modal-overlay">
    <div class="modal">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
        <h3 style="font-size:17px;font-weight:700;">${initial ? 'Perbarui Slip Gaji' : 'Buat Slip Gaji'}</h3>
        <button class="btn btn-ghost" style="padding:6px;" data-action="close-modal">${icon('x',18)}</button>
      </div>
      <div style="display:grid;gap:12px;">
        <div><label>Karyawan</label>
          <select id="ps-employee" ${initial ? 'disabled' : ''}>
            ${state.employees.map(e=>`<option value="${e.id}" ${(initial?initial.employeeId:state.employees[0]?.id)===e.id?'selected':''}>${esc(e.name)}</option>`).join('')}
          </select>
        </div>
        <div><label>Periode (bulan)</label><input type="month" id="ps-month" value="${initial ? initial.month : defaultMonth}" ${initial ? 'disabled' : ''}></div>

        <div style="font-size:11.5px;font-weight:700;color:var(--ink-faint);text-transform:uppercase;letter-spacing:.04em;margin-top:4px;">Earnings</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <div><label>Gaji Pokok</label><input type="number" id="ps-basic" value="${initial ? initial.basicSalary : 0}" oninput="updatePayslipPreview()"></div>
          <div><label>Tunjangan Kehadiran</label><input type="number" id="ps-allowance-kehadiran" value="${initial ? initial.allowanceAttendance : 0}" oninput="updatePayslipPreview()"></div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <div><label>Tunjangan Kinerja Monthly</label><input type="number" id="ps-allowance-kinerja" value="${initial ? initial.allowancePerformance : 0}" oninput="updatePayslipPreview()"></div>
          <div><label>Overtime</label><input type="number" id="ps-overtime" value="${initial ? initial.overtime : 0}" oninput="updatePayslipPreview()"></div>
        </div>

        <div style="font-size:11.5px;font-weight:700;color:var(--ink-faint);text-transform:uppercase;letter-spacing:.04em;margin-top:8px;">Deductions</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <div><label>Potongan Komi (Simpanan Wajib)</label><input type="number" id="ps-deduction-komi" value="${initial ? initial.deductionKopKomi : 0}" oninput="updatePayslipPreview()"></div>
          <div><label>Potongan IHBS Card</label><input type="number" id="ps-deduction-ihbs" value="${initial ? initial.deductionIhbs : 0}" oninput="updatePayslipPreview()"></div>
        </div>

        <div class="card" style="padding:12px 14px;background:var(--primary-soft);border-color:var(--primary-line);display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:13px;font-weight:700;color:var(--primary);">Total Gaji Take Home</span>
          <span id="ps-preview-total" class="mono" style="font-size:16px;font-weight:700;color:var(--primary);">${rupiah(initial ? initial.netSalary : 0)}</span>
        </div>

        <div><label>Catatan (opsional)</label><textarea rows="2" id="ps-notes">${initial ? esc(initial.notes||'') : ''}</textarea></div>
        <button class="btn btn-primary" data-action="submit-payslip" data-id="${existingId || ''}">Simpan Slip Gaji</button>
      </div>
    </div>
  </div>`;
}
// Menghitung ulang Total Gaji Take Home secara langsung (live) saat HRD mengisi
// form slip gaji, tanpa perlu render ulang seluruh form (biar fokus input tidak hilang).
function updatePayslipPreview(){
  const val = id => Number(document.getElementById(id)?.value) || 0;
  const totalEarnings = val('ps-basic') + val('ps-allowance-kehadiran') + val('ps-allowance-kinerja') + val('ps-overtime');
  const totalDeductions = val('ps-deduction-komi') + val('ps-deduction-ihbs');
  const netSalary = totalEarnings - totalDeductions;
  const out = document.getElementById('ps-preview-total');
  if(out) out.textContent = rupiah(netSalary);
}

/* ---------------------------------------------------------------- */
/* HRD: Company stats                                                */
/* ---------------------------------------------------------------- */
function renderHrdStats(){
  const monthIdx = state.hrdStatsMonth, year = state.hrdStatsYear;
  const perEmployee = state.employees.map(e=>({e, stats: computeStats(e.id, year, monthIdx, state.attendance)}));
  const totals = perEmployee.reduce((acc,{stats})=>{ ['Hadir','Terlambat','Izin','Sakit','Alpha'].forEach(k=>acc[k]+=stats[k]); return acc; }, {Hadir:0,Terlambat:0,Izin:0,Sakit:0,Alpha:0});
  const nowY = new Date().getFullYear();
  return `
  <div style="display:grid;gap:16px;">
    <div class="card" style="padding:20px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;flex-wrap:wrap;gap:10px;">
        <h3 style="font-size:15px;">Statistik Kehadiran Perusahaan</h3>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <select style="width:140px;" data-bind="hrdStatsMonth" data-parse="int">
            ${MONTH_NAMES.map((m,i)=>`<option value="${i}" ${monthIdx===i?'selected':''}>${m}</option>`).join('')}
          </select>
          <select style="width:90px;" data-bind="hrdStatsYear" data-parse="int">
            ${[nowY-1, nowY].map(y=>`<option value="${y}" ${year===y?'selected':''}>${y}</option>`).join('')}
          </select>
          <button class="btn btn-outline" style="font-size:12px;padding:8px 12px;color:var(--danger);border-color:#F2C6C0;" data-action="open-reset-stats">
            ${icon('trash',14)} Reset Data Absensi
          </button>
        </div>
      </div>
      <div class="grid5" style="margin-bottom:18px;">
        ${['Hadir','Terlambat','Izin','Sakit','Alpha'].map(k=>`
          <div style="background:var(--bg);border-radius:10px;padding:10px 8px;text-align:center;">
            <div style="font-size:20px;font-weight:700;color:${STATUS_COLOR[k]};">${totals[k]}</div>
            <div style="font-size:10.5px;color:var(--ink-faint);font-weight:600;margin-top:2px;">${k}</div>
          </div>`).join('')}
      </div>
      ${state.employees.length===0 ? emptyState('chart','Belum ada data karyawan.') : `<div style="height:280px;"><canvas id="hrd-stats-chart"></canvas></div>`}
    </div>
  </div>
  ${state.modal && state.modal.type==='resetStats' ? renderResetStatsModal() : ''}`;
}

/* ---------------------------------------------------------------- */
/* HRD App shell                                                     */
/* ---------------------------------------------------------------- */
function renderHrdApp(){
  const pendingCount = state.leaveRequests.filter(l=>l.status==='pending').length;
  const pendingShiftCount = state.shiftRequests.filter(s=>s.status==='pending').length;
  const pendingOvertimeCount = state.overtimeRequests.filter(o=>o.status==='pending').length;
  const pendingAttReqCount = state.attendanceRequests.filter(a=>a.status==='pending').length;
  const NAV = [
    {id:'dashboard', label:'Dashboard', icon:'grid'},
    {id:'karyawan', label:'Karyawan', icon:'users'},
    {id:'jadwal', label:'Jadwal Shift', icon:'calendar'},
    {id:'approval', label:'Approval Izin', icon:'calclock', badge:pendingCount},
    {id:'shift', label:'Permintaan Shift', icon:'swap', badge:pendingShiftCount},
    {id:'lembur', label:'Lembur', icon:'moonclock', badge:pendingOvertimeCount},
    {id:'absensiRequest', label:'Pengajuan Absensi', icon:'alert', badge:pendingAttReqCount},
    {id:'files', label:'Files', icon:'file'},
    {id:'informasi', label:'Informasi', icon:'info'},
    {id:'gaji', label:'Slip Gaji', icon:'wallet'},
    {id:'statistik', label:'Statistik', icon:'chart'},
  ];
  let content = '';
  if(state.hrdTab==='dashboard') content = renderHrdDashboard();
  else if(state.hrdTab==='karyawan') content = renderHrdEmployees();
  else if(state.hrdTab==='jadwal') content = renderHrdShiftSchedule();
  else if(state.hrdTab==='approval') content = renderHrdApprovals();
  else if(state.hrdTab==='shift') content = renderHrdShiftApprovals();
  else if(state.hrdTab==='lembur') content = renderHrdOvertimeApprovals();
  else if(state.hrdTab==='absensiRequest') content = renderHrdAttendanceRequestApprovals();
  else if(state.hrdTab==='files') content = renderHrdFiles();
  else if(state.hrdTab==='informasi') content = renderHrdAnnouncements();
  else if(state.hrdTab==='gaji') content = renderHrdPayslips();
  else if(state.hrdTab==='statistik') content = renderHrdStats();

  // Menu utama tampil langsung di baris, sisanya masuk ke dropdown "Lainnya"
  const PRIMARY_IDS = ['dashboard','karyawan','jadwal','statistik','gaji'];
  const primaryNav = NAV.filter(n=>PRIMARY_IDS.includes(n.id));
  const moreNav = NAV.filter(n=>!PRIMARY_IDS.includes(n.id));
  const moreActive = moreNav.some(n=>n.id===state.hrdTab);
  const moreBadgeTotal = moreNav.reduce((sum,n)=>sum+(n.badge||0),0);
  const allBadgeTotal = NAV.reduce((sum,n)=>sum+(n.badge||0),0);
  const moreOpen = !!state.hrdMoreMenuOpen;

  const navItem = n => `
    <div class="sidebar-item hrd-nav-item ${state.hrdTab===n.id?'active':''}" data-action="hrd-tab" data-tab="${n.id}">
      ${icon(n.icon,16)} <span class="hrd-nav-label">${n.label}</span>
      ${n.badge ? `<span style="background:var(--danger);color:#fff;font-size:10.5px;font-weight:700;border-radius:999px;padding:1px 7px;">${n.badge}</span>` : ''}
    </div>`;

  return `
  <div class="hrd-shell" style="min-height:100vh;">
    <div class="card hrd-topnav" style="margin:16px;padding:10px 12px;position:sticky;top:16px;z-index:20;">
      <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap;">
        <div class="sb-title" style="display:flex;align-items:center;gap:8px;padding:2px 6px;flex-shrink:0;">
          ${icon('building',18,'#25473D')} <span style="font-weight:700;font-size:14px;">Panel HRD</span>
        </div>

        <div class="hrd-nav-row" style="display:flex;align-items:center;gap:4px;flex-wrap:wrap;flex:1;min-width:0;">
          ${primaryNav.map(navItem).join('')}
          <div class="hrd-dropdown" data-action="toggle-hrd-more" style="position:relative;">
            <div class="sidebar-item hrd-nav-item ${moreActive?'active':''}">
              ${icon('grid',16)} <span class="hrd-nav-label">Lainnya</span>
              ${moreBadgeTotal ? `<span style="background:var(--danger);color:#fff;font-size:10.5px;font-weight:700;border-radius:999px;padding:1px 7px;">${moreBadgeTotal}</span>` : ''}
              ${icon('chevron',13)}
            </div>
            ${moreOpen ? `
            <div class="hrd-dropdown-menu card" style="position:absolute;top:calc(100% + 6px);left:0;min-width:220px;padding:6px;">
              ${moreNav.map(n=>`
              <div class="sidebar-item ${state.hrdTab===n.id?'active':''}" style="margin-bottom:2px;" data-action="hrd-tab" data-tab="${n.id}">
                ${icon(n.icon,16)} ${n.label}
                ${n.badge ? `<span style="margin-left:auto;background:var(--danger);color:#fff;font-size:10.5px;font-weight:700;border-radius:999px;padding:1px 7px;">${n.badge}</span>` : ''}
              </div>`).join('')}
            </div>` : ''}
          </div>
        </div>

        <div class="hrd-hamburger-wrap" style="position:relative;margin-left:auto;">
          <button class="btn btn-outline hrd-hamburger" style="padding:9px 11px;position:relative;" data-action="toggle-hrd-more" title="Menu">
            ${icon('menu',18)}
            ${allBadgeTotal ? `<span style="position:absolute;top:-4px;right:-4px;background:var(--danger);color:#fff;font-size:10px;font-weight:700;border-radius:999px;padding:1px 5px;">${allBadgeTotal}</span>` : ''}
          </button>
          ${moreOpen ? `
          <div class="hrd-dropdown-menu card" style="position:absolute;top:calc(100% + 6px);right:0;min-width:240px;max-height:min(70vh,480px);overflow-y:auto;padding:6px;">
            ${NAV.map(n=>`
            <div class="sidebar-item ${state.hrdTab===n.id?'active':''}" style="margin-bottom:2px;" data-action="hrd-tab" data-tab="${n.id}">
              ${icon(n.icon,16)} ${n.label}
              ${n.badge ? `<span style="margin-left:auto;background:var(--danger);color:#fff;font-size:10.5px;font-weight:700;border-radius:999px;padding:1px 7px;">${n.badge}</span>` : ''}
            </div>`).join('')}
            <div style="height:1px;background:var(--border);margin:6px 2px;"></div>
            <div class="sidebar-item" data-action="open-hrd-password">${icon('lock',16)} Ubah Password HRD</div>
            <div class="sidebar-item" style="color:var(--danger);" data-action="logout">${icon('logout',16)} Keluar</div>
          </div>` : ''}
        </div>

        <button class="btn btn-ghost hrd-desktop-only" style="font-size:12.5px;padding:8px 10px;flex-shrink:0;" data-action="open-hrd-password" title="Ubah Password HRD">${icon('lock',15)}</button>
        <button class="btn btn-outline hrd-desktop-only" style="font-size:12.5px;padding:8px 12px;flex-shrink:0;" data-action="logout">Keluar</button>
      </div>
    </div>
    <div style="padding:0 16px 16px;min-width:0;">
      <div style="margin-top:2px;">${content}</div>
    </div>
    ${state.modal && state.modal.type==='hrdPassword' ? renderHrdPasswordModal() : ''}
  </div>`;
}

/* ---------------------------------------------------------------- */
/* Render dispatcher                                                 */
/* ---------------------------------------------------------------- */
function render(){
  const root = document.getElementById('app');
  if(state.loading){
    root.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;min-height:100vh;"><span class="spin">${icon('clock',26,'#25473D')}</span></div>`;
    return;
  }
  if(!state.role){ root.innerHTML = renderLogin(); }
  else if(state.role==='employee'){ root.innerHTML = renderEmployeeApp(); }
  else if(state.role==='hrd'){ root.innerHTML = renderHrdApp(); }
  afterRender();
}

function afterRender(){
  setupLiveClock();
  setupCharts();
  setupLoginEnterKey();
}
function setupLoginEnterKey(){
  ['login-username','login-password'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.addEventListener('keydown', e => { if(e.key==='Enter') actionLogin(); });
  });
  ['reg-name','reg-position','reg-dept','reg-username','reg-password','reg-confirm'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.addEventListener('keydown', e => { if(e.key==='Enter') actionRegister(); });
  });
}

function setupLiveClock(){
  if(window.__clockTimer) clearInterval(window.__clockTimer);
  if(document.querySelectorAll('.live-time').length === 0) return;
  window.__clockTimer = setInterval(()=>{
    const timeEls = document.querySelectorAll('.live-time');
    if(timeEls.length === 0){ clearInterval(window.__clockTimer); return; }
    const now = new Date();
    timeEls.forEach(el => el.textContent = timeStr(now));
    document.querySelectorAll('.live-date').forEach(el => {
      el.textContent = `${DAY_NAMES[now.getDay()]}, ${now.getDate()} ${MONTH_NAMES[now.getMonth()]} ${now.getFullYear()}`;
    });
  }, 1000);
}

function setupCharts(){
  Object.keys(chartInstances).forEach(k=>{ chartInstances[k].destroy(); delete chartInstances[k]; });
  const empCanvas = document.getElementById('emp-stats-chart') || document.getElementById('hrd-emp-detail-chart');
  if(empCanvas){
    const employeeId = state.role==='employee' ? state.currentEmpId : state.hrdEmployeeDetailId;
    const stats = computeStats(employeeId, state.statsYear, state.statsMonth, state.attendance);
    const labels = [], data = [], colors = [];
    ['Hadir','Terlambat','Izin','Sakit','Alpha'].forEach(k=>{ if(stats[k]>0){ labels.push(k); data.push(stats[k]); colors.push(STATUS_COLOR[k]); } });
    chartInstances[empCanvas.id] = new Chart(empCanvas, {
      type:'doughnut',
      data:{ labels, datasets:[{ data, backgroundColor:colors, borderWidth:0 }] },
      options:{ plugins:{ legend:{ position:'bottom', labels:{ boxWidth:10, font:{ size:11 } } } }, cutout:'62%' }
    });
  }
  const hrdChart = document.getElementById('hrd-stats-chart');
  if(hrdChart){
    const barData = state.employees.map(e=>{
      const stats = computeStats(e.id, state.hrdStatsYear, state.hrdStatsMonth, state.attendance);
      return { name: e.name.split(' ')[0], Hadir: stats.Hadir+stats.Terlambat, Izin: stats.Izin, Sakit: stats.Sakit, Alpha: stats.Alpha };
    });
    chartInstances[hrdChart.id] = new Chart(hrdChart, {
      type:'bar',
      data:{
        labels: barData.map(d=>d.name),
        datasets:[
          { label:'Hadir', data:barData.map(d=>d.Hadir), backgroundColor:STATUS_COLOR.Hadir, stack:'a' },
          { label:'Izin', data:barData.map(d=>d.Izin), backgroundColor:STATUS_COLOR.Izin, stack:'a' },
          { label:'Sakit', data:barData.map(d=>d.Sakit), backgroundColor:STATUS_COLOR.Sakit, stack:'a' },
          { label:'Alpha', data:barData.map(d=>d.Alpha), backgroundColor:STATUS_COLOR.Alpha, stack:'a' },
        ]
      },
      options:{
        responsive:true, maintainAspectRatio:false,
        scales:{ x:{ stacked:true, grid:{ display:false } }, y:{ stacked:true, beginAtZero:true, ticks:{ precision:0 } } },
        plugins:{ legend:{ position:'bottom', labels:{ boxWidth:10, font:{ size:11 } } } }
      }
    });
  }
}

/* ---------------------------------------------------------------- */
/* Event delegation                                                  */
/* ---------------------------------------------------------------- */
document.addEventListener('click', (e)=>{
  const overlay = e.target.closest('[data-action="close-modal-overlay"]');
  if(overlay && e.target === overlay){ state.modal=null; render(); return; }

  const el = e.target.closest('[data-action]');
  if(!el){
    if(state.hrdMoreMenuOpen){ state.hrdMoreMenuOpen=false; render(); }
    return;
  }
  const action = el.dataset.action;

  if(state.hrdMoreMenuOpen && action!=='toggle-hrd-more'){ state.hrdMoreMenuOpen=false; }

  switch(action){
    case 'do-login': actionLogin(); break;
    case 'do-google-login': actionGoogleLogin(); break;
    case 'show-register': state.loginMode='register'; state.loginError=''; state.registerSuccessMsg=''; render(); break;
    case 'show-login-form': state.loginMode='login'; state.loginError=''; render(); break;
    case 'do-register': actionRegister(); break;
    case 'logout':
      if(fbReady()){ fbSignOut(); }
      state.role=null; state.currentEmpId=null; state.loginError=''; state.loginMode='login';
      state.empTab='absensi'; state.hrdTab='dashboard'; state.modal=null; state.hrdEmployeeDetailId=null;
      state.selectedPayslipId=null; state.empProfileTab='personal'; state.profileSavedMsg=''; state.profileError='';
      state.fileUploadError=''; state.fileUploadBusy=false; state.hrdMoreMenuOpen=false; render(); break;
    case 'emp-tab': state.empTab = el.dataset.tab; render(); break;
    case 'hrd-tab': state.hrdTab = el.dataset.tab; render(); break;
    case 'toggle-hrd-more': state.hrdMoreMenuOpen = !state.hrdMoreMenuOpen; render(); break;
    case 'clock-in': actionClockIn(); break;
    case 'clock-out': actionClockOut(); break;
    case 'open-leave-form': state.modal={type:'leaveForm'}; render(); break;
    case 'close-modal': state.modal=null; render(); break;
    case 'submit-leave': actionSubmitLeave(); break;
    case 'open-reset-stats': state.modal={type:'resetStats'}; render(); break;
    case 'confirm-reset-stats': actionResetStats(); break;
    case 'open-add-employee': state.modal={type:'addEmployee'}; render(); break;
    case 'submit-add-employee': actionAddEmployee(); break;
    case 'open-delete-employee': state.modal={type:'deleteEmployee', empId: el.dataset.id}; render(); break;
    case 'confirm-delete-employee': actionDeleteEmployee(el.dataset.id); break;
    case 'hrd-open-employee': state.hrdEmployeeDetailId = el.dataset.id; render(); break;
    case 'hrd-back-employees': state.hrdEmployeeDetailId = null; render(); break;
    case 'decide-leave': actionDecideLeave(el.dataset.id, el.dataset.decision); break;
    case 'open-shift-form': state.modal={type:'shiftForm'}; render(); break;
    case 'submit-shift': actionSubmitShift(); break;
    case 'decide-shift': actionDecideShift(el.dataset.id, el.dataset.decision); break;
    case 'toggle-att-row': state.expandedAttId = state.expandedAttId===el.dataset.id ? null : el.dataset.id; render(); break;
    case 'view-att-detail': state.modal={type:'attDetail', id: el.dataset.id}; render(); break;
    case 'open-set-shift': state.modal={type:'setShift', employeeId: el.dataset.emp, date: el.dataset.date}; render(); break;
    case 'submit-set-shift': actionSetShift(); break;
    case 'remove-photo': actionRemovePhoto(); break;
    case 'open-hrd-password': state.profileError=''; state.profileSavedMsg=''; state.modal={type:'hrdPassword'}; render(); break;
    case 'submit-hrd-password': actionSubmitHrdPassword(); break;
    case 'hrd-send-reset': actionHrdSendResetEmail(); break;
    case 'open-add-announcement': state.modal={type:'announcementForm'}; render(); break;
    case 'submit-announcement': actionAddAnnouncement(); break;
    case 'delete-announcement': actionDeleteAnnouncement(el.dataset.id); break;
    case 'open-payslip-form': state.modal={type:'payslipForm', payslipId: el.dataset.id || null}; render(); break;
    case 'submit-payslip': actionSavePayslip(el.dataset.id || null); break;
    case 'select-payslip': state.selectedPayslipId = el.dataset.id; render(); break;
    case 'open-overtime-form': state.modal={type:'overtimeForm'}; render(); break;
    case 'submit-overtime': actionSubmitOvertime(); break;
    case 'decide-overtime': actionDecideOvertime(el.dataset.id, el.dataset.decision); break;
    case 'open-attendance-request-form': state.modal={type:'attendanceRequestForm'}; render(); break;
    case 'submit-attendance-request': actionSubmitAttendanceRequest(); break;
    case 'decide-attendance-request': actionDecideAttendanceRequest(el.dataset.id, el.dataset.decision); break;
    case 'profile-tab': state.empProfileTab = el.dataset.tab; state.profileSavedMsg=''; state.profileError=''; render(); break;
    case 'save-personal-info': actionSavePersonalInfo(); break;
    case 'save-emergency-contact': actionSaveEmergencyContact(); break;
    case 'change-password': actionChangePassword(); break;
    case 'change-pin': actionChangePin(); break;
    case 'delete-file': actionDeleteFile(el.dataset.id); break;
  }
});

document.addEventListener('change', (e)=>{
  const el = e.target.closest('[data-bind]');
  if(!el) return;
  let val = el.value;
  if(el.dataset.parse==='int') val = parseInt(val,10);
  state[el.dataset.bind] = val;
  render();
});

init();
