var ySize= 400;
var xSize= 400;
var bal;
var ballen = []; //Array waar de ballen in komen te staan
var aantalBallen = 100;

function setup(){
  createCanvas(xSize,ySize);

  for (var i = 0; i < aantalBallen; i++){
    bal = new Ball(random(20, 380), random(20, 380), random(5, 15), random(1,10), random(1,10)); //Maak een nieuwe instantie van Bal()
    ballen.push(bal); //Push voegt de bal aan het einde van het array toe
  }
}

function draw(){
  background(255);
  var r = random();
  // ballen.length geeft de lengte van het ballenarray terug
  for (var i = 0; i < ballen.length; i++){
    bal = ballen[i]; //Haal een bal uit het array
    bal.teken();
    bal.update();
    bal.botsCheck(speler);
  }
}

function Ball(xx,yy){
  this.x = xx;
  this.y = yy;
  this.speedx = 4;
  this.speedy = 5;

  var dx = xpos2 - xpos1;
  var dy = ypos2 - ypos1;
  if (Math.sqrt(dx*dx + dy*dy) <= radius1 + radius2){
  // Botsing!
}

  this.botsCheck = function(speler) {
  // this.xpos geeft de xpos van het huidige balletje
  // bal.xpos geeft de xpos van het balletje dat je meegeeft als argument
  ...
}

  this.teken = function() {
    ellipse(this.x, this.y,10, 10);
  }

  this.update = function(){
    this.x += this.speedx;
    this.y += this.speedy;

    if (this.y > (ySize-10) || this.y < 0){
    this.speedy = -this.speedy;
  }
    if (this.x > (xSize-10) || this.x < 0){
    this.speedx = -this.speedx;
  }
  }
}
