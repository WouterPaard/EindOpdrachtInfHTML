function startscherm() {
  //background(bg);
  image(logo, width / 2 - 75, 15, 150, 120)

  noStroke();
  if ((mouseX > width / 2 - 100) && (mouseX < width / 2 + 100) && (mouseY > height / 2 - 60) && (mouseY < height / 2 - 10)) {
    fill(223, 130, 22);
    rect(width / 2 - 100, height / 2 - 60, 200, 50, 10)
    cursor("pointer")
    fill(oranje)
    rect(width / 2 - 100, height / 2, 200, 50, 10) //zorgt voor die oranje knoppen
    if (!mouseIsPressed && mouseWasPressed) {
      mouseWasPressed = false;
      gameFase = 1;
      if (!knop.isPlaying()) {
      knop.play();}
      life = beginlevens
      score = 0
      screen = 1
      cursor()

    } else if (mouseIsPressed) {
      mouseWasPressed = true;
    }

  }
  else if ((mouseX > width / 2 - 100) && (mouseX < width / 2 + 100) && (mouseY > height / 2) && (mouseY < height / 2 + 50)) {
    fill(223, 130, 22);
    rect(width / 2 - 100, height / 2, 200, 50, 10) //zorgt voor die oranje knoppen
    fill(oranje)
    rect(width / 2 - 100, height / 2 - 60, 200, 50, 10)
    cursor("pointer")
    if (!mouseIsPressed && mouseWasPressed) {
      mouseWasPressed = false;
      screen = 3;
      if (!knop.isPlaying()) {
      knop.play();}
    } else if (mouseIsPressed) {
      mouseWasPressed = true;
    }

  }
  else {
    mouseWasPressed = false
    fill(oranje)
    rect(width / 2 - 100, height / 2 - 60, 200, 50, 10)
    rect(width / 2 - 100, height / 2, 200, 50, 10) //zorgt voor die oranje knoppen
    cursor()
  }

  textAlign(CENTER)
  textSize(25)
  fill(0)
  text('HIGHSCORES', width / 2, height / 2 + 35);
  triangle(230, 155, 230, 175, 250, 165)

  text('START', width / 2, height / 2 - 25)
}
