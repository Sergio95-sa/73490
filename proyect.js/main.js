const cartas = document.querySelectorAll(".carta");
const carritoContenedor = document.getElementById("carrito");
const totalSpan = document.getElementById("total");
const btnFinalizar = document.getElementById("finalizar");
const resumenCompra = document.getElementById("resumenCompra");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function actualizarCarrito() {
    carritoContenedor.innerHTML = "";

    if (carrito.length === 0) {
        carritoContenedor.innerHTML = "<p>Tu carrito está vacío</p>";
        totalSpan.textContent = "0";
        localStorage.removeItem("carrito"); 
        return;
    }

    carrito.forEach((producto, index) => {
        const item = document.createElement("div");
        item.innerHTML = `
            <p>
                <strong>${producto.nombre}</strong> - $${producto.precio} x ${producto.cantidad}
            </p>
        `;

        const btnSumar = document.createElement("button");
        btnSumar.textContent = "➕";
        btnSumar.addEventListener("click", () => {
            producto.cantidad++;
            actualizarCarrito();
        });
        const btnRestar = document.createElement("button");
        btnRestar.textContent = "➖";
        btnRestar.addEventListener("click", () => {
            if (producto.cantidad > 1) {
                producto.cantidad--;
            } else {
                carrito.splice(index, 1);
            }
            actualizarCarrito();
        });

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "🗑️";
        btnEliminar.addEventListener("click", () => {
            carrito.splice(index, 1);
            actualizarCarrito();
        });

        item.appendChild(btnSumar);
        item.appendChild(btnRestar);
        item.appendChild(btnEliminar);

        carritoContenedor.appendChild(item);
    });

    const total = carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0);
    totalSpan.textContent = total;


    guardarCarrito();
}

cartas.forEach(carta => {
    const boton = carta.querySelector("button");
    const nombre = carta.querySelector("img").alt || "Carta sin nombre";
    const precioTexto = carta.querySelector("p").textContent;
    const precio = parseInt(precioTexto.replace(/\D/g, ""), 10);

    boton.addEventListener("click", () => {
        const productoExistente = carrito.find(p => p.nombre === nombre);
        if (productoExistente) {
            productoExistente.cantidad++;
        } else {
            carrito.push({
                nombre,
                precio,
                cantidad: 1
            });
        }
        actualizarCarrito();
    });
});

btnFinalizar.addEventListener("click", () => {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío. Agrega productos antes de finalizar.");
        return;
    }

    const historial = JSON.parse(localStorage.getItem("historialCompras")) || [];
    const compra = {
        productos: [...carrito],
        fecha: new Date().toLocaleString(),
        total: carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0)
    };
    historial.push(compra);
    localStorage.setItem("historialCompras", JSON.stringify(historial));

    resumenCompra.innerHTML = "<h3>Resumen de tu compra</h3>";
    compra.productos.forEach(prod => {
        const linea = document.createElement("p");
        linea.textContent = `${prod.nombre} - ${prod.cantidad} x $${prod.precio}`;
        resumenCompra.appendChild(linea);
    });

    const totalLinea = document.createElement("p");
    totalLinea.innerHTML = `<strong>Total: $${compra.total}</strong>`;
    resumenCompra.appendChild(totalLinea);

    carrito = [];
    actualizarCarrito();

    alert("¡Compra realizada con éxito! 🎉");
});

actualizarCarrito();
