// 2. Solicita una frase al usuario y contando los espacios que tiene, indica de
//    cuántas palabras consta (debes presuponer que la frase tiene un único espacio entre palabras).


// Introducir frase
// Contar espacios
// ¿Cuántas palabras hay?
// ¿Cómo lo hago? -----> Primero: FOR (Para X espacios) ////Entonces... Segundo: IF (Si... Y palabras ---> hay x espacios -1)
//   ---->> Palabras == espacios + 1
// Queremos contar primero los especios por lo que sera la variable contador

function frase() {
    var frase = prompt("Introduzca una frase");
    var cont = "";
    var palabras = 0;
    for (let i = 0; i < frase.length; i++) {
        if (cont==frase.charAt[i]) {
            cont++;

        } if (cont == palabras + 1) {
            
        }

    }
}

alert('La frase tiene '+ cont + ' palabras');