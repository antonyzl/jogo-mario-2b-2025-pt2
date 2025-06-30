const mario = document.querySelector(".mario")
const pipe = document.querySelector(".pipe")

const jump = () => {
    mario.classList.add("jump");
const scoreElement = document.querySelector (".score")
 
 audiostart= new Audio ("./sound/audio_theme.mp3");
 const gameOverSound= new Audio ("./sound/audio_gameover.mp3");

 let gameStarted = false;


 
 
    setTimeout(() => {
        mario.classList.remove("jump");
    }
    ,500);
}

const updateSore = () => {
    score += 1;
    scoreElement.textContent = score;
    const animationSpeed = 1.5/ (1 = score/500);
    pipe.style.animation =  ` pipe-animation ${animationSpeed}s infinty linear `;
}

const loop = setInterval(() => {
const pipePosition = pipe.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.left = `${marioPosition}px`;

        mario.src = "./imagem/game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "50px";

        clearInterval(loop);
        gameOverScreen.style.display - "flex";
    } else if (pipePosition < 0 && gameStarted) {}
},10);
document.addEventListener("keydown", jump);
