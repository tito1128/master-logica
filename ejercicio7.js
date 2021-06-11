/* Dados dos números , devolver cuantos números impares hay entre ellos */

const numerosImpares = (nUno,nDos) =>{
let contadorImpares = 0;
    for(let i = nUno; nUno<= nDos; nUno++){
        nUno % 2 === 1 ? contadorImpares++ : contadorImpares + 0;          
    }
   return contadorImpares;
}

console.log(`${numerosImpares(1,5)}`);