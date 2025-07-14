alert ()

// Lista de productos disponibles (array de objetos)
const productos = [
    { nombre: "camisa", precio: 4000 },
    { nombre: "pantalon", precio: 8000 },
    { nombre: "zapatillas", precio: 12000 },
    { nombre: "gorra", precio: 2000 }
];

// Función que busca un producto por nombre
function buscarProducto(nombre) {
    return productos.find(producto => producto.nombre === nombre);
}

// Función que suma los precios al total
function agregarAlCarrito(producto, totalActual) {
    return totalActual + producto.precio;
}

// Variable para guardar el total de la compra
let total = 0;

// Instrucciones iniciales
alert("Bienvenido/a a la tienda. Escribí el nombre del producto que querés comprar.");
alert("Productos disponibles: camisa, pantalon, zapatillas, gorra.");
alert("Cuando termines, escribí 'salir'.");

// Ciclo que se repite hasta que el usuario escriba "salir"
let seguirComprando = true;

while (seguirComprando) {
    let entrada = prompt("Ingresá el producto que querés comprar:");

    if (entrada === null || entrada.toLowerCase() === "salir") {
    seguirComprando = false;
    } else {
    let productoSeleccionado = buscarProducto(entrada.toLowerCase());

    if (productoSeleccionado) {
        total = agregarAlCarrito(productoSeleccionado, total);
        alert(`Agregaste ${productoSeleccionado.nombre}. Total parcial: $${total}`);
    } else {
        alert("Producto no encontrado. Intentá de nuevo.");
    }
    }
}

// Mostrar total final
alert(`Gracias por tu compra. El total es: $${total}`);
console.log("Total de la compra: $" + total);

