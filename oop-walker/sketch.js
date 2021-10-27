// OOP Walker Demo

let kayaan, nick, hannah, george;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");

  kayaan = new Walker(width/2, height/2, "red");
  nick = new Walker(width/4, height/4, "blue");
  hannah = new Walker(width/4*3, height/4*3, "purple");
  george = new Walker(width/2, height/4, "green");
}

function draw() {
  kayaan.move();
  nick.move();
  hannah.move();
  george.move();

  kayaan.display();
  nick.display();
  hannah.display();
  george.display();
}

class Walker {
  constructor(x, y, walkerColor) {
    this.x = x;
    this.y = y;
    this.color = walkerColor;
    this.speed = 5;
  }

  display() {
    noStroke();
    fill(this.color);
    circle(this.x, this.y, 5);
  }

  move() {
    let choice = random(100);
    if (choice < 25) { 
      this.y -= this.speed; // up
    }
    else if (choice < 50) { 
      this.y += this.speed; // down
    }
    else if (choice < 75) { 
      this.x -= this.speed; // left
    }
    else {
      this.x += this.speed; // right
    }
  }
}