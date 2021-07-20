/*
dado un array o un texto identificar el elemento o palabra que mas aparece

// identificar si es un array o un string
*/


const cuantasVecesAparece = dato =>{
   let mayor = 0 , letra = '';
   if(typeof dato == 'string') dato = dato.split(' ');
   let mapa = {}, contador = 0 , elemento = '';
   for(let d of dato){
    !mapa[d] ? mapa[d] = 1 : mapa[d]++  
      if(mapa[d] > mayor){
        mayor = mapa[d];
        letra = d;
      }
   }
   
   return {"elemento":letra,"vecesRepetida":mayor}

 //return Object.keys(mapa).reduce(function(a, b){ return mapa[a] > mapa[b] ? a : b });
  
//return Object.values(mapa).reduce(function(a, b){ return mapa[a] > mapa[b] ? a : b });
   
}


console.log(cuantasVecesAparece("hola mundo hola como estas"));
//cuantasVecesAparece("hola mundo hola como estas");