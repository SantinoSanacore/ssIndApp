/*const divProductos = document.querySelector("#divProductos")

function mostrarProductos(){
    productos.forEach(producto => {

    const div = document.createElement("div")
    div.classList.add("articulos")
    div.innerHTML = `
        <img class="imgProducto" src="${producto.img}" alt="${producto.nombre}"">
        <div class="datosProducto">
            <h3 class="tituloProducto">${producto.nombre}</h3>
            <p class="precioProducto">$${producto.precio}</p>
            <button class="agregarProducto" id="${producto.id}">Agregar al carrito</button>
        </div>  
    `
        divProductos.append(div)
})
    let btn = document.querySelectorAll(".agregarProducto");
    
    btn.forEach(b => {
    b.addEventListener("click", agregarACarrito)
})
}
mostrarProductos();

let carrito = []

let cantidad = 0

function agregarACarrito(event){
    let boton = event.target
    let idAgregar = boton.id

    Toastify({
        text: "Producto agregado",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", 
        position: "right",
        stopOnFocus: true, 
        style: {
        background: "green",
        },
        onClick: function(){}
    }).showToast();

    let productoEncontrado = productos.find(p => {
        return p.id === parseInt(boton.id)
    })
    let productoExistente = carrito.find(p => p.id === productoEncontrado.id)
    if(productoExistente){
        productoExistente.cantidad += 1
    } else{
        productoEncontrado.cantidad = 1
        carrito.push(productoEncontrado)
    }
    console.log(carrito)
    mostrarCarrito();
}

const contenedorCarrito = document.querySelector("#carrito")

function mostrarCarrito() {
    contenedorCarrito.innerHTML= ""
    carrito.map(producto => {
    const divCarrito = document.createElement("div")
    divCarrito.classList.add("productosSeleccionados")
    divCarrito.innerHTML= `
    <div>
        <h4>${producto.nombre}</h4>
        <p>El costo de este producto es de $${producto.precio}</p>
        <p>Cantidad : ${producto.cantidad}</p>
        <button class="btnEliminar" id="${producto.id}">ELIMINAR</button>
    </div>
    `
    contenedorCarrito.append(divCarrito);
    })

    let botonesEliminar = document.querySelectorAll(".btnEliminar");

    botonesEliminar.forEach(btnE => {
    btnE.addEventListener("click", eliminarProducto)
    });
};

function eliminarProducto(event) {
    let idProducto = event.target.id;
    let productoAEliminar = carrito.find(producto => producto.id === parseInt(idProducto));

    Toastify({
        text: "Producto eliminado",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true, 
        style: {
        background: "red",
        },
        onClick: function(){}
    }).showToast();

    if (productoAEliminar.cantidad > 1) {
        productoAEliminar.cantidad -= 1;
    } else {
        carrito = carrito.filter(producto => producto.id !== parseInt(idProducto));
    }

    mostrarCarrito();
}

const formulario = document.querySelector("#form")
formulario.addEventListener("submit", guardarFormulario)
const nombre = document.querySelector("#nombreCliente")
const email = document.querySelector("#emailCliente")
const asunto = document.querySelector("#asuntoCliente")
const mensaje = document.querySelector("#mensajeCliente")

function guardarFormulario(e){
    e.preventDefault()
    const valorNombre = nombre.value
    const valorEmail = email.value
    const valorAsunto = asunto.value
    const valorMensaje = mensaje.value
    sessionStorage.setItem(`Nombre`, valorNombre)
    sessionStorage.setItem(`Email`, valorEmail)
    sessionStorage.setItem(`Asunto`, valorAsunto)
    sessionStorage.setItem(`Mensaje`, valorMensaje)
}

*/

fetch("/data.json")
.then((r)=> r.json())
.then((productos)=>{
    console.log(productos)
})