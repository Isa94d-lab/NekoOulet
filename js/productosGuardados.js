
export function productosAlmacenados() {
    document.addEventListener("DOMContentLoaded", () => {
        const btnCrear = document.querySelector(".crear");
    
        btnCrear.addEventListener("click", async (event) => {
            event.preventDefault(); // Evita que la página se recargue
    
            // Capturamos los valores de los inputs
            const nuevoProducto = {
                code: document.getElementById("new_code").value,
                name: document.getElementById("new_nameProduct").value,
                stock: document.getElementById("new_stockProduct").value,
                price: document.getElementById("new_priceProduct").value,
                image: document.getElementById("new_imgProduct").value
            };
    
            // Enviar los datos a JSON Server
            await fetch("http://localhost:3000/productos", {
                method: "POST", // Agregar en lugar de reemplazar
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(nuevoProducto)
            });
    
            // Limpiamos el formulario para volver a ingresar otro producto
            document.getElementById("new_code").value = "";
            document.getElementById("new_nameProduct").value = "";
            document.getElementById("new_stockProduct").value = "";
            document.getElementById("new_priceProduct").value = "";
            document.getElementById("new_imgProduct").value = "";
    
            mostrarProductos(); // Actualiza la lista de productos en pantalla
        });
    
        // Función para obtener y mostrar los productos almacenados
        async function mostrarProductos() {
            const response = await fetch("http://localhost:3000/productos");
            const productos = await response.json();
    
            // Aquí puedes mostrar los productos en una tabla o lista
            console.log("Productos almacenados:", productos);
        }
    
        mostrarProductos(); // Muestra los productos cuando se carga la página
    });
    
}