/*
    dado un array de numeros devolverlo ordenado desde el menor al mayor
    y devolver el primer y ultimo elemento
*/

const arrOrdenado = arr =>{
    //return arr.sort((a,b) =>a-b); // si se invierte B - A queda ordenado de mayor a menor
    
   return `primero: ${arr[0]}
        ultimo: ${arr[arr.length - 1]}
        resultado: ${arr.sort((a,b) =>a-b)}`
    

    //return arr.sort((a,b)=>a-b);
}

console.log(`${arrOrdenado([2,5,1,8,9,10,12,4])}`);