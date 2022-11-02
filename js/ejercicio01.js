//window.onload = inicio;


const DIV_NUMERO = document.getElementById("numero");
//const DIV_VALOR = document.getElementById("valor");
DIV_NUMERO.addEventListener("mouseover",colorDiv);
DIV_NUMERO.addEventListener("mouseout",colorOriginal);
DIV_NUMERO.addEventListener("dblclick",calcularTriple);

function calcularTriple(){
    let num = 5;
    let res = num * 3;
    DIV_NUMERO.innerHTML = res;
}
function colorDiv(){
    DIV_NUMERO.style.background = "orange";
    DIV_NUMERO.style.color = "blue";
}
function colorOriginal(){
    DIV_NUMERO.style.background = "white";
    DIV_NUMERO.style.color = "black";
}

