/*
dada una cadena de texto , poner en mayuscula la primera letra de cada palabra en la cadena y luego devolver la cadena
Ejemplo hola soy alejandro = Hola Soy Alejandro
*/



const primeraMayuscula = cadena =>{   
    let nuevoArray = [];
    for(let trozos of cadena.split(' ')){
        nuevoArray.push(trozos.charAt(0).toUpperCase() + trozos.slice(1));
    }
    return nuevoArray.join(' ');
}

console.log(primeraMayuscula('alejandro cepeda cepeda'));