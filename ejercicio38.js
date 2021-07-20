/*
    Dado un numero , mostrar listado de cuadrados de todos los números naturales hasta llegar a el
*/

const cuadradoNumero = numero =>{
    let cuadrado = numero * numero;
    return cuadrado;
}

const listadoNumeros = numero =>{
    let listado = '';
    for(let i = 0; i <= numero; i++){
        listado+= `${numero}: cuadrado ${cuadradoNumero(numero)} \n`;          
    }

    return listado;
}


console.log(`${listadoNumeros(44)}`);



