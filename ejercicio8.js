/* dado un numero inviertelo y muestra nuevamente el numero */

const invierteNumero = numero =>{
 // con math.sing obtengo el simbolo del número ( positivo o negativo)   
 return parseInt(String(numero).split('').reverse().join('')) * Math.sign(numero);
}

console.log(invierteNumero(-123456789));