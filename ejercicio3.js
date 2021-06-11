/*Dada una palabra buscarla en una frase y devolver cuantas veces aparece en ella ,
 la frase y la palabra deben ser parametros de la función */ 


const coincidencias = (frase , busqueda) => {     
        let texto_limpio = frase.toLowerCase().replace(/[!.#,]/gi,'');
        let resultado = 0;
        if(texto_limpio.includes(busqueda)){ // busca una cadena de texto en otra cadena de texto devolviendo un true o un false 
            let palabras = texto_limpio.split(' '); 
            let mapa = {}; // declaro un json para almacenar los valores
            for(let palabra of palabras){ // of hace un foreach entregando el valor de cada elemento del array
                // creo un array con el nombre de todas la palabras ejemplo : [mibusqueda] = 3
                mapa[palabra] ? mapa[palabra]++ : mapa[palabra] = 1                       
                resultado = mapa[busqueda]; // muestro el valor del array de la palabra que se buscan coincidencias
            }
            return resultado;           
        }            
} 


console.log("número de coincidencias : ",coincidencias("hola que tal soy, alejandro. cepeda# hola hola hola","hola"));