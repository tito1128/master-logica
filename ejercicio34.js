/* Dado un numero devolver sus 4 operaciones matematicas */


const operacionesMat = (a,b) =>{
    let resultado = `la suma es :${a + a} \n la resta es : ${a - b} \n la multiplicacion es : ${a * b} \n la division es : ${a / b} \n`;
    return resultado;
}

console.log(`${operacionesMat(4,5)}`);