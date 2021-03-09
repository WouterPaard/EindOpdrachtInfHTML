function ggdProjectiel(xKracht, yKracht){
  herhaling = herhaling + 1
  xSnelheid = xKracht/6 - herhaling*xSnelheid/100
  ySnelheid = yKracht/6 - herhaling/5 -herhaling*ySnelheid/100
  xPositie = 550 + 0.5*xSnelheid*herhaling
  schuif = 550 + xSnelheid*herhaling
  yPositie = 230 - ySnelheid*herhaling
  image(relProjectielimg, xPositie, yPositie, relProjectielimg.width /6, relProjectielimg.height /6)
  if (yPositie > 320) {
    console.log("lager dan 270")
    gameFase = 5;
  } else if ((yPositie > 210) && (xPositie > 70-schuif) && (xPositie < 130 - schuif)){
    console.log("raakt die papi")
    gameFase = 5;
    score = score - 1;
  }
}