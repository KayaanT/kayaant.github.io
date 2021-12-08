// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let triangleVertices = [
  {x: 400, y: 100},
  {x: 100, y: 700},
  {x: 700, y: 700}
];

let theDegree = 0;
let colorArray = ["red", "purple", "blue", "green", "orange", "black", "white", "yellow", "violet"];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  sierpinski(triangleVertices, theDegree);
  
}

function mousePressed() {
  if (theDegree < 7) {
    theDegree++;
  }
}

function sierpinski(points, degree) {
  noStroke();
  fill(colorArray[degree]);
  triangle(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y);

  if (degree > 0) {
    sierpinski([points[0], getMidPoint(points[0], points[1]), getMidPoint(points[0], points[2])], degree-1);
    sierpinski([points[1], getMidPoint(points[0], points[1]), getMidPoint(points[1], points[2])], degree-1);
    sierpinski([points[2], getMidPoint(points[0], points[2]), getMidPoint(points[1], points[2])], degree-1);
  }
}

function getMidPoint(point1, point2) {
  return {x: (point1.x + point2.x)/2, y: (point1.y + point2.y)/2};
}