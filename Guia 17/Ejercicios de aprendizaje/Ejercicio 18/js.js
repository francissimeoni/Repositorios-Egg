var a1 = [true, 5, false, "hola ", "adios ", 2];
console.log("Arreglo cargado: " + a1);


if (a1[3].length > a1[4].lenght) {
    console.log('a- la palabra ' + a1[3] + 'es mas larga, cuenta con ' + a1[3].length + " caracteres")
} else {
    console.log('a- la palabra ' + a1[4] + 'es mas larga, cuenta con ' + a1[4].length + " caracteres")
}

console.log('b- a1[0] * a1[2] = true ');
console.log('b- a1[0] - a1[2] = false ');

console.log("c - Operaciones: ")
console.log("La suma de " + a1[1] + "+" + a1[5] + " es : " + (parseInt(a1[1]) + parseInt(a1[5])));
console.log("La resta de " + a1[1] + "-" + a1[5] + " es : " + (parseInt(a1[1]) - parseInt(a1[5])));
console.log("La multiplicacion de " + a1[1] + "x" + a1[5] + " es : " + (parseInt(a1[1]) * parseInt(a1[5])));
console.log("La division de " + a1[1] + " / " + a1[5] + " es : " + (parseInt(a1[1]) / parseInt(a1[5])));