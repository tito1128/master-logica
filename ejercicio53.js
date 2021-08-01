/*
 dado un array de numeros , devolver un array nuevo con los numeros pares e impares
*/

const recorreArray = arr =>{
    const pares = arr.filter((numero) => numero % 2 == 0);
    const impares = arr.filter((numero) => numero % 2 != 0);
    return {"pares":pares,"impares":impares}    
}

console.log(recorreArray([1,2,4,5,6,6,78,13,352,5,23]));