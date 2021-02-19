var screen = 0;
var schuif = 0;
var mouseWasPressed = false;



function preload() {
  oranje = color(246, 178, 107);
  bg = loadImage('image/BackgroundMenu.png');
  logo = loadImage('image/logo.png');
  relschopperimg = loadImage("image/relschopper.png");
  relProjectielimg = loadImage("image/RELprojectiel.png");
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
  if (gameFase == 1) {
    cursor();
    stroke(255);
    if (mouseIsPressed) {
      strokeWeight(dist(mouseX,mouseY,90,260)/15)
      line(mouseX,mouseY,90,260);
      mouseWasPressed = true;
    } else if (mouseWasPressed){
      xKracht = abs(mouseX - 90);
      yKracht = abs(mouseY - 260);
      herhaling = 0;
      xSnelheid = 0;
      gameFase = 2;
    }
  }
  if (gameFase == 2){
    relProjectiel(xKracht, yKracht);
  }
}

function highScoreScreen(){
  background(0, 0, 0)
		fill(255)
		textAlign(CENTER);
		text('scoreboard', width / 2, height / 2)
		text('komt hierzo', width / 2, height / 2 + 20);
}

