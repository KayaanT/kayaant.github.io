// Conway's game of life

let grid;
let gridSize = 20;
let cellHeight, cellWidth;
let level;
let playerX = 0;
let playerY = 0;

function preload() {
  level = loadJSON("assets/level1.json"); // assumes gridsize is 20
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // grid = createEmptyGrid();
  grid = level;
  cellHeight = height/gridSize;
  cellWidth = width/gridSize;

  // put player on grid
  grid[playerY][playerX] = 9;
}

function draw() {
  background(220);
  displayGrid();
}

function createEmptyGrid() {
  let board = [];
  
  for (let y = 0; y <= gridSize; y++) {
    board.push([]);
    for (let x = 0; x <= gridSize; x++) {
      board[y].push(0);
    }
  }
  return board;
}

function displayGrid() {
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x <= gridSize; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      if (grid[y][x] === 1) {
        fill("black");
      } 
      if (grid[y][x] === 9) {
        fill("red");
      } 
      rect(x * cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function createRandomGrid() {
  let board = [];
  
  for (let y = 0; y <= gridSize; y++) {
    board.push([]);
    for (let x = 0; x <= gridSize; x++) {
      if (random(0, 100) > 50) {
        board[y].push(1);
      }
      else {
        board[y].push(0);
      }
    }
  }
  return board;
}

function mousePressed() {

  let cellX = Math.floor(mouseX/cellWidth);
  let cellY = Math.floor(mouseY/cellHeight);

  if (grid[cellY][cellX] === 0) {
    grid[cellY][cellX] = 1;
  }
  else {
    grid[cellY][cellX] = 0;
  } 
}

function keyPressed() {
  if (key === "e") {
    grid = createEmptyGrid();
  }
  if (key === "r") {
    grid = createRandomGrid();
  }

  if (key === "s") {
    tryToMoveTo(playerX, playerY+1);
  }
  else if (key === "w") {
    tryToMoveTo(playerX, playerY-1);
  }
  else if (key === "a") {
    tryToMoveTo(playerX - 1, playerY);
  }
  else if (key === "d") {
    tryToMoveTo(playerX + 1, playerY);
  }
}


function tryToMoveTo(newX, newY) {
  // make sure you're on the grid 
  if (newX >= 0 && newY >= 0 && newX < gridSize && newY < gridSize) {
    if (grid[newY][newX] === 0) {
      grid[playerY][playerX] = 0;
      grid[newY][newX] = 9;
    
      playerX = newX;
      playerY = newY;
    }
  }
}