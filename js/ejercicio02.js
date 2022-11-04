
document.addEventListener("DOMContentLoaded", inicio);

function ocultarMostrar(){
    if(this.innerHTML === "Ocultar contenidos"){
        document.getElementById("contenidos_" + this.id.slice(7)).style.display = "none";
        this.innerHTML = "Mostrar contenidos";
        return;
    }
    
    document.getElementById("contenidos_" + this.id.slice(7)).style.display = "";
    this.innerHTML = "Ocultar contenidos";
}

function inicio(){
    let enlaces = document.getElementsByTagName("a");
    for(let i = 0; i < enlaces.length; i++)
        enlaces[i].addEventListener("click", ocultarMostrar);
}


