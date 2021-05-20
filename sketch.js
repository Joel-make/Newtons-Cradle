
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;
var bg;
var gameState = 0;
var START =0;
var PLAY =1;
var END = 2;

function preload()
{
  bg=loadImage("background.jpg");
}
function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(400,180,330,20);
	bob1 = new bob(320,455,40)
	bob2 = new bob(360,455,40)
	bob3 = new bob(400,455,40)
	bob4 = new bob(440,455,40)
	bob5 = new bob(480,455,40)

	rope1=new rope(bob1.body,roofObject.body,-80, 0)
	rope2=new rope(bob2.body,roofObject.body,-40, 0)
	rope3=new rope(bob3.body,roofObject.body,0, 0)
	rope4=new rope(bob4.body,roofObject.body,40, 0)
	rope5=new rope(bob5.body,roofObject.body,80, 0)
	Engine.run(engine);
	
  newton1 = new Newton(100,90,400, 200)
  note1 = new Note(290,100,250,150)
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  if(gameState===0)
  {
    push();
    strokeWeight(10)
    stroke("darkblue")
    fill("silver")
    textSize(60)
    textFont("Monotype Corsiva")
    text("NEWTON'S CRADLE",width/4,height/2);
    pop();

    stroke("black");
    fill("black")
    textSize(20);
    textFont("Lucida Calligraphy");
    text("Press DOWN ARROW key to start ",width/3.5,height/1.73);
  }
  if(keyCode===DOWN_ARROW && gameState===0)
  {
     gameState=1;
  }
  if(keyCode===UP_ARROW)
  {
	  Matter.Body.applyForce(bob1.body,bob1.body.position,
	   {x:-35,y:-31.5})
      
     gameState=2;
  }
  if(gameState===1 )
  {
    newton1.display();
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
  roofObject.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  note1.display();

  push();
  strokeWeight(25);
  stroke(200);
  line(400-152,190,200,450);
  line(400+152,190,600,450);
  pop();

  fill("black")
  textSize(15);
  text("Press the UP ARROW key",190,70);
  text("to launch and release the ball",190,90);

  stroke("black");
  line(400-165,190,185,450);
  line(400-138,190,213,450);
  line(400+165,190,613,450);
  line(400+138,190,585,450);
  strokeWeight(25);
  line(185,460,213,460);
  line(613,460,585,460);
  }
  if( gameState===2)
  {
  newton1.body.position.x=1000;
  note1.body.position.x=1100;

  keyCode = LEFT_ARROW;

  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
  roofObject.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  push();
  strokeWeight(25);
  stroke(200);
  line(400-152,190,200,450);
  line(400+152,190,600,450);
  pop();


  stroke("black");
  line(400-165,190,185,450);
  line(400-138,190,213,450);
  line(400+165,190,613,450);
  line(400+138,190,585,450);
  strokeWeight(25);
  line(185,460,213,460);
  line(613,460,585,460);
  }
}






