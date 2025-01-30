export async function productosAlmacenados() {

    // Llamamos al JSON SERVER ----------------------
    try {
        const response = await fetch("http://localhost:3000/productos");
        if (!response.ok) throw new Error("Error al obtener productos");



        // Asegúrate de que el botón "Crear" tenga el ID correcto en el HTML
        const btnCrear = document.getElementById('btnCrear');

        btnCrear.addEventListener('click', async function() {
            const name = document.getElementById('new_nameProduct').value;
            const stock = document.getElementById('new_stockProduct').value;
            const price = document.getElementById('new_priceProduct').value;
            const image = document.getElementById('new_imgProduct').value;

            // Validación básica para asegurarse de que los campos no estén vacíos
            if (!name || !stock || !price || !image) {
                alert('Por favor, complete todos los campos.');
                return;
            }

            const nuevoProducto = {
                name: name,
                stock: stock,
                price: price,
                image: image,
                id: Date.now() // Puedes usar la fecha actual para generar un ID único
            };

            try {
                // Enviar la solicitud POST para agregar el producto
                const response = await fetch('http://localhost:3000/productos', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(nuevoProducto),
                });

                if (!response.ok) throw new Error('Error al crear el producto');
                alert('Producto creado con éxito');
            } catch (error) {
                console.error('Error creando el producto:', error);
            }
        });





















        const productos = await response.json();
        console.log("Productos obtenidos:", productos); // Verifica si se están obteniendo

        const select = document.getElementById("product-select");
        if (!select) {
            console.error("No se encontró el <select> con id 'product-select'");
            return;
        }

        // Mostrar ID que se encuentra en el JSON SERVER ----------------------

        // Limpiar opciones previas
        select.innerHTML = '<option selected>Selecciona un código de producto</option>';

        // Agregar opciones al select, para mostrarlas al usuario
        productos.forEach(producto => {
            const option = document.createElement("option");
            option.value = producto.id;  // Guardamos el ID del producto para mostrarlo
            option.textContent = `${producto.id}`;
            select.appendChild(option);
        });

        // Evento para actualizar los campos al seleccionar un producto
        select.addEventListener("change", () => {
            const productoSeleccionado = productos.find(p => p.id === select.value);

            // Mostrar informacion del producto segun el id seleccionado
            if (productoSeleccionado) {
                document.getElementById("name-product").value = productoSeleccionado.name;
                document.getElementById("price-product").value = productoSeleccionado.price;
                document.getElementById("stock-product").value = productoSeleccionado.stock;
                document.getElementById("img-product").value = productoSeleccionado.image;
            } else {
                document.getElementById("name-product").value = "No se ha ingresado un producto";
                document.getElementById("price-product").value = "No se ha ingresado un producto";
                document.getElementById("stock-product").value = "No se ha ingresado un producto";
                document.getElementById("img-product").value = "No se ha ingresado un producto";
            }
        });

        // Funcionalidad para editar el producto ---------------------------
        const btnGuardar = document.getElementById("guardarBtn2");
        btnGuardar.addEventListener("click", async () => {
            const idProducto = select.value;
            const name = document.getElementById("name-product").value;
            const stock = document.getElementById("stock-product").value;
            const price = document.getElementById("price-product").value;
            const image = document.getElementById("img-product").value;

            // Validar si se seleccionó un producto y si los campos no están vacíos
            if (!idProducto || !name || !stock || !price || !image) {
                alert("Por favor, complete todos los campos.");
                return;
            }

            const productoEditado = {
                id: idProducto,
                name,
                stock,
                price,
                image
            };

            try {
                // Enviar la solicitud PUT para actualizar el producto
                const updateResponse = await fetch(`http://localhost:3000/productos/${idProducto}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(productoEditado)
                });

                if (!updateResponse.ok) throw new Error("Error al actualizar el producto");

                // Mostrar mensaje de éxito y actualizar la interfaz
                alert("Producto actualizado correctamente");

                // Recargar la lista de productos sin perder la selección
                productosAlmacenados();

            } catch (error) {
                console.error("Error actualizando el producto:", error);
            }
        });

    } catch (error) {
        console.error("Error obteniendo productos:", error);
    }
}
