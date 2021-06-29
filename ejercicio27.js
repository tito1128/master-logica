/* dado un numero mostrar cuantos años , meses y dias equivalen
    calcularDias(920);
    Equivale a 2 años , 6 meses y 10 dias
*/


const calcularDias = num =>{
    const year = Math.floor(num / 365);
    const days = Math.floor(num % 365); // dias restantes calculado los años
    const month = Math.floor(days / 30);
    const day = Math.floor(days % 30);
    return `${num} corresponde a : ${year} año(s) , ${month} mes(es) , ${day} dias \n`;
}

console.log(calcularDias(920));