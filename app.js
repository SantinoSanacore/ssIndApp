const productos = [
    { nombre: "CAMISETA BOCA JUNIORS TITULAR", 
    precio: 21999, 
    img: "./img/camiseta-boca-titular.jpg",
    id: 0
},
    { nombre: "CAMISETA BOCA JUNIORS SUPLENTE",
    precio: 21999,
    img: "./img/camiseta-boca-suplente.jpg",
    id: 1
},
    { nombre: "CAMISETA ARGENTINA ICON",
    precio: 29999,
    img: "./img/camiseta-argentina-icon.jpg",
    id: 2
},
    { nombre: "CAMISETA ARGENTINA SUPLENTE",
    precio: 21999,
    img: "./img/camiseta-argentina-suplente.jpg",
    id: 3
},
    { nombre: "CAMISETA REAL MADRID TITULAR",
    precio: 21999,
    img: "./img/camiseta-real-titular.jpg",
    id: 4
},
    { nombre: "CAMISETA REAL MADRID SUPLENTE",
    precio: 16999,
    img: "./img/camiseta-real-suplente.jpg",
    id: 5
},
    { nombre: "SHORT ARGENTINA TITULAR",
    precio: 12999,
    img: "./img/short-argentina-titular.jpg",
    id: 6
},
    { nombre: "SHORT BOCA JUNIORS TITULAR",
    precio: 12999,
    img: "./img/short-boca-titular.jpg",
    id: 7
},
    { nombre: "SHORT REAL MADRID TITULAR",
    precio: 12999,
    img: "./img/short-real-titular.jpg",
    id: 8
}
] 

const divProductos = document.querySelector("#divProductos")

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
}
mostrarProductos();

let carrito = []
let btn = document.querySelectorAll(".agregarProducto");
let cantidad = 0

btn.forEach(b => {
    b.addEventListener("click", agregarACarrito)
})

function agregarACarrito(event){
    let boton = event.target
    let idAgregar = boton.id

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
    const nombresProductos = carrito.map(producto => `Seleccionaste ${producto.nombre} y cuesta un total de $${producto.precio}, tiene ${producto.cantidad} en el carrito`)

    const divCarrito = document.createElement("div")
    divCarrito.textContent = nombresProductos.join(", ")

    contenedorCarrito.append(divCarrito)
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

