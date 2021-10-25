// Tic Tac Toe Game
// Kayaan Tharani
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// to do:
// black background
// grid in middle of screen
// create largest square and white grid
// create custom shapes for x and o (white)
// if clicked place x or o
// check for 3 in a row
// create ai 
// cursor change when in right spot
// center grid within canvas
// funciton to check if cell empty then assign x or o

let grid = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let cellSize;
let xTurn = true; // state variable

function setup() {
  // create the largest possible square
  if (windowHeight < windowWidth) {
    createCanvas(windowHeight, windowHeight);  
  }
  else {
    createCanvas(windowHeight, windowHeight);  
  }
  cellSize = height/3;
}

function draw() {
  background("black");

  drawGrid();
  displayXandO();
}

function drawGrid() {
  for (let y = 1; y < 3; y++) {
    for (let x = 1; x < 3; x++) {
      stroke("white");
      strokeWeight(5);

      // rect(cellSize*x, cellSize*y, cellSize);
      line(x*cellSize, 0, x*cellSize, height); // vertical line
      line(0, y*cellSize, width , y*cellSize); // horizontal line
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
}

function mousePressed() {
  let cellX = Math.floor(mouseX/cellSize);
  let cellY = Math.floor(mouseY/cellSize);

  assignXorO(cellX, cellY);
}

function checkThreeInARow() {
  
}