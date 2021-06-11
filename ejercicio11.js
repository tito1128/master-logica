/* 
dado un texto y una busuqeda censurar  todas las coincidencias de las busqueda en el texto con "[-CENSURADO-]"

si el texto y la busqueda estan vacias mostrar " no puedes leer el texto y la busqueda" , en el caso de que ambos parametros no llegue
*/



    const p = 'The quick brown fox jumps over dog the lazy dog. If the dog reacted, was it really lazy?';
    const censurado = (cadena,busqueda) => {     

        let patronBusqueda = new RegExp(busqueda, 'gi'); // creo el patron para realizar la busqueda , esta es la unica manera de poder pasar la variable a la expresión regular.
        return cadena.replace(patronBusqueda, '[-CENSURADO-]');            
    }

    console.log(`${censurado(p,`dog`)}`);
