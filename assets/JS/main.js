document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbarNav = document.querySelector('.navbar-nav');

    menuToggle.addEventListener('click', function() {
        navbarNav.classList.toggle('active');
    });

    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(function(toggle) {
        toggle.addEventListener('click', function() {
            const dropdownMenu = this.nextElementSibling;
            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        });
    });

    let currentIndex = 0;
    const images = document.querySelectorAll('.image-movement img');
    const totalImages = images.length;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.opacity = i === index ? '1' : '0';
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }

    setInterval(nextImage, 3500); // Cambia de imagen cada 3 segundos

    const imageMovementDiv = document.querySelector('.image-movement');
    imageMovementDiv.addEventListener('mouseover', nextImage);
});
