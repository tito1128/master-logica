/*
Dado un string devolver todos los posibles sub string
*/

const randomString = texto =>{
    let array = [...texto],
        delElement ='',
        nuevaPalabra = '';     

        for(let dato of array){
            delElement = array.shift(); // obtengo el primero elemento a eliminar 
            array.push(delElement); // agrego el elemento a eliminar a la ultima posición            
            nuevaPalabra+= `${array.join('')}\n`;  // concateno todos los array combinaciones posibles y los devuelvo como string                    
        }   

        return nuevaPalabra;
}

console.log(`${randomString("holamundo")}`);




