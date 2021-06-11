/* dibujar un cuadrado hueco según el número ingresado */

function lado(numero){
    let lado = '';  
    for(let i = 1; i<= numero; i++){
     lado+='*';      
    }
    return lado;
}





function cuadrado(numero){
    let dibujar = lado(numero)+'\n';
    let contenido = '';
    for(let i = 1; i<= (numero - 2) ; i++){ 
        contenido = '';        
        for(let x = 0; x<= numero; x++){
            contenido = '*';
        }
        dibujar+= contenido +'\n';
    }
    dibujar+= lado(numero)+'\n';
    return dibujar;
}
console.log(cuadrado(4));


