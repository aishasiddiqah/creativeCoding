var img,x,y;
function preload(){
  img=loadImage("color.jpg");
}

function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke();
  img.resize(400,400)
}

function draw() {
  x=random(width);
  y=random(height);
  var c=img.get(x,y);
  fill(c[0],c[1],c[2],50);
  ellipse(x,y,30,30);
  
}