document.getElementById("cL").onclick = crearLibro;

document.getElementById("vL").onclick = () => {
    document.getElementById("ta1").innerHTML = "El libro ingresado se encuentra con el indice ISBN " + libro.ISBN + ", se llama " + libro.TITULO +
        ", lo escribió / produció " + libro.AUTOR + " y cuenta con " + libro.NUMERO_DE_PAGINAS + " paginas."
};

var libro = {
    ISBN: '',
    TITULO: '',
    AUTOR: '',
    NUMERO_DE_PAGINAS: ''
}


function crearLibro() {

    libro.ISBN = document.getElementById("isbn").value;
    libro.TITULO = document.getElementById("titulo").value;
    libro.AUTOR = document.getElementById("autor").value;
    libro.NUMERO_DE_PAGINAS = document.getElementById("paginas").value;

}