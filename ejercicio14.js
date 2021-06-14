/*
dado un string y un numero , repetir el string tantas veces como el número lo indique*/

const repitePalabra = (palabra,numero) =>{
    let resultado = '';
    for(let i = 0; i<numero; i++)  { 
        resultado+=`${palabra}\n`;              
    }
   return resultado;
}
console.log(`${repitePalabra('hola mundo',4)}`);