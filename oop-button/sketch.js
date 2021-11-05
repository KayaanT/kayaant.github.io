// Button OOP

let bgButton, shapeButton;
let backgroundColor = "blue";
let isShapeDisplayed = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgButton = new Button(100, 100, 600, 150, "black", "white");
  shapeButton = new Button(100, 400, 600, 150, "red", "white");
}

function draw() {
  background(backgroundColor);
  bgButton.display();
  shapeButton.display();

  if (isShapeDisplayed) {
    fill("black");
    circle(600, 200, 100, 100);
  }
}

class Button {
  constructor(x, y, buttonWidth, buttonHeight, hoverColor, notHoverColor) {
    this.x = x;
    this.y = y;
    this.width = buttonWidth;
    this.height = buttonHeight;
    this.hoverColor = hoverColor;
    this.notHoverColor = notHoverColor;
  }

  display() {
    if (this.isPointInButton(mouseX, mouseY)) {
      fill(this.hoverColor);
    }
    else {
      fill(this.notHoverColor);
    }
    rect(this.x, this.y, this.width, this.height);
  }

  isPointInButton(x, y) {
    return x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height;
  }
}

function mousePressed() {
  if (bgButton.isPointInButton(mouseX, mouseY)) {
    backgroundColor = "pink";
  }

  if (shapeButton.isPointInButton(mouseX, mouseY)) {
    isShapeDisplayed = !isShapeDisplayed;
  }
}