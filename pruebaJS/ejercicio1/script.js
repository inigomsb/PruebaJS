// 1. Solicita al usuario que elija entre la opción 1 o 2:
//          Se le debe pedir dos números al usuario e indicar si son pares y múltiplos de 25 ambos, uno de ellos o ninguno.
//          Se le debe pedir una palabra y comprobar si empieza o termina por a





// Pedir primer numero
// Pedir segundo numero
// Comprobar si alguno de los dos es par
// Comprobar si alguno de los dos es múltiplo de 25
// Como en total hay que comprobar un total de 4 factores, dos por cada número, y como se trata de un condicional múltiple
// en el que se verá si cumplen o no alguno de los requisitios ----> ¿SWITCH?



function opcion1() {
    var n1 = parseInt(prompt("Introduzca un primer número"));
    var n2 = parseInt(prompt("Introduzca un segundo número"));

    switch (n1 && n2) {
        case 0:
            n1 % 2 == 0;
            alert(true);
            break;
        case 1:
            n1 % 25 == 0;
            alert(true)
            break;
        case 2:
            n2 % 2 == 0;
            alert(true)
            break;
        case 3:
            n2 % 25 == 0;
            alert(true)
            break;

        default:
            alert("Los números introducidos no son pares o múltiplo de 25");
    }
}






// Pedir palabra
// Ver si empieza por a
// Ver si acaba por a


function opcion2() {
    var palabra = prompt("Introduzca una palabra");
    const letra = ["a"];

    for (let i = 0; i = palabra.length; i++) {
        letra = palabra[i];
    }

    for (let j = palabra; j = palabra.length; j--) {
        letra = palabra[j];
    }

}

alert("La " + palabra + " empieza o termina por a")


// if (palabra.startsWith(letra)) {
//     alert("La palabra comienza con " + letra);
// } else {
//     if (palabra.endsWith(letra)) {
//         ("La palabra termina con " + letra)
//     } else {
//         alert("La palabra ni empieza ni termina con " + letra)
//     }
// }
// }