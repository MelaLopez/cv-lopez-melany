function moverCarrusel(idCarrusel, direccion) {
    const carrusel = document.getElementById(idCarrusel);
    const anchoItem = carrusel.querySelector('img').clientWidth + 20;
    
    carrusel.scrollBy({
        left: direccion * anchoItem,
        behavior: 'smooth'
    });
}

function mostrarProyecto(evt, idProyecto) {
    const contenidos = document.getElementsByClassName("proyecto-contenido");
    for (let i = 0; i < contenidos.length; i++) {
        contenidos[i].classList.remove("activo-contenido");
    }

    const botones = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < botones.length; i++) {
        botones[i].classList.remove("activo");
    }

    document.getElementById(idProyecto).classList.add("activo-contenido");
    evt.currentTarget.classList.add("activo");
}