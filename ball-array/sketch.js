// Ball Array Demo

let ballArray = [];

function setup() {
  noStroke();
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i <100; i++) {
    spawnBall();
  }
}

function draw() {
  background(0);
  
  for (let ball of ballArray) {
    fill(ball.ballColor);
    ball.x = noise(ball.time) * width;
    ball.y = noise(ball.time+100) * height;
    circle(ball.x, ball.y, ball.radius*2);
    ball.time += 0.003;
  }
}

function spawnBall() {
  let ball = {
    radius: random(10, 50),
    x: random(width),
    y: random(height),
    time: random(1000),
    ballColor: color(random(255), random(255), random(255), random(255))
  };
  ballArray.push(ball);
}

function mousePressed() {
  for (let i = 0; i <10; i++) {
    spawnBall();
  }
}
