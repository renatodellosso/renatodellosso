/*
This code is of the start to making the chrome dino game.
The dino can jump, but no other logic is in place.

Goals:
- Make the cactus approach the dino
- Require the dino to jump over the cactus
- Add death

Challenges:
- Make the game infinite
- Make the game increase in difficulty
- Add new enemies
- Add new Dino abilities
- Animation?
*/


let canvas = document.getElementById("ctx");
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let w = canvas.width;
let h = canvas.height;

// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations
// Sprites: https://deejaygraham.github.io/2020/07/14/trex-runner-in-scratch/

let dinoSprite = new Image();
let cactusSprite = new Image();

dinoSprite.src = "trex1.png";
cactusSprite.src = "cactus1.png";

let score = 0;
ctx.font = "30px Arial";

let dino = {
    x: 0,
    y: -10,
    jumping: false,
    dead: false,
    size: 75,
    jump: () => {
        dino.jumping = true;
        let jumpHeight = 150; // Max jump height
        let jumpSpeed = 15; // How often frames are updates (ms)
        let jumpInterval = 5; // Pixels moved per frame
        let jumpingInterval = setInterval(() => { // Create an interval, called every jumpSpeed milliseconds, that increases the dino's height.
            dino.y += jumpInterval;
            if(dino.y > jumpHeight) {
                clearInterval(jumpingInterval); // Stop running the upwards jump interval
                let fallingInterval = setInterval(() => { // Start a new interval, called every jumpSpeed milliseconds, that decreases the dino's height.
                    dino.y -= jumpInterval;
                    if(dino.y <= -10) {
                        dino.y = -10;
                        dino.jumping = false;
                        clearInterval(fallingInterval);
                    }
                }, jumpSpeed);
            }
        }, jumpSpeed);
    }
}

let gameEnded = false;
function gameOver() {
    if (!gameEnded) {
        gameEnded = true;
        console.log("Game Over!");
        alert("Game Over! You scored " + score + " points.")
        cactus.x = w;
        score = 0;
        gameEnded = false;
    }
}

let cactus = {
    x: w,
    y: -25,
    xSize: 50,
    ySize: 105,
    move: () => {
        speed = 1;
        moveSpeed = 1.75;
        let moveInterval = setInterval(() => {
            cactus.x -= moveSpeed;
            if (cactus.x < -50) {
                cactus.x = w;
                moveSpeed += 0.5;
            }
            if (dino.y <= cactus.y+cactus.ySize) {
                if (dino.x+200 >= cactus.x-(cactus.xSize/4) && dino.x+200 <= cactus.x+(cactus.xSize/4)) {
                    gameOver();
                    moveSpeed = 1.5;
                }
            }
        }, speed)
    }
}

function init() {
    window.requestAnimationFrame(draw);
    window.addEventListener("keypress", (e) => {
        if(e.code == "Space") {
            if (!dino.jumping) { // Prevents the dino from jumping multiple times.
                dino.jump();
            }
        }
    });
    scoreCounter = () => {
        let scoreInterval = setInterval(() => {
            score++;
        }, 10);
    }
    cactus.move();
    scoreCounter();
}

function draw() {
    ctx.fillStyle = 'black';
    ctx.clearRect(0, 0, w, h);
    ctx.fillRect(1, h/2, w, 2); // Ground
    ctx.drawImage(dinoSprite, w/8 + dino.x, (h/2 - dino.size - dino.y), dino.size, dino.size); // Dino
    ctx.drawImage(cactusSprite, cactus.x, h/2 - cactus.ySize - cactus.y, cactus.xSize, cactus.ySize); // Cactus
    ctx.fillText("Score: " + score, 10, 50);
    window.requestAnimationFrame(draw);
}

init();
