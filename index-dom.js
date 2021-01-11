import menuHamburguesa from "./menu.js";
import relojDigital from "./relojDigital.js";
import {moveBall, capturaTeclas} from "./eventosTeclado.js";
import countDown from "./countDown.js";


document.addEventListener("DOMContentLoaded", (e)=>{    //una vez cargada el html de la web
    menuHamburguesa("#btnMenu", ".menu-ver","#btnCerrar", ".menu-ver nav a");  //ejecuta la funcion y paso 4 parametros
    relojDigital("#btnIniciarReloj", "#btnDetenerReloj", "#btnIniciarAlarma", "#btnDetenerAlarma");  
    countDown("countdown", "2021-03-17 10:00:00", "Feliz cumpleaños Alonsin 😎 felicitaciones por tus 7 años hijo Te amo!!!"); //como es solo un id se puede poner sin #  
    //countDown("countdown1", "2021-04-16 08:00:00", "Feliz cumpleaños Tomasito 😎 felicitaciones por tus 2 años hijo Te amo!!!");   
})

document.addEventListener("keydown", (e)=>{  //capturo el evento de tecla abajo
    capturaTeclas(e);                        //asigno el evento como parametro a la funcion
    moveBall(e, ".pelota", ".bloque", "#cantidad");
})


