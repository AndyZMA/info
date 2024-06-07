document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidad para los menús desplegables de desktop
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(function(toggle) {
        toggle.addEventListener('click', function() {
            const dropdownMenu = this.nextElementSibling;
            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Funcionalidad para el cambio de imágenes en el carrusel
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

    setInterval(nextImage, 3500); // Cambia de imagen cada 3.5 segundos

    const imageMovementDiv = document.querySelector('.image-movement');
    imageMovementDiv.addEventListener('mouseover', nextImage);

    // Funcionalidad del icono de chat
    const chatIcon = document.getElementById('chatIcon');
    const chatWindow = document.getElementById('chatWindow');

    if (chatIcon && chatWindow) {
        chatIcon.addEventListener('click', function() {
            chatWindow.style.display = chatWindow.style.display === 'block' ? 'none' : 'block';
        });
    }

    // Funcionalidad del menú para móviles
    const menuButton = document.getElementById('menuButton');
    if (menuButton) {
        menuButton.addEventListener('click', function() {
            const navbarLower = document.getElementById('navbarLower');
            navbarLower.classList.toggle('open');
        });
    }

    // Funcionalidad del menú desplegable en móviles
    const dropdownIcon = document.getElementById('dropdownIcon');
    if (dropdownIcon) {
        dropdownIcon.addEventListener('click', function() {
            const dropdownMenu = document.getElementById('dropdownMenu');
            dropdownMenu.classList.toggle('open');
        });
    }

    // Validación del formulario
    const userForm = document.getElementById('userForm');
    if (userForm) {
        userForm.addEventListener('submit', function(event) {
            if (!userForm.checkValidity()) {
                event.preventDefault();
                alert('Por favor, complete todos los campos antes de enviar.');
            }
        });
    }
});
