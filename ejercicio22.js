/*
    dado dos numeros indicar cual es el mayor y cual es el menor

*/


const numeroMayor = (n1,n2) =>{
    if(n1 > n2) return `${n1} es mayor que ${n2}`
    else if (n1 === n2) return `${n1} y ${n2} son iguales`
    else return `${n2} es mayor que ${n1}`
}

console.log(numeroMayor(5,5));