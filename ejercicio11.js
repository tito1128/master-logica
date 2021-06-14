/* 
dado un texto y una busuqeda censurar  todas las coincidencias de las busqueda en el texto con "[-CENSURADO-]"
si el texto y la busqueda estan vacias mostrar " no puedes leer el texto y la busqueda" , en el caso de que ambos parametros no llegue
*/
    const p = 'The quick brown fox jumps over dog the lazy dog. If the dog reacted, was it really lazy?';
    const censurado = (cadena,busqueda) => {   
    let resultado ='', patronBusqueda = new RegExp(busqueda, 'gi'); // creo el patron para realizar la busqueda , esta es la unica manera de poder pasar la variable a la expresión regular.
    if(cadena && busqueda) resultado = cadena.replace(patronBusqueda, '[-CENSURADO-]');
    else if(cadena && !busqueda) resultado = 'falta el patron de busqueda \n';
    else if(!cadena && busqueda) resultado = 'falta la cadena de texto \n';   
    else resultado = 'no hay datos ingresados \n';    
    return resultado;
    }
    console.log(`${censurado(p,`dog`)}`);
    
