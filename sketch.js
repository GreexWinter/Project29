const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1;
var box1;
var polygon1;

function preload(){

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = World.create();

    ground1 = new Ground(495,300,300,10);
    ground2 = new Ground(900,225,300,10);

    box1 = new Box(335,310,40,60);

    polygon1 = new Polygon();

    //Engine.run(engine);
}

function draw(){
    background(0);

    Engine.update(engine);  

    box1.display();
    ground1.display();
    ground2.display();
    polygon1.display();
}