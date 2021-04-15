// const consutarAPIBtn = document.querySelector('#consultar');
// consutarAPIBtn.addEventListener('click', obtenerDatos);

document.addEventListener('DOMContentLoaded', obtenerDatos);

function obtenerDatos() {
    const url = 'http://localhost:4000/productos';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => imprimirDatosHTML(resultado));
}

function imprimirDatosHTML(productos) {
    const contenido = document.querySelector('#contenedor-cartas');
    // console.log(productos)
    let html = '';
    productos.forEach(producto => {
        const { url, nombre, precio, descripcion } = producto;
        html += `
        <div>
            <div class="card">
                <img src="img/${url}"> 
                <h3>${nombre}</h3>
                <p class="precio">$${precio}</p>
                <p>${descripcion}</p>
                <p><button name="carrito">Agregar al carrito</button></p>
            </div>
        </div>
     `;


    })
    contenido.innerHTML = html;
}