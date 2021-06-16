/*
dado una cadena de texto devolver cuantas vocales tiene :
ejemplo alejandro : 4 vocales
*/

const buscaVocales = cadena => {
    let arrayMapa = {} , vecesRepetida = 0; // creo variables
    const arrayResultado = cadena.match(/[aeiou]/gi); // genero nuevo array con patron de busqueda ( vocales )
    for (let vocales of arrayResultado){ // recorro los valores del array generado 
        !arrayMapa[vocales] ? vecesRepetida = 1 : vecesRepetida = arrayMapa[vocales] + 1;  // creo un nuevo array para procesar los valores de repetición  
        arrayMapa[vocales] = vecesRepetida; // agrego valores al array
    }
    return arrayMapa;
}

console.log(buscaVocales('lavacalolatienecabezaytienecola'));