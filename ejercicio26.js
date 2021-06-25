/*

dado un numero , mostrar su serio fibonacci.
La serie fibonacci es un orden de números en donde cada numero es la suma de los dos anteriores

fibonacci(10) 0 1 1 2 3 5 7 12 19 31 
*/


const finobacci = n =>{
   let serie = [0,1] , xsia = 0;
    for(let i = 2; i <= n ; i++ ){
        serie.push(serie[i - 2] + serie[i -1]);

        // se debe tener en cuenta que se debe tener el valor del valor anterior al anterior (-2) y el valor del anterior (-1) , los que darán el valor actual
       
        /*serie[2] = serie[0] + serie[1];
        serie[3] = serie[1] + serie[2];
        serie[4] = serie[2] + serie[3]; 
        serie[5] = serie[3] + serie[4]; 
        serie[6] = serie[4] + serie[5]; 
        serie.push(serie[2]);*/
        //console.log(serie[i]);

          
    }
    return [serie,serie[n]]; // crea nuevo elemento con serie y valor final de la serie [0][1]
}

console.log(`Serie Fibonacci: ${finobacci(10)[0]}`);
console.log(`Resultado Fibonacci: ${finobacci(10)[1]}`);
