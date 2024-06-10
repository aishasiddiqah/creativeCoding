var img;
function preload(){
  img=loadImage("castle.jpg");
}

function setup() {
  createCanvas(400, 400);
  background(0);
  img.resize(400,400);
}

function draw() {
  background(0);
  image(img,0,0);
  var v = map(mouseX,0,width,2,20);
  filter(POSTERIZE,v)
}