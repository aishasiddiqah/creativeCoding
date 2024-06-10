var fft, music, bgImg;
var particle=[];
var colors=['#F70776','#97FEED','#A084DC','#FA9884','#F0FF42'];

function preload(){
  music = loadSound('heartOfTheOcean.mp3');
  bgImg = loadImage('background.jpg');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  imageMode(CENTER);
  rectMode(CENTER);
  
  fft = new p5.FFT();
  
  
  noLoop();
}

function draw() {
  background(0);
  
  translate(width/2,height/2);
  
  fft.analyze();
  amp = fft.getEnergy(20,200);
  
  push();
  if (amp>230){
    rotate(random(-0.5,0.5));
  }
  
  image(bgImg,0,0,width,height);
  pop();
  
  var alpha = map(amp,0,255,180,150);
  fill(0,alpha);
  noStroke();
  rect(0,0,width,height);
  
  var wave = fft.waveform();
  
  for (var t = -1; t<= 1; t+=2){
    beginShape();
    for (var i=0; i<= 180 ;i+=0.5){
      var index = floor(map(i,0,180,0,wave.length-1));
    
      var r = map(wave[index], -1,1,150,350);
    
      var x = r*sin(i)*t;
      var y = r*cos(i);
      vertex(x,y);
  }
  endShape();
  }
  
  var p = new Particle();
  particle.push(p);
  
  for (var i = 0; i<particle.length;i++){
    particle[i].update();
    particle[i].show();
  }
}

function mouseClicked(){
  if (music.isPlaying()){
    music.pause();
    noLoop();
  } else{
    music.play();
    loop();
  }
}

class Particle{
  constructor(){
    this.pos=p5.Vector.random2D().mult(50);
    this.vel=createVector(0,0);
    this.acc=this.pos.copy().mult(random(0.0001,0.00001));
    
    this.w=random(3,5);  
  }
  
  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }
  
  show(){
    noStroke();
    fill(random(colors));
    ellipse(this.pos.x, this.pos.y, this.w);
  }
}