const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var GAMESTATE = "on sling"



function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
    /*var box = "mouse"
    console.log(box)
    box = 4
    console.log(box) 
    box = true
    console.log(box)
    var box6 
    console.log(box6)
    box6 = null
    console.log(box6)
    var box7 = [1,2,3,4,5,6,7,8,9,10,100]
    console.log(box7)
    var box8 = ["He is a good boy.",2,3,5,7,9,0,true,,null]
    console.log(box8)
    var box9 = [[1,2,3,5],12,["Mukesh",[56,true]]]
    console.log(box9)
    console.log(box9[2][0])
    box9.push("hello",8)
    console.log(box9)
    box9.pop()
    console.log(box9)*/
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if (GAMESTATE !== ("launch")) {
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});  
    }
    
}


function mouseReleased(){
    slingshot.fly();
    GAMESTATE = "launch"
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}