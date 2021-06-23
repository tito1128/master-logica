/* dadas dos cadenas de texto, crear un algoritmo que compruebe si son anagramas entre si
Una cadena es una anagrama de otra si usa los mismos caracteres en la misma cantidad
Ejemplo 
            Riesgo - Sergio = devuelve True
            Victor Robles  devuelve False
*/

const limpiaTexto = text =>{
    return text.replace(/[^\w]/gi,'').toLowerCase().split('').sort().join('');
}

const anagrama = (t1,t2) =>{
    if(limpiaTexto(t1) === limpiaTexto(t2)) resultado =`${t1} y ${t2} son anagramas \n`;
    else resultado =`${t1} y ${t2} no son anagramas \n`;  
    return resultado;
}
console.log(anagrama('hola','laho'));


/*
console.log(limpiaTexto('hola mun .. do'));
const anagrama = (str1,str2) =>{
    let array1 = '' , array2 = '' , resultado ='';
    if (str1!=null && str2!=null){
        array1 = str1.toLowerCase().replace(/\W/gi,'').split('');
        array2 = str2.toLowerCase().replace(/\W/gi,'').split('');
        if(str1.length == str2.length){
            for(letras of array1){
                if( array2.includes(letras) === false){                    
                    return ` ${str1} y ${str2} no son anagramas\n`;                                    
                }else{
                    resultado =`${str1} y ${str2} si son anagramas\n`;    
                } 
            }
        }else{
            resultado =` ${str1} y ${str2} no son anagramas\n`;
        }
    }else{
        resultado =`Favor ingresar datos\n`;
    }
    return resultado;
}
console.log(anagrama('lapo','lapolapo'));
*/