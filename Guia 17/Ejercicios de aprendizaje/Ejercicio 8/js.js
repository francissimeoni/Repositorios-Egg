document.getElementById("agregarNumero").onclick = ObtenerDatos;

function ObtenerDatos() {


    var numero = prompt("Ingrese un numero");
    var maxima;
    var minima;
    var promedio = 0;
    var bucles = 0;
    var cadenaDeNumeros = "";
    minima = numero;
    maxima = numero;

    do {

        if (parseInt(numero) > parseInt(maxima)) {

            maxima = numero;

        }
        if (parseInt(numero) < parseInt(minima)) {

            minima = numero;
        }

        cadenaDeNumeros = cadenaDeNumeros + " " + numero;
        document.getElementById("ta1").innerHTML = cadenaDeNumeros;

        promedio = promedio + numero;
        bucles = bucles + 1;

        numero = prompt("Ingrese un numero");

    }
    while (numero != 0);


    promedio = promedio / bucles;

    document.getElementById("maxima").innerHTML = maxima;
    document.getElementById("minima").innerHTML = minima;
    document.getElementById("promedio").innerHTML = promedio;

}