// Función para cambiar el color de fondo y texto
function cambiarColor() {
    const body = document.body; // Selecciona el cuerpo del documento
    const sections = document.querySelectorAll('.cuerpo'); // Selecciona todas las secciones del documento

    // Cambia el fondo del cuerpo y el color del texto según el estado del toggle
    body.style.backgroundColor = document.getElementById('toggle').checked ? 'black' : 'white';
    body.style.color = document.getElementById('toggle').checked ? 'white' : 'black';

    // Cambia el color de texto de las secciones de manera independiente
    sections.forEach(section => {
        section.style.color = document.getElementById('toggle').checked ? 'white' : 'black';
    });
}

// Función para alternar la visibilidad del menú
function toggleMenu() {
    const menu = document.querySelector('.menu-vertical');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex'; // Mostrar el menú
    } else {
        menu.style.display = 'none'; // Ocultar el menú
    }
}

// Función para cerrar el menú si se hace clic fuera de él
document.addEventListener('click', function (event) {
    const menu = document.querySelector('.menu-vertical');
    const toggleButton = document.querySelector('.toggle-menu');

    // Verifica si el clic fue fuera del menú y del botón de alternar
    if (menu.style.display === 'flex' && !menu.contains(event.target) && !toggleButton.contains(event.target)) {
        menu.style.display = 'none'; // Cierra el menú
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".toggle-menu");
    const menuVertical = document.querySelector(".menu-vertical");

    menuIcon.addEventListener("click", function() {
        menuVertical.classList.toggle("active");

        // Ocultar el icono cuando el menú está abierto, mostrar cuando está cerrado
        if (menuVertical.classList.contains("active")) {
            menuIcon.style.display = "none";
        } else {
            menuIcon.style.display = "block";
        }
    });

    // Cerrar el menú cuando se hace clic fuera de él y mostrar el ícono
    document.addEventListener("click", function(event) {
        if (!menuVertical.contains(event.target) && !menuIcon.contains(event.target)) {
            menuVertical.classList.remove("active");
            menuIcon.style.display = "block";
        }
    });
});

