/* dado un texto devolver cuantas consonantes y vocales tiene */


const contadorVocalesConsonantes = cadena =>{

    // limpiar cadena , permitiendo que solo sean letras y vocales // expresión regular , luego uno el array
    const palabra = cadena.match(/[A-Za-z]/gi).join('');

    // una vez limpia la cadena , identidico las vocales con expresions regulares
    const vocales = palabra.match(/[aeiou]/gi).length;

    // usando la misma cadena limpia, hago una busqueda de solo letras , excluyendo las vocales
    const consonantes = palabra.match(/[^aeiou]/gi).length;

    console.log({"palabra": cadena , "vocales":vocales,"consonantes":consonantes})
    
}


console.log(`${contadorVocalesConsonantes("titolabs.cl")}`)

