// Input suhu
const suhu = 75; // Anda dapat mengganti nilai suhu sesuai kebutuhan

// Input informasi kendaraan
const platKuning = false; // Ganti menjadi true jika kendaraan memiliki plat kuning
const tipeKendaraan = "mobil"; // Ganti menjadi "motor" jika kendaraan adalah motor
const ccMobil = 1800; // Ganti dengan kapasitas mesin mobil dalam CC

// Inisialisasi variabel jenisBBM
let jenisBBM;

// Logika untuk menentukan jenis BBM
if (platKuning || tipeKendaraan === "motor") {
  jenisBBM = "BBM Subsidi";
} else if (ccMobil < 1500) {
  jenisBBM = "PERTAMAX";
} else {
  jenisBBM = "PERTAMAX Turbo";
}

// Logika untuk menentukan keadaan air
let keadaanAir;

if (suhu >= -100 && suhu <= 0) {
  keadaanAir = "Beku";
} else if (suhu >= 1 && suhu <= 100) {
  keadaanAir = "Cair";
} else if (suhu >= 101 && suhu <= 500) {
  keadaanAir = "Uap";
} else {
  keadaanAir = "Tidak Terdefinisi";
}

// Menampilkan hasil
console.log(`Jenis BBM yang harus digunakan: ${jenisBBM}`);
console.log(`Keadaan air pada suhu ${suhu} derajat Celsius: ${keadaanAir}`);
