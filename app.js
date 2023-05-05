/*PRIMERA PREENTREGA

let camiseta = prompt("Ingrese si quiere la camiseta de Boca o de Argentina")

for(let i = 0; i <= 10; i++) {
    if((camiseta === "Boca") || (camiseta === "Argentina")){
        console.log(`La camiseta que usted eligio es de ${camiseta}`)
    } else {
            console.log("Ingresar Boca o Argentina, con sus respectivas mayusculas y minusculas.")
        }
} */

const carrito = [];

const productos = [
    { nombre: 'CAMISETA BOCA TITULAR', precio: 21999 },
    { nombre: 'CAMISETA BOCA SUPLENTE', precio: 21999 },
    { nombre: 'CAMISETA ARGENTINA ICON', precio: 29999 },
    { nombre: 'CAMISETA ARGENTINA SUPLENTE', precio: 21999 },
    { nombre: 'CAMISETA REAL MADRID TITULAR', precio: 21999 },
    { nombre: 'CAMISETA REAL MADRID SUPLENTE', precio: 16999 },
    { nombre: 'SHORT ARGENTINA TITULAR', precio: 12999 },
    { nombre: 'SHORT BOCA TITULAR', precio: 12999 },
    { nombre: 'SHORT REAL MADRID TITULAR', precio: 12999 }
];

let seguirCompra = "SI";

do{
let nombreProducto = prompt("Que producto desea agregar al carrito? Indicar prenda, equipo y si es titular o suplente. EJ: Camiseta Argentina titular").toUpperCase();

const productoEncontrado = productos.find(producto => producto.nombre === nombreProducto)

function agregarAlCarrito(producto){
    carrito.push(producto)
    console.log(carrito)
}

if (productoEncontrado != undefined){
    agregarAlCarrito(productoEncontrado);
} else {
    alert("El producto no se encuentra en la lista de productos");
}

prompt("Desea seguir comprando?. Responda Si o No").toUpperCase();

} while(seguirCompra === "SI")

if(seguirCompra ){
    const total = carrito.reduce((accum, producto) => accum + producto.precio, 0)
    console.log(`La suma total de tu carrito es de $ ${total}`)
}


