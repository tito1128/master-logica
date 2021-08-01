/*
dado un numero, devolver cuantos bucles tiene
un numero tiene un bucle cuando tiene un circulo cerrado
cuando lo dibujas , lo que 6 tiene un bucle ,1 no tiene bucle y 8 tiene dos bucles

los bucles son los cicurlos que tiene cada numero  ejemplo 6 = 1 , 8 = 2 , 0 = 1 , 9 = 1
*/


let bucles = {
    '0':1,
    '1':0,
    '2':0,
    '3':0,
    '4':0,
    '5':0,
    '6':1,
    '7':0,
    '8':2,
    '9':1
}

const cuantosBucles = numero =>{
let arrNumero = numero.toString() , resultado = 0;
[...arrNumero].map((valor,key)=>{      
   resultado = parseInt(resultado)  + parseInt(bucles[valor]); 
})
return {"numero":numero,"bucles":resultado}
}

console.log(cuantosBucles(1239860));