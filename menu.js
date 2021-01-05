export default function menuHamburguesa(btnMenu, menu, btnCerrar, urls){      //recibo los 3 parametros

    document.addEventListener("click", (e)=>{
        if(e.target.matches(btnMenu) || e.target.matches(`${btnMenu} *`)){            
            document.querySelector(menu).classList.add("active");
        }

        if(e.target.matches(btnCerrar) || e.target.matches(`${btnCerrar} *`)){
            document.querySelector(menu).classList.remove("active");
        }

        if(e.target.matches(urls)){
            document.querySelector(menu).classList.remove("active");
        }
    })    
}




