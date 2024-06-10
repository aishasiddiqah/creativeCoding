function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255,204,204);
  
  //body
  fill(185,130,90);
  //top half
  ellipse(200,170,153,90);
  
  //legs
  //left leg
  fill(0);
  ellipse(170,300,25,25);
  ellipse(172,322,25,25);
  
  //right leg
  ellipse(240,300,25,25);
  ellipse(245,322,25,25);
  
  //bottom half
  fill(185,130,90);
  ellipse(200,255,153,90);
  fill(0);
  ellipse(232,285,10,10);
  ellipse(146,242,10,10);
  ellipse(202,268,10,10);
  ellipse(180,283,10,10);
  ellipse(259,248,10,10);
  ellipse(239,228,10,10);
  ellipse(210,230,10,10);
  ellipse(180,225,10,10);
  ellipse(170,260,10,10);
  ellipse(150,268,10,10);
  ellipse(230,248,10,10);
  ellipse(190,245,10,10);
  ellipse(165,240,10,10);
  ellipse(255,270,10,10);
  ellipse(225,265,10,10);
  ellipse(210,288,10,10);
  
  //eyes
  fill(0);
  ellipse(180,160,15,15);
  ellipse(225,160,15,15);
  
  //mouth
  line(165,185,240,185);
  
  //antennae
  line(165,130,130,85);
  line(180,127,150,45);
  line(200,125,198,65);
  line(230,128,225,85);
  line(242,132,285,50);
  
  fill(185,130,90);
  ellipse(130,85,25,25);
  ellipse(150,45,25,25);
  ellipse(198,65,25,25);
  ellipse(225,85,25,25);
  ellipse(285,50,25,25);
  
  fill(0);
  ellipse(132,85,10,10);
  ellipse(146,42,10,10);
  ellipse(202,68,10,10);
  ellipse(220,83,10,10);
  ellipse(289,48,10,10);
  
  //arms
  //left arm
  line(132,235,60,190);
  fill(185,130,90);
  ellipse(65,188,25,25);
  fill(0);
  ellipse(85,210,25,25);
  fill(185,130,90);
  ellipse(120,224,25,25);
  
  //right arm
  line(268,235,350,260);
  fill(185,130,90);
  ellipse(350,265,25,25);
  fill(0);
  ellipse(320,245,25,25);
  fill(185,130,90);
  ellipse(290,245,25,25);
}
