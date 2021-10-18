// Conway's game of life

let grid;
let gridSize = 60;
let cellHeight, cellWidth;
let autoPlay = false;
let gun;

function preload() {
  gun = loadJSON("assets/gosper_gun.json"); // assumes gridsize = 60
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  grid = createEmptyGrid();
  cellHeight = height/gridSize;
  cellWidth = width/gridSize;
}

function draw() {
  background(220);
  if (autoPlay && frameCount % 1 === 0) {
    nextTurn();
  }
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
  if (key === " ") {
    nextTurn();
  }
  if (key === "p") {
    autoPlay = !autoPlay;
  }
  if (key === "g") {
    grid = gun;
  }
}

function nextTurn() {
  let newBoard = createEmptyGrid();
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      let neighbors = 0;

      // look at surrounding cells
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (y + i >= 0 && x + j >= 0 && y+i <gridSize && x + j < gridSize) {
            neighbors += grid[i+y][j+x];
          }
        }
      }

      // don't count itself
      neighbors -= grid[y][x];

      // apply rules of game
      if (grid[y][x] === 1) {
        if (neighbors === 2 || neighbors === 3) {
          newBoard[y][x] = 1;
        }
      }

      if (grid[y][x] === 0) {
        if (neighbors === 3) {
          newBoard[y][x] = 1;
        }
      }
    }
  }
  grid = newBoard;
}