// 1. Logika untuk Hamburger Menu pada Tampilan Mobile
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Jika hamburger diklik, tambahkan/hapus class 'active' pada menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 2. Logika Smooth Scroll saat link di Navbar diklik
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        // Mencegah lompatan standar HTML
        e.preventDefault(); 
        
        // Menutup menu mobile setelah link diklik
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }

        // Mengambil ID tujuan (contoh: #masalah)
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Melakukan scroll halus ke elemen tujuan
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60, // -60 agar tidak tertutup navbar yang sticky
                behavior: 'smooth'
            });
        }
    });
});

// 3. Logika Animasi Sederhana saat Elemen Muncul di Layar (Scroll)
const fadeElements = document.querySelectorAll('.fade-in');

const checkVisibility = () => {
    const triggerBottom = window.innerHeight * 0.85;

    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < triggerBottom) {
            element.classList.add('visible'); // Tambahkan class .visible jika terlihat
        }
    });
};

// Jalankan fungsi saat di-scroll dan saat halaman pertama kali dimuat
window.addEventListener('scroll', checkVisibility);
checkVisibility();

// 4. Penanganan Gambar yang Gagal Dimuat (Fallback)
const images = document.querySelectorAll('img');

images.forEach(img => {
    img.onerror = function() {
        // Ganti gambar yang error dengan background abu-abu/teks placeholder
        this.onerror = null; // Mencegah looping berulang
        this.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23eeeeee%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2240%22%20y%3D%22105%22%3EGambar%20Error%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';
    };
});