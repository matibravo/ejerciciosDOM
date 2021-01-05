export default function relojDigital(btnIniciarReloj, btnDetenerReloj, btnAlarma, btnDetenerAlarma){

    let tiempo, alarma;  // se declara la variable tiempo
    const audio = new Audio('./alarma.mp3'); //es un contructor para manipular audio con javascript
    
    document.addEventListener("click", (e)=>{        

        if(e.target.matches(btnIniciarReloj)){
            
            document.getElementById("btnIniciarReloj").disabled = true; //una vez hecho click en el btn iniciar este se desabilita
            document.getElementById("reloj").classList.remove("remover"); //quito la clase remover para poder visualizar reloj

            tiempo = setInterval(()=>{
                document.getElementById("reloj").innerHTML = new Date().toLocaleTimeString();
            }, 1000);   //se ejecuta el reloj cada un segundo y se guarda en la variable tiempo
        }

        if(e.target.matches(btnDetenerReloj)){   //si presiona detener btn 

            clearInterval(tiempo);               //funcion limpiar tiempo

            document.getElementById("reloj").classList.add("remover"); // agrego clase remover para quitar reloj de visualización
            document.getElementById("btnIniciarReloj").disabled = false;              
        }

        if(e.target.matches(btnAlarma)){

            document.getElementById("btnIniciarAlarma").disabled = true;         
            
            alarma = setInterval(()=>{
                audio.play();
            }, 1000);     //reproduce el audio cada 1 segundo
        }

        if(e.target.matches(btnDetenerAlarma)){
            
            clearInterval(alarma);  //elimina la ejecucion del intervalo
            audio.pause();          //detengo el audio  
            document.getElementById("btnIniciarAlarma").disabled = false; //habilito el btn iniciar alarma
        }

        
        
    })
}