
window.onload = iniciar;

const DIV_INFO = document.getElementById("info");
const BODY = document.getElementById("cuerpo");
const RATON_TECLADO = document.getElementById("ratTec");
const PARR_1 = document.getElementById("parrafo1");
const PARR_2 = document.getElementById("parrafo2");

function iniciar(){
    document.addEventListener("mousedown", cambiarColor);
    document.addEventListener("mousemove", moverRaton);
    document.addEventListener('mousemove', posicionCliente);
    BODY.addEventListener("mousemove", posicionPag, false);
    document.addEventListener("keypress", presionarTecla);

    function posicionPag(e){
        PARR_2.innerText = "Página [" + e.pageX + ", " + e.pageY + "]";
    }

    function posicionCliente(e){
        PARR_1.innerText = "Navegador [" + e.screenX + ", " + e.screenY + "]";
    }

    function cambiarColor(){
        DIV_INFO.style.backgroundColor = "#FFFFCC";
    }

    function moverRaton(){
        DIV_INFO.style.backgroundColor = "white";
        RATON_TECLADO.innerHTML = "Ratón";
    }

    function presionarTecla(e){
        let tecla = e.key;
        let codTecla = e.keyCode;
        PARR_1.innerHTML = "Carácter [" + tecla + "]";
        PARR_2.innerHTML = "Código [" + codTecla + "]";
        DIV_INFO.style.backgroundColor = "#CCE6FF";
        RATON_TECLADO.innerHTML = "Teclado";
    }
}
