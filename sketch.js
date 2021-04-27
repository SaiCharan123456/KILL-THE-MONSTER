const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;
var bgImg;

function preload() {
  getTime();
}

function setup() {
  createCanvas(1365, 655);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,500,250);
  rope = new Rope(hero.body, { x: 400, y: 250 });
  monster = new Monster(1100,550,300);

  box1 = new Box(700,100,50,50);
  box2 = new Box(700,100,50,50);
  box3 = new Box(700,100,50,50);
  box4 = new Box(700,100,50,50);
  box5 = new Box(700,100,50,50);
  box6 = new Box(700,100,50,50);
  box7 = new Box(700,100,50,50);
  box8 = new Box(700,100,50,50);
  box9 = new Box(700,100,50,50);
  box10 = new Box(700,100,50,50);

    box11 = new Box(800,100,50,50);
    box12 = new Box(800,100,50,50);
    box13 = new Box(800,100,50,50);
    box14 = new Box(800,100,50,50);
    box15 = new Box(800,100,50,50);
    box16 = new Box(800,100,50,50);
    box17 = new Box(800,100,50,50);
    box18 = new Box(800,100,50,50);
    box19 = new Box(800,100,50,50);
    box20 = new Box(800,100,50,50);

    box21 = new Box(900,100,50,50);
    box22 = new Box(900,100,50,50);
    box23 = new Box(900,100,50,50);
    box24 = new Box(900,100,50,50);
    box25 = new Box(900,100,50,50);
    box26 = new Box(900,100,50,50);
    box27 = new Box(900,100,50,50);
    box28 = new Box(900,100,50,50);
    box29 = new Box(900,100,50,50);
    box30 = new Box(900,100,50,50);

}

function draw() {
  if(bgImg){
    background(bgImg);
}
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();

  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();

  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  rope.fly();
 // gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
      //bird.trajectory=[];
     Matter.Body.setPosition(hero.body,{x:500,y:250});
      rope.attach(hero.body);
    
  }
}

async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJson=await response.json();
  console.log(responseJson);
  var dateTime = responseJson.datetime;
  console.log(dateTime);
  var hour =dateTime.slice(11,13);
  console.log(hour);
  if(hour >= 6 && hour <= 19){
  bg = "gamingbackground2.png";
  }
  else{
      bg = "gamingbackground1.jpg";
  }
  bgImg = loadImage(bg);
  }