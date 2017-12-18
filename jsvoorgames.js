var radius = 10;
var xSpeed = 10;
var ySpeed = 0;
var xSize = 800;
var ySize = 200;
var xBall = 21;
var yBall = 190;


function setup(){
  createCanvas(xSize, ySize);
}

function draw(){
  background(255);

  ellipse(xBall, yBall, 2*radius, 2*radius);

  if (yBall <= 0) {
      yBall += 16;
  } else if (yBall > height) {
        yBall -= 16;
  }


 }

function keyPressed() {
  if (keyCode == DOWN_ARROW) {
    if(yBall == 190){
      return
    }
    xBall += ySpeed, yBall += xSpeed;

}
  if (keyCode == UP_ARROW) {
    if(yBall == 16){
      return
    }
    xBall -= ySpeed, yBall -= xSpeed;
  }

}

  this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}
