const World= Matter.World
const Engine= Matter.Engine
const Bodies= Matter.Bodies
const Body= Matter.Body
const Constraint= Matter.Constraint

var hero1


function preload() {
//preload the images here
backImage= loadImage("Sprites/GamingBackground.png")

}

function setup() {
  createCanvas(1500, 600)
  // create sprites here
  engine= Engine.create()
  world= engine.world

  ground1= new ground(450, 490, 900, 20);

b1= new block(800, 450, 40, 40);
b2= new block(800, 400, 40, 40);
b3= new block(800, 350, 40, 40);
b4= new block(800, 300, 40, 40);
b5= new block(800, 250, 40, 40);

b6= new block(700, 450, 40, 40);
b7= new block(700, 400, 40, 40);
b8= new block(700, 350, 40, 40);
b9= new block(700, 300, 40, 40);
b10= new block(700, 250, 40, 40);

b11= new block(600, 450, 40, 40);
b12= new block(600, 400, 40, 40);
b13= new block(600, 350, 40, 40);
b14= new block(600, 300, 40, 40);
b15= new block(600, 250, 40, 40);

hero1= new Hero(400, 400, 100)

rope1= new string(hero1.body, {x:400, y:100})


//render function 
	var render = Matter.Render.create({
		 element: document.body,
		  engine: engine,
		   options: {
				width: 1500,
				 height: 600,
				  wireframes: false }
				 });
Matter.Render.run(render)

	//Engine.run(engine);
}

function draw() {
  background(backImage)
  Engine.update(engine)

  ground1.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();

  hero1.display()

  rope1.display()

}

function mouseDragged() {

  Matter.Body.setPosition(hero1.body, {x:mouseX, y:mouseY});



}

