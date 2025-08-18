let cartas = [
    { id: 1, nombre: "Mago Oscuro", precio: 100 },
    { id: 2, nombre: "Dragón Blanco de Ojos Azules", precio: 150 },
    { id: 3, nombre: "Calavera Invocada", precio: 80 },
    { id: 4, nombre: "Cilindro Mágico", precio: 50, imagen: "https://i.imgur.com/kRj1NZk.png" },
    { id: 5, nombre: "Hombre Lobo de Plata", precio: 80, imagen: "https://i.imgur.com/D0ePb8v.png" },
    { id: 6, nombre: "Kuriboh", precio: 40, imagen: "https://i.imgur.com/YMprff6.png" },
    { id: 7, nombre: "Dragón Negro de Ojos Rojos", precio: 120, imagen: "https://i.imgur.com/pZn2wfw.png" },
    { id: 8, nombre: "Mago del Tiempo", precio: 90, imagen: "https://i.imgur.com/2n4rQ2U.png" },
    { id: 9, nombre: "Slifer el Dragón del Cielo", precio: 500, imagen: "https://i.imgur.com/nRkNk2t.png" }
];


let contenedor = document.getElementById("productos");

cartas.forEach(carta => {
    let div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
        <img src="${carta.imagen}" alt="${carta.nombre}">
        <strong>${carta.nombre}</strong><br>
        Precio: $${carta.precio}<br>
        <button>Agregar al carrito</button>
    `;
    contenedor.appendChild(div);
});
