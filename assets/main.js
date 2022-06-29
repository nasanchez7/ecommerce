/*
//Funciones y variables

let productos;
let compraTotal = 0;

//Clases y objetos

class indumentaria{
        constructor(tipo, nombre, precio){
            this.tipo = tipo;
            this.nombre = nombre;
            this.precio = parseInt(precio);
            this.comprado = function(){alert("Agregaste al carrito: " + this.nombre + " por $" + this.precio)};
        }
}

const zapatillaAdidas = new indumentaria ("Zapatilla", "Zapatillas Adidas", 8000);
const zapatillaNike = new indumentaria ("Zapatilla", "Zapatillas Nike", 12000);
const remeraAdidas = new indumentaria ("Remera", "Remera Adidas", 4000);
const remeraNike = new indumentaria ("Remera", "Remera Nike", 3500);
const pantalonAdidas = new indumentaria ("Pantalon", "Pantalon Adidas", 5000);
const pantalonNike = new indumentaria ("Pantalon","Pantalon Nike", 5500);
const camperaAdidas = new indumentaria ("Campera","Campera Adidas", 21000);
const camperaNike = new indumentaria ("Campera","Campera Nike", 25000);


//Arrays

const ropaComprada = [];

//Errores

function errorUsuario() {alert("Ingrese un usuario valido");}
function errorProducto() {alert("Ingrese producto valido");}

//Saludo y despedida

function despedida(usuario){
    alert("Adios " + usuario + ", esperamos verte pronto por aqui :)");
}

function despedidaCompra(usuario, total){
    alert("Gracias por tu compra " + usuario + "!" + ", tu total a pagar es $" + total);
}

function saludoBienvenida(usuario){
    alert("Bienvenido/a " + usuario + " a nuestro ecommerce, aqui encontraras ropa de calidad y al mejor precio!");
}

//Seleccion Zapatillas

function zapatillas (){
    let seleccionZapatilla = parseInt(prompt("1- Zapatillas Adidas $" + zapatillaAdidas.precio + 
    "\n2- Zapatillas Nike $" + zapatillaNike.precio + "\n3- Finalizar Compra"));
    if (seleccionZapatilla == 1){
        ropaComprada.push(zapatillaAdidas);
        zapatillaAdidas.comprado();
        compraTotal = compraTotal + zapatillaAdidas.precio;
    }
    if(seleccionZapatilla == 2){
        ropaComprada.push(zapatillaNike);
        zapatillaNike.comprado();
        compraTotal = compraTotal + zapatillaNike.precio;
    }
    if(seleccionZapatilla == null){
        errorProducto();
    }else if (seleccionZapatilla == ""){
        errorProducto();
    }
}

//Seleccion Remeras

function remeras(){
    let seleccionRemera = parseInt(prompt("1-Remera Adidas $" + remeraAdidas.precio 
    + "\n2-Remera Nike $" + remeraNike.precio + "\n3-Finalizar Compra"));
    if(seleccionRemera == 1){
        ropaComprada.push(remeraAdidas);
        remeraAdidas.comprado();
        compraTotal = compraTotal + remeraAdidas.precio;
    }
    if(seleccionRemera == 2){
        ropaComprada.push(remeraNike);
        remeraNike.comprado();
        compraTotal = compraTotal + remeraNike.precio;
    }
    if(seleccionRemera == null){
        errorProducto();
    }else if (seleccionRemera == ""){
        errorProducto();
    }
}

//Seleccion Pantalones

function pantalones(){
    let seleccionPantalon = parseInt(prompt("1-Pantalon Adidas $" + pantalonAdidas.precio 
    + "\n2-Pantalon Nike $" + pantalonNike.precio + "\n3-Finalizar Compra"));
    if(seleccionPantalon == 1){
        ropaComprada.push(pantalonAdidas);
        pantalonAdidas.comprado();
        compraTotal = compraTotal + pantalonAdidas.precio;
    }
    if(seleccionPantalon == 2){
        ropaComprada.push(pantalonNike);
        pantalonNike.comprado();
        compraTotal = compraTotal + pantalonNike.precio;
    }
    if(seleccionPantalon == null){
        errorProducto();
    }else if (seleccionPantalon == ""){
        errorProducto();
    }
}

//Seleccion Camperas

function camperas(){
    let seleccionCampera = parseInt(prompt("1-Campera Adidas $" + camperaAdidas.precio 
    + "\n2-Campera Nike $" + camperaNike.precio + "\n3-Finalizar Compra"));
    if(seleccionCampera == 1){
        ropaComprada.push(camperaAdidas);
        camperaAdidas.comprado();
        compraTotal = compraTotal + camperaAdidas.precio;
    }
    if(seleccionCampera == 2){
        ropaComprada.push(camperaNike);
        camperaNike.comprado();
        compraTotal = compraTotal + camperaNike.precio;
    }
    if(seleccionCampera == null){
        errorProducto();
    }else if (seleccionCampera == ""){
        errorProducto();
    }
}


//Seleccion de producto

function seleccionProductos(){
    let productos = parseInt(prompt("Porfavor seleccione que producto desea comprar: " + "\n1-Zapatillas"
    + "\n2-Remeras" + "\n3-Pantalones" + "\n4-Camperas" + "\n5-Cancelar" + "\n6-Finalizar Compra"));
    while (productos !== 5){
        if(productos === 1){
            zapatillas();
            let opcion = prompt("Desea seguir comprando? Si/No");
            if(opcion == "Si" || opcion == "si"){
                seleccionProductos();
                productos = 5;
            }
            if(opcion == "No" || opcion == "no"){
                productos = 5;
            }
        }
        if(productos === 2){
            remeras();
            let opcion = prompt("Desea seguir comprando? Si/No");
            if(opcion == "Si" || opcion == "si"){
                seleccionProductos();
                productos = 5;
            }
            if(opcion == "No" || opcion == "no"){
                productos = 5;
            }
        }
        if(productos === 3){
            pantalones();
            let opcion = prompt("Desea seguir comprando? Si/No");
            if(opcion == "Si" || opcion == "si"){
                seleccionProductos();
                productos = 5;
            }
            if(opcion == "No" || opcion == "no"){
                productos = 5;
            }
        }
        if(productos === 4){
            camperas();
            let opcion = prompt("Desea seguir comprando? Si/No");
            if(opcion == "Si" || opcion == "si"){
                seleccionProductos();
                productos = 5;
            }
            if(opcion == "No" || opcion == "no"){
                productos = 5;
            }
        }
        if(productos === 6){
            productos = 5;
        }
    }
}

//Main
//Ingreso de usuario

let ingresoUsuario = prompt("Ingrese su nombre de usuario:");
if(ingresoUsuario == null){
    errorUsuario();
}else if(ingresoUsuario == ""){
    errorUsuario();
}

//Bienvenida al usuario

saludoBienvenida(ingresoUsuario);

//Compra

seleccionProductos();

//Despedida

if(compraTotal > 1){
    alert("Carrito de compras\n " + ropaComprada.map((ropa) => " " + ropa.nombre + " por $" + ropa.precio + "\n"));
    let confirmacion = prompt("Confirma su compra? (Si/No):");
    if(confirmacion == "si" || confirmacion == "Si"){
        despedidaCompra(ingresoUsuario, compraTotal);
    }else{
        despedida(ingresoUsuario);
    }
}else{
    despedida(ingresoUsuario);
}
*/
