var screen = 0;
var schuif = 0;
var score = 0;
var mouseWasPressed = false;
let song;
let muziekAan = true
var oof;


function preload() {
  oranje = color(246, 178, 107);
  bg = loadImage('image/AchtergrondGame.png');
  logo = loadImage('image/logo.png');
  relschopperimg = loadImage("image/relschopper.png");
  relProjectielimg = loadImage("image/RELprojectiel.png");
  ggdMedewerkerimg = loadImage("image/ggdMedewerker.png");
  geluidAan = loadImage("image/geluidAan.png");
  geluidUit = loadImage("image/geluidUit.png");

  song = loadSound('sounds/SoundsOfYourHeartbeat.mp3');
  oof= loadSound('sounds/oof.mp3');
}


function setup() {
  createCanvas(600, 400);
}



function draw() {
  image(bg, -schuif, 0, 1800, 400)
  if (screen == 0) {
    startscherm();
  } else if (screen == 1) {
    gameOn()
  } else if (screen == 2) {
    endScreen()
  }
  else if (screen == 3) {
    highScoreScreen()
  }
}

function gameOn() {
  muis = ""
  if (!song.isPlaying() && muziekAan) {
   song.play();
  } else if (song.isPlaying() && !muziekAan){
    song.stop()
  }

  
  image(bg, -schuif, 0, 2400, 400);
  image(geluidAan, 550, 8, 34, 34);
  relschopper();
  ggdMedewerker();
  noStroke();
  if (muziekAan) {
    image(geluidAan, 550, 8, 34, 34);    
  } else{
    image(geluidUit, 550, 8, 34, 34);   
  }
    if ((mouseX > 550) && (mouseX < 594) && (mouseY > 8) && (mouseY < 42)){
    muis = "pointer"
    image(geluidAan, 550, 8, 34, 34);
    if (!mouseIsPressed && mouseWasPressed) {
      mouseWasPressed = false;
      muziekAan = !muziekAan
    } else if (mouseIsPressed) {
      mouseWasPressed = true;
    }
  }
  if ((mouseX > 10) && (mouseX < 70) && (mouseY > 10) && (mouseY < 40)){
    muis = "pointer"
    fill(223, 130, 22);
    if (!mouseIsPressed && mouseWasPressed) {
      mouseWasPressed = false;
      screen = 0;
      schuif = 0;
      gameFase = 1
    } else if (mouseIsPressed) {
      mouseWasPressed = true;
    }
  }else {
    fill(oranje)
  }
  cursor(muis)
  rect(10, 10, 60, 30, 10)
  fill(oranje)
  rect(100, 10, 85, 30, 10)
  fill(0)
  textSize(15)
  text("MENU", 40,30)
  text("SCORE: "+ score, 140, 30)
  if (gameFase == 1) {
    stroke(255);
    if (mouseIsPressed) {
      strokeWeight(dist(mouseX, mouseY, 90, 260) / 15)
      line(mouseX, mouseY, 90, 260);
      mouseWasPressed = true;
//      song.play();
    } else if (mouseWasPressed) {
      mouseWasPressed = false
      xKracht = abs(mouseX - 90);
      yKracht = abs(mouseY - 260);
      herhaling = 0;
      xSnelheid = 0;
      ySnelheid = 0;
      xPositie = 70
      gameFase = 2;
      cursor();

    }
  }else if (gameFase == 2) {
    relProjectiel(xKracht, yKracht);

  } else if (gameFase == 3) {

    schuif = 550/20 + 19*schuif/20 // + (550 - schuif)/20;
    if (round(schuif) == 550){
      gameFase = 4
      xKracht = -random(70,105);
      yKracht = random(60,125);
      herhaling = 0;
      xSnelheid = 0;
      ySnelheid = 0;
      xPositie = 550
    }
  } else if (gameFase == 4) {
    ggdProjectiel(xKracht, yKracht)
    console.log("fase 4")
  }
  else if(gameFase == 5) {
    schuif = 19*schuif/20;
    if (round(schuif) == 0){
      gameFase = 1;
    }
  }
}

function highScoreScreen() {
  fill(0)
  image(bg, 0, 0, 600, 400)
  text('scoreboard:', width / 2, height / 2 + 35)
  text('komt hierzo', width / 2, height / 2 + 20);
  fill(oranje)
  rect(width / 2 - 100, height / 2 - 60, 200, 50, 10)
}