{

    document.getElementById("BtnSumar").onclick = operacion;

    function operacion() {

        var uno = document.getElementById("01").value;
        var dos = document.getElementById("02").value;
        var sumatoria = parseInt(uno) + parseInt(dos);


        // alert(sumatoria);
        document.getElementById("Rs").innerHTML = "El resultado de la sumatoria es " + sumatoria;
    }

}