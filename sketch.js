
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var  dustbinImg, ballImg, ground;
function preload()
{
  dustbinImg = loadImage("dustbin.png");
  ballImg = loadImage("paper.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   
   ground = createSprite(400,645,800,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225,255,255);
  
  imageMode(CENTER);
  image(ballImg, 100, 606, 100, 100);
  
  imageMode(CENTER);
  image(dustbinImg, 700, 550, 140, 180);

  drawSprites();
 
}



