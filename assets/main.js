//Array de carrito

const productosCarrito = [];

//Funciones Local Storage

function guardarProductos(productos){
    localStorage.setItem("productos", JSON.stringify(productos));
}
function obtenerProductos(){
    return JSON.parse(localStorage.getItem("productos")) || [];
}
function guardarProductosCarrito(carrito){
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
function obtenerProductosCarrito(){
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

guardarProductosCarrito(productosCarrito);

//Compra total

let compraTotal = 0;

//Constructor de productos
class indumentaria{

    constructor(id, marca, nombre, precio, imagen){
        this.id = parseInt(id);
        this.marca = marca;
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.imagen = imagen;
    }

}

//Productos
const remeraAirMax = new indumentaria(1, "Nike", "Remera Air Max", 4500, "../assets/img/remera-airmax.png");
const camperaNorthFace = new indumentaria(2, "North Face", "Campera North Face", 15000, "../assets/img/campera-northface.png");
const zapatillasYeezy = new indumentaria(3, "Adidas", "Zapatillas Yeezy", 23000, "../assets/img/adidas-yeezy.png");
const zapatillasSuperstar = new indumentaria(4, "Adidas", "Zapatillas SuperStar", 22000, "../assets/img/adidas-superstar.png");
const zapatillasNewbalanceUno = new indumentaria(5, "New Balance", "Zapatillas New Balance", 25000, "../assets/img/newbalance-zapas.png");
const zapatillasNewbalanceDos = new indumentaria(6, "New Balance", "Zapatillas New Balance", 20000, "../assets/img/newbalance-zapas2.png");
const camperaAdidas = new indumentaria(7, "Adidas", "Campera Adidas retro", 14000, "../assets/img/campera-adidas.png");
const zapatillasJordan = new indumentaria(8, "Jordan Nike", "Zapatillas Jordan", 32000, "../assets/img/jordan-nike.png");
const zapatillasNike = new indumentaria(8, "Nike", "Zapatillas Nike", 19000, "../assets/img/nike-zapas.png");
const buzoSupremeUno = new indumentaria(9, "Supreme", "Buzo Supreme", 20000, "../assets/img/supreme-buzo.png");
const buzoSupremeDos = new indumentaria(10, "Supreme", "Buzo Supreme", 22500, "../assets/img/supreme-buzo2.png");
const gorroSupreme = new indumentaria(11, "Supreme", "Gorro Supreme", 7500, "../assets/img/supreme-gorra.png");
const conjuntoNike = new indumentaria(12, "Nike", "Conjunto Nike", 18000, "../assets/img/conjunto-nike.png");
const ojotasAdidas = new indumentaria(13, "Adidas", "Ojotas Adidas", 5500, "../assets/img/ojotas-adidas.png");



const productos = [remeraAirMax, camperaNorthFace, zapatillasYeezy, zapatillasSuperstar, zapatillasNewbalanceUno, 
    zapatillasNewbalanceDos, camperaAdidas, zapatillasJordan, zapatillasNike, buzoSupremeUno, buzoSupremeDos, gorroSupreme,
    conjuntoNike, ojotasAdidas];

guardarProductos(productos);


//Secciones HTML

const seccionProductos = document.getElementById("productos");

const contadorCarrito = document.getElementById("contadorCarrito");

//Carrito 
const seccionCarrito = document.getElementById("carrito");
const productosEnCarrito = document.getElementById("productosCarrito");
const seccionTotal = document.getElementById("totalConfirmar");

//Botones Carrito 

let abrirCarrito = document.getElementById("abrirCarrito");

abrirCarrito.onclick = () => {
    seccionCarrito.classList.add("carritoActivo");
}

let cerrarCarrito = document.getElementById("cerrarCarrito");

cerrarCarrito.onclick = () => {
    seccionCarrito.classList.remove("carritoActivo");
}


//Renderizado de productos

function renderProductos(){
    obtenerProductos();
    for(const producto of productos){
        const tarjetas = document.createElement("div");
        tarjetas.className = "tarjeta";
        tarjetas.innerHTML = `  <img src="${producto.imagen}" alt="${producto.nombre}">
                                <h3>${producto.nombre}</h3>
                                <h4>$ ${producto.precio}</h4>
                                <button class="boton1" onclick="agregarCarrito(${producto.id})" >Añadir al carrito</button>
                                <a href="">Ver mas detalles</a>
                                `
        seccionProductos.appendChild(tarjetas);
    }    
}

//Elemento seleccionado

function seleccionado (id){
    return productos.find(x => x.id == id);
}


//Agregar elemento al carrito

function agregarCarrito(id){
    let productoSeleccionado = seleccionado(id);
    let carritoProductos = obtenerProductosCarrito();
    //Spread
    const producto = {
        ...productoSeleccionado,
        cantidad: 1,
    }
    //Desestructuración
    const {nombre, precio, imagen} = producto
    carritoProductos.push(producto);
    guardarProductosCarrito(carritoProductos);
        const elementoAñadido = document.createElement("div");
        elementoAñadido.className = "elementoAñadido";
        elementoAñadido.innerHTML = `
                                    <div>
                                    <h3>${nombre}</h3>
                                    <h4>${precio}$</h4>
                                    <button class="boton1" onclick="eliminarCarrito(${id})">Eliminar</button>
                                    </div>
                                    <div>
                                    <img class="imgCarrito" src="${imagen}" alt="">
                                    </div>
                                    `
        productosEnCarrito.appendChild(elementoAñadido);
        seccionTotal.innerHTML = "";
        //Operador ternario
        carritoProductos.length > 0 ?   seccionTotal.innerHTML = `
                                        <button class="boton2" onclick="confirmarCompra()">Confirmar compra</button>
                                        <h4>Total a pagar: $${compraTotal = compraTotal + productoSeleccionado.precio}</h4>
                                        ` : seccionTotal.innerHTML = ""
                                        
        carritoProductos.length > 0 ? contadorCarrito.innerHTML = `${carritoProductos.length}` : 
                                     contadorCarrito.innerHTML = ""
}

//Eliminar elemento del carrito

function eliminarCarrito(id){
    let carritoProductos = obtenerProductosCarrito();
    let productoSeleccionado = seleccionado(id);
    console.log(productoSeleccionado);
    let posicion = carritoProductos.findIndex(x => x.id == id);
    carritoProductos[posicion].cantidad -= 1;
    compraTotal = 0;
    if(carritoProductos[posicion].cantidad == 0){
        carritoProductos.splice(posicion, 1);
        productosEnCarrito.innerHTML = "";
        seccionTotal.innerHTML = "";
        for(let producto of carritoProductos){
            const elementoAñadido = document.createElement("div");
            elementoAñadido.className = "elementoAñadido";
            elementoAñadido.innerHTML = `
                                        <div>
                                        <h3>${producto.nombre}</h3>
                                        <h4>${producto.precio}$</h4>
                                        <button class="boton1" onclick="eliminarCarrito(${producto.id})">Eliminar</button>
                                        </div>
                                        <div>
                                        <img class="imgCarrito" src="${producto.imagen}" alt="">
                                        </div>
                                        `
            productosEnCarrito.appendChild(elementoAñadido);
            seccionTotal.innerHTML = `
            <button class="boton2" onclick="confirmarCompra()">Confirmar compra</button>
            <h4>Total a pagar: $${compraTotal = compraTotal + producto.precio}</h4>
            `
        }
        guardarProductosCarrito(carritoProductos);
        carritoProductos.length > 0 ? contadorCarrito.innerHTML = `${carritoProductos.length}` : 
        contadorCarrito.innerHTML = ""
    }
}

//Evento confirmar compra

function confirmarCompra(){
    let carritoProductos = obtenerProductosCarrito();
    seccionTotal.innerHTML = "";
    seccionTotal.innerHTML = `
                            <h4>
                                Compra confirmada
                            </h4>
                            `
    productosEnCarrito.innerHTML = "";
    carritoProductos = [];
    guardarProductosCarrito(carritoProductos);
    carritoProductos.length > 0 ? contadorCarrito.innerHTML = `${carritoProductos.length}` : 
    contadorCarrito.innerHTML = ""
}


//Renderizado de productos
renderProductos();









