var img,x,y;
function preload(){
  img=loadImage("citrus.jpg");
}

function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke();
  img.resize(400,600);
}

function draw() {
  background(0);
  x=mouseX;
  y=mouseY;
  image(img,0,0)
  var c=get(x,y);
  fill(c);
  rect(x,y,45,45);
}