const objeto = document.getElementById("miObjeto");
const objetivo = document.getElementById("miObjetivo");
const borde = document.getElementById("contenedor");


function AlejarPlayer(contenedor){
    objeto.x=contenedor*0.5;
    objetivo.x=contenedor*1.2;

    objeto.style.left=objeto.x + "px";
    objetivo.style.left=objetivo.x + "px";
}
AlejarPlayer(1000);
function {
   let p1={x:objeto.x,velocidad:5};
   while(p1.x<objetivo.x){
    p1.x +=p1.velocidad;
   }
}



