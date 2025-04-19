const objeto = document.getElementById("miObjeto");
const contenedor = document.getElementById("contenedor");
let posicionx1 = 850; // Posición inicial en el eje y
let velocidadx1 = 0.5; // Velocidad en el eje X

function moverObjeto() {
    const altoContenedor = contenedor.offsetHeight; // Ancho de la ventana
    const altoObjeto = objeto.offsetHeight;

    // Actualizamos la posición en el eje X


    // Detectamos colisiones con los bordes horizontales
    if (posicionx1 < distancia1) {
        posicionx1 += velocidadx1;
        velocidadx1 *= +1; // Invertimos la dirección en el eje X
        // Aplicamos la nueva posición al estilo del objeto
        objeto.style.left = posicionx1 + "px";
    }
}

// Llamamos a la función `moverObjeto` repetidamente
setInterval(moverObjeto, 20);



const objetivo = document.getElementById("miObjetivo");
const contenedor2 = document.getElementById("contenedor");


const distancia1 = 1200;
const distancia2 = 440;
let posicionx2 = 790; // Posición inicial en el eje y
let velocidadx2 = 0.5; // Velocidad en el eje X

function moverObjetivo() {
    const altoContenedor = contenedor2.offsetHeight; // Ancho de la ventana
    const altoObjetivo = objetivo.offsetHeight;

    // Detectamos colisiones con los bordes horizontales
    if (posicionx2 > distancia2) {
        // Actualizamos la posición en el eje X
        posicionx2 -= velocidadx2;
        velocidadx2 *= +1; // Invertimos la dirección en el eje X
        // Aplicamos la nueva posición al estilo del objeto
        objetivo.style.left = posicionx2 + "px";
    }

}




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






















