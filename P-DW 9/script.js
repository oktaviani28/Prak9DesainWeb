window.addEventListener('DOMContentLoaded', (event) => {
    let current = 0;
    const images = document.querySelectorAll('#slider img');
    const controls = document.querySelectorAll('.slider-control');
    const totalImages = images.length;
    let autoSlideTimeout;

    //Fungsi untuk menampilkan gambar dan menandai kontrol yang aktif
    const showImages = (index) => {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
        controls.forEach(control => control.classList.remove('active'));
    }

    //Fungsi untuk memulai slider otomatis
    const startAutoSlide = () => {
        stopAutoSlide(); // Menghentikan slider sebelum memulai yang baru 
        autoSlideTimeout = setInterval (() => {
            current = (current + 1) % totalImages;
            showImages(current);
        }, 3000); //3000 ms = 3 Detik 
    }

    //Fungsi untuk menghentikan slider otomatis 
    const stopAutoSlide = () => {
        clearTimeout (autoSlideTimeout);
    }

    //Event Listener untuk kontrol slider 
    controls.forEach(control => {
        control.addEventListener('click', (e) => {
            current = parseInt(e.target.getAttribute('data-index'));
            showImages(current);
            startAutoSlide();
        });
    })
    startAutoSlide();
})