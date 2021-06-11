/* SUMAR TODOS LOS NÚMERO DE UN ARRAY */

let arr = [1,2,3,4,5,6,7]
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(arr.reduce(reducer))


// función común
const total = [0, 1, 2, 3].reduce(function(a, b){ 
    return a + b;
});
console.log(`${total}`);



// función flecha , es la mismas función que la de arriba
const sumaArray = arr.reduce((a,b) => pa + b );
console.log(`${sumaArray}`);

// hola mundo hola