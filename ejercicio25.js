/*
Dada una cadena convertir a mayusculas o minusculas dependiendo de la cantidad de estas 
Ejemplo: mayuminis('aLejANdro') // devuelve alejandro
Ejemplo: mayuminis('aLejANDRo') // devuelve ALEJANDRO
*/



const mayuminus = texto =>{
let contadorMinusculas = 0 , contadorMayusculas = 0;    
for(letras of texto.split('')){
    if (letras.match(/^[A-Z]*$/)) contadorMayusculas++
    else contadorMinusculas++;   
}

if(contadorMayusculas > contadorMinusculas) return texto.toUpperCase();
else if ( contadorMayusculas == contadorMinusculas) return texto;
else return texto.toLowerCase();
}


console.log(mayuminus('AlejNdrROO'));

