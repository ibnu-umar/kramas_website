# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## Perancangan Website Budaya Lokal Desa Kramas

**Target Executor:** Antigravity AI Agent High 3.5
**Project Status:** Folder Kosong (Generate from scratch)
**Version:** 1.0.0 (Strictly Aligned with Proposal 2026)

---

## 1. INSTRUKSI KETAT UNTUK AI AGENT (STRICT DIRECTIVES)
Agent **DIWAJIBKAN** untuk mematuhi aturan berikut tanpa pengecualian untuk mencegah halusinasi:
1. **Zero Hallucination Policy:** JANGAN membuat tradisi, nama tokoh, atau data fiktif. Gunakan HANYA data yang tercantum dalam PRD ini (Bersih Desa, Kuda Lumping Turonggo Mudho, Wayang Kulit).
2. **Scope Limitation:** JANGAN membuat fitur administrasi pemerintahan, backend database kompleks, login/register tingkat lanjut, atau aplikasi mobile native. Buat murni website informatif (Frontend Web) yang responsif (Mobile & Desktop).
3. **Empty Folder Execution:** Buat seluruh struktur file dari awal. Buat file HTML, CSS/Tailwind, dan JavaScript yang terpisah atau tergabung dengan rapi sesuai best practice.
4. **Dynamic Simulation:** Karena proposal meminta konsep "Website Dinamis" dengan fungsi dasar pengelolaan konten, gunakan file `data.js` atau JSON untuk menyimpan data konten (seperti jadwal dan berita) agar terpisah dari struktur HTML, menyimulasikan CMS dasar.

---

## 2. DESKRIPSI PROYEK
Pembuatan website sebagai media digital untuk mendokumentasikan dan menyajikan informasi budaya lokal (tradisi dan kesenian) di Kelurahan Kramas, Kecamatan Tembalang, Kota Semarang. Website ditujukan untuk pelestarian budaya, edukasi masyarakat, dan daya tarik generasi muda.

---

## 3. TECH STACK (REKOMENDASI UNTUK AGENT)
*   **HTML5:** Struktur semantik.
*   **CSS Framework:** Tailwind CSS (via CDN untuk eksekusi cepat di folder kosong) atau Vanilla CSS.
*   **JavaScript:** Vanilla JS (untuk interaktivitas DOM, modal galeri, dan rendering data dinamis dari file JSON/JS).
*   **Assets:** Gunakan placeholder image (seperti Unsplash/Placehold.co) dengan keyword yang sangat spesifik (e.g., `wayang`, `javanese dance`, `village map`) jika gambar asli belum tersedia.

---

## 4. SITEMAP & STRUKTUR NAVIGASI
Navigasi utama (Header/Navbar) harus berisi menu berikut secara presisi:
1. **Home (Beranda)**
2. **Profil**
3. **Tradisi Budaya Lokal**
4. **Galeri**
5. **Kontak**

---

## 5. SPESIFIKASI HALAMAN (PAGE REQUIREMENTS)

Agent harus membangun halaman-halaman berikut dengan komponen yang spesifik:

### 5.1. Halaman Beranda (`index.html`)
*   **Header:** Logo Kelurahan Kramas (placeholder) + Navigasi.
*   **Hero Section:** Gambar utama kesenian kuda lumping / wayang kulit dengan judul (Headline) singkat dan tombol "Selengkapnya".
*   **Sub-Headline:** "Melestarikan Warisan Budaya Kelurahan Kramas".
*   **Berita/Agenda Terkini:** Menampilkan ringkasan informasi terbaru berupa *Card* jadwal agenda (Minimal 3 card: Wayang Kulit, Kuda Lumping, Bersih Desa).
*   **Footer:** Teks "Kelurahan Kramas, Kecamatan Tembalang Kota Semarang".

### 5.2. Halaman Profil Kelurahan (`profil.html`)
*   **Data Geografis (List/Tabel):**
    *   Luas Wilayah: [Data Kosong / Placeholder]
    *   Batas Wilayah: [Data Kosong / Placeholder]
    *   Ketinggian rata-rata: [Data Kosong / Placeholder]
*   **Data Demografi (List/Tabel):**
    *   Jumlah Penduduk: [Data Kosong / Placeholder]
    *   Jumlah RT/RW: [Data Kosong / Placeholder]
    *   Mayoritas Pekerjaan: [Data Kosong / Placeholder]
*   **Aset Visual:**
    *   Peta Desa Kramas (Placeholder Map Image).
    *   Kumpulan Foto Lingkungan (Grid): Jalan Utama, Pemukiman, Taman Toga, Balai Kelurahan Kramas.

### 5.3. Halaman Tradisi Budaya Lokal (`tradisi.html`)
*   **Intro Text:** *"Kesenian adalah jiwa kami. Dari irama Gamelan hingga gerakan lincah Jaran Kepang, Kelurahan Kramas bangga melestarikan warisan leluhur. Kami mengundang Anda untuk menjelajahi kekayaan seni budaya lokal yang menjadi bagian tak terpisahkan dari identitas masyarakat kami."*
*   **Daftar Tradisi (Format Card/List):**
    1.  **Bersih Desa:** Deskripsi sejarah, makna, dan waktu pelaksanaan (awal bulan Muharam, durasi 2 hari: Jumat pengajian, Sabtu ziarah, kirab, wayang/kuda lumping).
    2.  **Kuda Lumping Turonggo Mudho:** Sejarah singkat, makna, jadwal pementasan.
    3.  **Wayang Kulit:** Sejarah singkat, makna, jadwal pementasan.
*   **Jadwal Pelaksanaan Section:** Kalender/List agenda (Wayang Kulit, Kuda Lumping, Ziarah Makam leluhur, Tradisi Kelurahan Kramas).

### 5.4. Halaman Galeri (`galeri.html`)
*   **Intro Text:** *"Jelajahi kekayaan seni dan budaya kami yang tersimpan dalam galeri ini. Dari koleksi Wayang Kulit yang rumit hingga Gamelan ageng, setiap artefak menceritakan kisah identitas Kelurahan Kramas yang tak lekang oleh waktu."*
*   **Grid Layout:** Menampilkan foto-foto dokumentasi.
*   **Kategori Gambar/Video:** Wayang Kulit, Kuda Lumping, Ziarah Makam Leluhur.
*   **Interaktivitas:** Gambar dapat diklik untuk diperbesar (Lightbox/Modal). Berikan ikon/tombol simulasi "Link video terkait".

### 5.5. Halaman Kontak (`kontak.html`)
*   **Layout:** Terdapat gambar Balai Kelurahan.
*   **Informasi Kontak (Wajib Exact):**
    *   **Jam Operasional:** Senin – Jumat | 08.00 - 15.00 WIB
    *   **Telepon:** (024) 76481296
    *   **Email:** kelurahan.kramas01@gmail.com
    *   **Lokasi:** Peta Lokasi Kelurahan Kramas (Embed Google Maps placeholder).
*   **Call to Action:** "Hubungi Kami".

---

## 6. PANDUAN UI/UX (UI/UX GUIDELINES)
*   **Tema:** Menghargai nilai lokal, gunakan palet warna bumi (earth tones) seperti coklat (kayu/batik), emas (wayang), hitam, dan krem agar terasa tradisional namun modern.
*   **Tipografi:** Gunakan font Sans-Serif modern (seperti Inter atau Roboto) untuk keterbacaan, dipadukan dengan font Serif (seperti Merriweather atau Playfair Display) untuk judul/heading untuk kesan klasik.
*   **Responsivitas:** Wajib menggunakan layout yang beradaptasi (Grid/Flexbox). Tampilan mobile menggunakan hamburger menu.

---

## 7. FILE GENERATION MANIFEST (TUGAS AGENT)
Agent harus meng-generate struktur file berikut di dalam direktori proyek:

```text
/
├── index.html          (Beranda)
├── profil.html         (Profil Kelurahan)
├── tradisi.html        (Tradisi & Kesenian)
├── galeri.html         (Dokumentasi Foto/Video)
├── kontak.html         (Informasi Kontak)
├── /css
│   └── style.css       (Jika tidak full menggunakan Tailwind CDN)
├── /js
│   ├── main.js         (Fungsi UI: Navigasi, Modal Galeri)
│   └── data.js         (Simulasi database dinamis: Jadwal, Profil Desa, Link Gambar)
└── /assets
    └── (Bisa disimulasikan URL-nya langsung di HTML menggunakan placeholder)
    ### Catatan untuk Anda:
File PRD di atas sudah disusun secara ketat (strict). 
1. **Tone Command:** Bahasa yang digunakan sangat direktif ("DIWAJIBKAN", "JANGAN") agar AI Agent mengerti batasannya.
2. **Kesesuaian:** Isi PRD 100% dipetakan dari proposal Anda (spesifikasi halaman, jam kerja, email kelurahan, nama kesenian, hingga teks paragraf pengantar pada halaman galeri dan tradisi).
3. **Pencegahan Halusinasi:** Menambahkan aturan nomor 1 dan 2 pada *Strict Directives* serta memberikan kerangka file mana saja yang harus dibangun agar agen tidak membuat fitur di luar jangkauan (seperti login admin pemerintahan).

Anda tinggal memberikan file `PRD_Website_Budaya_Kramas.md` ini kepada *Antigravity AI Agent* Anda di dalam workspace kosong, dan agent tersebut akan langsung memiliki panduan pasti untuk men-generate kode (HTML, CSS, JS) yang sesuai. Ada hal lain yang ingin disesuaikan dari PRD ini?