var bal2;
var bal;
var player_img;
var dx = bal2.x - bal.x;
var dy = bal2.y - bal.y;

function setup(){
  createCanvas(1300,600);
  bal = new Bal();
  bal2 = new Bal2(2);
  player_img1 = loadImage("kinker.png");
  player_img = loadImage("koonkjenmoounster.jpg");
}

function draw(){
  background(255, 255, 255, 50);
  bal.update();
  bal.show();
  bal2.move();
  bal2.show();
  bal2.check();
  }


 function keyPressed() {
   if (key == ' ') {
     bal.up();

   }
 }
