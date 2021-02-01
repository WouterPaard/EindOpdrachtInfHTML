var screen = 0;

function setup() {
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
}

function startScreen(){
		background(96, 157, 255)
		fill(255)
		textAlign(CENTER);
		text('WELCOME TO MY CATCHING GAME', width / 2, height / 2)
		text('click to start', width / 2, height / 2 + 20);
		reset();
}