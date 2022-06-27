 document.getElementById("btn").onclick = caclularLongitud;

 let obj = (dato) => typeof dato;

 function caclularLongitud() {
     var salida = document.getElementById("txt").value
     console.log(obj(salida));
 }