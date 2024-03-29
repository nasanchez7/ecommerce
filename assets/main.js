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

//Secciones HTML

const seccionProductos = document.getElementById("productos");

const seccionProductosNike = document.getElementById("productosNike");

const seccionProductosAdidas= document.getElementById("productosAdidas");

const seccionProductosSupreme = document.getElementById("productosSupreme");

const seccionProductosNorthFace = document.getElementById("productosNorthFace");

const seccionProductosNewBalance = document.getElementById("productosNewBalance");

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

async function renderProductos(){
    
    const infoProductos = await fetch("../assets/productos.json");
    const productos = await infoProductos.json();
    guardarProductos(productos);
    const arrayProductos = obtenerProductos();
    const productosDestacados = arrayProductos.slice(0, 5);

    for(const producto of productosDestacados){
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

async function renderProductosNike(){
    
    const infoProductos = await fetch("../assets/productos.json");
    const productos = await infoProductos.json();
    guardarProductos(productos);
    const arrayProductos = obtenerProductos();
    const productosNike = arrayProductos.filter((item => item.marca == "Nike"));
    
    for(const producto of productosNike){
        const tarjetas = document.createElement("div");
        tarjetas.className = "tarjeta";
        tarjetas.innerHTML = `  <img src="${producto.imagen}" alt="${producto.nombre}">
                                <h3>${producto.nombre}</h3>
                                <h4>$ ${producto.precio}</h4>
                                <button class="boton1" onclick="agregarCarrito(${producto.id})" >Añadir al carrito</button>
                                <a href="">Ver mas detalles</a>
                                `
        seccionProductosNike.appendChild(tarjetas);
    }
}

async function renderProductosAdidas(){
    
    const infoProductos = await fetch("../assets/productos.json");
    const productos = await infoProductos.json();
    guardarProductos(productos);
    const arrayProductos = obtenerProductos();
    const productosAdidas = arrayProductos.filter((item => item.marca == "Adidas"));
    
    for(const producto of productosAdidas){
        const tarjetas = document.createElement("div");
        tarjetas.className = "tarjeta";
        tarjetas.innerHTML = `  <img src="${producto.imagen}" alt="${producto.nombre}">
                                <h3>${producto.nombre}</h3>
                                <h4>$ ${producto.precio}</h4>
                                <button class="boton1" onclick="agregarCarrito(${producto.id})" >Añadir al carrito</button>
                                <a href="">Ver mas detalles</a>
                                `
        seccionProductosAdidas.appendChild(tarjetas);
    }
}

async function renderProductosSupreme(){
    
    const infoProductos = await fetch("../assets/productos.json");
    const productos = await infoProductos.json();
    guardarProductos(productos);
    const arrayProductos = obtenerProductos();
    const productosSupreme = arrayProductos.filter((item => item.marca == "Supreme"));
    
    for(const producto of productosSupreme){
        const tarjetas = document.createElement("div");
        tarjetas.className = "tarjeta";
        tarjetas.innerHTML = `  <img src="${producto.imagen}" alt="${producto.nombre}">
                                <h3>${producto.nombre}</h3>
                                <h4>$ ${producto.precio}</h4>
                                <button class="boton1" onclick="agregarCarrito(${producto.id})" >Añadir al carrito</button>
                                <a href="">Ver mas detalles</a>
                                `
        seccionProductosSupreme.appendChild(tarjetas);
    }
}

async function renderProductosNorthFace(){
    
    const infoProductos = await fetch("../assets/productos.json");
    const productos = await infoProductos.json();
    guardarProductos(productos);
    const arrayProductos = obtenerProductos();
    const productosNorthFace = arrayProductos.filter((item => item.marca == "North Face"));
    
    for(const producto of productosNorthFace){
        const tarjetas = document.createElement("div");
        tarjetas.className = "tarjeta";
        tarjetas.innerHTML = `  <img src="${producto.imagen}" alt="${producto.nombre}">
                                <h3>${producto.nombre}</h3>
                                <h4>$ ${producto.precio}</h4>
                                <button class="boton1" onclick="agregarCarrito(${producto.id})" >Añadir al carrito</button>
                                <a href="">Ver mas detalles</a>
                                `
        seccionProductosNorthFace.appendChild(tarjetas);
    }
}

async function renderProductosNewBalance(){
    
    const infoProductos = await fetch("../assets/productos.json");
    const productos = await infoProductos.json();
    guardarProductos(productos);
    const arrayProductos = obtenerProductos();
    const productosNewBalance = arrayProductos.filter((item => item.marca == "New Balance"));
    
    for(const producto of productosNewBalance){
        const tarjetas = document.createElement("div");
        tarjetas.className = "tarjeta";
        tarjetas.innerHTML = `  <img src="${producto.imagen}" alt="${producto.nombre}">
                                <h3>${producto.nombre}</h3>
                                <h4>$ ${producto.precio}</h4>
                                <button class="boton1" onclick="agregarCarrito(${producto.id})" >Añadir al carrito</button>
                                <a href="">Ver mas detalles</a>
                                `
        seccionProductosNewBalance.appendChild(tarjetas);
    }
}

//Elemento seleccionado

function seleccionado (id){
    const productos = obtenerProductos();
    return productos.find(x => x.id == id);
}

//Agregar elemento al carrito

function agregarCarrito(id){

    
    let carritoProductos = obtenerProductosCarrito();
    let posicion = carritoProductos.findIndex(x => x.id == id);

    if(posicion > -1){
        carritoProductos[posicion].cantidad = carritoProductos[posicion].cantidad + 1;
        compraTotal = compraTotal + carritoProductos[posicion].precio;
    }else{
        let productoSeleccionado = seleccionado(id);
        console.log(productoSeleccionado);
        productoSeleccionado.cantidad = 1;
        compraTotal = compraTotal + productoSeleccionado.precio;
        carritoProductos.push(productoSeleccionado);
    }

    guardarProductosCarrito(carritoProductos);

    
    productosEnCarrito.innerHTML = "";

    for(let producto of carritoProductos){
        const elementoAñadido = document.createElement("div");
        elementoAñadido.className = "elementoAñadido";
        elementoAñadido.innerHTML = `
                                    <div>
                                    <h5 class= "cantidad">${producto.cantidad}</h5>
                                    <h3>${producto.nombre}</h3>
                                    <h4>${producto.precio}$</h4>
                                    <i class='bx bxs-trash' style='color:#ffffff' onclick="eliminarCarrito(${producto.id})" ></i>
                                    </div>
                                    <div>
                                    
                                    <img class="imgCarrito" src="${producto.imagen}" alt="">
                                    
                                    </div>
                                    `
        productosEnCarrito.appendChild(elementoAñadido);
        console.log(producto);
    }
    
        seccionTotal.innerHTML = "";
        //Operador ternario
        carritoProductos.length > 0 ?   seccionTotal.innerHTML = `
                                        <div class="total">
                                            <h4>Total a pagar:</h4>
                                            <h5>$${compraTotal}</h5>
                                        </div>
                                        <button class="boton2" onclick="confirmarCompra()">Confirmar compra</button>
                                        ` : seccionTotal.innerHTML = ""
                                        
        carritoProductos.length > 0 ? contadorCarrito.innerHTML = `${carritoProductos.length}` : 
                                     contadorCarrito.innerHTML = ""

        //Notificacion
        Toastify({
            text: "Has añadido un producto a tu carrito",
            duration: 3000,
            close: true,
            gravity: "top", 
            position: "left", 
            stopOnFocus: true, 
            style: {
              background: "linear-gradient(to right, #FD794F, #c95f3f)",
            },
          }).showToast();
}

//Eliminar elemento del carrito

function eliminarCarrito(id){
    let carritoProductos = obtenerProductosCarrito();
    let posicion = carritoProductos.findIndex(x => x.id == id);
    carritoProductos[posicion].cantidad -= 1;
    compraTotal = 0;
    guardarProductosCarrito(carritoProductos);
    if(carritoProductos[posicion].cantidad == 0){
        carritoProductos.splice(posicion, 1);
        guardarProductosCarrito(carritoProductos);
    }
    productosEnCarrito.innerHTML = "";
    seccionTotal.innerHTML = "";
    for(let producto of carritoProductos){
        compraTotal = compraTotal + producto.precio * producto.cantidad;
        const elementoAñadido = document.createElement("div");
        elementoAñadido.className = "elementoAñadido";
        elementoAñadido.innerHTML = `
                                    <div>
                                    <h5 class= "cantidad">${producto.cantidad}</h5>
                                    <h3>${producto.nombre}</h3>
                                    <h4>${producto.precio}$</h4>
                                    <i class='bx bxs-trash' style='color:#ffffff' onclick="eliminarCarrito(${producto.id})" ></i>
                                    
                                    </div>
                                    <div>
                                    
                                    <img class="imgCarrito" src="${producto.imagen}" alt="">
                                    
                                    </div>
                                    `
        productosEnCarrito.appendChild(elementoAñadido);
        seccionTotal.innerHTML = `
        <div class="total">
            <h4>Total a pagar:</h4>
            <h5>$${compraTotal}</h5>
        </div>
        <button class="boton2" onclick="confirmarCompra()">Confirmar compra</button>
        `
    }
    guardarProductosCarrito(carritoProductos);
    carritoProductos.length > 0 ? contadorCarrito.innerHTML = `${carritoProductos.length}` : 
    contadorCarrito.innerHTML = ""
}

//Evento confirmar compra



function confirmarCompra(){

    //Vaciamos carrito
    let carritoProductos = obtenerProductosCarrito();
    carritoProductos = [];
    guardarProductosCarrito(carritoProductos);

    //Creamos formulario
    const formulario = document.createElement("div");
    formulario.className = "form";
    formulario.innerHTML = `
    <h2 class="tituloForm">Informacion de pago</h2>

    <label for="">Nombre y apellido</label>
    <input placeholder="Nadir Blanco" type="text" class="inputForm" value="" id="nombre" required>
    
    <label for="">Numero de telefono</label>
    <input placeholder="11 1234 5678" type="text" class="inputForm" value="" id="telefono" required>
    
    <label for="">Direccion</label>
    <input placeholder="Calle 123, entre calle 1 y calle 2" type="text" class="inputForm" id="direccion" value="" required>

    <h2 class="tituloForm">Metodo de pago</h2>
    <div class="tarjetasIconos">
        <i class='bx bxl-visa'></i>
        <i class='bx bxl-mastercard' ></i>
    </div>

    <input type="password" class="inputForm" placeholder="Numero de tarjeta" id="tarjeta" required>
    <div class="tarjetaInfo">
        <input type="text" placeholder="mm" class="inputForm sm" value="" id="tarjeta1" required>
        <input type="text" placeholder="yyyy" class="inputForm sm" value="" id="tarjeta2" required>
        <input type="text" placeholder="cvv" class="inputForm sm" value="" id="tarjeta3" required>
    </div>

    `
    productosEnCarrito.innerHTML = "";
    productosEnCarrito.appendChild(formulario);

    const direccion = document.getElementById("direccion");

    seccionTotal.innerHTML = `
    <div class="total">
            <h4>Total a pagar:</h4>
            <h5>$${compraTotal}</h5>
        </div>
    <button class="boton2" onclick="confirmarCompra1()">Confirmar compra</button>
    `

    carritoProductos.length > 0 ? contadorCarrito.innerHTML = `${carritoProductos.length}` : 
    contadorCarrito.innerHTML = ""
    compraTotal = 0;
}

function validarForm(){
    seccionTotal.innerHTML = ``

    const nombre = document.getElementById("nombre");
    const telefono = document.getElementById("telefono");
    const direccion = document.getElementById("direccion");
    const tarjetaNumero = document.getElementById("tarjeta");
    const tarjeta1 = document.getElementById("tarjeta1");
    const tarjeta2 = document.getElementById("tarjeta2");
    const tarjeta3 = document.getElementById("tarjeta3"); 

    if(nombre.value == ""){
        seccionTotal.innerHTML = `
        <button class="boton2" onclick="confirmarCompra1()">Confirmar compra</button>
        <h4>Error: completa el campo nombre</h4>
    `
    }else if(telefono.value == ""){
        seccionTotal.innerHTML = `
        <button class="boton2" onclick="confirmarCompra1()">Confirmar compra</button>
        <h4>Error: completa el campo telefono</h4>
    `
    }else if(direccion.value == ""){
        seccionTotal.innerHTML = `
        <button class="boton2" onclick="confirmarCompra1()">Confirmar compra</button>
        <h4>Error: completa el campo direccion</h4>
    `
    }else if(tarjetaNumero.value == ""){
        seccionTotal.innerHTML = `
        <button class="boton2" onclick="confirmarCompra1()">Confirmar compra</button>
        <h4>Error: completa el campo tarjeta</h4>
    `
    }else if(tarjeta1.value == ""){
        seccionTotal.innerHTML = `
        <button class="boton2" onclick="confirmarCompra1()">Confirmar compra</button>
        <h4>Error: completa los datos de tu tarjeta</h4>
    `
    }else if(tarjeta2.value == ""){
        seccionTotal.innerHTML = `
        <button class="boton2" onclick="confirmarCompra1()">Confirmar compra</button>
        <h4>Error: completa los datos de tu tarjeta</h4>
    `
    }else if(tarjeta3.value == ""){
        seccionTotal.innerHTML = `
        <button class="boton2" onclick="confirmarCompra1()">Confirmar compra</button>
        <h4>Error: completa los datos de tu tarjeta</h4>
    `
    }else{
        swal({
            title: "Gracias " + nombre.value + "!",
            text: "Tu pedido llegara a "+ direccion.value + " en los proximos dias",
            icon: "success",
        });
        productosEnCarrito.innerHTML = "";
        seccionTotal.innerHTML = ``
    }

}

function confirmarCompra1(){
    validarForm();
}

//Renderizado de productos
renderProductos();
renderProductosNike();
renderProductosAdidas();
renderProductosSupreme();
renderProductosNorthFace();
renderProductosNewBalance();