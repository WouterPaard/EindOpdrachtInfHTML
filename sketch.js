var screen = 0;
let bg;
let logo;
let oranje;

function setup() {
  oranje = color(246, 178, 107);
  bg = loadImage('image/BackgroundMenu.png');
  logo = loadImage('image/logo.png')
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
  else if(screen==3){
    highScoreScreen()
  }
}

function startScreen(){
    background(bg); //zorgt voor achtergrond plaatje
    image(logo, width/2 - 75, 15, 150, 120)
    noStroke();
    if ((mouseX > width/2-100) && (mouseX < width/2+100) && (mouseY > height/2-60) && (mouseY < height/2-10)){
      fill(223, 130, 22);
      rect(width/2 -100,height/2 - 60,200,50,10)
      cursor("pointer")
      fill(oranje)
      rect(width/2 -100,height/2,200,50,10) //zorgt voor die oranje knoppen
      if(mouseIsPressed){
        screen = 1;
      }

    }
    else if((mouseX > width/2-100) && (mouseX < width/2+100) && (mouseY > height/2) && (mouseY < height/2+50)){
      fill(223, 130, 22);
      rect(width/2 -100,height/2,200,50,10) //zorgt voor die oranje knoppen
      fill(oranje)
      rect(width/2 -100,height/2 - 60,200,50,10)     
      cursor("pointer")
      if(mouseIsPressed){
        screen = 3;
      }
    }
    else{
      fill(oranje)
      rect(width/2 -100,height/2 - 60,200,50,10)
      rect(width/2 -100,height/2,200,50,10) //zorgt voor die oranje knoppen
      cursor()
    }

    /*
    if ((mouseX > width/2-100) && (mouseX < width/2+100) && (mouseY > height/2) && (mouseY < height/2+50)){
      fill(223, 130, 22);
    rect(width/2 -100,height/2,200,50,10) //zorgt voor die oranje knoppen
      cursor("pointer")
    }
    else{
      fill(oranje)
    rect(width/2 -100,height/2,200,50,10) //zorgt voor die oranje knoppen
      cursor()
    }
*/

    textAlign(CENTER)
    textSize(25)
    fill(0)
		text('HIGHSCORES', width / 2, height / 2 + 35);
		text('START', width/2,height/2 -25)
}
		
function gameOn () {
  background(bg);
  stroke(255);
  noFill();

  strokeWeight(5) ;
  point(50, 400);

  point(100, 300);
  point(mouseX,mouseY);
  point(600, 370);

 strokeWeight(2) ;
  beginShape();
  curveVertex(50, 400);
  curveVertex(100, 300); 
  curveVertex(mouseX, mouseY); 
  curveVertex(600, 370);

  endShape();
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