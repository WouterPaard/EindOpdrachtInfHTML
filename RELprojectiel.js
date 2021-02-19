function relProjectiel(xKracht, yKracht){
  herhaling = herhaling + 1
  xSnelheid = xKracht/6 - herhaling*xSnelheid/130
  ySnelheid = yKracht/6 - herhaling/6
  xPositie = 70 + xSnelheid*herhaling
  yPositie = 230 - ySnelheid*herhaling

  image(relProjectielimg, xPositie, yPositie, relProjectielimg.width /6, relProjectielimg.height /6)
}