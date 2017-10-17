var ballx = 10;
var bally = 100;
var speedx = 2;
var speedy = 3;

function setup() {
  createCanvas(350, 350);
}

function draw() {
  background(250)
  rect(ballx, bally, 10, 10);
  ballx += speedx;
  bally += speedy;
  if (bally > (350-10) || bally < 0)
    speedy = -speedy;
  if (ballx > (350-10) || ballx < 0)
    speedx = -speedx;

}
