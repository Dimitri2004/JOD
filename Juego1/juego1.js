const objeto = document.getElementById("miObjeto");
const contenedor = document.getElementById("contenedor");
        let posicionx1 = 883; // Posición inicial en el eje y
        let velocidadx1 = 5; // Velocidad en el eje X

        function moverObjeto() {
            const altoContenedor = contenedor.offsetHeight; // Ancho de la ventana
            const altoObjeto = objeto.offsetHeight;

            // Actualizamos la posición en el eje X
           

            // Detectamos colisiones con los bordes horizontales
            if (posicionx1 < distancia1) {
                posicionx1 += velocidadx1;
                velocidadx1 *= +1; // Invertimos la dirección en el eje X
                // Aplicamos la nueva posición al estilo del objeto
            objeto.style.left= posicionx1 + "px";
            }else {
                clearInterval(intervalo); // Detenemos el movimiento
                console.log("El objeto alcanzó la distancia objetivo.");
            }
            
            
        }

        // Llamamos a la función `moverObjeto` repetidamente
        setInterval(moverObjeto, 20);



const objetivo = document.getElementById("miObjetivo");
const contenedor2 = document.getElementById("contenedor");
const distancia1 =1400;
const distancia2 =395;
        let posicionx2 = 920; // Posición inicial en el eje y
        let velocidadx2 = 5; // Velocidad en el eje X

        function moverObjetivo() {
            const altoContenedor = contenedor2.offsetHeight; // Ancho de la ventana
            const altoObjetivo = objetivo.offsetHeight;

            

            // Detectamos colisiones con los bordes horizontales
            if (posicionx2 > distancia2) {
                // Actualizamos la posición en el eje X
            posicionx2 -= velocidadx2;
                velocidadx2 *= +1; // Invertimos la dirección en el eje X
                // Aplicamos la nueva posición al estilo del objeto
            objetivo.style.left= posicionx2 + "px";
            } else {
                clearInterval(intervalo); // Detenemos el movimiento
                console.log("El objeto alcanzó la distancia objetivo.");
            }
            
            
        }

        // Llamamos a la función `moverObjeto` repetidamente
        setInterval(moverObjetivo, 20);






















