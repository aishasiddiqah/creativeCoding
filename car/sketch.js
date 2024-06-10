function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(229,255,204); 
  fill(255,51,51);
  // rect (x,y,width,height) (x is horizontal)
  rect(53,206,293,68);
  rect(118,146,204,60);
  
  //roof
  triangle(120, 146, 320, 146, 220, 115);
  
  //windows
  fill(102,255,255);
  rect(132,157,80,45);
  rect(237,157,70,45);
  fill(0);
  line(225,200,225,150);
  
  //wheels
  //front wheels
  fill(0);
  ellipse(130,270,52,52); //ellipse(x,y,width,height)
  fill(192,192,192);
  ellipse(130,270,40,40);
  fill(0);
  ellipse(130,270,25,25);
  
  //back wheels
  fill(0);
  ellipse(270,270,52,52); 
  fill(192,192,192);
  ellipse(270,270,40,40);
  fill(0);
  ellipse(270,270,25,25);
  
  //door lines
  line(141,206,141,250);
  line(240,206,240,273);
  
  //handle
  fill(153,0,153);
  rect(203,220,27,5);
  
  //front light
  fill(255,255,0);
  rect(53,253,27,17);
  
  //back light
  rect(332,253,14,17);
}
