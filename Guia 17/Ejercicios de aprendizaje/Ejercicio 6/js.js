document.getElementById("btnSend").onclick = comprobacion;


function comprobacion() {

    var elemento = document.getElementById("numero").value;



    if (elemento == 0) {
        alert("El numero ingresado es 0!")
    } else {

        if (elemento % 2 == 0) {
            alert("el numero ingresado es par!");
        } else {
            alert("El numero ingresado es impar!")
        }

    }







    document.getElementById("numero").innerHTML = "";
    document.getElementById("numero").focus();
}