/*
Dada una cadena de texto devolver el caracter mas usado
Ejemplo : holamundo
Resultado : o se repite 2 veces
*/


const devuelveCaracterRepetido = cadena => {
    let descomponeArray = cadena.split(''); 
    let arrayMapa = {} , vecesRepetida = 0 , letraRepetida = '';  
    for(let a of descomponeArray){        
        !arrayMapa[a] ? vecesRepetida = 1 : vecesRepetida = arrayMapa[a] + 1;       
        if (arrayMapa[a] >= vecesRepetida) 
            vecesRepetida = arrayMapa[a];
            letraRepetida = a;        
        arrayMapa[a] = vecesRepetida;
   } 
   
   return {palabra:cadena,letra:letraRepetida,"repeticiones":vecesRepetida};

  

 

   /*const arrKey = Object.keys(arrayMapa).reduce((a, b) => arrayMapa[a] > arrayMapa[b] ? a : b);
   const arrValue = Object.values(arrayMapa).reduce((a, b) => arrayMapa[a] > arrayMapa[b] ? a : b);
   console.log(arrKey);
   console.log(arrValue);*/

   // obtenglo el valor maximo y minimo , pero me falta obtener la id o key del arreglo
   /*let arr = Object.values(arrayMapa) , idArr = Object.keys(arrayMapa);
   let min = Math.min(...arr);
   let max = Math.max(...arr);*/
   
}


console.log(devuelveCaracterRepetido("lavacalolcatienecabezaytienecola"));