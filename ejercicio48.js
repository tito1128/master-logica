/*dado un string , devolver cuales son las letras que aparecen solo una vez 
y cual es la primera que aparece */


const soloUnaVez = string =>{
let result = {} , letrasUnicas = [];

[...string].map((valor,key)=>{  
   if(valor !==' ' && valor !== null)
   result[valor] = (result[valor] || 0) + 1;   
});

Object.keys(result).map(letra => {
 if(result[letra] === 1) letrasUnicas.push(letra);
})


 console.log({"Primera Letra":Object.keys(result)[0],"Letras Unicas":letrasUnicas});





/*

// convierto result en una matriz valor y clave [clave,valor],[clave,valor], y la enumera como un for IN
const objeto = Object.entries(result);
// ya que el objeto es tratado como un array , puedo utilizar filter array , si declaro la clave y el valor
const unicos = objeto.filter(([key, value]) => value == 1);
// vuelvo a convertir el array en objeto
const letras = Object.fromEntries(unicos);
console.log({"Primera Letra":Object.keys(result)[0],"letras unicas":letras});

*/

  
}

soloUnaVez('hola amigo');