/**
 * dado un array de objetos devolver cuales son las aficiones mas comunes de los usuarios
 * Ejemplo : {informática:6,cine:7,futbol:2, videojuegos:10}
 * 
 */

const usuarios = [
    {nombre:"victor", aficiones : ['informatica','cine','futbol','videojuegos']},
    {nombre:"alejandro", aficiones : ['informatica','descansar','futbol','videojuegos']},
    {nombre:"ricardo", aficiones : ['dormir','descansar','comer','videojuegos']}
]

const aficiones = arr =>{
    let contador = {}; // declaro un objeto para almacenar los datos
    arr.map(aficiones => {       // mapeo objeto
      aficiones.aficiones.map((encomun,key) =>{  // mapeo array de aficiones       
          contador[encomun] = (contador[encomun] || 0) + 1; // mapeo array , generando key unicas y sumando valores
          // al valor retornado sumale + 1
        })        
    });   

    return contador;
 
}

console.log(aficiones(usuarios));