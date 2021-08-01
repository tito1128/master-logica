/**
 * 
 * Dado un objeto, comprobar si existe una propieda en concreto
 */

const personas = {
    nombre:"alejandro",
    apellido:"cepeda",
    edad:4,
    correo:"acepeda@talca.cl"
}

const existePropiedad = (objeto,propiedad) =>{
    return  typeof objeto === 'object' && typeof propiedad ==='string' && objeto.hasOwnProperty(propiedad)
}

console.log(`${existePropiedad(personas,'edad')}`)