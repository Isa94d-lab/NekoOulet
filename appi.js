import { mostrarMenu, toggleFormulario } from "./js/funtions.js"; // Importamos la función toggleFormulario
import { productosAlmacenados } from "./js/productosGuardados.js";

// Inicializa todo
mostrarMenu();
productosAlmacenados();

// Añadimos el evento para el botón de "Crear" solo
document.getElementById("crear-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Evita que se recargue la página
    toggleFormulario(); // Llama a la función que muestra/oculta el formulario
});
