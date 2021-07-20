/* dado un texto validar si es correo electronico  o no 
    // se debe usar expresiones regulares 

*/


const compruebaEmail = texto =>{
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(texto);
}


console.log(`${compruebaEmail("alejandro")}`);