// Tic Tac Toe Game
// Kayaan Tharani
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// to do:
// create custom shapes for x and o (white)
// create ai 
// cursor change when in right spot
// decrease size of grid
// strikethrough when won

let grid = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let cellSize;
let xTurn = true; // state variable

let xWin = false;
let oWin = false;

function setup() {
  // create the largest possible square
  createCanvas(windowWidth, windowHeight);  
  if (windowHeight < windowWidth) {
    createCanvas(windowHeight, windowHeight);  
    cellSize = height/3;
  }
  else {
    createCanvas(windowWidth, windowWidth);  
    cellSize = width/3;
  }
}

function draw() {
  background("black");

  drawGrid();
  displayXandO();
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

function displayXandO() {
  textAlign(CENTER, CENTER);
  
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      fill("white");
      textSize(cellSize * 0.75);
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
    alert("X wins");
    noLoop();
  }
  else if (oWin) {
    alert("O wins");
    noLoop();
  }
  else if (checkTie()) {
    alert("Tie");
    noLoop();
  }
}