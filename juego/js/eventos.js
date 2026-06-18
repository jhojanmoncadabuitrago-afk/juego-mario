console.warn("Juego cargado correctamente");

const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");

function jump() {

    if (player.classList.contains("jump")) return;

    player.classList.add("jump");

    setTimeout(() => {
        player.classList.remove("jump");
    }, 600);
}

document.addEventListener("keydown", (e) => {

    if (e.code === "Space") {
        jump();
    }

});

const collision = setInterval(() => {

    const playerTop =
        parseInt(
            window.getComputedStyle(player)
            .getPropertyValue("bottom")
        );

    const obstacleLeft =
        parseInt(
            window.getComputedStyle(obstacle)
            .getPropertyValue("right")
        );

    const screenWidth = window.innerWidth;

    const obstacleX = screenWidth - obstacleLeft;

    if (
        obstacleX > 60 &&
        obstacleX < 130 &&
        playerTop < 140
    ) {
        alert("Game Over");
        location.reload();
    }
    const player = document.getElementById("player");

function jump() {

    if(player.classList.contains("jump")) return;

    player.classList.add("jump");

    setTimeout(() => {
        player.classList.remove("jump");
    }, 600);
}

document.addEventListener("keydown", (e) => {
    if(e.code === "Space"){
        jump();
    }
});

}, 10);

console.log("Suscribete sin load");

document.addEventListener('DOMContentLoaded', function(){
    console.log("Suscribete con load");
    console.log("Inicia juego");

    // Iniciar el bucle pasándole un tiempo inicial
    bucleInfinito.bucle(performance.now());
});