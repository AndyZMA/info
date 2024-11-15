// Selecciona las imágenes y los botones de navegación
const desktopImages = document.querySelectorAll('.desktop-images .desktop-img');
const mobileImages = document.querySelectorAll('.mobile-images .mobile-img');
const buttons = document.querySelectorAll('.navigation-buttons button');

let currentIndex = 0;
let images; // Grupo de imágenes actual
let intervalID; // ID del intervalo para poder cancelarlo
const transitionDuration = 60000; // Duración de la transición en milisegundos (60 segundos)
const intervalDuration = 60000; // Duración entre cambios de imágenes (60 segundos)

// Función para limpiar todas las clases 'active' y 'prev' de ambos grupos de imágenes
function clearActiveClasses() {
    desktopImages.forEach(img => img.classList.remove('active', 'prev'));
    mobileImages.forEach(img => img.classList.remove('active', 'prev'));
}

// Función para avanzar al siguiente banner en el grupo actual de imágenes
function nextImage() {
    let previousIndex = currentIndex;
    currentIndex = (currentIndex + 1) % images.length;

    // Añade la clase 'prev' a la imagen anterior y 'active' a la nueva
    images[previousIndex].classList.remove('active');
    images[previousIndex].classList.add('prev');
    images[currentIndex].classList.add('active');

    // Actualiza los botones de navegación
    buttons.forEach((btn, i) => btn.classList.toggle('active', i === currentIndex));

    // Limpia la clase 'prev' después de que termine la transición
    setTimeout(() => {
        images[previousIndex].classList.remove('prev');
    }, transitionDuration);
}

// Configura el grupo de imágenes y el intervalo adecuado según el tamaño de la pantalla
function setImagesGroup() {
    clearInterval(intervalID); // Limpia cualquier intervalo existente
    currentIndex = 0; // Reinicia el índice

    if (window.innerWidth > 768) {
        images = desktopImages;
    } else {
        images = mobileImages;
    }

    clearActiveClasses(); // Limpia las clases activas y previas
    images[currentIndex].classList.add('active'); // Muestra la primera imagen

    intervalID = setInterval(nextImage, intervalDuration); // Configura el ciclo para el grupo actual
}

// Escucha cambios en el tamaño de la ventana para cambiar el grupo de imágenes dinámicamente
window.addEventListener('resize', setImagesGroup);

// Inicializa el grupo de imágenes y configura el intervalo de cambio
setImagesGroup();

// Agrega un evento a cada botón de navegación para cambiar manualmente de imagen
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        clearInterval(intervalID); // Pausa el intervalo para dar prioridad al botón
        let previousIndex = currentIndex;
        currentIndex = index; // Actualiza el índice según el botón presionado

        // Actualiza las clases para la transición
        images[previousIndex].classList.remove('active');
        images[previousIndex].classList.add('prev');
        images[currentIndex].classList.add('active');

        // Actualiza los botones de navegación
        buttons.forEach((btn, i) => btn.classList.toggle('active', i === currentIndex));

        // Limpia la clase 'prev' después de que termine la transición
        setTimeout(() => {
            images[previousIndex].classList.remove('prev');
        }, transitionDuration);

        intervalID = setInterval(nextImage, intervalDuration); // Reinicia el ciclo para el grupo actual
    });
});
