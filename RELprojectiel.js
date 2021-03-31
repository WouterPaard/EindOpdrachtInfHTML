function relProjectiel(xKracht, yKracht) {
  herhaling = herhaling + 1
  xSnelheid = xKracht / 6 - herhaling * xSnelheid / 100
  ySnelheid = yKracht / 6 - herhaling / 5 - herhaling * ySnelheid / 100
  xPositie = 70 + 0.5 * xSnelheid * herhaling
  schuif = xSnelheid * herhaling
  yPositie = 230 - ySnelheid * herhaling
  image(relProjectielimg, xPositie, yPositie, relProjectielimg.width / 6, relProjectielimg.height / 6)
  if ((yPositie > 320) || (schuif > 850)) {
    gameFase = 3;
  } else if ((yPositie > 230) && (xPositie > 1000 - schuif) && (xPositie < 1060 - schuif)) {
    console.log("raakt die papi")
    gameFase = 3;
    score = score + 1;
    life = life ;
    if (!oof.isPlaying()) {
      oof.play();
    }
  }
}