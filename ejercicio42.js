/*
 dados dos números devolver un numero aleatorio en el rango de dichos dos números
*/

const numRandom = (min,max) =>{ // defino un rango numerico de menor a mayor
    // redondeo al entero superior 
    // creo un número random y lo multiplico por el resultado de la resta de los números en el rango , sumandole el numero del rango inicial
    return Math.ceil((Math.random() * (max - min) + min));
}


console.log(`${numRandom(0,7)}`);