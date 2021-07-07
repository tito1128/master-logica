/* identificar el tipo de angulo ingresado */


const tipoAngulo = angulo =>{
    let resultado = '';
        if(angulo < 90) resultado = 'Angulo agudo';
        else if(angulo ===90) resultado = 'Angulo recto';
        else if (angulo > 90 && angulo < 180) resultado ='Angulo obtuso';
        else if (angulo === 180) resultado ='Angulo Llano';
        else if (angulo > 180) resultado ='Angulo mayor a 180';
        else if (angulo ===360) resultado ='Angulo completo';
        else if (angulo > 180 && angulo < 360) resultado ='Angulo concavo';
        else resultado ='Ingresa datos';

        return resultado;
}

console.log(`${tipoAngulo(67)}`);