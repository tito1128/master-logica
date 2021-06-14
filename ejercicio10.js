/*dado un numero , mostrar una escalera con escalones [-] usando el numero para los niveles de la escalera*/
const constructorEscalera = numero =>{
    let pilar = '';
    for(let i = 0; i<numero; i++){  
        for(let x = 1; x<=i; x++){
            pilar+= "[-]"; 
        }
        pilar+= "[-]\n";           
    }
    return pilar;
}
console.log(`${constructorEscalera(4)}`);