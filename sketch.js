const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}
var paper,wall1,wall2,wall3,ground;
function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	wall1 = new Box(600,365,150,20);
	wall2 = new Box(525,325,20,100);
	wall3 = new Box(675,325,20,100);
	paper = new Paper(100,100,50);
	ground = Bodies.rectangle(width/2,height,800,50,{isStatic: true});
	World.add(world,ground);

	Engine.run(engine);  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  paper.display();
  rectMode(CENTER);
  fill(255);
  rect(ground.position.x,ground.position.y,800,50);
  wall1.display();
  wall2.display();
  wall3.display();
}
function keyPressed(){
	if(keyCode===UP_ARROW)
		Body.applyForce(paper.body,wall1.body.position,{
			x: 50.25,
			y: -93.25
		});
}
