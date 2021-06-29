/** dado un array de numeros devolver el array sin elementos duplicados , si hay un string eliminarlo del array  */

let arr = [3,4,5,6,8,2,1,4,4,3,56,'r',6,'y',3];
const arrayUnico = lista =>{
    let mapa = [];
    for(let elem of lista){
        if(typeof elem == 'number'){
            if(!mapa[elem]) mapa.push(elem)            
        }
    }
    return mapa;
}

//console.log(arrayUnico(arr));


const eliminaDuplicados = lista =>{
   lista =  lista.filter(lista => typeof lista === 'number'); // itero la lista con solo los valores númericos
  
   let noDuplicados = new Set(lista); // lo que hace ser es generar un nuevo objeto javascript con valores unicos
   return Array.from(noDuplicados); // Array from es para darle un formato de array */

}


console.log(`${eliminaDuplicados(arr)}`);


/*const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30,30,25]
const uniqueAges = ages.filter((valor, indice, self) => self.indexOf(valor) == indice)
console.log(uniqueAges)*/



