/**
     dado un array de numeros sacar la media de todos ellos
 */

     const numMedia = arr =>{
        let sumatoriaNumeros = arr.reduce((acumulador,valorActual)=> acumulador + valorActual);
        let largoArray = arr.length , media = sumatoriaNumeros / largoArray;
        return media;
     }

     console.log(`${numMedia([1,2,3,4,5,6])}`);