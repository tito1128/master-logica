/*
 dado un array , crear otro con el primer y ultimo elemento del original
 ejemplo primeroUltimo(100,393,983,98) => resultado [100,98]

*/


const primeroUltimo = arreglo =>{
    return [arreglo[0] , arreglo[arreglo.length - 1]];
}

console.log(`${primeroUltimo([4,3,5,67,89,2,5,0])}`);