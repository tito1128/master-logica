/* dados 2 arrays devolver solo un array con los elementos comunes */

const arregloComun = (arrUno,arrDos) =>{   
    let arregloFinal = [];
    let nuevoArray = arrUno.concat(arrDos); // uno los dos array
   nuevoArray.forEach(item => { 
       if(!arregloFinal.includes(item)){
        arregloFinal.push(item);
       }
   });  
   return arregloFinal;
}

console.log(arregloComun([1,2,3,4,5,6],[1,3,4,5,7,2]));




const elementosComunes = (arrUno ,arrDos) =>{
    const filtrado = arrUno.filter(elemento =>{    
        return arrDos.includes(elemento);    // retorna una condicion verdadera , por eso ocupa el return
    });
    return filtrado;

}


console.log(`${elementosComunes([1,2,3,4,5,6],[1,3,4,5,7,2])}`);

