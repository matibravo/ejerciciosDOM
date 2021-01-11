let x = 0,
    y = 0,
    contador = 1;


export function moveBall(e, pelota, bloque, cantidad){    

    const $pelota = document.querySelector(pelota),
        $bloque = document.querySelector(bloque),
        limitePelota = $pelota.getBoundingClientRect(),
        limiteBloque = $bloque.getBoundingClientRect();
        
        //console.log(limitePelota);
        //console.log(limiteBloque);
    
    if(contador > 5){
        alert(`haz superado los ${contador - 1} intentos, vuelve a intentarlo!!!`); 
        location.reload();     //recarga la pagina  
    } else {

    switch (e.keyCode) {
        case 37:
            if(limitePelota.left >= limiteBloque.left){
                e.preventDefault();  //previene el comportamiento por defecto del evento con esto se elimina el efecto scroll
                x--;                 //disminuye el valor en x -1
                //console.log(x);
            }  else {
                document.querySelector(cantidad).innerHTML = `Haz chocado: ${contador++} veces xD`;                                             
            }
            break;
        case 38:
            if(limitePelota.top >= limiteBloque.top){
                e.preventDefault();
                y--;
            } else {
                document.querySelector(cantidad).innerHTML = `Haz chocado: ${contador++} veces xD`;
            }                        
            break;
        case 39:
            if(limitePelota.right <= limiteBloque.right){
                e.preventDefault();
                x++;  //suma de 1px
                //console.log(x);
            } else{
                document.querySelector(cantidad).innerHTML = `Haz chocado: ${contador++} veces xD`; 
            }
            break;
        case 40:
            if(limitePelota.bottom <= limiteBloque.bottom){
                e.preventDefault();
                y++;
            } else{
                document.querySelector(cantidad).innerHTML = `Haz chocado: ${contador++} veces xD`;
            }
            break;      
        default:            
            break;
    }
}    

    $pelota.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
    //console.log(contador); valid si cuenta el contador
}

export function capturaTeclas(e){
    /*console.log(e);       //imprime evento
    console.log(e.type);  // imprime el tipo de evento
    console.log(e.key);     //nombre de evento
    console.log(e.keyCode); //code o number de event
    console.log(`tecla alt: ${e.altKey} `);   //devuelve boolean true o false
    console.log(`tecla ctrl: ${e.ctrlKey} `);
    console.log(`tecla shift: ${e.shiftKey} `);*/

    if(e.altKey  && e.key === "a"){
        alert("Hola, haz lanzado una alerta con teclado");
    }
    
    if(e.altKey  && e.key === "c"){
        confirm("Hola, haz lanzado una confirmación con teclado");
    }

    if(e.altKey  && e.key === "p"){
        prompt("Hola, haz lanzado un input con teclado");
    }
    
}