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
// Llamamos a la función `moverObjeto` repetidamente
setInterval(moverObjetivo, 20);


const bala1 =document.getElementById("bala1");



let posicionb1=440;
let velocidadb1=addEventListener("click",20);

function disparoBala1(){
    const diana1=1200;

    if (posicionb1<diana1){
        posicionb1 +=velocidadb1;
        velocidadb1*=-1;
        bala1.style.left=posicionb1+"px";
    }
}
setInterval(disparoBala1,10);

const bala2 =document.getElementById("bala2")

let posicionb2=440;
let velocidadb2=addEventListener("click",20);
function disparoBala2(){
    const diana2=1200;

    if (posicionb2<diana2){
        posicionb2 +=velocidadb2;
        velocidadb2*=-1;
        bala1.style.left=posicionb2+"px";
    }
}
setInterval(disparoBala2,10);
