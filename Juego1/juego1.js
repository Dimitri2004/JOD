const objeto = document.getElementById("Player1");
let posicionx1 = 450; // Posición inicial en el eje y
let velocidadx1 = 0.5; // Velocidad en el eje X
let distancia1=150;
function moverObjeto() {
    // Detectamos colisiones con los bordes horizontales
    if (posicionx1>distancia1) {
        posicionx1 -= velocidadx1;
        velocidadx1 *= +1; // Invertimos la dirección en el eje X
        // Aplicamos la nueva posición al estilo del objeto
        objeto.style.left = posicionx1 + "px";
    }
}

// Llamamos a la función `moverObjeto` repetidamente
setInterval(moverObjeto, 20);

// localizamos el objeto que usaremos para mostrar el tiempo
const temporizador = document.querySelector("#tiempo")
    // Creamos una variable que llamara a la funcion 'bajarTiempo'
    let intervaloB
    // creamos la variable que marque el tiempo
    let tiempoRestante = 3

    encenderTemporizador();
    //funcion que ira reduciendo el tiempo y actuara de temporizador
    function bajarTiempo(){
        temporizador.innerHTML = tiempoRestante
        tiempoRestante--
        if(tiempoRestante<0){
            clearInterval(intervaloB)
            temporizador.innerHTML = "YA"
        }
    }
    // Funcion para encender el temporizador con 3 segundos
    function encenderTemporizador(){
        tiempoRestante = 3;
        intervaloB = setInterval(bajarTiempo,1000);
    }






















