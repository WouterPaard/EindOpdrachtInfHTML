var screen = 0;
var schuif = 0;
var score = 0;
var mouseWasPressed = false;



function preload() {
  oranje = color(246, 178, 107);
  bg = loadImage('image/AchtergrondGame.png');
  logo = loadImage('image/logo.png');
  relschopperimg = loadImage("image/relschopper.png");
  relProjectielimg = loadImage("image/RELprojectiel.png");
  ggdMedewerkerimg = loadImage("image/ggdMedewerker.png");
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
  image(bg, -schuif, 0, 2400, 400);
  relschopper();
  ggdMedewerker();
  if (gameFase == 1) {
    cursor("pointer");
    stroke(255);
    if (mouseIsPressed) {
      strokeWeight(dist(mouseX, mouseY, 90, 260) / 15)
      line(mouseX, mouseY, 90, 260);
      mouseWasPressed = true;
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

    schuif = schuif + (550 - schuif)/20;
    if (round(schuif) == 550){
      gameFase = 4
      xKracht = -random(70,100);
      yKracht = random(70,100);
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
    schuif = schuif -schuif/20;
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