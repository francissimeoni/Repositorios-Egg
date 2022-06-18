var StringDeNumeros = "";
var contadorNumeros = 0;

document.getElementById("nmaxt").value = prompt("Ingrese un numero máximo!");

document.getElementById("ta").value = "0";
document.getElementById("btnMasNumero").onclick = SumarNumero;
document.getElementById("totalt").value = "0";






// funcion de sumar numeros
function SumarNumero() {

    var num = prompt("Ingrese un numero");

    contadorNumeros = parseInt(num) + parseInt(contadorNumeros);

    if (StringDeNumeros == "") {
        StringDeNumeros = num;
    } else {
        StringDeNumeros = StringDeNumeros + " + " + num;
    }

    if (contadorNumeros > parseInt(document.getElementById("nmaxt").value)) {
        alert("Se ha superado el numero maximo!");
    } else {
        document.getElementById("totalt").value = contadorNumeros;
        document.getElementById("ta").value = StringDeNumeros;
    }

}