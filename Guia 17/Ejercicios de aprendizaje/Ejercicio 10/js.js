document.getElementById("HaceMagia").onclick = funcion;


function funcion() {

    var palabraFuente = document.getElementById("PalabraFuente").value;
    var palabra = "";

    for (let i = palabraFuente.length - 1; i >= 0; i--) {
        palabra = palabra + palabraFuente.charAt(i);
    }

    alert(palabra)
    console.log(palabra);
    document.getElementById("p2").value = palabra;

}