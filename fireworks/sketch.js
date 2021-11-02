// Fireworks OOP Demo

let fireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  for (let i = fireworks.length - 1; i >= 0; i --) {
    if (fireworks[i].isDead()) {
      fireworks.splice(i, 1);
    }
    else {
      fireworks[i].move();
      fireworks[i].display();
    }
  }
}

function mousePressed() {
  angleMode(DEGREES);
  let theta = 0;

  for (let i = 0; i < 100; i++) {
    let dx = cos(theta + random(-1, 1)) * random(0.75, 1.25);
    let dy = sin(theta + random(-1, 1)) * random(0.75, 1.25);

    let myParticle = new Particle(mouseX, mouseY, dx, dy);
    fireworks.push(myParticle);

    theta += (360 / 100);
  }
}

class Particle {
  constructor(x, y, dx, dy) {
    this.x = x;
    this.y = y;
    this.size = random(5, 10);
    this.alpha = 255;

    // this.r = random(255);
    // this.g = random(255);
    // this.b = random(255);
    this.theColor = color(255, 0, 0, this.alpha);

    this.dx = dx; //random(-5, 5);
    this.dy = dy; //random(-5, 5);
  }

  display() {
    noStroke();
    fill(this.theColor);
    circle(this.x, this.y, this.size);
  }

  move() {
    this.alpha--;
    this.theColor = color(255, 0, 0, this.alpha);

    this.x += this.dx;
    this.y += this.dy;
  }

  isDead() {
    return this.alpha < 0;
  }
}