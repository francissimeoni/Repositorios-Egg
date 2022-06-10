var letra = prompt("Ingrese une letre");
letra = letra.toUpperCase();

if (letra == "S" || letra == "N") {
    alert("Correcte , la letra ingresade es " + letra);
} else {
    alert("Incorrectee, la letra ingresade es " + letra + ". No es ni N ni S");
}