const siteData = {
    agenda: [
        {
            title: "Pertunjukan Wayang Kulit",
            date: "9 Mei 2026",
            description: "Wayang Kulit KI Catur Nugroho S.Sn.,M.Sn Lakon Wahyu Kamulyan Sejati Lokasi Halaman Kantor Kelurahan Kramas Sabtu ,09 Mei 2026 Jam 20.00 WIB - Selesai.",
            image: "asset/img/thumbnail/wayang/9-5-2026.png"
        },
        {
            title: "Pentas Kuda Lumping Turonggo Mudho dan kirab",
            date: "9 Mei 2026",
            description: "kirab budaya dilanjutkan Pentas Seni Jaran Kepang Turonggo Mudho Dalam Rangka Sedekah Bumi Kel. Kramas Kec. Tembalang Kota Semarang Sabtu, 9 Mei 2026 Lokasi Halaman Kel. Kramas.",
            image: "asset/img/thumbnail/kuda/kuda09mei.png"
        },
        {
            title: "Ziarah Makam",
            date: "1 Muharam 1446 H",
            description: "Dokumentasi Sedekah Bumi Desa Kramas Ziarah Makam Leluhur Mbah Singonyidro.",
            image: "asset/img/thumbnail/ziarah_makam/ziarah09.png"
        },
        {
            title: "Pengajian",
            date: "1 Muharam 1446 H",
            description: "Rangkaian acara syukur dari pengajian hingga kirab.",
            image: "asset/img/thumbnail/ziarah_makam/ziarah09.png"
        }
    ],
    profil: {
        geografis: {
            luas: "93,34 hektare", // Placeholder realistic value
            batas: "Kelurahan Bulusan di utara, Kelurahan Padangsari di selatan, dan Kelurahan Pedalangan di barat",
            ketinggian: "240 mdpl"
        },
        demografi: {
            penduduk: "4.905 Jiwa", // Placeholder
            rtrw: "28 RT / 6 RW", // Placeholder
            pekerjaan: "Pekerja Swasta, Wiraswasta, Mahasiswa"
        },
        aset_visual: {
            map: "asset/img/foto_lingkungan/peta2.jpeg",
            lingkungan: [
                { url: "asset/img/foto_lingkungan/lingkungan_1.jpeg", caption: "KKN Universitas Islam Negeri Walisongo tahun 2025 " },
                { url: "asset/img/foto_lingkungan/lingkungan_2.jpeg", caption: "Kegiatan sensus penduduk" },
                { url: "asset/img/foto_lingkungan/lingkungan_3.jpeg", caption: "Kegiatan Pemeriksaan kondisi air" },
                { url: "asset/img/foto_lingkungan/lingkungan_4.jpeg", caption: "foto sendang bulung yang masih hidup di kramas" }
            ]
        }
    },
    tradisi: [
        {
            id: "bersih-desa",
            title: "Bersih Desa",
            description: "Tradisi Bersih Desa 09 mei 2026 adalah wujud rasa syukur masyarakat Kelurahan Kramas atas karunia Tuhan. Diadakan setiap awal bulan Muharam dengan durasi 2 hari. Rangkaian acara meliputi pengajian pada hari Jumat, diikuti ziarah makam leluhur, kirab budaya, dan pagelaran Wayang Kulit atau Kuda Lumping pada hari Sabtu.",
            image: "asset/img/budaya_lokal/bersih_desa/warga.jpeg"
        },
        {
            id: "kuda-lumping",
            title: "Kuda Lumping Turonggo Mudho",
            description: "Kesenian Kuda Lumping Turonggo Mudho 09 mei 2026 adalah kesenian tari tradisional yang menggambarkan kegagahan prajurit berkuda. Kesenian ini memiliki makna heroisme dan spiritual yang kuat bagi masyarakat Kramas, dan sering dipentaskan dalam berbagai perayaan penting desa.",
            image: "asset/img/budaya_lokal/kudalumping/turonggo.jpeg"
        },
        {
            id: "wayang-kulit",
            title: "Wayang Kulit",
            description: "Wayang Kulit 09 mei 2026 adalah warisan budaya luhur yang tidak hanya menjadi tontonan, tetapi juga tuntunan hidup. Masyarakat Kramas melestarikan Wayang Kulit sebagai media pelestarian nilai-nilai moral dan spiritual leluhur yang dipentaskan pada acara-acara sakral dan perayaan desa.",
            image: "asset/img/budaya_lokal/wayangkulit/ki_catur.jpeg"
        }
    ],
    jadwal_pelaksanaan: [
        { event: "Pengajian Bersih Desa", time: "Jumat Pertama Muharam, 19.30 WIB" },
        { event: "Ziarah Makam Leluhur", time: "Sabtu Pertama Muharam, 15.00 WIB" },
        { event: "Kirab Budaya Kramas dan pentas kuda lumping", time: "Sabtu Pertama Muharam, 10.00 WIB" },
        { event: "Pentas Wayang Kulit", time: "Sabtu Pertama Muharam, 20.00 WIB" }
    ],
    galeri: [
        { type: "image", category: "Wayang Kulit", url: "https://images.unsplash.com/photo-1616857321528-984bb35d2139?w=800&q=80", thumb: "https://images.unsplash.com/photo-1616857321528-984bb35d2139?w=300&q=80", title: "Pagelaran Wayang Kulit Semalam Suntuk" },
        { type: "image", category: "Kuda Lumping", url: "https://images.unsplash.com/photo-1549474751-60a6a4e32049?w=800&q=80", thumb: "https://images.unsplash.com/photo-1549474751-60a6a4e32049?w=300&q=80", title: "Aksi Penari Turonggo Mudho" },
        { type: "image", category: "Ziarah Makam Leluhur", url: "https://images.unsplash.com/photo-1595188813350-f80e03e5c9a4?w=800&q=80", thumb: "https://images.unsplash.com/photo-1595188813350-f80e03e5c9a4?w=300&q=80", title: "Ziarah Makam Leluhur Kramas" },
        { type: "image", category: "Wayang Kulit", url: "https://images.unsplash.com/photo-1533008093099-e2681382639a?w=800&q=80", thumb: "https://images.unsplash.com/photo-1533008093099-e2681382639a?w=300&q=80", title: "Detail Gunungan Wayang" },
        { type: "video", category: "Kuda Lumping", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumb: "https://images.unsplash.com/photo-1549474751-60a6a4e32049?w=300&q=80", title: "Video Dokumentasi Kuda Lumping" },
        { type: "image", category: "Ziarah Makam Leluhur", url: "https://images.unsplash.com/photo-1590483849503-6058098670a5?w=800&q=80", thumb: "https://images.unsplash.com/photo-1590483849503-6058098670a5?w=300&q=80", title: "Tradisi Ziarah Bersama" }
    ]
};

// Export for usage (if modules used, otherwise it's global)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = siteData;
}
