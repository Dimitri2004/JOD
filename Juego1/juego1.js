const objeto = document.getElementById("miObjeto");
const contenedor = document.getElementById("contenedor");
        let posicionx = 10; // Posición inicial en el eje X
        let velocidadx = 3; // Velocidad en el eje X

        function moverObjeto() {
            const anchoContenedor = contenedor.offsetWidth; // Ancho de la ventana
            const anchoObjeto = objeto.offsetHeight;

            // Actualizamos la posición en el eje X
            posicionx += velocidadx;

            // Detectamos colisiones con los bordes horizontales
            if (posicionx <= 10 || posicionx + anchoObjeto > anchoContenedor -10) {
                velocidadx *= -1; // Invertimos la dirección en el eje X
            }
            
            // Aplicamos la nueva posición al estilo del objeto
            objeto.style.left = posicionx + "px";
        }

        // Llamamos a la función `moverObjeto` repetidamente
        setInterval(moverObjeto, 10);






















