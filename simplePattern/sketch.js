//creating variables
var rows = 15;
var cols = 15;
var distanceX = 50;
var distanceY = 50;
var colours;
var colourPalette = ["#9C27B0", "#82CD47", "#E05297"];

function setup() {
  createCanvas(700, 500);
  mousePressed();
}

function mousePressed() {
  background(random(RGB));
  rectMode(CENTER);
  noStroke();
  colorMode(RGB);
  
  for (var r = 0; r < rows; r++) {
    for (var c = 0; c < cols; c++) {
      colours = int(random(3));
      fill(colourPalette[colours]); 
      var size = random(10,50);
	  var shape = floor(random(1, 5)); 
			
	  if(shape == 3) {
        noStroke();
        square(c*distanceX, r*distanceY, size);
	  }
      
	  if(shape == 2) {
        noStroke();
        fill('#F0FF42');
        ellipse(c*distanceX, r*distanceY, size, size);
	  }
      
      if(shape == 1) {
        stroke('black');
        ellipse(c*distanceX, r*distanceY, size, size);
	  }
      
      if(shape == 4) {
        stroke('black');
        square(c*distanceX, r*distanceY, size);
	  }
	}
  }
}