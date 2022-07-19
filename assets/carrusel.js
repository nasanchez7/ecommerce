//Carrusel

const contenedor = document.querySelector(".sliderContenedor");

const items = document.querySelectorAll(".marca");

items.forEach((item, index) => {
    item.addEventListener("click", ()=>{
        contenedor.style.transform = `translateX(${-100 * index}vw)`;
    });
});