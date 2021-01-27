
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var superman,groundObject, launcherObject;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b12,b13;
var world;
//var r;

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	superman=new Superman(300,350,30); 
  b1=new Rock(850,300,30);
  b2=new Rock(850,350,30);
	b3=new Rock(850,400,30);
	b4=new Rock(850,425,30);
	b5=new Rock(850,475,30);
	b6=new Rock(850,525,30);
	b7=new Rock(800,280,30);
	b8=new Rock(800,200,30);
	b9=new Rock(800,280,30);
 b10=new Rock(800,250,30);
 b11=new Rock(800,475,30);
 b12=new Rock(800,525,30);
 monster=new Monster(1150,150,300,300)
  groundObject=new ground(500,550,1000,10);
  groundObject2=new ground(1150,305,300,10);
	launcherObject=new launcher(superman.body,{x:300,y:350})
  
	Engine.run(engine);
 
}

function draw() {

  background("skyblue");
  textSize(30);
  fill('purple');
  textFont("Broadway");
  text("Press Space to get a second Chance to Play!!",50 ,50);
  
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  superman.display();
  monster.display();
  groundObject.display();
  groundObject2.display();
  launcherObject.display();

  detectollision(superman,b1);
  detectollision(superman,b2);
  detectollision(superman,b3);
  detectollision(superman,b4);
  detectollision(superman,b5);
  detectollision(superman,b6);
  detectollision(superman,b7);
  detectollision(superman,b8);
  detectollision(superman,b9);
  detectollision(superman,b10);
  detectollision(superman,b11);
  detectollision(superman,b12);
}

function mouseDragged()
{
	Matter.Body.setPosition(superman.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
    
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(superman.body, {x:300, y:350}) 
	  launcherObject.attach(superman.body);
	}
  }

  function detectollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if (distance<=lmango.r+lstone.r)
 {
   Matter.Body.setStatic(lmango.body , false);
 } 
}