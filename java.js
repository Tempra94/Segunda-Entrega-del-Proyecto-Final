//TIENDA DE SNOBOARD


//CLASES

class Producto{
    constructor(id, nombre, imagen, precio){
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
    }
}

class Carrito{
    constructor(id){
        this.id = id;
        this.productos = [];
    }

    calcularTotal(){
        let total = 0;
        for(let i = 0; i < this.productos.length; i++)
        total = total + this.productos[i].precio;
        return total;
    }
}
//FUNCIONES

function cardRendered(producto){
    let cardRendered = `
<div class="card m-3" style="width: 18rem;">
    <img src="./imagenes/${producto.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${producto.id}.${producto.nombre}</h5>
    <p class="card-text">$ ${producto.precio}</p>
    <a href="#" class="btn btn-primary botonDeCompra" id="${producto.id}">Comprar</a>
    </div>
</div>`;


return cardRendered;

}

function limpiarCarrito(){
    let divCarrito = document.querySelector("#carrito");
    divCarrito.innerHTML = "";
}
function actualziarCarrito(){
    let divCarrito = document.querySelector("#carrito");
    carrito.productos.forEach(producto => {
        divCarrito.innerHTML += cardRendered(producto);
    })
    divCarrito.innerHTML +=  `<h1>Precio total de la compra: ${carrito.calcularTotal()}</h1>`
}
function renovarStorage(){
    localStorage.removeItem("carrito");
    localStorage.setItem("carrito", JSON.stringify(carrito), carrito);
}
//Cargar carrito

window.addEventListener(`DOMContentLoaded`, (e) => {
    let carrito = new Carrito(1)
    let storage = JSON.parse(localStorage.getItem("carrito"));
    carrito = storage;
    limpiarCarrito();
       actualziarCarrito();
       
})

//Catalogo

let catalogoProductos = [];

let producto1 = new Producto(1, "Tabla burton", "Burton.jpg", 50000);
let producto2 = new Producto(2, "Tabla Jones", "Jones.jpg", 40000);
let producto3 = new Producto(3, "Tabla Salomon", "Salomon.jpg", 48000);

catalogoProductos.push(producto1);
catalogoProductos.push(producto2);
catalogoProductos.push(producto3);

//Tarjetas
let cardsDiv = document.querySelector("#cards");



catalogoProductos.forEach(producto => {
    cardsDiv.innerHTML += cardRendered(producto);
})

//Ingresar Carrito

let carrito = new Carrito(1);
let botones = document.querySelectorAll(".botonDeCompra");
let arrayDeBotones = Array.from(botones);
arrayDeBotones.forEach(boton =>{
    boton.addEventListener("click", (e) => {
        console.log(e.target.id);
       let productoSeleccionado =  catalogoProductos.find(producto => producto.id == e.target.id);
       carrito.productos.push(productoSeleccionado);
       limpiarCarrito();
       actualziarCarrito();
       
    })
});