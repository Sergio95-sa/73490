// Array de productos simulados
const productos = [
    { id: 1, nombre: "Camiseta", precio: 25 },
    { id: 2, nombre: "Pantalón", precio: 40 },
    { id: 3, nombre: "Zapatillas", precio: 60 }
];

let carrito = [];

// Cargar carrito desde localStorage si existe
if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

const contenedorProductos = document.getElementById("productos");
const contenedorCarrito = document.getElementById("carrito");
const btnVaciar = document.getElementById("vaciarCarrito");

function mostrarProductos() {
    productos.forEach(prod => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <h3>${prod.nombre}</h3>
            <p>Precio: $${prod.precio}</p>
            <button onclick="agregarAlCarrito(${prod.id})">Agregar al carrito</button>
        `;
        contenedorProductos.appendChild(div);
    });
}

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    contenedorCarrito.innerHTML = "";

    carrito.forEach((prod, index) => {
        const div = document.createElement("div");
        div.classList.add("item-carrito");
        div.innerHTML = `
            <p>${prod.nombre} - $${prod.precio}</p>
            <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;
        contenedorCarrito.appendChild(div);
    });

    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

btnVaciar.addEventListener("click", () => {
    carrito = [];
    actualizarCarrito();
});

mostrarProductos();
actualizarCarrito();