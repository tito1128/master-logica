/*

dado un array de enteros y un numero , detectar si la lista de numeros es una permutación del 1 al numero aportado

En este caso una pemutacion es una secuencia de numeros en orden sin 
que falte ninguno entre ellos

Ejemplos 

permutacion([1,2,3,4,5],5) // devuelve true
permutacion([1,2,3,5],5) // devuelve false

*/


const permutacion = (secuencia,numero) =>{   
    for(let i = 0; i < numero; i++){
        if(secuencia.indexOf(i + 1) < 0){
            return false;
        }
    }
    return true;
}