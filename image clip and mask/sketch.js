let img;

function preload(){
  img = loadImage("cat.jpg")
}

function setup() {
  createCanvas(500, 500);
  background(104,29,69);
  
  img.resize(300,200);
  let cnv7 = createGraphics(200,200); // creating a sub canvas
  cnv7.square(10,10,500);
  cnv7.canvas.getContext("2d").clip();  
  cnv7.image(img,-40,0); //positioning the image 
  image(cnv7,60,40);
  
  img.resize(300,200); // resizing the image 
  let cnv5 = createGraphics(200,400); // creating a sub canvas
  cnv5.circle(95,100,100); // x, y, size of the circle 
  cnv5.circle(95,200,100);
  cnv5.circle(95,300,100);
  img.mask(cnv5);
  image(img,200,250);
  
}
