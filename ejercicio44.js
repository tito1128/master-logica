/*

dado un array de string , devolver otro con los que esten formados por mas de dos palabras

*/

const arrPalabras = arr =>{
   // array filter , crea una copia del array original y le paso una condición por la cual quiero filtrar el array
   // separo cada string con split , lo cuento con length y condiciono de que el largo de esa palabra sea mayor o igual a 2 
let nuevoArray = arr.filter(arrs => arrs.split(' ').length >= 2);
return nuevoArray;
}


console.log(arrPalabras(["hola mundo","hola","alejandro cepeda cepeda","perro","dino guau"]));