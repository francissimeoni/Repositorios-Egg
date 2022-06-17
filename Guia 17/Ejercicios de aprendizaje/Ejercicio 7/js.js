var StringDeNumeros = "";
var contadorNumeros = 0;

document.getElementById("nmaxt").value = prompt("Ingrese un numero máximo!");

document.getElementById("ta").value = "0";
document.getElementById("btnMasNumero").onclick = SumarNumero;







// funcion de sumar numeros
function SumarNumero() {

    var num = prompt("Ingrese un numero");

    contadorNumeros = num + contadorNumeros;

    if (StringDeNumeros == "") {
        StringDeNumeros = num;
    } else {
        StringDeNumeros = StringDeNumeros + " + " + num;
    }

    document.getElementById("totalt").value = contadorNumeros;
    document.getElementById("ta").value = StringDeNumeros;

}