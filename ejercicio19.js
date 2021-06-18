/*dato un array de objetos de peliculas ( titulo , director ,vista ) mostrar todas las peliculas
indicando cual has visto y cual no */


const arrayPeliculas= [

    {   titulo:"Señor de los anillos",
        director : "peter jackson",
        vista : false
    },
    {

        titulo:"rescantando al soldado ryan",
        director : "ni mergas",
        vista : true
    } ,

    {
        titulo:"puerco potter",
        director : "nino ... ni no noticias",
        vista : true
    },

    {
        titulo:"piratas del caribe",
        director : "beto ... ve tu a saber",
        vista : false

    }

];




const carteleraPeliculas = arrayPeliculas =>{
    let resultado = '', pelicula; 
    for(peliculas of Object.values(arrayPeliculas)){
        pelicula = `${peliculas.titulo} de ${peliculas.director} \n`;
        peliculas.vista === true ? resultado+= `ya has visto: ${pelicula}` : resultado+= `te falta por ver: ${pelicula}`        
    }
    return resultado;
}


console.log(carteleraPeliculas(arrayPeliculas));