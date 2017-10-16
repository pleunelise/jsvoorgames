var xCar;
var yCar;
var xSize = 400;
var ySize = 180;
var wheelSize;

function setup() {
  createCanvas(xSize, ySize);
  xCar = 50;
  yCar = 100;
  wheelSize = 24;
}

function draw() {
    background(220); //Één cijfer geeft grijswaarden
    drawCar(xCar, yCar, wheelSize);
    xCar += 1;
};

function drawCar(xCar, yCar, wheelSize){
    noStroke();
    fill(111, 120, 220);
    rect(xCar, yCar, 110, 20);
    rect(xCar + 10, yCar-22, 70, 40);
    // Wielen
    stroke(255);
    strokeWeight(2);
    fill(12, 66, 66);
    ellipse(xCar + 25, yCar + 21, wheelSize, wheelSize);
    ellipse(xCar + 80, yCar + 21, wheelSize, wheelSize);
    stroke(0);
    line(0, yCar + 21 + wheelSize/2, width, yCar + 21 + wheelSize/2);
}
