// Tic Tac Toe Game
// Kayaan Tharani
// Date
//
// Extra for Experts:
// Created an AI which makes different moves every time, but with intelligence


// to do:
// REWRITE CODE/FUNCTIONS
// loop to check x and o at the same time
// fix function calls to work in order
// create custom shapes for x and o (white) or to click
// function to check wher emouse x is, then link or cross cursor
// decrease size of grid
// strikethrough when won

let grid;
let cellSize;
let xTurn; // state variable
let xWin, oWin;

let xScore = 0;
let oScore = 0; 
let ties = 0;

function setup() {
  // create the largest possible square
  createCanvas(windowWidth, windowHeight);  
  if (windowHeight < windowWidth) {
    createCanvas(windowHeight, windowHeight);  
    cellSize = height/3*0.8;
  }
  else {
    createCanvas(windowWidth, windowWidth);  
    cellSize = width/3*0.8;
  }
  reset();
}

function draw() {
  cursor('pointer'); // change this into a function maybe 
  background("black");
  drawGrid();
  displayXandO();
  writeScores();
  autoMove();
  gameOver();
}

function drawGrid() {
  for (let y = 1; y < 3; y++) {
    for (let x = 1; x < 3; x++) {
      stroke("white");
      strokeWeight(5);

      // rect(cellSize*x, cellSize*y, cellSize);
      line(x*cellSize, 0, x*cellSize, cellSize*3); // vertical lines
      line(0, y*cellSize, cellSize*3 , y*cellSize); // horizontal lines
    }
  }
}

function reset() {
  grid = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  xTurn = true;
  xWin = false;
  oWin = false;
}

function displayXandO() {
  textAlign(CENTER, CENTER);
  
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      fill("white");
      textSize(cellSize * 0.75);
      strokeWeight(1);
      if (grid[y][x] === 1) {
        text("x", x*cellSize+cellSize/2, y*cellSize+cellSize/2);
      }
      else if (grid[y][x] === 2) {
        text("o", x*cellSize+cellSize/2, y*cellSize+cellSize/2);
      }
    }
  }
}

function assignXorO(cellX, cellY) {
  if (grid[cellY][cellX] === 0) {
    if (xTurn) {
      grid[cellY][cellX] = 1;
      xTurn = !xTurn;
    }
    else {
      grid[cellY][cellX] = 2;
      xTurn = !xTurn;
    }
  }
  checkThreeInARow();
  checkTie();
}

function mousePressed() {
  let cellX = Math.floor(mouseX/cellSize);
  let cellY = Math.floor(mouseY/cellSize);

  assignXorO(cellX, cellY);
}

function checkThreeInARow() {
  // check if x has won (maybe this can be combined into 1 if statement)
  for (let i = 0; i < 3; i++) {
    // rows and columns
    if (grid[0][i] === 1 && grid[1][i] === 1 && grid[2][i] === 1 || grid[i][0] === 1 && grid[i][1] === 1 && grid[i][2] === 1 || 
        grid[0][0] === 1 && grid[1][1] === 1 && grid[2][2] === 1 || grid[0][2] === 1 && grid[1][1] === 1 && grid[2][0] === 1) { 
      xWin = true;
      return true;
    }
    else if (grid[0][i] === 2 && grid[1][i] === 2 && grid[2][i] === 2 || grid[i][0] === 2 && grid[i][1] === 2 && grid[i][2] === 2 ||
            grid[0][0] === 2 && grid[1][1] === 2 && grid[2][2] === 2 || grid[0][2] === 2 && grid[1][1] === 2 && grid[2][0] === 2) { 
      oWin = true;
      return true;
    }
  }
}

function checkTie() {
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      if (grid[y][x] === 0) {
        return false;
      }   
    }
  }
  if (checkThreeInARow()) {
    return false;
  }
  return true;
}

function gameOver() {
  if (xWin) {
    xScore++;
    reset();
    alert("X wins");
    // noLoop();
  }
  else if (oWin) {
    oScore++;
    reset();
    alert("O wins");
    // noLoop();
  }
  else if (checkTie()) {
    ties++;
    reset();
    alert("Tie");
    // noLoop();
  }
} 

function writeScores() {
  textSize(cellSize*0.25);
  textAlign(CENTER);
  strokeWeight(1);

  text("X", cellSize*3/5, height/10*8.5);
  text(xScore, cellSize*3/5, height/10*9.5);
  text("Tie", cellSize*3/2, height/10*8.5);
  text(ties, cellSize*3/2, height/10*9.5);
  text("O", cellSize*3/5*4, height/10*8.5);
  text(oScore, cellSize*3/5*4, height/10*9.5);
}

function autoMove() {
  if (!xTurn) {
    // check if o can win 
    // diagonal top left to bottm right
    if (grid[0][0] === 2 && grid[1][1] === 2 && grid[2][2] === 0 || grid[0][0] === 2 && grid[1][1] === 0 && grid[2][2] === 2 || grid[0][0] === 0 && grid[1][1] === 2 && grid[2][2] === 2) {
      for (let j = 0; j < 3; j++) {
        grid[j][j] = 2;  
      }
    }
    // diagonal top right to bottm left
    if (grid[0][2] === 2 && grid[1][1] === 2 && grid[2][0] === 0 || grid[0][2] === 2 && grid[1][1] === 0 && grid[2][0] === 2 || grid[0][2] === 0 && grid[1][1] === 2 && grid[2][0] === 2) {
      for (let j = 0; j < 3; j++) {
        if (grid[j][2-j] === 0) {
          grid[j][2-j] = 2;
        }
      }
    }

    for (let i = 0; i < 3; i++) { 
      // rows
      if (grid[i][0] === 2 && grid[i][1] === 2 && grid[i][2] !== 1 || grid[i][2] === 2 && grid[i][1] === 2 && grid[i][0] !== 1 || grid[i][2] === 2 && grid[i][0] === 2 && grid[i][1] !== 1) {
        for (let j = 0; j < 3; j++) {
          grid[i][j] = 2;
        }
        xTurn = true;
        checkThreeInARow();
        checkTie();
        return;
      }
      // columns
      if (grid[0][i] === 2 && grid[1][i] === 2 && grid[2][i] !== 1 || grid[0][i] === 2 && grid[2][i] === 2 && grid[1][i] !== 1|| grid[1][i] === 2 && grid [2][i] === 2 && grid[0][i] !== 1) {
        for (let j = 0; j < 3; j++) {
          grid[j][i] = 2;
        }
        xTurn = true;
        checkThreeInARow();
        checkTie();
        return;
      }

      // check if x can win
      //rows
      if (grid[i][0] === 1 && grid[i][1] === 1 && grid[i][2] === 0 || grid[i][2] === 1 && grid[i][1] === 1 && grid[i][0] === 0 || grid[i][2] === 1 && grid[i][0] === 1 && grid[i][1] === 0) {
        for (let j = 0; j < 3; j++) {
          if (grid[i][j] === 0) {
            grid[i][j] = 2;
          }
        }
        xTurn = true;
        checkThreeInARow();
        checkTie();
        return;
      }

      //columns
      if (grid[0][i] === 1 && grid[1][i] === 1 && grid[2][i] === 0 || grid[0][i] === 1 && grid[2][i] === 1 && grid[1][i] === 0|| grid[1][i] === 1 && grid [2][i] === 1 && grid[0][i] === 0) {
        for (let j = 0; j < 3; j++) {
          if (grid[j][i] === 0) {
            grid[j][i] = 2;
          }
        }
        xTurn = true;
        checkThreeInARow();
        checkTie();
        return;
      }
    }

    // diagonal top left to bottom right
    if (grid[0][0] === 1 && grid[1][1] === 1 && grid[2][2] === 0 || grid[0][0] === 1 && grid[1][1] === 0 && grid[2][2] === 1 || grid[0][0] === 0 && grid[1][1] === 1 && grid[2][2] === 1) {
      for (let j = 0; j < 3; j++) {
        if (grid[j][j] === 0) {
          grid[j][j] = 2;
        }
      }
      xTurn = true;
      checkThreeInARow();
      checkTie();
      return;
    }
    // diagonal top right to bottm left
    if (grid[0][2] === 1 && grid[1][1] === 1 && grid[2][0] === 0 || grid[0][2] === 1 && grid[1][1] === 0 && grid[2][0] === 1 || grid[0][2] === 0 && grid[1][1] === 1 && grid[2][0] === 1) {
      for (let j = 0; j < 3; j++) {
        if (grid[j][2-j] === 0) {
          grid[j][2-j] = 2;
        }
      }
      xTurn = true;
      checkThreeInARow();
      checkTie();
      return;
    }

    // if none of the above is possible, then place an o in a square
    let spotsToFill = [
      {y: 1, x: 1},
      {y: 0, x: 0},
      {y: 0, x: 2},
      {y: 2, x: 0},
      {y: 2, x: 2},
      {y: 0, x: 1},
      {y: 1, x: 0},
      {y: 1, x: 2},
      {y: 2, x: 1},
    ];
    spotsToFill = shuffle(spotsToFill); // randomize moves

    for (let pair of spotsToFill) {
      if (grid[pair.y][pair.x] === 0) {
        grid[pair.y][pair.x] = 2;
        xTurn = true;
        break;
      }
    }
  }
  checkThreeInARow();
  checkTie();
}
