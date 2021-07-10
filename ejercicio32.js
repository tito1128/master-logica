/* Dado un array de números , devolver el array con sus numeros elevados al cuadrado
 el array debe eliminar cualquier elemento que no sea un numero
*/

const arrayCuadrado = arr =>{
    const result = [];
    for(let num of arr){
        //console.log(num);
        if(typeof num == 'number')
            result.push(num * 2)          
    }
    return result;
}

const alCuadrado = arr =>{
    let result = arr.filter(numero =>  typeof numero == 'number').map(numero => Math.pow(numero,2));
    return result; 
}




arr = [1,'r',3,5,6,6,2,8,10];

//console.log(`${arrayCuadrado(arr)}`);

console.log(`${alCuadrado(arr)}`);