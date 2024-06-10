//data for csv file taken from 'https://nssdc.gsfc.nasa.gov/planetary/factsheet/'

var table;

function preload() {
    table = loadTable("planets_density.csv","csv");
}

function setup() {
  createCanvas(500,360);
  background('#393646');
	noStroke();
}

function draw() {
	push();
	textSize(22);
    noStroke();
    fill('#CAC8C8');
	text('Density of the Planets in the Solar System', 45,48);
	textSize(13);
	textStyle(NORMAL);
  translate(0,310);
  var data = table.getRow(1).arr;
  for(i = 0; i < table.getColumnCount(); i++) {
    stroke('black');
    var rectHeight = map(data[i],687,5514,85,205);
    translate(i + 48,0);
		lerpAm = map(data[i],687,5514, 0,1);
    var lerpCol = lerpColor(color(204,0,102),color(0,204,204),lerpAm);
    fill(lerpCol);
		textAlign(CENTER);
    rect(0,0, 40,-rectHeight);
    noStroke();
		text(data[i],20,-rectHeight - 15);
		fill('#CAC8C8');
		text(table.getRow(0).arr[i],20,25);
  }
	pop();
}