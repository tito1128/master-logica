/* dada una cadena de texto , 
darle la vuelta e invertir el orden de sus caracteres , sin usar métodos propios del lenguaje , 
solo estructuras de control */

/*
function inviertacadena(cadena){
    let textoinvertido = cadena.split(' ');
    let contador = textoinvertido.length - 1;
    let fraseInvertida='';
    let i = 0;
    for(i = contador; i >= 0; i--){     
         fraseInvertida+=textoinvertido[i]+' ';
    }
    return fraseInvertida;
}
console.log(inviertacadena("si se puede mejorar la programación"));
*/


const invertirCadena = cadena => {
    let invertido = '';
    for(letras of cadena){        
        invertido = letras + invertido;   // al concatenar la letra del array y sumarla a la variable , esta hace que se vayan quedando hacia atras las otras letras
    }
    return invertido;
}

console.log("texto invertido:",`${invertirCadena("cadena")}`);



const invierteCadena = cadena => {
    let invertido = cadena.split('').reverse('').join('');
    return invertido;
}

console.log("texto invertido:",`${invierteCadena("cuatro")}`);



const muestraPaises = () => {   
    let listado = '' , obj = {
        54:'Argentina',
        55:'brazil',
        56:'Ecuador',
        57:'Bolivia',
        58:'Chile'
    }
    for(let paises of Object.values(obj)){
        listado+=`${paises}\n`;
    }
    return listado;
}

console.log(`${muestraPaises()}`);
