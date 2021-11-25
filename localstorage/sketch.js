// Click Local Storage

let clickCount = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  fill("white");
  textSize(42);
  textAlign(CENTER, CENTER);
  text(clickCount, width/2, height/2);
  text("Highest Clicks: " + getItem("highestClick"), width/2, height/4)
}

function mousePressed() {
  clickCount++;
  if (clickCount > getItem("highestClick")) {
    storeItem("highestClick", clickCount);  
  }
}