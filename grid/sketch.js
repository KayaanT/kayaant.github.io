// Grid Demo
let gridSize = 30;
let grid;
let soundEffect;

function preload() {
  soundFormats("mp3");
  soundEffect = loadSound("assets/effect");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createRandom2DArray(gridSize, gridSize);
}

function draw() {
  background(220);
  displayGrid();
}

function create2DArray(rows, cols, numToFill = 0) {
  let grid = [];
  for (let y = 0; y < rows; y++) {
    grid.push([]);
    for (let x = 0; x < cols; x++) {
      grid[y].push(numToFill);    
    }
  }
  return grid;
}

function createRandom2DArray(rows, cols) {
  let grid = [];
  for (let y = 0; y < rows; y++) {
    grid.push([]);
    for (let x = 0; x < cols; x++) {
      if (random(100) > 50) {
        grid[y].push(0);    
      }
      else {
        grid[y].push(1);    
      }
    }
  }
  return grid;
}

function displayGrid() {
  let cellWidth = width/gridSize;
  let cellHeight = height/gridSize;

  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      if (grid[y][x] === 0) {
        fill(255);
      }
      else {
        fill(0);
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function mousePressed() {
  let cellWidth = width/gridSize;
  let cellHeight = height/gridSize;
  let cellX = Math.floor(mouseX/cellWidth);
  let cellY = Math.floor(mouseY/cellHeight);

  soundEffect.play();
  
  swap(cellX, cellY);
  swap(cellX+1, cellY);
  swap(cellX-1, cellY);
  swap(cellX, cellY+1);
  swap(cellX, cellY-1);
}

function swap(x, y) {
  if (x >= 0 && x < gridSize && y >= 0 && y <= gridSize){
    if (grid[y][x] === 1) {
      grid[y][x] = 0;
    }
    else if (grid[y][x] === 0) {
      grid[y][x] = 1;
    }
  }
}

function keyPressed() {
  if (key === "e") {
    grid = create2DArray(gridSize, gridSize);
  }
  if (key=== "b") {
    grid = create2DArray(gridSize, gridSize, 1);
  }
  if (key === "r") {
    grid = createRandom2DArray(gridSize, gridSize);
  }
}