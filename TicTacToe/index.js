let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let text = document.getElementById('text');

//Draw the board
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;

ctx.beginPath();
ctx.moveTo(0, 200);
ctx.lineTo(600, 200);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0, 400);
ctx.lineTo(600, 400);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200, 000);
ctx.lineTo(200, 600);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(400, 000);
ctx.lineTo(400, 600);
ctx.stroke();

text.innerHTML = "1's turn";

let board = [];
board[0] = [0, 0, 0];
board[1] = [0, 0, 0];
board[2] = [0, 0, 0];

let gameOver = false;
let turn = 1;
let turnOver = false;

let onClick = () => {


    text.innerHTML = turn + "'s turn";
}

canvas.addEventListener('click', onClick());
