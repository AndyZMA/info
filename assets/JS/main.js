document.addEventListener('DOMContentLoaded', function() {
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

    // Chat Icon functionality
    const chatIcon = document.getElementById('chatIcon');
    const chatWindow = document.getElementById('chatWindow');

    chatIcon.addEventListener('click', function() {
        chatWindow.style.display = chatWindow.style.display === 'block' ? 'none' : 'block';
    });
});

document.getElementById('menuButton').addEventListener('click', function() {
    var navbarLower = document.getElementById('navbarLower');
    if (navbarLower.classList.contains('open')) {
        navbarLower.classList.remove('open');
    } else {
        navbarLower.classList.add('open');
    }
});