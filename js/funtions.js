/* Permite el despliegue del menu de "productos" -------------------------------------- */ 

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




// Esta función se encargará de mostrar y ocultar el formulario --------------------------------------
export function toggleFormulario() {
    const container = document.getElementById('conteiner1');
    // Si el contenedor está oculto, lo mostramos; si está visible, lo ocultamos
    if (container.style.display === 'none' || container.style.display === '') {
        container.style.display = 'flex'; // Cambiamos a 'flex' para que se vea
    } else {
        container.style.display = 'none'; // Lo ocultamos
    }
}




// Esta función se encargará de generar un codigo unico --------------------------------------
export class generateCode extends HTMLElement {
    constructor() {
        super();

        // Crear el Shadow DOM
        this.attachShadow({ mode: 'open' });

        // Crear el <link> para importar el archivo CSS en el Shadow DOM
        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', '../css/style.css'); // Ajusta la ruta si es necesario

        // Crear un bloque de estilos personalizados
        const style = document.createElement('style');
        style.textContent = `
            label.form-label {
                display: flex;
                margin-bottom: .5rem;
                font-weight: 600;
                margin-top: .5rem;
                justify-content: center;
            }

            input.form-control {
                display: block;
                padding: .375rem .75rem;
                width: 500px;
                font-size: 1rem;
                line-height: 1.5;
                background-color: #fff;
                border: 1px solid #ced4da;
                border-radius: .25rem;
            }
        `;

        // Crear el contenedor para el label y el input dentro del Shadow DOM
        const container = document.createElement('div');
        
        // Crear el label
        const label = document.createElement('label');
        label.setAttribute('for', 'factura_Usuario');
        label.setAttribute('class', 'form-label');
        label.textContent = 'Numero de Factura: ';

        // Crear el input
        const input = document.createElement('input');
        input.setAttribute('class', 'form-control form-select1');
        input.setAttribute('type', 'text');
        input.setAttribute('id', 'codigo');
        input.setAttribute('aria-label', 'Disabled input example');
        input.setAttribute('disabled', true);  // Establecer como deshabilitado y solo lectura
        input.setAttribute('readonly', true);  // Solo lectura

        // Generar un número único y establecerlo en el input
        const number = Date.now() + Math.floor(Math.random() * 1000000);
        input.value = number;  // Establece el valor generado en el input

        // Agregar el <link> de estilos al Shadow DOM
        this.shadowRoot.appendChild(link);
        this.shadowRoot.appendChild(style); // Agregar el bloque de estilos al Shadow DOM

        // Agregar el label y el input al contenedor
        container.appendChild(label);
        container.appendChild(input);

        // Agregar el contenedor al Shadow DOM
        this.shadowRoot.appendChild(container);
    }
}

// Registrar el Web Component
customElements.define('generate-code', generateCode);
