/*
 dado un array de numeros , devolver un array nuevo con los numeros pares e impares
*/



const recorreArray = arr =>{
    const nuevoArray = [];
    arr.map(numero =>{        
        if(numero % 2 == 0) nuevoArray.push(numero);
    })

    return nuevoArray;
}

console.log(recorreArray([1,2,4,5,6,6,78,13,352,5,23]));