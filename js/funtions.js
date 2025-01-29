/* Permite el despliegue del menu de "productos" */

export function mostrarMenu() {
    document.addEventListener("DOMContentLoaded", function () {
        const productosBtn = document.getElementById("productos-btn");
        const dropdown = productosBtn.parentElement;
    
        productosBtn.addEventListener("click", function (event) {
            event.preventDefault(); // Evita que la página salte
            dropdown.classList.toggle("active"); // Agrega o quita la clase "active"
        });
    
        // Cierra el menú si se hace clic fuera
        document.addEventListener("click", function (event) {
            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove("active");
            }
        });
    });
}

// Esta función se encargará de mostrar y ocultar el formulario
export function toggleFormulario() {
    const container = document.getElementById('conteiner1');
    // Si el contenedor está oculto, lo mostramos; si está visible, lo ocultamos
    if (container.style.display === 'none' || container.style.display === '') {
        container.style.display = 'flex'; // Cambiamos a 'flex' para que se vea
    } else {
        container.style.display = 'none'; // Lo ocultamos
    }
}

