/*
Dado un string devolver todas las posibles combinaciones con ese string
*/

const randomString = texto =>{
    let array = [...texto], delElement ='', nuevaPalabra = '';     
        for(let dato of array){
            delElement = array.shift(); // obtengo el primero elemento a eliminar 
            array.push(delElement); // agrego el elemento a eliminar a la ultima posición            
            nuevaPalabra+= `${array.join('')}\n`;  // concateno todos los array combinaciones posibles y los devuelvo como string                    
        }   
        return nuevaPalabra;
}
//console.log(`${randomString("holamundo")}`);


const todoSubstring = string =>{
    let arrString =[];
        for(let i = 0; i <= string.length; i++){
            let inicio = i;
            for(let n = 0; n <= parseInt(string.length - inicio); n++){
                let final = parseInt(inicio) + parseInt(n);
                if(string.substring(inicio,final) != '')
                    arrString.push(string.substring(inicio,final));                                      
            }
        }        
        return arrString;
}


console.log(todoSubstring("hola"));




