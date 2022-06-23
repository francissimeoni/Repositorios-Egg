document.getElementById("btn").onclick = funcion;


function funcion() {

    let frase = prompt("Ingresa una frase");
    let palabra = "";
    let palabraMasLarga = "";

    for (let i = 0; i < frase.length; i++) {

        if (frase.substring(i, i + 1) == " ") {

            if (palabra.length > palabraMasLarga.length) {
                palabraMasLarga = palabra;
                palabra = ""
            } else {
                palabra = ""
            }

        } else {
            palabra = palabra + frase.substring(i, i + 1)
        }

    }


    document.getElementById("Str1").innerHTML = "La frase ingresada fue " + frase;
    document.getElementById("Str2").innerHTML = "La palabra mas larga de la frase es " + palabraMasLarga;

}