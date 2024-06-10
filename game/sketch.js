//naming the variables used
var gameScreen = 0;
var y=-20;
var x=200;
var speed = 2;
var score= 0;
var redBall


function setup() {
  //changing the size of the canvas to fit the screen
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // defining all the screens to be displayed in the game
  if(gameScreen == 0){
    begin()
  }else if(gameScreen == 1){
  	game()
  }else if(gameScreen==2){
  	lose()
  }	else if (gameScreen==3){
    win()
  }
}

function begin(){ // designing the starting screen
  background('#FF6666')
  fill(0);
  textAlign(CENTER);
  textSize(25);
  textStyle(BOLD)
  text('CATCHING RED BALL GAME', width / 2, height / 2-10)
  textSize(19)
  fill('white')
  text('Press the spacebar to begin', width / 2, height / 2 + 55);
  textStyle(NORMAL)
  textSize(15)
  text('Score 80 points to win the game', width / 2, height / 2 + 95);
  text('(Directions: Use the mouse to move the box)', width / 2, height / 2 + 115);
  
  reset();
}

function redBall(){ // making the red ball
  fill('red')
  ellipse(x,y,30,30)
}

function game(){ //designing the game screen
  background('#FFEECC')
  textSize(20)
  textStyle(BOLD);
  text("score = " + score, 70,50)
  redBall()
  fill('#2C3639')
  rectMode(CENTER)
  rect(mouseX,height-10,70,30)
  
  y+= speed;
  if(y>height){
  	gameScreen =2
  }
  if(y>height-10 && x>mouseX-20 && x<mouseX+20){
  	y=-20
    speed+=0.5
    score+= 10
  }
	if(y==-20){
  	pickRandom();
  }
  
  if (score==80){
    gameScreen=3
  }
  
}

function pickRandom(){
  //for the location where the ball drops from at the top
  //this will be random
  x= random(20,width-20)
}

function lose(){ 
  //designing the screen that appears when the player loses
  background('#FFBFA9')
  textAlign(CENTER);
  textSize(25)
  textStyle(BOLD)
  fill('#FF0000')
		text('YOU LOST!', width / 2, height / 2)
  textSize(15)
  fill(0)
  textStyle(NORMAL)
  	text("Score = " + score, width / 2, height / 2 + 45)
		text('Press "enter" to restart', width / 2, height / 2 + 65);
}

function win(){ 
  // designing the screen that appears when the player wins
  background('#FFBFA9')
  fill('#038209')
  textAlign(CENTER);
  textStyle(BOLD)
  textSize(25)
  text('YOU WON!', width / 2, height / 2)
  textSize(15)
  fill(0)
  textStyle(NORMAL)
  text("Score = " + score, width / 2, height / 2 + 45)
  text('Press "enter" to play again', width / 2, height / 2 + 65);
}

function keyPressed(){ 
  // adding key codes to navigate the screens
  if(keyCode==32){
  	gameScreen=1
  }else if(keyCode==13){
  	gameScreen=0
  }else if (keyCode==13){
    gameScreen=0
  }
}

function reset(){ //for resetting when the game restarts
  score=0;
  speed=2;
  y=-20;
}