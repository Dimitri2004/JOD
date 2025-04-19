const objeto = document.getElementById("Player1");
const objeto2 = document.getElementById("Player2");
let posicionx1 = 450;
 let posicionx2 =450;
let velocidadx1 = 3;
 let velocidadx2 =5;
let distancia1=150;
let distancia2=950;
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
        temporizador.innerHTML = tiempoRestante
        tiempoRestante--
        if(tiempoRestante<0){
            clearInterval(intervaloB)
            temporizador.innerHTML = "YA"
        }
            if (tiempoRestante<0){
                   let yaPresiono = false;
                    const resultado = document.getElementById("Press L");
                    const resultado2 = document.getElementById("Press R");

                    document.addEventListener("keydown", (event) => {
                      if (yaPresiono) return;

                      if (event.key === "r" || event.key === "R") {
                        resultado2.textContent = "¡Jugador 1 fue el más rápido! 🚀";
                        yaPresiono = true;
                      } else if (event.key === "l" || event.key === "L") {
                        resultado.textContent = "¡Jugador 2 fue el más rápido! ⚡";
                        yaPresiono = true;
                      }
                    });
            }
    }

    // Funcion para encender el temporizador con 3 segundos
    function encenderTemporizador(){
        tiempoRestante = 3;
        intervaloB = setInterval(bajarTiempo,1000);
    }























