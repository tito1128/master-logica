/*
    Cuanto es el X % de un número X
*/

const calcularPorcentaje = (numero,porcentaje) =>{
    let resultado = (numero / 100) * porcentaje;
    return `el ${porcentaje}% de ${numero} es : ${resultado}`;
}

console.log(`${calcularPorcentaje(70,90)}`);