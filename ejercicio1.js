/*Dado un número devolver su tabla de multiplicar completa */

const NumeroMultiplicar = numero => {
    let resultado  = 'tabla del '+numero+' # \n';    
    for(let i = 1; i<=12; i++){        
       let  multiplicacion = (numero * i);
        resultado += `${i} x  ${numero} =  ${multiplicacion} \n`;        
    }    
    return resultado;
}

console.log(NumeroMultiplicar(56));


