// Bubble Demo

let theBubbles = [];
// let bubble;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  bubbleUp();
  displayBubble();
}

function bubbleUp() {
  for (let bubble of theBubbles) {
    bubble.y += bubble.dy;

    //jitter sideways
    bubble.x += random(-5, 5); 
  }
}

function displayBubble() {
  noStroke();
  for (let bubble of theBubbles) {
    fill(bubble.bubbleColor);
    circle(bubble.x, bubble.y, bubble.radius*2);
  }
}

function spawnBubble() {
  let bubble = {
    x: random(0, width),
    y: height,
    radius: random(20, 50),
    dx: 0,
    dy: -5,
    bubbleColor: color(random(0, 255), random(0, 255), random(0, 255), random(0, 255))
  };
  theBubbles.push(bubble);
}

function mousePressed() {
  for (let i = 0; i<5; i++) {
    spawnBubble();
  }
}