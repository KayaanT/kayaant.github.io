// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let colors = ["white", "red", "blue", "yellow", "green", "orange", "purple", "violet"];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220); 
  background("black");
  recursiveCircle(width/2, height, 0);
}

function recursiveCircle(x, diameter, level) {
  fill(colors[level]);
  circle(x, height/2, diameter);

  if (diameter > 100) {
    recursiveCircle(x - mouseX/width/2*diameter, diameter/2, level+1);
    recursiveCircle(x + mouseX/width/2*diameter, diameter/2, level+1);
  }
}