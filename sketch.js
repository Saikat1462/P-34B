const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg

function preload() {
  backgroundImg = loadImage("bg1.png");
}

function setup() {
  var canvas = createCanvas(1500,760);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,500,900,20);
  block1 = new Block(500,335,30,30);
  block2 = new Block(500,305,30,30);
  block3 = new Block(500,275,30,30);
  block4 = new Block(500,245,30,30);
  block5 = new Block(500,215,30,30);
  block6 = new Block(500,185,30,30);
  block7 = new Block(500,155,30,30);
  block8 = new Block(530,335,30,30);
  block9 = new Block(530,305,30,30);
  block10 = new Block(530,275,30,30);
  block11 = new Block(530,245,30,30);
  block12 = new Block(530,215,30,30);
  block13 = new Block(530,185,30,30);
  block14 = new Block(560,335,30,30);
  block15 = new Block(560,305,30,30);
  block16 = new Block(560,275,30,30);
  block17 = new Block(560,245,30,30);
  block18 = new Block(560,215,30,30);
  block19 = new Block(560,185,30,30);
  block20 = new Block(560,155,30,30);
  block21 = new Block(560,125,30,30);
  block22 = new Block(590,335,30,30);
  block23 = new Block(590,305,30,30);
  block24 = new Block(590,275,30,30);
  block25 = new Block(590,245,30,30);
  block26 = new Block(590,215,30,30);
  superhero = new Superhero(300,400,1) 
  slingshot = new Slingshot(superhero.body,{x:200, y:200})
  
  
  

}

function draw() {
  background(backgroundImg)
  Engine.update(engine);

  ground.display();
  fill("lightgreen");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  fill("red");
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  fill("black")
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  superhero.display()
  slingshot.display()

}

function mouseDragged(){
  Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingshot.fly()
}

