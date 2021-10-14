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
  grid = createEmpty2DArray(gridSize, gridSize);
}

function draw() {
  background(220);
  displayGrid();
}

function createEmpty2DArray(rows, cols) {
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
  
  if (grid[cellY][cellX] === 1) {
    grid[cellY][cellX] = 0;
  }
  else if (grid[cellY][cellX] === 0) {
    grid[cellY][cellX] = 1;
  }
}

function keyTyped() {
  if (key === "e") {
    for (let cellY of grid) {
      for (let cellX of cellY) {
        grid[cellY][cellX] = 0;
      }
    }
  }
}