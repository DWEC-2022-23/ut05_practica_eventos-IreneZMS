window.onload = iniciar;
const DIV_NUMERO = document.getElementById("numero");


function iniciar(){
    DIV_NUMERO.addEventListener("mouseover",colorDiv);
    DIV_NUMERO.addEventListener("mouseout",colorOriginal);
    DIV_NUMERO.addEventListener("dblclick",calcularTriple,false);

function calcularTriple(){
    DIV_NUMERO.innerHTML = DIV_NUMERO.innerHTML*3;
}
function colorDiv(){
    DIV_NUMERO.style.background = "orange";
    DIV_NUMERO.style.color = "blue";
}
function colorOriginal(){
    DIV_NUMERO.style.background = "white";
    DIV_NUMERO.style.color = "black";
}

}


