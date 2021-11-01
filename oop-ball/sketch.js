// Ball OOP Demo

let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 25; i++) {
    let x = random(100, width-100);
    let y = random(100, height - 100);
    let theBall = new Ball(x, y);
    balls.push(theBall);
  }
}

function draw() {
  background(0);

  for (let ball of balls) {
    ball.move();
    ball.display();
  }

  // balls.move();
  // balls.display();
}

class Ball {
  constructor(x, y) {
    this.radius = random(20, 50);
    this.x = x;
    this.y = y;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.ballColor = color(random(255), random(255), random(255), random(255));
  }

  display() {
    noStroke();
    fill(this.ballColor);
    circle(this.x, this.y, this.radius*2);
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x + this.radius >= width || this.x - this.radius <= 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
  }

  isPointInBall(x, y) {
    if (dist(x, y, this.x, this.y) < this.radius) {
      return true;
    }
    return false;
  }
}

function mousePressed() {
  for (let i = balls.length-1; i >= 0; i--) {
    if (balls[i].isPointInBall(mouseX, mouseY)) {
      balls.splice(i, 1);
    }
  }
}

function keyPressed() {
  if (key === " ") {
    let theBall = new Ball(mouseX, mouseY);
    balls.push(theBall);
  }
}