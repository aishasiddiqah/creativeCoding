function setup() {
  createCanvas(500, 500);
  background(255,0,148);
  cnv3 = createGraphics(width, height);
  cnv3.fill(255,255,0);  
  cnv3.rect(75,150,350,200);
  cnv3.erase();
  cnv3.textSize(55);
  cnv3.text('LEMONADE', 96, 270); 
  image(cnv3, 0, 0);
}
