var ySize= 400;
var xSize= 400;
var bal;
var ballen = []; //Array waar de ballen in komen te staan
var aantalBallen = 100;

function setup(){
  createCanvas(xSize,ySize);

  for (var i = 0; i < aantalBallen; i++){
    bal = new Ball(21, 21, 10, 5, 3); //Maak een nieuwe instantie van Bal()
    ballen.push(bal); //Push voegt de bal aan het einde van het array toe
  }
}

function draw(){
  background(255);

  // ballen.length geeft de lengte van het ballenarray terug
  for (var i = 0; i < ballen.length; i++){
    bal = ballen[i]; //Haal een bal uit het array
    //bal.teken();
    bal.beweeg();
  }
}

function Ball(xx,yy){
  this.x = xx;
  this.y = yy;
  this.speedx = 2;
  this.speedy = 3;

  this.update = function(){
    this.x += this.speedx;
    this.y += this.speedy;

    if (this.y > (400-10) || this.y < 0){
    this.speedy = -this.speedy;
  }
    if (this.x > (400-10) || this.x < 0){
    this.speedx = -this.speedx;
  }
  }
  }
