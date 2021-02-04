var screen = 0;
let bg;
let oranje;

function setup() {
  oranje = color(246, 178, 107);
  bg = loadImage('image/BackgroundMenu.png');
  createCanvas(600, 400);
}

function draw() {
	if(screen == 0){
    startScreen()
  }else if(screen == 1){
  	gameOn()
  }else if(screen==2){
  	endScreen()
  }
}

function startScreen(){
    background(bg); //zorgt voor achtergrond plaatje

    fill(oranje);
    noStroke();
    if ((mouseX > width/2-100) && (mouseX < width/2+100) && (mouseY > height/2-60) && (mouseY < height/2-10)){
      fill(150);
    }
    else{
      fill(oranje)
    }
    rect(width/2 -100,height/2 - 60,200,50,10)
    
    if ((mouseX > width/2-100) && (mouseX < width/2+100) && (mouseY > height/2) && (mouseY < height/2+50)){
      fill(150);
    }
    else{
      fill(oranje)
    }
    rect(width/2 -100,height/2,200,50,10) //zorgt voor die oranje knoppen

    textAlign(CENTER)
    textSize(25)
    fill(0)
		text('HIGHSCORES', width / 2, height / 2 + 35);
		text('START', width/2,height/2 -25)
}

function gameOn(){
		background(0, 0, 0)
		fill(255)
		textAlign(CENTER);
		text('Hier is t spel', width / 2, height / 2)
		text('click to start', width / 2, height / 2 + 20);
}



function mousePressed(){
	if(screen==0){
  	screen=1
  }
}