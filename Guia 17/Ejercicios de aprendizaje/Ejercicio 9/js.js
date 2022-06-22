document.getElementById("botonCambiar").onclick = cambiarTexto;

function cambiarTexto () {

    var entrada = document.getElementById("texto").innerHTML;
    alert(entrada);
    var salida = "";

    for (let i = 0; i < entrada.length; i++) {
        if (i<=entrada.length-1) {
            
        salida = salida + entrada.substring(i,i+1) + " ";
        } 
                
    }

    document.getElementsById("cambio").innerHTML = salida;
}