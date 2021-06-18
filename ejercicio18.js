/*
dado un numero mostrar todos sus números divisores
*/

const divisorNumero = numero =>{
    let resultado = '';    
    for(let i =0; i<= numero; i++){        
        if(numero % i === 0) resultado+= `${numero} es divisible por ${i}\n`
        else resultado += `${i} no es divisible \n`;
    }
    return resultado;
}
console.log(divisorNumero(20));