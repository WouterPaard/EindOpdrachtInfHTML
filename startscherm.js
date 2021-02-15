function startscherm() {

  background(bg);
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

  textAlign(CENTER)
  textSize(25)
  fill(0)
  text('HIGHSCORES', width / 2, height / 2 + 35);
  text('START', width/2,height/2 -25)
  
}