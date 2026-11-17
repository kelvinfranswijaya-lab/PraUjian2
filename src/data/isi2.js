import { dataTujuan as t } from "./isi.js";

// biar jalan juga kalo di-deploy ke sub-folder (github pages)
const base = import.meta.env.BASE_URL;

export const dataSlide2 = [
  { foto: base + "images/foto/photo-1605281317010-fe5ffe798166.avif" },
  { foto: base + "images/foto/photo-1567899378494-47b22a2ae96a.avif" },
  { foto: base + "images/foto/photo-1559599238-308793637427.avif" },
];

export const pilihanUkuran = ["Boat Meters", "10 meter", "15 meter", "20 meter", "30 meter"];

export const dataTujuan2 = {
  t1: { ...t.t1, nama: "Switzerland" },
  t2: { ...t.t2, nama: "Thailand" },
  t3: { ...t.t3, nama: "Singapore" },
  t4: { ...t.t4, nama: "United Kingdom" },
  t5: { ...t.t5, nama: "Dubai Desert" },
  t6: { ...t.t6, nama: "Bangladesh" },
  t7: { ...t.t7, nama: "Middle East" },
};

export const dataTesti2 = [
  { nama: "Andi Pratama", foto: base + "images/foto/photo-1507003211169-0a1dd7228f2d.avif", tanggal: "Nov 2025, Charter Sailboat", isi: "Kru sangat ramah selama seminggu penuh kami berlayar. Rute pulau-pulaunya bagus dan semua jadwal berjalan tepat waktu." },
  { nama: "Rina Wijaya", foto: base + "images/foto/photo-1534528741775-53994a69daeb.avif", tanggal: "Okt 2025, Charter Sailboat", isi: "Pertama kali sewa kapal dan prosesnya ternyata mudah. Kapal bersih, dan kapten menjelaskan semuanya dengan sabar." },
  { nama: "Budi Santoso", foto: base + "images/foto/photo-1506794778202-cad84cf45f1d.avif", tanggal: "Sep 2025, Cabin Cruiser", isi: "Harganya sepadan dengan fasilitas yang kami dapat. Anak-anak senang sekali dan kami pasti kembali tahun depan." },
  { nama: "Siti Rahma", foto: base + "images/foto/photo-1438761681033-6461ffad8d80.avif", tanggal: "Agu 2025, Charter Sailboat", isi: "Kami merayakan ulang tahun pernikahan di atas kapal. Makan malamnya diatur rapi dan pemandangan matahari terbenamnya luar biasa." },
];

export const dataLayanan2 = [
  { ikon: "kemudi", judul: "Skippered Charter", teks: "Kapal lengkap dengan kapten berpengalaman, tinggal duduk dan menikmati perjalanan." },
  { ikon: "kapal", judul: "Bareboat Charter", teks: "Sewa kapal tanpa kru untuk Anda yang sudah punya sertifikat berlayar." },
  { ikon: "acak", judul: "Easy Booking", teks: "Pilih tanggal dan ukuran kapal, konfirmasi kami kirim dalam satu jam." },
  { ikon: "globe", judul: "Whole Boat Rental", teks: "Satu kapal penuh untuk rombongan keluarga atau kantor, harga sudah termasuk bahan bakar." },
  { ikon: "bintangsalju", judul: "Cabin Cruiser", teks: "Kapal dengan kabin tidur untuk perjalanan beberapa hari di laut." },
  { ikon: "gear", judul: "Crewed Charter", teks: "Kru lengkap yang mengurus kapal, makanan, dan keselamatan penumpang." },
  { ikon: "grafik", judul: "Boat Sailing", teks: "Kelas berlayar singkat di pagi hari untuk pemula yang ingin belajar dasar-dasarnya." },
  { ikon: "pin", judul: "5 Star Hotels", teks: "Paket menginap di hotel pinggir pantai sebelum atau sesudah pelayaran." },
  { ikon: "acara", judul: "Event Planning", teks: "Kami bantu atur dekorasi, musik, dan katering untuk acara di atas kapal." },
];

export const dataKapal2 = [
  { lokasi: "Central Croatia", nama: "Boats De La Presquile", harga: 7500, foto: base + "images/foto/photo-1569263979104-865ab7cd8d13.webp" },
  { lokasi: "New York, USA", nama: "Aquavita Boats", harga: 8500, foto: base + "images/foto/photo-1540946485063-a40da27545f8.avif" },
  { lokasi: "Central Croatia", nama: "Axioma Boats", harga: 7200, foto: base + "images/foto/photo-1605281317010-fe5ffe798166.avif" },
  { lokasi: "New York, USA", nama: "Alphas Yacht", harga: 7600, foto: base + "images/foto/photo-1567899378494-47b22a2ae96a.avif" },
  { lokasi: "Central Croatia", nama: "Turners Yacht", harga: 6400, foto: base + "images/foto/photo-1500375592092-40eb2168fd21.avif" },
  { lokasi: "New York, USA", nama: "Blue Seagull", harga: 7100, foto: base + "images/foto/photo-1544551763-46a013bb70d5.avif" },
];

export const dataPameran = [
  { foto: base + "images/foto/photo-1540946485063-a40da27545f8.avif" },
  { foto: base + "images/foto/photo-1567899378494-47b22a2ae96a.avif" },
  { foto: base + "images/foto/photo-1500375592092-40eb2168fd21.avif" },
  { foto: base + "images/foto/photo-1518837695005-2083093ee35b.avif" },
  { foto: base + "images/foto/photo-1544551763-46a013bb70d5.avif" },
];

export const dataPaket = [
  { nama: "Basic Package", harga: 55 },
  { nama: "Regular Package", harga: 60 },
  { nama: "Deluxe Package", harga: 80 },
];
export const fasilitasPaket = ["Free breakfast", "Free Champagne", "Special Treatment", "24/7 Full Support", "Delicious dinner"];

export const dataBlog2 = [
  { judul: "Explorer yacht unveils exciting itinerary…", foto: base + "images/foto/photo-1544551763-46a013bb70d5.avif" },
  { judul: "Enjoy the view of the shore from a yacht…", foto: base + "images/foto/photo-1500375592092-40eb2168fd21.avif" },
  { judul: "Deserts in Canada: Arizona’s Arid, Artistic Desert Oasis", foto: base + "images/foto/photo-1518837695005-2083093ee35b.avif" },
];
