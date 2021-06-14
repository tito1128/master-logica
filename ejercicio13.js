const divideArray = (array_principal,numeroElementos) =>{
    let redondeaLargoArray =  Math.ceil(array_principal.length / numeroElementos); // obtengo el numero de sub-array dependiendo del largo del array original 
    let inicio = 0 , arrayDividido = []; // declaro un variable contador y un nuevo array para asiganrle los otros sub array
    for(let i = 1; i<=redondeaLargoArray; i++){
        arrayDividido.push(array_principal.slice(inicio,numeroElementos));

        inicio = numeroElementos; // por cada vuelta , el inicio tomará el numero de elementos 
        numeroElementos = numeroElementos + numeroElementos; // numero de elementos irá aumentando su valor en si por cada vuelta en el for
    }
    return arrayDividido;
}

console.log(`${divideArray([1,2,3,4,5],3)}`);