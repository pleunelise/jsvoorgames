var ballx1 = 10;
var bally1 = 100;
var speedx1 = 2;
var speedy1 = 3;
var ballx2 = 20;
var bally2 = 35;
var speedx2 = 3;
var speedy2 = 5;
var ballx3 = 91;
var bally3 = 199;
var speedx3 = 4;
var speedy3 = 6;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(250)
  rect(ballx1, bally1, 10, 10);
  ballx1 += speedx1;
  bally1 += speedy1;
  rect(ballx2, bally2, 10, 10);
  ballx2 += speedx2;
  bally2 += speedy2;
  rect(ballx3, bally3, 10, 10);
  ballx3 += speedx3;
  bally3 += speedy3;
  if (bally > (400-10) || bally < 0)
    speedy = -speedy;
  if (ballx > (400-10) || ballx < 0)
    speedx = -speedx;

}
