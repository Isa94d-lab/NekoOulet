
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