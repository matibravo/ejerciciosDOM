export default function countDown(divCuenta, fechaFinal, mensaje){

    const $div = document.getElementById(divCuenta),        
          cuentaRegresiva= new Date(fechaFinal).getTime(),
          audioCumple = new Audio("./feliz.mp3"); 

    
    let tiempo = setInterval(()=>{

        let ahora = new Date().getTime(),
            tiempoRestante = cuentaRegresiva - ahora,
            dias = Math.floor(tiempoRestante/(1000*60*60*24)), //redondo al número antes del decimal 65.23 = 65
            horas = ("0" + Math.floor(tiempoRestante % (1000*60*60*24) / (1000*60*60))).slice(-2),  //lo que resta del dias se divide para calcular las horas
            minutos = ("0" + Math.floor(tiempoRestante % (1000*60*60) / (1000*60))).slice(-2),
            segundos = ("0" + Math.floor(tiempoRestante % (1000*60*60) / (1000))).slice(-2); //agrega siempre cero cuando exista menos de un digito

        //console.log(tiempoRestante);
        
        if(tiempoRestante > 1000){
            
            document.getElementById("dias").innerHTML = `${dias} <p>Días</p>`;    
            document.getElementById("horas").innerHTML = `${horas} <p>Horas</p>`;  
            document.getElementById("minutos").innerHTML = `${minutos} <p>Minutos</p>`;  
            document.getElementById("segundos").innerHTML = `${segundos} <p>Segundos</p>`;   
            
            //$div.innerHTML = `<h3> Faltan: ${dias} días - ${horas} horas - ${minutos} minutos - ${segundos} segundos. </h3>`;
        } else {
            clearInterval(tiempo);
            $div.innerHTML = `<h2>${mensaje}</h2>`;
            audioCumple.play();
        }      
       

    }, 1000);      


 
    
    
    
    


    

}

