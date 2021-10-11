let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let text = document.getElementById('text');

let training = false;

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

class State {
  constructor() {
    this.state = JSON.parse(JSON.stringify(board));
    this.moves = [];

    for (var i = 0; i < this.state.length; i++) {
      for (var x = 0; x < this.state[i].length; x++) {
        // console.log(this.state[i][x]);
        // console.log((this.state[i][x] == 0) + " " + i + " " + x);
        // console.log("");
        // console.log(i + " ")
        if(this.state[i][x] == 0) {
          // console.log("Adding " + i + " " + x);
          //console.log("Adding " + i + " " + x);
          for (var j = 0; j < 3; j++) {
            this.moves.push([i, x]);
          }
          //console.log(this.moves);
        }
      }
    }
  }
}

let ai = {
  states: [],
  movesMade: [],

  getMoves: () => {
    for (var i = 0; i < ai.states.length; i++) {
      let s = ai.states[i];

      if(JSON.stringify(s.state) == JSON.stringify(board)) {
        console.log("Found state");
        if(ai.states[i].moves.length != 0) return ai.states[i].moves;
        else {
          console.log("Resetting state");
          ai.states[i] = new State();
          return ai.states[i].moves;
        }
      }
    }

    console.log("Added new state");
    ai.states.push(new State());
    return ai.states[ai.states.length-1].moves;
  },

  determineMove: () => {
    let moves = ai.getMoves(board);
    let m = moves[Math.floor(Math.random() * (moves.length))];

    let s = new State(board);

    if(turn == 2) {
      ai.movesMade.push(s);
      ai.movesMade[ai.movesMade.length-1].moves = m;
    }

    // console.log("ai.movesMade:");
    // console.log(ai.movesMade);
    // console.log("");

    return m;
  },

  learnMatch: (r) => {
    ai.getMoves(board);

    for (var i = 0; i < ai.movesMade.length; i++) {
      // console.log(ai.states[i]);
      // console.log(ai.movesMade[i].moves);

      if (r==2) ai.states[i].moves.push(ai.movesMade[i].moves);

      else if (r==1) {
        let m = ai.movesMade[i].moves
        let index = ai.states[i].moves.indexOf(m);
        ai.states[i].moves.splice(index);
      }
    }

    localStorage.setItem('ai', JSON.stringify(ai.states));
    console.log("Saved AI");
  }
}

let s = localStorage.getItem('ai');
if(s !== null) {
  ai.states = JSON.parse(s);
  console.log("Loaded AI");
}

let victory = (t) => {
  text.innerHTML = t + " wins!";
  let c = setInterval(() => {
    ai.learnMatch(t);
    if(!training) alert(t + " wins!");
    console.log(t + " wins!");
    location.reload();
    clearInterval(c);
  }, 0.1)
}

let tie = () => {
    text.innerHTML = "It's a tie!";
    let c = setInterval(() => {
      if(!training) alert("It's a tie!");
      console.log("It's a tie!");
      location.reload();
      clearInterval(c);
    }, 0.1)
}

let checkVictory = (t) => {
  let v = false;

  //Vertical check
  for (var i = 0; i < board.length; i++) {
    for (var x = 0; x < board[i].length;x++) {
      if (board[i][x] != t) break;
      else if (x == board[i].length-1) return true;
    }
  }

  //Horizontal check
  for (var i = 0; i < board[0].length; i++) {
    if(board[0][i] == turn && board[1][i] == turn && board[2][i] == turn) return true;
  }

  //Diagonal check
  if ((board[0][0] == turn && board[1][1] == turn && board[2][2] == turn) || (board[2][0] == turn && board[1][1] == turn && board[0][2] == turn)) return true;

  return false;
}

let onClick = (e) => {
  if (turn == 1 && !training) {
    gridX = Math.floor(e.pageX/200);
    gridY = Math.floor(e.pageY/200);
  }
  else {
    let g = ai.determineMove();

    if (typeof g === "undefined") tie();
    else {
      while(board[g[0]][g[1]] != 0) g = ai.determineMove();

      //console.log(g);
      gridX = g[0];
      gridY = g[1];
      ai.getMoves(board);
    }
  }

  if(board[gridX][gridY] == 0){
    board[gridX][gridY] = turn;
    ctx.font = '64px monospace';
    ctx.fillText(turn, gridX*200+100, gridY*200+100);

    if (checkVictory(turn)) victory(turn);
    else {
      turn++;
      //console.log(turn);
      if (turn == 2) {
        //console.log("Resetting turn");
        onClick(null);
        turn = 1;
      }

      if (turn > 2) turn = 1;
      if (training && turn == 1) onClick(null);
      text.innerHTML = turn + "'s turn";
    }
  }

  text.innerHTML = turn + "'s turn";

}

canvas.addEventListener('click', onClick);

onClick(null);
