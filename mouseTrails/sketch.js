var count=1;
var c;
var col = ['#0094C4','#FB2576', '#C703FA'];

function setup() {
  c = createCanvas(600, 400);
  background('#82CD47');
  noStroke();
}

function draw() {
  if (mouseIsPressed){
    noFill();
    stroke(random(col));
    square(mouseX,mouseY,30);
  }
}

//for the saving function
function keyPressed(){
  if(keyCode==65){ //put ascii code of enter 
    saveCanvas(c,'mouseTrail'+ count,'jpg');
    count++;
  }
}