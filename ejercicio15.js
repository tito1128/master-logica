/*
Dada una cadena de texto devolver el caracter mas usado
Ejemplo : holamundo
Resultado : o se repite 2 veces
*/


const devuelveCaracterRepetido = cadena => {
    let descomponeArray = cadena.split(''); 
    let arrayFinal = {} , contador = 0;  
    for(let a of descomponeArray){        
        !arrayFinal[a] ? contador = 1 : contador = arrayFinal[a] + 1;        
         arrayFinal[a] = contador;
   }
   return max;
}


console.log(devuelveCaracterRepetido("holaa"));