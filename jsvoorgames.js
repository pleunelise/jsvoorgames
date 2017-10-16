var xCar = 50;

function setup() {
  //Canvas van 200 px bij 200 px
  createCanvas(200, 180);
  //Één cijfer geeft grijswaarden
  background(220);
}

function draw() {
    //Geen randen om de auto
    noStroke();
    //Kies de opvulkleur (rgb)
    fill(255, 220, 115);
    //Parameters: x, y, breedte, hoogte
    rect(xCar, 100, 110, 20);
    rect(xCar + 10, 78, 70, 40);
    // Wielen
    //Witte randen voor de wielen
    stroke(255);
    //Iets dikkere randen
    strokeWeight(2);
    fill(12, 66, 66);
    //Parameters: x, y, breedte, hoogte
    ellipse(xCar + 25, 121, 24, 24);
    ellipse(xCar + 80, 121, 24, 24);
    stroke(0); //Zwarte weg
    //Parameters: x1,y1,x2,y2
    line(0, 121+12, 200, 121+12);
};
