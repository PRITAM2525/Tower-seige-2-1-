const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12, block13, block14;
var block15, block16, block17, block18, block19, block20, block21, block22;

var ground1, ground2, ground3;

var chain;
var hex;
var ball;
var hexImg;

function preload() {

  hexImg = loadImage("hexagon (1).png");

}

function setup() {

  createCanvas(1100,500);
  engine = Engine.create();
  world = engine.world;

  
  strokeWeight(2);

  block1 = new Block(600, 260, 50,50);
  block2 = new Block(570, 260, 50,50);
  block3 = new Block(540, 260, 50,50);
  block4 = new Block(630, 260, 50,50);
  block5 = new Block(660, 260, 50,50);
  block6 = new Block(585, 220, 50,50);
  block7 = new Block(555, 220,50,50);
  block8 = new Block(615, 220, 50,50);
  block9 = new Block(645, 220, 50,50);
  bolck10 = new Block(600, 170, 50,50);
  block11 = new Block(570, 180, 50,50);
  block12 = new Block(630, 180,50,50);
  block13 = new Block(600, 140,50,50);
  block14 = new Block(900, 170, 50,50);
  block15 = new Block(930, 170, 50,50);
  block16 = new Block(870, 170, 50,50);
  block17 = new Block(840, 170, 50,50);
  block18 = new Block(960, 170, 50,50);
  block19 = new Block(900, 140, 50,50);
  block20 = new Block(930, 140,50,50);
  block21 = new Block(870, 140, 50,50);
  block22 = new Block(900, 110, 50,50);

  ground1 = new Ground(600,285,200,10);
  ground2 = new Ground(900, 195, 200, 10);
  ground3 = new Ground(750, 500, 1500, 20);

  hex = new Hex(500, 190, 30, 30);

  ball = Bodies.circle(100, 200, 20);
  World.add(world, ball);

  chain = new Chain(this.ball,{x:170, y:400});

}

function draw() {

  background(rgb(0,90,90));

  Engine.update(engine);

  

  fill(rgb(135, 205, 236));
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  fill("lightBlue");
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  fill(rgb(140,140,225));
  bolck10.display();
  block11.display();
  block12.display();

  fill(rgb(170,190,225));
  block13.display();

  fill("lime");
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  fill("lightGreen");
  block19.display();
  block20.display();
  block21.display();

  fill("green");
  block22.display();

  ground1.display();
  ground2.display();
  ground3.display();

  imageMode(CENTER);
  image(hexImg, ball.position.x, ball.position.y, 50, 45);

  chain.display();

}


function mouseDragged() {

  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});

}


function mouseReleased() {

  chain.fly();

}


function keyPressed() {

	if(keyCode === 32) {
    console.log("attached");
		chain.attach(hex.body);
  }
  
}