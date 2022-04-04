
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine, world;
var block1, block2, block3, plane;

function preload()
{
	
}

function setup() {
	createCanvas(800, 620);


	engine = Engine.create();
	world = engine.world;

	//Crie os Propriedades Aqui.
	var plane_options={
		isStatic: true
	}
	var block1_options = {
		restitution:0.5,
		friction:0.02,
		frictionAir:0.7
		}

		var block2_options = {
		restitution:0.1,
		friction:0.01,
		frictionAir:2
		}

		var block3_options = {
		restitution:0,
		friction:1,
		frictionAir:1
		}

	//Crie corpos aqui.
	plane = Bodies.rectangle(350, 500, 400, 20, plane_options);
	World.add(world, plane);

	block1 = Bodies.circle(220,10,10,block1_options);
    World.add(world, block1);

	block2 = Bodies.rectangle(500,50,10,10,block2_options);
    World.add(world, block2);

	block3 = Bodies.rectangle(350,50,10,10,block3_options);
    World.add(world, block3);

	Engine.run(engine);
	rectMode(CENTER);
	ellipseMode(RADIUS);
  
}


function draw() {
  Engine.run(engine);
  background(100);
  Engine.run(engine);
  rect(plane.position.x, plane.position.y, 1000, 45);
  fill(131,111,255)
  rect(block2.position.x,block2.position.y, 110, 40);
  rect(block3.position.x,block3.position.y, 40, 40);
  ellipse(block1.position.x, block1.position.y, 30);
  
  drawSprites();
 
}



