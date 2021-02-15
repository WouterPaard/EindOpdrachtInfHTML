var screen = 0;
var schuif = 0;


function preload() {
  oranje = color(246, 178, 107);
  bg = loadImage('image/BackgroundMenu.png');
  logo = loadImage('image/logo.png')
  relschopperimg = loadImage("image/relschopper.png");
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
	if(screen == 0){
    startscherm();
  }else if(screen == 1){
  	gameOn()
  }else if(screen==2){
  	endScreen()
  }
  else if(screen==3){
    highScoreScreen()
  }
}
		
function gameOn () {
  background(bg);
  relschopper();

}

function highScoreScreen(){
  background(0, 0, 0)
		fill(255)
		textAlign(CENTER);
		text('scoreboard', width / 2, height / 2)
		text('komt hierzo', width / 2, height / 2 + 20);
}


function mousePressed(){

}