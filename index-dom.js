import menuHamburguesa from "./menu.js";
import relojDigital from "./relojDigital.js";

document.addEventListener("DOMContentLoaded", (e)=>{    //una vez cargada el html de la web
    menuHamburguesa("#btnMenu", ".menu-ver","#btnCerrar", ".menu-ver nav a");  //ejecuta la funcion y paso 4 parametros
    relojDigital("#btnIniciarReloj", "#btnDetenerReloj", "#btnIniciarAlarma", "#btnDetenerAlarma");    
    
})


