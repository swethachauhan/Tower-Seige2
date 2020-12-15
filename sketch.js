const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform1,platform2;

function preload() {
    polygonImage=loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    polygon=Bodies.circle(100,250,20,{density:1.5,restitution:0.5});
    World.add(world,polygon);
    sling=new SlingShot(polygon,{x:100,y:200});


    platform1 = new Ground(450,300,250,10);
    platform2=new Ground(800,250,200,10);
    box1=new Box(450,150,30,40);
    box2=new Box(450,190,30,40);
    box3=new Box(450,230,30,40);
    box4=new Box(450,250,30,40);
    box5=new Box(480,190,30,40);
    box6=new Box(480,230,30,40);
    box7=new Box(480,250,30,40);
    box8=new Box(420,190,30,40);
    box9=new Box(420,230,30,40);
    box10=new Box(420,250,30,40);
    box11=new Box(390,230,30,40);
    box12=new Box(390,250,30,40);
    box13=new Box(510,230,30,40);
    box14=new Box(510,250,30,40);
    box15=new Box(540,280,30,40);
    box16=new Box(360,280,30,40);

    //box21=new Box(800,100,30,40);
    box22=new Box(800,140,30,40);
    box23=new Box(800,180,30,40);
    box24=new Box(800,200,30,40);
    //box25=new Box(830,140,30,40);
    box26=new Box(830,180,30,40);
    box27=new Box(830,200,30,40);
   // box28=new Box(770,140,30,40);
    box29=new Box(770,180,30,40);
    box210=new Box(770,200,30,40);
    //box211=new Box(740,180,30,40);
    box212=new Box(740,220,30,40);
    //box213=new Box(860,180,30,40);
    box214=new Box(860,220,30,40);
   // box215=new Box(890,200,30,40);
    //box216=new Box(710,200,30,40);

    

}

function draw(){
    background(255);
    Engine.update(engine);
    platform1.display();
    platform2.display();
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

   // box21.display();
    box22.display();
    box23.display();
    box24.display();
    //box25.display();
    box26.display();
    box27.display();
   // box28.display();
    box29.display();
    box210.display();
    //box211.display();
    box212.display();
   // box213.display();
    box214.display();
    //box215.display();
    //box216.display();

    imageMode(CENTER);
    image(polygonImage,polygon.position.x,polygon.position.y,50,50);

    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
   sling.fly();
}

function keyPressed(){
    if(keyCode===32){
        Matter.Body.setPosition(polygon,{x:100,y:250});
        sling.attach(polygon);
    }
}
