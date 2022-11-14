let ball, floor, player;

//Setup funksjonen. Ting som skal gjøres en gang i starten
function setup() {
	new Canvas(400, 500);
	world.gravity.y = 10;

  //Lager spiller
  player = new Sprite()
  player.y = 50
  player.x = 50

  //Lager ball
	ball = new Sprite();
	ball.diameter = 50;
	ball.y = 30;

  //Lager gulv
	floor = new Sprite();
	floor.y = 495;
	floor.w = 380;
	floor.h = 5;
  floor.collider = 'static';
}

//Draw funksjonen, ting som skal gjøres for hvert nye bilde som "tegnes".
//FPS i spill er hvor ofte en slik funksjon klarer å kjøre.
function draw() {

  //Bevege spiller mot musen
  player.moveTowards(mouse)

  //Lager nye bokser for hvert bilde som tegnes
  new Sprite(40,50,10,10)
  new Sprite(370,50,10,10)

  clear();
}