function relProjectiel(xKracht, yKracht){
  herhaling = herhaling + 1
  xSnelheid = xKracht/6 - herhaling*xSnelheid/100
  ySnelheid = yKracht/6 - herhaling/5 -herhaling*ySnelheid/100
  
  xPositie = 70 + 0.5*xSnelheid*herhaling
  schuif = xSnelheid*herhaling
  yPositie = 230 - ySnelheid*herhaling
  image(relProjectielimg, xPositie, yPositie, relProjectielimg.width /6, relProjectielimg.height /6)
}