
const CONTENIDOS = document.getElementById("contenido_1");
CONTENIDOS.addEventListener("click", muestraOculta);

const ENLACES = document.getElementById("enlace_1")
ENLACES.addEventListener("click", muestraOculta);


function muestraOculta() {
    CONTENIDOS.style.display="none";

}