# PRODUCT REQUIREMENTS DOCUMENT (PRD) - ADDENDUM
## Pembaruan Fitur Halaman Galeri (`galeri.html`)

**Target Executor:** Antigravity AI Agent High 3.5
**Project Context:** Website Budaya Lokal Desa Kramas
**Version:** 1.1.0 (Galeri Update)

---

## 1. TUJUAN (OBJECTIVE)
Mengubah struktur dan interaktivitas pada `galeri.html`. Galeri tidak lagi hanya berupa grid statis, melainkan menjadi *slider* gambar dinamis (multiple images) yang berjalan otomatis (auto-slide). Selain itu, harus terdapat fitur *Lightbox/Modal* interaktif ketika gambar diklik. menggunakan link gambar yang ada di /asset/img/link_img.txt

## 2. STRICT DIRECTIVES (INSTRUKSI KETAT UNTUK AGENT)
1. **No React / No External JS Libraries:** DILARANG KERAS menggunakan React, Framer Motion library, jQuery, atau library slider pihak ketiga (seperti Swiper.js/Slick).
2. **Vanilla JS Framer Motion Logic:** Simulasikan logika transisi *Framer Motion* menggunakan **Vanilla JavaScript** dikombinasikan dengan **CSS Variables** atau **Web Animations API**. Animasi harus memiliki *smooth easing* (seperti `cubic-bezier` atau *spring physics simulation* sederhana) pada saat perpindahan *slide*.
3. **State Management:** Agent harus mengimplementasikan variabel state di dalam JS (misal: `isModalOpen`, `currentIndex`) untuk mengontrol kapan auto-slide berjalan dan kapan harus berhenti.

---

## 3. SPESIFIKASI FITUR (FUNCTIONAL REQUIREMENTS)

### 3.1. Auto-Sliding Gallery (Mode Background/Tampilan Utama)
*   **Multiple Images:** Galeri menampilkan deretan gambar (Kuda Lumping, Wayang Kulit, Ziarah) dalam format *carousel/slider* horizontal.
*   **Auto-Slide Behavior:** Gambar bergeser ke kiri secara otomatis setiap 3 hingga 5 detik.
*   **Seamless Loop (Opsional namun disarankan):** Transisi dari gambar terakhir kembali ke gambar pertama tidak boleh terlihat terputus (*infinite loop effect*).

### 3.2. Fitur Lightbox / Modal (On-Click Behavior)
*   **Trigger:** Ketika pengguna mengklik salah satu gambar pada *slider* utama, sebuah *Modal (Lightbox)* harus muncul menutupi layar (*fullscreen overlay*).
*   **Modal UI:** 
    *   Menampilkan gambar yang diklik dalam ukuran besar di tengah layar.
    *   Terdapat tombol (Button) **Geser Kiri (Prev)** dan **Geser Kanan (Next)** di sisi layar modal.
    *   Terdapat tombol **Tutup (Close/X)** di pojok kanan atas.
*   **Pause Auto-Slide:** **SANGAT PENTING.** Saat Modal terbuka (`isModalOpen === true`), fungsi *auto-sliding* pada galeri utama **HARUS BERHENTI/DIJEDA** (*clear timer/interval*).
*   **Resume Auto-Slide:** Ketika pengguna menutup Modal, *auto-sliding* pada latar belakang harus berjalan kembali.

### 3.3. Interaksi di Dalam Modal (Manual Navigation)
*   Di dalam Modal, perpindahan gambar HANYA terjadi jika pengguna menekan tombol Kiri atau Kanan. 
*   **TIDAK ADA auto-sliding di dalam ukuran Modal.** Animasi perpindahan gambar dalam modal tetap menggunakan logika *smooth transition* (mirip Framer Motion `AnimatePresence`).

---

## 4. PANDUAN IMPLEMENTASI TEKNIS (UNTUK AGENT)

Agent wajib memperbarui file-file berikut berdasarkan panduan ini:

### A. Pembaruan `galeri.html`
*   Buat *container* `overflow-hidden` untuk *slider* utama.
*   Buat div `slider-track` yang akan digeser menggunakan properti CSS `transform: translateX(...)`.
*   Tambahkan elemen *Modal* tersembunyi (hidden by default) di bagian bawah tag `<body>`.

### B. Pembaruan `css/style.css` (Atau Tailwind Utility Classes)
*   Gunakan `transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);` untuk menyimulasikan *Framer Motion layout animation*.
*   Untuk memunculkan Modal, gunakan animasi *fade-in* (`opacity`) dan *scale-up* sederhana.

### C. Pembuatan Script `js/gallery.js`
Script ini harus memiliki logika berikut:
1.  **Data Array:** Ambil data gambar dari file `data.js` atau deklarasikan array gambar langsung di dalam file ini.
2.  **Render DOM:** *Looping* array untuk membuat elemen `<img>` ke dalam *slider-track*.
3.  **Auto-Slide Timer:** Gunakan `setInterval()` yang dikaitkan dengan variabel (contoh: `let slideInterval;`).
4.  **Animasi Transform:** Fungsi `moveToSlide(index)` yang mengkalkulasi lebar elemen dan mengaplikasikan `track.style.transform = 'translateX(-' + offset + 'px)'`.
5.  **Event Listeners:**
    *   `img.addEventListener('click', openModal)`
    *   `closeBtn.addEventListener('click', closeModal)`
    *   `nextBtn.addEventListener('click', nextModalImage)`
    *   `prevBtn.addEventListener('click', prevModalImage)`
6.  **Logika Jeda (Pause Logic):**
    *   Dalam fungsi `openModal()`: Panggil `clearInterval(slideInterval)`.
    *   Dalam fungsi `closeModal()`: Panggil kembali inisiasi `slideInterval`.

---
**END OF PRD ADDENDUM.**
Agent, silakan eksekusi perubahan ini secara khusus untuk fitur Galeri. Patuhi batas teknologi Vanilla JS namun kejar kualitas animasi tingkat tinggi!
```eof

Dokumen PRD tambahan ini dapat Anda berikan langsung kepada AI Agent. Instruksinya sudah diperketat agar agen tersebut tidak menggunakan library eksternal (seperti React itu sendiri) tetapi tetap diwajibkan menulis algoritma JavaScript dan CSS murni yang meniru kelancaran *Framer Motion*, lengkap dengan aturan *pause* ketika modal di-klik.