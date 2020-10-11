const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var box,box2;
var G

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
box= new Box(200,300,20,20)
box2= new Box(210,100,20,20)
G=new Ground(200,390,400,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    box.display()
    box2.display()
    G.display(0)
}