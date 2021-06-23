/*
dado uan cadena de texto y un numero, recortar el string mostrando los primeros caracteres
Ejemplo : recortar('curso.logica.programacion',6); // devuelve cursol
*/

const recortar = (texto,numero) =>{
    if(typeof texto === 'string' && typeof numero ==='number' )
        return texto.toLowerCase().substr(0,numero);
    else
        return `error en el tipo de datos`    
}

console.log(recortar('hola mundo',7));