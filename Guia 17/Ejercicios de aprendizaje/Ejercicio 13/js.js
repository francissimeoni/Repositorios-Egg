let usuario;

function cargarObjeto() {

    usuario = {

        nombre: document.getElementById("nombre").value,
        edad: document.getElementById("edad").value,
        // sexo: sexo,
        peso: document.getElementById("peso").value,
        altura: document.getElementById("altura").value

    }
    alert(usuario.nombre);
}

function mostrarUsuario() {

    alert(usuario.nombre + " " + usuario.edad + " " + usuario.peso + " " + usuario.altura);
}

function sexo() {

    if (document.getElementById("masculino").value == true) { return 'masculino' }
    if (document.getElementById("femenino").value == true) { return 'femenino' }
    if (document.getElementById("otro").value == true) { return 'otro' }

}


document.getElementById("btnSave").onclick = cargarObjeto;
document.getElementById("btnMostrar").onclick = mostrarUsuario;