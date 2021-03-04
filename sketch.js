
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,hammer,stone,rubber,sand1,sand2,sand3,sand4,sand5,sand6,iron;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  ground=new Ground(400,675,1000,10)

	hammer=new Hammer(400,350,100,50)
	stone=new Stone(350,650,100,100)
	iron=new Iron(470,650,40,40)
	rubber=new Rubber(700,100,20,5)
  sand1=new Sand(360,650,1,1)
  sand2=new Sand(380,650,1,1)
  sand3=new Sand(400,650,1,1)
  sand4=new Sand(420,650,1,1)
  sand5=new Sand(440,650,1,1)
  sand6=new Sand(465,650,1,1)

	Engine.run(engine);

	


}


function draw() {
  rectMode(CENTER);
  background(225);

  ground.display();
  hammer.display();
  stone.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  iron.display();
  rubber.display();
  drawSprites();
 
}



