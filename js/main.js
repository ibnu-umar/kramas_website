document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const floatingMenuBtn = document.getElementById('floating-menu-btn');
    const floatingCloseBtn = document.getElementById('floating-close-btn');
    const floatingMobileMenu = document.getElementById('floating-mobile-menu');

    if (floatingMenuBtn && floatingCloseBtn && floatingMobileMenu) {
        const toggleMobileMenu = () => {
            floatingMobileMenu.classList.toggle('-translate-y-full');
            floatingMobileMenu.classList.toggle('opacity-0');
            floatingMobileMenu.classList.toggle('pointer-events-none');
            document.body.classList.toggle('overflow-hidden');
        };

        floatingMenuBtn.addEventListener('click', toggleMobileMenu);
        floatingCloseBtn.addEventListener('click', toggleMobileMenu);
    }

    // 2. Set Active Nav Link
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('header nav a, #floating-mobile-menu nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('text-earth-gold', 'font-bold');
            link.classList.remove('text-gray-700', 'text-gray-800');
        }
    });
    // 3. Dynamic Rendering based on page
    if (typeof siteData !== 'undefined') {
        // Render Home Page Agenda
        const agendaContainer = document.getElementById('agenda-container');
        if (agendaContainer) {
            siteData.agenda.forEach(item => {
                const card = document.createElement('div');
                card.className = 'bg-white rounded-[20px] p-[12px] shadow-md hover:shadow-lg transition-shadow border-t-4 border-earth-gold flex flex-col';
                card.innerHTML = `
                    <div class="h-48 overflow-hidden rounded-[8px] img-zoom-container">
                        <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
                    </div>
                    <div class="pt-4 pb-2 flex flex-col flex-grow">
                        <div class="text-sm text-earth-gold font-semibold mb-2">${item.date}</div>
                        <h3 class="text-xl font-bold text-earth-dark mb-2">${item.title}</h3>
                        <p class="text-gray-600 mb-4 flex-grow">${item.description}</p>
                        <div class="flex justify-end gap-3 mt-auto">
                            <a href="https://youtube.com/@abimantranachannel3622?si=AuROUtvNxUWZiBk2" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-sm font-semibold text-earth-gold border border-earth-gold rounded-[8px] px-4 py-2 transition-all hover:bg-earth-gold hover:text-gold hover:shadow-md hover:-translate-y-0.5">
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                                Tonton Live
                            </a>
                            <button class="share-btn flex items-center gap-2 text-sm font-semibold text-white bg-earth-gold border border-earth-gold rounded-[8px] px-4 py-2 transition-all hover:bg-[#b8962e] hover:border-[#b8962e] hover:shadow-md hover:-translate-y-0.5">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                                Bagikan
                            </button>
                        </div>
                    </div>
                `;

                const shareBtn = card.querySelector('.share-btn');
                if (shareBtn) {
                    shareBtn.addEventListener('click', async () => {
                        if (navigator.share) {
                            try {
                                const fullDescription = `Jangan lewatkan acara di Kelurahan Kramas!\n\nAcara: ${item.title}\nTanggal: ${item.date}\nDeskripsi: ${item.description}\n\nMari bersama berpartisipasi melestarikan budaya kita!\n\nInfo selengkapnya: ${window.location.href}`;

                                let shareData = {
                                    text: fullDescription
                                };

                                // Coba ambil gambar dan ubah menjadi File
                                try {
                                    const response = await fetch(item.image);
                                    const blob = await response.blob();
                                    const file = new File([blob], 'poster.png', { type: blob.type });

                                    if (navigator.canShare && navigator.canShare({ files: [file], text: fullDescription })) {
                                        shareData.files = [file];
                                    }
                                } catch (fetchErr) {
                                    console.log('Gagal memuat gambar untuk dibagikan:', fetchErr);
                                }

                                await navigator.share(shareData);
                            } catch (err) {
                                console.log('Share error or cancelled:', err);
                            }
                        } else {
                            alert('Fitur bagikan tidak didukung pada perangkat/browser ini.');
                        }
                    });
                }

                agendaContainer.appendChild(card);
            });
        }

        // Render Profil Page Data
        const luasEl = document.getElementById('profil-luas');
        if (luasEl) {
            document.getElementById('profil-luas').textContent = siteData.profil.geografis.luas;
            document.getElementById('profil-batas').textContent = siteData.profil.geografis.batas;
            document.getElementById('profil-ketinggian').textContent = siteData.profil.geografis.ketinggian;

            document.getElementById('profil-penduduk').textContent = siteData.profil.demografi.penduduk;
            document.getElementById('profil-rtrw').textContent = siteData.profil.demografi.rtrw;
            document.getElementById('profil-pekerjaan').textContent = siteData.profil.demografi.pekerjaan;

            document.getElementById('profil-map').src = siteData.profil.aset_visual.map;

            const envContainer = document.getElementById('profil-lingkungan');
            siteData.profil.aset_visual.lingkungan.forEach(item => {
                const imgWrap = document.createElement('div');
                imgWrap.className = 'rounded-lg overflow-hidden shadow-md group';
                imgWrap.innerHTML = `
                    <div class="h-56 img-zoom-container relative">
                        <img src="${item.url}" alt="${item.caption}" class="w-full h-full object-cover">
                        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 pt-8">
                            <p class="text-white text-sm font-medium">${item.caption}</p>
                        </div>
                    </div>
                `;
                envContainer.appendChild(imgWrap);
            });
        }

        // Render Tradisi Page Data
        const tradisiContainer = document.getElementById('tradisi-container');
        if (tradisiContainer) {
            siteData.tradisi.forEach(item => {
                const card = document.createElement('div');
                card.className = 'flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden mb-8';
                card.innerHTML = `
                    <div class="md:w-1/3 h-64 md:h-auto img-zoom-container">
                        <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
                    </div>
                    <div class="md:w-2/3 p-6 flex flex-col justify-center">
                        <h3 class="text-2xl font-bold text-earth-dark mb-3">${item.title}</h3>
                        <p class="text-gray-700 leading-relaxed">${item.description}</p>
                    </div>
                `;
                tradisiContainer.appendChild(card);
            });

            const jadwalContainer = document.getElementById('jadwal-container');
            siteData.jadwal_pelaksanaan.forEach(item => {
                const li = document.createElement('li');
                li.className = 'flex flex-col md:flex-row md:justify-between items-start md:items-center p-6 border-b border-gray-200 last:border-0 hover:bg-earth-cream transition-colors gap-6 md:gap-0';
                li.innerHTML = `
                    <span class="font-semibold text-earth-dark text-lg">${item.event}</span>
                    <span class="text-earth-gold font-medium bg-earth-dark px-3 py-1 rounded text-sm">${item.time}</span>
                `;
                jadwalContainer.appendChild(li);
            });
        }

        // Render Galeri Page Data
        const galeriContainer = document.getElementById('galeri-container');
        if (galeriContainer) {
            siteData.galeri.forEach(item => {
                const box = document.createElement('div');
                box.className = 'relative group rounded-lg overflow-hidden cursor-pointer h-64 shadow-md bg-earth-dark';
                box.dataset.url = item.url;
                box.dataset.type = item.type;

                let iconHtml = item.type === 'video' ? '<div class="absolute inset-0 flex items-center justify-center"><svg class="w-12 h-12 text-white opacity-80 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" fill-rule="evenodd"></path></svg></div>' : '';

                box.innerHTML = `
                    <img src="${item.thumb}" alt="${item.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100">
                    ${iconHtml}
                    <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <span class="text-xs font-semibold text-earth-gold uppercase tracking-wider mb-1 block">${item.category}</span>
                        <h4 class="text-white font-medium truncate">${item.title}</h4>
                    </div>
                `;

                box.addEventListener('click', () => openLightbox(item));
                galeriContainer.appendChild(box);
            });
        }
    }

    // 4. Lightbox functionality
    const modal = document.getElementById('lightbox-modal');
    const modalContent = document.getElementById('lightbox-content');
    const modalVideo = document.getElementById('lightbox-video');
    const closeBtn = document.querySelector('.close-lightbox');

    if (modal) {
        window.openLightbox = (item) => {
            if (item.type === 'image') {
                modalContent.src = item.url;
                modalContent.classList.remove('hidden');
                modalVideo.classList.add('hidden');
                modalVideo.src = '';
            } else if (item.type === 'video') {
                modalVideo.src = item.url;
                modalVideo.classList.remove('hidden');
                modalContent.classList.add('hidden');
            }
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        };

        const closeModal = () => {
            modal.classList.remove('active');
            modalVideo.src = ''; // Stop video playback
            document.body.style.overflow = '';
        };

        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }

    // 5. Hero Slideshow logic (for kontak.html or any page with #hero-slideshow)
    const slides = document.querySelectorAll('.slide-bg');
    if (slides.length > 0) {
        let currentSlide = 0;
        setInterval(() => {
            slides[currentSlide].classList.remove('opacity-100');
            slides[currentSlide].classList.add('opacity-0');

            currentSlide = (currentSlide + 1) % slides.length;

            slides[currentSlide].classList.remove('opacity-0');
            slides[currentSlide].classList.add('opacity-100');
        }, 4000); // 4 seconds interval
    }
});
