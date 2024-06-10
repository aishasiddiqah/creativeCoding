let detail = 1;
let increment = 5;  

var word="BATH SPA UNIVERSITY";
var font;

function preload(){
  font=loadFont("Comfortaa-Light.ttf");
}


function setup() {
  noLoop();
  createCanvas(900, 400);
  background(220);
  fill(0);
  noStroke();
  translate(0,130);
  textAlign(CENTER);
  points = font.textToPoints(word,35,95,80,{sampleFactor: 0.15});
  
  for (var i = 0; i < points.length; i++){
    var p = points[i];
    fill('#EC6363');
    stroke('black');
    rect(p.x,p.y,random(2,8),random(2,8));
    fill('#18978F');
    circle(p.x,p.y,random(5,5));
  }
}

function draw() {
  noiseDetail(4, detail);

  for (let y=0; y<height; y+=5) {
    for (let x=0; x<width; x+=5) {
      let gray=noise(x*increment,y*increment)*155;
      stroke(gray);
      point(x, y);
    }
  }
}
