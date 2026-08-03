# PRODUCT REQUIREMENTS DOCUMENT (PRD) - ADDENDUM
## Integrasi & Konversi Desain Navbar "Floating Pill" ke Vanilla HTML/JS

**Target Executor:** Antigravity AI Agent High 3.5
**Project Context:** Website Budaya Lokal Desa Kramas
**Version:** 1.2.0 (Navbar UI Update)

---

## 1. TUJUAN (OBJECTIVE)
Mengganti desain Navbar di semua halaman (Home, Profil, Tradisi, Galeri, Kontak) dengan desain *Floating Pill* (berbentuk melengkung di tengah atas layar) yang terinspirasi dari komponen React/Framer Motion (`navbar-1.tsx`).
**PENTING:** Konversi seluruh logika React, state, dan Framer Motion ke dalam **HTML5, Tailwind CSS (via CDN), dan Vanilla JavaScript** agar sesuai dengan arsitektur proyek saat ini. JANGAN mengubah fitur atau konten lain di luar Navbar.

---

## 2. STRICT DIRECTIVES (INSTRUKSI KETAT UNTUK AGENT)
1. **No React/NPM Required:** Abaikan instruksi instalasi npm (`motion`, `lucide-react`, `shadcn`) dari prompt dasar. Proyek ini murni menggunakan HTML/CSS/JS statis.
2. **Tailwind CDN:** Gunakan class Tailwind CSS persis seperti desain aslinya.
3. **Simulasi Framer Motion:** Gunakan CSS Transitions (`transition-all duration-300`, `scale`, `opacity`, `translate`) dan Vanilla JS (`classList.add / remove`) untuk mereplikasi efek animasi `motion.div` dan `AnimatePresence`.
4. **Pertahankan Data Navigasi Lokal:** JANGAN gunakan menu dari prompt dasar ("Home, Pricing, Docs, Projects"). **WAJIB** gunakan menu dari PRD awal: **Beranda, Profil, Tradisi Budaya, Galeri, Kontak**.

---

## 3. SPESIFIKASI KONVERSI NAVBAR

### 3.1. Struktur HTML (Terapkan di semua file `.html`)
*   Ganti tag `<header>` atau `<nav>` yang ada saat ini dengan struktur *floating pill* berikut.
*   **Posisi:** Harus melayang di atas konten (`fixed top-0 w-full z-50 pt-6 px-4`).
*   **Wadah Utama (Pill):** `bg-white rounded-full shadow-lg w-full max-w-3xl mx-auto flex items-center justify-between px-6 py-3`.
*   **Logo (Kiri):** Gunakan SVG gradient dari prompt dasar sebagai placeholder logo Kelurahan Kramas.
*   **Menu Desktop (Tengah/Kanan):** Hidden di mobile, terlihat di `md:flex`.
*   **Tombol Mobile (Kanan):** Ikon Hamburger (gunakan SVG Heroicons/Lucide).
*   **Mobile Menu Overlay:** Modal layar penuh putih (`fixed inset-0 bg-white z-50`) yang awalnya tersembunyi.

### 3.2. Data Menu (Mapping)
Ubah array mapping React menjadi tautan HTML statis:
*   `index.html` -> "Beranda"
*   `profil.html` -> "Profil"
*   `tradisi.html` -> "Tradisi Budaya"
*   `galeri.html` -> "Galeri"
*   `kontak.html` -> "Kontak"

### 3.3. Logika JavaScript (Tambahkan ke `js/main.js`)
Buat fungsi Vanilla JS untuk mereplikasi `useState(false)` dan fungsi `toggleMenu`:

1.  **Select Elements:** Ambil elemen tombol hamburger, tombol close, dan kontainer menu mobile.
2.  **Toggle Logic:**
    *   Saat hamburger diklik: Hapus class tersembunyi (misal `translate-x-full` atau `opacity-0`) pada menu mobile agar muncul (*slide-in/fade-in*).
    *   Saat tombol 'X' diklik: Tambahkan kembali class tersembunyi tersebut.
3.  **Active State (Opsional):** Beri penanda (misal text bold/warna beda) pada menu yang sedang aktif sesuai URL halaman saat ini.

---

## 4. TUGAS EKSEKUSI (IMPLEMENTATION STEPS FOR AGENT)

1.  **Buka file `index.html`, `profil.html`, `tradisi.html`, `galeri.html`, dan `kontak.html`.**
2.  **Hapus** blok kode navigasi lama di setiap file.
3.  **Inject/Paste** blok kode HTML Tailwind baru (hasil konversi dari `navbar-1.tsx`) ke bagian teratas di dalam tag `<body>` pada semua file. Pastikan href menunjuk ke file HTML yang benar.
4.  **Buka file `js/main.js`** dan tambahkan *Event Listener* untuk membuka/menutup Mobile Menu Overlay. Gunakan CSS class toggling untuk meniru animasi pegas (spring) Framer Motion (misal menggunakan class utilitas Tailwind: `transition-transform duration-500 ease-in-out`).
5.  **Ikon (Lucide-React Replacement):** Konversikan ikon `<Menu />` dan `<X />` menjadi tag `<svg>` bawaan Tailwind/Heroicons agar bisa langsung dirender browser tanpa library eksternal.

---
**END OF PRD ADDENDUM.**
Agent, silakan eksekusi perubahan Navbar ini di seluruh file HTML. Ingat: Pertahankan arsitektur Vanilla JS/HTML murni, dan JANGAN menyentuh atau merusak layout konten di bawah navbar!
```eof

### Penjelasan PRD:
1. **Penerjemahan Requirement:** Karena prompt dasar yang Anda berikan adalah spesifik untuk ekosistem React/Next.js (shadcn, npm, framer-motion), PRD ini secara eksplisit menginstruksikan AI Agent untuk membuang ketergantungan NPM/React tersebut dan mengonversinya menjadi HTML/Tailwind statis.
2. **Penyesuaian Konteks:** Agent dipaksa untuk tidak asal *copy-paste* teks "Pricing, Docs", melainkan menggantinya dengan menu navigasi Desa Kramas ("Profil", "Tradisi", dll).
3. **Simulasi Animasi:** Mengarahkan agent untuk menggunakan CSS transition sebagai pengganti Framer Motion.