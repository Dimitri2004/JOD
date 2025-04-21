const objeto = document.getElementById("Player1");
const objeto2 = document.getElementById("Player2");
let posicionx1 = 715;
 let posicionx2 =715;
let velocidadx1 = 3;
 let velocidadx2 =3;
let distancia1=415;
let distancia2=1015;
let vidaPlayer1 = 3;
let vidaPlayer2 = 3;
let gameOver=false;

let disparo = document.querySelector("#disparo")

function moverObjeto() {
    // Detectamos colisiones con los bordes horizontales
    if (posicionx1>distancia1) {
        posicionx1 -= velocidadx1;
        velocidadx1 *= +1; // Invertimos la dirección en el eje X
        // Aplicamos la nueva posición al estilo del objeto
        objeto.style.left = posicionx1 + "px";
    }
     if (posicionx2<distancia2) {
            posicionx2 += velocidadx2;
            velocidadx2 *= +1; // Invertimos la dirección en el eje X
            // Aplicamos la nueva posición al estilo del objeto
            objeto2.style.left = posicionx2 + "px";
        }
}

// Llamamos a la función `moverObjeto` repetidamente
setInterval(moverObjeto, 40);

// localizamos el objeto que usaremos para mostrar el tiempo
const temporizador = document.querySelector("#tiempo")
    // Creamos una variable que llamara a la funcion 'bajarTiempo'
    let intervaloB
    // creamos la variable que marque el tiempo
    let tiempoRestante = 3

    encenderTemporizador();
    //funcion que ira reduciendo el tiempo y actuara de temporizador
    function bajarTiempo(){
        tiempoRestante--
        temporizador.innerHTML = tiempoRestante
        if(tiempoRestante<=0){
            clearInterval(intervaloB)
            temporizador.innerHTML = "YA"
        }
    }

    // mecanismo para que detecte las pulsaciones
    let yaPresiono = false;
    const resultado = document.getElementById("Press L");
    const resultado2 = document.getElementById("Press R");

    document.addEventListener("keydown", (event) => {
      if (yaPresiono) return;
      yaPresiono = true;


      if (event.key === "r" || event.key === "R") {
        if(tiempoRestante>0){
            quitarVidaInicioPlayer1()
        }else{
         quitarVidaInicioPlayer2()
        }

      } else if (event.key === "l" || event.key === "L") {
        if(tiempoRestante>0){
            quitarVidaInicioPlayer2()
      }else{
        quitarVidaInicioPlayer1()
        }
      }
      decidirGanador()
    });

    // Funcion para encender el temporizador con 3 segundos
    function encenderTemporizador(){
        clearInterval(intervaloB)
        tiempoRestante = 4;
        temporizador.innerHTML = tiempoRestante
        intervaloB = setInterval(bajarTiempo,1000);
    }
    

//funcion que decide quien gana
function decidirGanador(){

    if (vidaPlayer1==vidaPlayer2 && vidaPlayer1==0){
        victoria("empate")
    }
    else if (vidaPlayer1 == 0){
        victoria(2)
    }
    else if(vidaPlayer2 == 0){
        victoria(1)
    }
    
}

//funcion que declara la victoria
function victoria(ganador){
    if(ganador=="empate"){
        alert("Empate inutiles")
        GameOver()
    }
    else{
        alert("Gana el jugador "+ ganador)
        console.log("Gana el jugador "+ ganador)
        GameOver()
    }
    resetRonda()
}
function GameOver(){
    gameOver=true
    alert("Fin del juego,Reiniciando...")
    // Reiniciar pagina
    setTimeout(function() {
        location.reload();
    }, 10); // Espera 2 segundos antes de recargar la página
}

//Función que quita una vida y elimina un corazon si se presiona R o L antes de que finalice el contador
function quitarVidaInicioPlayer1() {
    disparo.currentTime = 0
    disparo.play()
    if (vidaPlayer1 >= 0) {
        document.getElementById("vida" + vidaPlayer1).style.display = "none";
        vidaPlayer1--;
        resetRonda()
    }
    else{
    alert("No hay vidas restantes para el jugador 1");
    }
}
//Función que quita una vida y elimina un corazon si se presiona R o L antes de que finalice el contador
function quitarVidaInicioPlayer2() {
    disparo.currentTime = 0
    disparo.play()
    if (vidaPlayer2 >= 0) {
        document.getElementById("vidas" + vidaPlayer2).style.display = "none";
        vidaPlayer2--;
        resetRonda()
    }
    else{
    alert("No hay vidas restantes para el jugador 2");
    }
}

//funcion para resetear ronda
function resetRonda(){
    posicionx1=715
    posicionx2=715
    
    objeto.style.left = posicionx1 + "px";
    objeto2.style.left = posicionx2 + "px";
    yaPresiono=false

    temporizador.innerHTML=""
    encenderTemporizador()
}


