// SUdoku Demo

let initialGrid = [
  [2, 0, 5, 0, 0, 7, 0, 0, 6],
  [4, 0, 0, 9, 6, 0, 0, 2, 0],
  [0, 0, 0, 0, 8, 0, 0, 4, 5],
  [9, 8, 0, 0, 7, 4, 0, 0, 0],
  [5, 7, 0, 8, 0, 2, 0, 6, 9],
  [0, 0, 0, 6, 3, 0, 0, 5, 7],
  [7, 5, 0, 0, 2, 0, 0, 0, 0],
  [0, 6, 0, 0, 5, 1, 0, 0, 2],
  [3, 0, 0, 4, 0, 0, 5, 0, 8] 
];

let gridDimensions = 9;
let cellSize;
let grid = initialGrid;

function setup() {
  if (windowWidth < windowHeight) {
    createCanvas(windowWidth *0.9, windowWidth*0.9);
  }
  else {
    createCanvas(windowHeight*0.9, windowHeight*0.9);
  }
  cellSize = (width-1 )/gridDimensions;
}

function draw() {
  background(220);
  displayGrid();
}

function displayGrid() {
  for (let y = 0; y < gridDimensions; y++) {
    for (let x = 0; x < gridDimensions; x++) {
      // draw the square
      strokeWeight(1);
      fill("white");
      rect(cellSize*x, cellSize*y, cellSize);

      // show the number
      if (grid[y][x] !== 0) {
        strokeWeight(1);
        fill("black");
        textAlign(CENTER, CENTER);
        textSize(cellSize/2);
        text(grid[y][x], x*cellSize+cellSize/2, y*cellSize+cellSize/2);
      }
      
    }
  }
  drawCageLines();
}

function drawCageLines() {
  strokeWeight(5);
  for (let i = 0; i <= 9; i+=3) {
    line(0, cellSize * i, width, cellSize * i); 
    line(cellSize * i, 0, cellSize * i, height); 
  }
}