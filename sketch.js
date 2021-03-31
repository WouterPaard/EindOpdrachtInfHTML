var screen = 0;
var schuif = 0;
var mouseWasPressed = false;
let song;
let muziekAan = true
var oof;
var knipper = 0;
var gameover;
var knop;
var score = 0;
let highscore = localStorage.getItem('highscore');

function preload() {
  oranje = color(246, 178, 107);

  //Afbeeldingen
  bg = loadImage('image/AchtergrondGame.png');
  logo = loadImage('image/logo.png');
  relschopperimg = loadImage("image/relschopper.png");
  relProjectielimg = loadImage("image/RELprojectiel.png");
  ggdProjectielimg = loadImage("image/Vaccin1.png");
  ggdMedewerkerimg = loadImage("image/ggdMedewerker.png");
  geluidAan = loadImage("image/geluidAan2.png");
  geluidUit = loadImage("image/geluidUit2.png");
  hill = loadImage("image/hill.png")
  wolken = loadImage("image/LuchtMetWolken.png")

  //geluiden
  song = loadSound('sounds/SoundsOfYourHeartbeat.mp3');
  oof = loadSound('sounds/oof.mp3');
  gameover = loadSound('sounds/gameover.mp3')
  knop = loadSound('sounds/klik.mp3');
}


function setup() {
  createCanvas(600, 400);
}



function draw() {
  image(wolken, -0.3*schuif-350, 0, 1500, 183)
  image(hill, -schuif-350, 0, 1800, 400)
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
  else if (screen == 4) {
    gameOverScreen()
  }
}

function gameOn() {
  if (life < 1) {
    screen = 4;
    wit = true
  }


  muis = ""
  relschopper();
  ggdMedewerker();
  noStroke();
  if (muziekAan) {
    if (!song.isPlaying()) {
      song.play();
    }
  image(geluidAan, 550, 8, 34, 34);
  }
  else {
    song.pause();
    image(geluidUit, 550, 8, 34, 34);
  }



  if ((mouseX > 550) && (mouseX < 594) && (mouseY > 8) && (mouseY < 42)) {
    muis = "pointer"
    image(geluidAan, 550, 8, 34, 34);
    if (!mouseIsPressed && mouseWasPressed) {
      mouseWasPressed = false;
      muziekAan = !muziekAan
    } else if (mouseIsPressed) {
      mouseWasPressed = true;
    }
  }
  if ((mouseX > 10) && (mouseX < 70) && (mouseY > 10) && (mouseY < 40)) {
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
  } else {
    fill(oranje)
  }
  cursor(muis)
  rect(10, 10, 60, 30, 10)
  fill(oranje)
  rect(100, 10, 85, 30, 10)
  rect(200, 10, 90, 30, 10)
  fill(0)
  

  textSize(15)
  text("MENU", 40, 30)
  text("SCORE: " + score, 140, 30)
  text("LIVES: " + life, 240, 30)
  if (gameFase == 1) {
    stroke(255);
    if (mouseY > 280 && mouseX < 90) {
      strokeWeight(dist(mouseX, mouseY, 90, 260) / 15)
      line(mouseX, mouseY, 90, 260);
      if (mouseIsPressed) {
        mouseWasPressed = true;
      }
    }
    if (mouseWasPressed && mouseY > 280 && mouseX < 90) {
      mouseWasPressed = false
      xKracht = abs(mouseX - 90);
      yKracht = abs(mouseY - 260);
      herhaling = 0;
      xSnelheid = 0;
      ySnelheid = 0;
      xPositie = 70
      gameFase = 2;
    }
  } else if (gameFase == 2) {
    relProjectiel(xKracht, yKracht);

  } else if (gameFase == 3) {

    schuif = 550 / 20 + 19 * schuif / 20 // + (550 - schuif)/20;
    if (round(schuif) == 550) {
      gameFase = 4
      xKracht = -random(70, 105);
      yKracht = random(60, 125);
      herhaling = 0;
      xSnelheid = 0;
      ySnelheid = 0;
      xPositie = 550
    }
  } else if (gameFase == 4) {
    ggdProjectiel(xKracht, yKracht)
  }
  else if (gameFase == 5) {
    schuif = 19 * schuif / 20;
    if (round(schuif) == 0) {
      gameFase = 1;
    }
  }

}

function highScoreScreen() {

  if ((mouseX > 10) && (mouseX < 70) && (mouseY > 10) && (mouseY < 40)) {
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
} else {
  fill(oranje)
}
  rect(10, 10, 60, 30, 10)

  fill(oranje)
  rect(width / 2 - 150, height / 2 - 100, 300, 250, 10)
  rect(width / 2 - 100, height / 2 - 170, 200, 50, 10)
  fill(0)
  textSize(15)
  text("MENU", 40, 30)
  textAlign(CENTER)
  textSize(25)

  loadImage('image/BackgroundMenu.png');
  text('SCOREBOARD', width / 2, height / 2 - 140);
  if (score <= highscore) {
    fill(0)
    textSize(15)
    text("MENU", 40, 30)
    textAlign(CENTER)
    textSize(25)
    text('HIGHSCORE: ' + highscore, width / 2, height / 2 - 20); }
  else if (score > highscore) {
    fill(0)
    textSize(15)
    text("MENU", 40, 30)
    textAlign(CENTER)
    textSize(25)
    text('HIGHSCORE: ' + score, width / 2, height / 2 - 20); 
  }
  text('YOUR SCORE: ' + score, width / 2, height / 2 + 20); 
}




function gameOverScreen() {
  
 if (knipper > 40) {
    wit = !wit
    knipper = 0
    background(255, 255, 255)
    fill(0)
  } else if (wit) {
    knipper = knipper + 1;
    background(0, 0, 0)
    fill(255)

  } else {
    knipper = knipper + 1;
    background(255, 255, 255)
    fill(0)
  }
  textSize(35)
  text("GAME OVER", 300, 125)
  
  if (score > highscore) {
     localStorage.setItem('highscore', score);
 text('HIGHSCORE: ' + score, width / 2, height / 2 - 10 ); 
  text('YOUR SCORE: ' + score,width / 2, height / 2 + 40 );
  textSize(25)
  cursor("pointer")
  }
  else if (score <= highscore) {
      localStorage.setItem('highscore', score);
  text('HIGHSCORE: ' + highscore, width / 2, height / 2 - 10 ); 
  text('YOUR SCORE: ' + score,width / 2, height / 2 + 40 );
  textSize(25)
  cursor("pointer")
  }
  cursor("pointer")
  if (mouseIsPressed) {
    mouseWasPressed = true
  } else if (mouseWasPressed) {
    screen = 0;
    schuif = 0;
    mouseWasPressed = false
    if (muziekAan) {
      if (!song.isPlaying()) {
        song.play();
      }
    }
  }

}