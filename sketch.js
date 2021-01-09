const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup(){

    createCanvas(1600,600);
    engine = Engine.create();
    world = engine.world;
       
    ground1 = new Ground(660,500,320,10);
    ground2 = new Ground(1083,400,240,10);
    ground3 = new Ground(width/2,height-10,width,50);

    //Layer 1 Ground 1
    
    block1 = new Block(540,470,40,50);
    block2 = new Block(580,470,40,50);
    block3 = new Block(620,470,40,50);
    block4 = new Block(660,470,40,50);
    block5 = new Block(700,470,40,50);
    block6 = new Block(740,470,40,50);
    block7 = new Block(780,470,40,50);

    //Layer 2 Ground 1
    block8 = new Block(580,410,40,50);
    block9 = new Block(620,410,40,50);
    block10 = new Block(660,410,40,50);
    block11 = new Block(700,410,40,50);
    block12 = new Block(740,410,40,50);

    //Layer 3 Ground 1
    block13 = new Block(620,350,40,50);
    block14 = new Block(660,350,40,50);
    block15 = new Block(700,350,40,50);

    //Layer 4 Ground 1
    block16 = new Block(660,290,40,50);

    //Layer 1 Ground 2
    block17 = new Block(1000,380,40,50);
    block18 = new Block(1040,380,40,50);
    block19 = new Block(1080,380,40,50);
    block20 = new Block(1120,380,40,50);
    block21 = new Block(1160,380,40,50);

    //Layer 2 Ground 2
    block22 = new Block(1040,320,40,50);
    block23 = new Block(1080,320,40,50);
    block24 = new Block(1120,320,40,50);

    //Layer 3 Ground 2
    block25 = new Block(1080,260,40,50);

    polygon = new Polygon(150,300,80,80);

    launcher = new Launcher(polygon.body, {x:200,y:300});

}

function draw(){

    background('#382c2c');
    Engine.update(engine);

    ground1.display();
    ground2.display();
    ground3.display();
    fill('#87ceea');
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill('#ffc0cb');
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill('#3fe0d0');
    block13.display();
    block14.display();
    block15.display();
    fill('#808080');
    block16.display();
    fill('#87ceea');
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    fill('#ffc0cb');
    block22.display();
    block23.display();
    block24.display();
    fill('#3fe0d0');
    block25.display();
    launcher.display();
    polygon.display();
    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x:mouseX,y:mouseY});
}
function mouseReleased(){
    launcher.fly();
}
function keyPressed(){
    if(keyCode == 32){
        launcher.attach(polygon.body);
    }
}