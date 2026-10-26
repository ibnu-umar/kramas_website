document.addEventListener('DOMContentLoaded', () => {
    // Check if we are on the gallery page
    if (!document.getElementById('custom-lightbox-modal')) return;

    const galleries = [
        {
            id: 'slider-track-wayang',
            images: [
                "asset/img/galeri/wayang_kulit/wayang_1.jpeg",
                "asset/img/galeri/wayang_kulit/wayang_4.jpeg",
                "asset/img/galeri/wayang_kulit/wayang_3.jpeg",
                "asset/img/galeri/wayang_kulit/wayang_5.jpeg",
                "asset/img/galeri/wayang_kulit/wayang_2.jpeg",
                "asset/img/galeri/wayang_kulit/wayang_6.jpeg",
                "asset/img/galeri/wayang_kulit/wayang_7.jpeg",
                "asset/img/galeri/wayang_kulit/wayang_8.jpeg",
                "asset/img/galeri/wayang_kulit/wayang_9.jpeg",
                "asset/img/galeri/wayang_kulit/wayang_10.jpeg",
                "asset/img/galeri/wayang_kulit/wayang_11.jpeg",
                "asset/img/galeri/wayang_kulit/wayang_12.jpeg"
            ]
        },
        {
            id: 'slider-track-ziarah',
            images: [
                "asset/img/galeri/ziarah_makam/ziarah_makam_2.webp",
                "asset/img/galeri/ziarah_makam/ziarah_makam_1.webp",
                "asset/img/galeri/ziarah_makam/ziarah_makam_3.webp"
            ]
        },
        {
            id: 'slider-track-kuda',
            images: [
                "asset/img/galeri/kuda_lumping/kuda_lumping_1.webp",
                "asset/img/galeri/kuda_lumping/kuda lumping 5.jpeg",
                "asset/img/galeri/kuda_lumping/kuda lumping 4.jpeg",
                "asset/img/galeri/kuda_lumping/kuda_lumping_3.jpeg",
                "asset/img/galeri/kuda_lumping/kuda_lumping_2.jpeg"
            ]
        },
        {
            id: 'slider-track-pengajian',
            images: [
                "asset/img/galeri/pengajian/pengajian_1.jpeg",
                "asset/img/galeri/pengajian/pengajian_2.jpeg",
                "asset/img/galeri/pengajian/pengajian_3.jpeg",
                "asset/img/galeri/pengajian/pengajian_4.jpeg"
            ]
        }
    ];

    const modal = document.getElementById('custom-lightbox-modal');
    const modalContent = document.getElementById('custom-lightbox-content');
    const closeBtn = document.querySelector('.custom-close-lightbox');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let isModalOpen = false;
    let currentModalImages = [];
    let currentModalIndex = 0;

    // We need to keep track of intervals for all sliders so we can pause/resume them
    const activeSliders = [];

    // Config
    const itemWidth = 320;
    const gap = 16;
    const step = itemWidth + gap;
    const intervalTime = 3000;

    galleries.forEach(galleryData => {
        const track = document.getElementById(galleryData.id);
        if (!track) return;

        // At least 5 images needed for a smooth scrolling feel. If there are fewer, we duplicate them.
        let sourceImages = [...galleryData.images];
        while (sourceImages.length < 5) {
            sourceImages = [...sourceImages, ...galleryData.images];
        }

        const loopImages = [...sourceImages, ...sourceImages];
        let currentSlide = 0;
        let autoSlideInterval;

        // 1. Render DOM
        loopImages.forEach((imgSrc, index) => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.className = 'slider-item';
            if (index === 0) img.classList.add('active-fade'); // Initialize first item
            img.alt = `Gallery Image ${index}`;
            // Important: map index back to original array length so modal matches the array correctly
            img.dataset.index = index % sourceImages.length;

            img.addEventListener('click', () => {
                openModal(parseInt(img.dataset.index), sourceImages);
            });

            track.appendChild(img);
        });

        // 2. Auto Slide Logic
        const startAutoSlide = () => {
            if (autoSlideInterval) clearInterval(autoSlideInterval);
            autoSlideInterval = setInterval(() => {
                if (!isModalOpen) {
                    moveToNextSlide();
                }
            }, intervalTime);
        };

        const stopAutoSlide = () => {
            clearInterval(autoSlideInterval);
        };

        const moveToNextSlide = () => {
            currentSlide++;

            // For Desktop Sliding
            track.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
            track.style.transform = `translateX(-${currentSlide * step}px)`;

            // For Mobile Fading
            Array.from(track.children).forEach((child, idx) => {
                if (idx === currentSlide) {
                    child.classList.add('active-fade');
                } else {
                    child.classList.remove('active-fade');
                }
            });

            // Seamless loop reset for Desktop and Mobile
            if (currentSlide === sourceImages.length) {
                setTimeout(() => {
                    track.style.transition = 'none';
                    currentSlide = 0;
                    track.style.transform = `translateX(0px)`;

                    Array.from(track.children).forEach((child, idx) => {
                        if (idx === currentSlide) {
                            child.classList.add('active-fade');
                        } else {
                            child.classList.remove('active-fade');
                        }
                    });
                }, 600); // Wait for animation to finish
            }
        };

        activeSliders.push({ start: startAutoSlide, stop: stopAutoSlide });
        startAutoSlide();
    });

    // 3. Modal Logic
    const openModal = (index, imagesArray) => {
        isModalOpen = true;
        activeSliders.forEach(slider => slider.stop());

        currentModalImages = imagesArray;
        currentModalIndex = index;

        updateModalImage();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        isModalOpen = false;
        modal.classList.remove('active');
        document.body.style.overflow = '';
        activeSliders.forEach(slider => slider.start());
    };

    const updateModalImage = () => {
        modalContent.style.opacity = '0';
        setTimeout(() => {
            modalContent.src = currentModalImages[currentModalIndex];
            modalContent.style.opacity = '1';
        }, 150);
    };

    const nextModalImage = () => {
        currentModalIndex = (currentModalIndex + 1) % currentModalImages.length;
        updateModalImage();
    };

    const prevModalImage = () => {
        currentModalIndex = (currentModalIndex - 1 + currentModalImages.length) % currentModalImages.length;
        updateModalImage();
    };

    // Event Listeners
    closeBtn.addEventListener('click', closeModal);
    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        nextModalImage();
    });
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        prevModalImage();
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (!isModalOpen) return;
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowRight') nextModalImage();
        if (e.key === 'ArrowLeft') prevModalImage();
    });

});
