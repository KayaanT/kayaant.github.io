// Inheritance Demo

let clownfish;
let octupus;
let creatures = [];

function preload() {
  clownfish = loadImage("assets/clownfish.png");
  octupus = loadImage("assets/octupus.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for (let i =0; i < 50; i++) {
    if (random(100) < 30) {
      let oct = new Octupus(random(width), random(height), 40, octupus);
      creatures.push(oct);
    }
    else {
      let fish = new Clownfish(random(width), random(height), 40, clownfish);
      creatures.push(fish);
    }
  }
}

function draw() {
  background(0);
  for (let creature of creatures) {
    creature.update();
    creature.display();
  }
}

class Creature {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  update() {
    this.x += 4;
  }

  display() {
    fill("green");
    circle(this.x, this.y, this.size);
    // image(clownfish, this.x, this.y);
  }
}

class Clownfish extends Creature {
  constructor(x, y, size, img) {
    super(x, y, size);
    this.theImage = img;
    this.yTime = 1000;
  }

  update() {
    this.x += 2;
    this.y = noise(this.yTime)*height;
    this.yTime += random(0.001, 0.005);

    if (this.x > width) {
      this.x = 0;
    }
  }

  display () {
    image(this.theImage, this.x, this.y, this.size, this.size);
  }
}

class Octupus extends Creature {
  constructor(x, y, size, img) {
    super(x, y, size);
    this.theImage = img;
    this.yTime = 1000;
  }

  update() {
    this.x += 2;
    this.y = noise(this.yTime)*height;
    this.yTime += random(0.001, 0.005);

    if (this.x > width) {
      this.x = 0;
    }
  }

  display () {
    image(this.theImage, this.x, this.y, this.size, this.size);
  }
}