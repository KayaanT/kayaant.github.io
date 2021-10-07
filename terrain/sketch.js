// Terrain Genration

let rectHeights = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  generateTerrain();
}

function draw() {
  background(220);
  displayTerrain();
}

function generateTerrain() {
  let time = 0;
  for (let i = 0; i <= 10000; i++) {
    rectHeights.push(noise(time) * height);
    time += 0.001;
  }
}

function displayTerrain() {
  let theWidth = width/rectHeights.length;
  for (let i = 0; i < rectHeights.length; i++) {
    let theHeight = rectHeights[i];
    fill('black');
    rect(theWidth * i, height, 10, -theHeight);
  }
}