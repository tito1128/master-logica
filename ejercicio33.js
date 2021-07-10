/*
 has un reloj que vaya mostrando la hora en tiempo real por cada segundo ,
 solo puedes utilizar la funcion date solo una vez para iniciar la función
*/


class miReloj{

    constructor(){
        this.fecha = new Date;
        this.hora = this.fecha.getHours();
        this.minutos = this.fecha.getMinutes();
        this.segundos = this.fecha.getSeconds();
    }   

    actualizaReloj(){
        this.segundos++;
        if(this.segundos >= 60) this.segundos = 0 , this.minutos++;
        if(this.minutos == 60) this.minutos = 0 , this.hora++;     
        if(this.hora == 24) this.hora = 0;     
    }

    mostrarReloj(){
        this.actualizaReloj();
        
        if(this.segundos < 10 || this.segundos == 0) this.segundos = `0${this.segundos}` 
        if(this.minutos < 10) this.minutos = `0${this.minutos}` 
        if(this.hora < 10) this.hora = `0${this.hora}` 

        console.log(`${this.hora}:${this.minutos}:${this.segundos}`)
    }

    encenderReloj(){
        setInterval(()=>{
            this.mostrarReloj();
        },1000);
    }
}

let elReloj = new miReloj();
elReloj.encenderReloj();



