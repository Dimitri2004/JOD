let vidasPlayer1 = 3;
let vidasPlayer2 = 3;
let gameOver = false;

function perderVida(jugador) {
  if (gameOver) return;

  if (jugador === 1) vidasPlayer1--;
  if (jugador === 2) vidasPlayer2--;

  console.log(`Jugador ${jugador} pierde una vida. Vidas restantes: ${jugador === 1 ? vidasPlayer1 : vidasPlayer2}`);
  verificarGameOver();
}

function verificarGameOver() {
  if (vidasPlayer1 <= 0 || vidasPlayer2 <= 0) {
    gameOver = true;
    let mensaje = "";

    if (vidasPlayer1 > vidasPlayer2) {
      mensaje = "¡Jugador 1 gana con " + vidasPlayer1 + " vidas!";
    } else if (vidasPlayer2 > vidasPlayer1) {
      mensaje = "¡Jugador 2 gana con " + vidasPlayer2 + " vidas!";
    } else {
      mensaje = "¡Empate!";
    }

    document.getElementById("resultado").textContent = mensaje;
    document.getElementById("game-over-overlay").classList.add("show");
  }
}

function reiniciarJuego() {
  vidasPlayer1 = 3;
  vidasPlayer2 = 3;
  gameOver = false;
  document.getElementById("game-over-overlay").classList.remove("show");
  console.log("Juego reiniciado");
}

// 🎮 Tecla "A" = Jugador 2 pierde vida
document.addEventListener("keydown", function(event) {
  if (event.key.toLowerCase() === "a") {
    perderVida(2);
  }
});