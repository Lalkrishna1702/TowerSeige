const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score = 0;
var bgImage;

function setup(){

    createCanvas(1600,600);
    engine = Engine.create();
    world = engine.world;
       
    ground1 = new Ground(660,500,320,10);
    ground2 = new Ground(1083,400,240,10);
    ground3 = new Ground(width/2,height-10,width,50);

    //Layer 1 Ground 1
    
    block1 = new Block1(540,470,40,50);
    block2 = new Block1(580,470,40,50);
    block3 = new Block1(620,470,40,50);
    block4 = new Block1(660,470,40,50);
    block5 = new Block1(700,470,40,50);
    block6 = new Block1(740,470,40,50);
    block7 = new Block1(780,470,40,50);

    //Layer 2 Ground 1
    block8 = new Block2(580,410,40,50);
    block9 = new Block2(620,410,40,50);
    block10 = new Block2(660,410,40,50);
    block11 = new Block2(700,410,40,50);
    block12 = new Block2(740,410,40,50);

    //Layer 3 Ground 1
    block13 = new Block3(620,360,40,50);
    block14 = new Block3(660,360,40,50);
    block15 = new Block3(700,360,40,50);

    //Layer 4 Ground 1
    block16 = new Block4(660,310,40,50);

    //Layer 1 Ground 2
    block17 = new Block1(1001,380,40,50);
    block18 = new Block1(1040,380,40,50);
    block19 = new Block1(1081,380,40,50);
    block20 = new Block1(1120,380,40,50);
    block21 = new Block1(1159,380,40,50);

    //Layer 2 Ground 2
    block22 = new Block2(1040,320,40,50);
    block23 = new Block2(1080,320,40,50);
    block24 = new Block2(1120,320,40,50);

    //Layer 3 Ground 2
    block25 = new Block3(1080,260,40,50);

    polygon = new Polygon(200,300,80,80);

    launcher = new Launcher(polygon.body, {x:200,y:300});
    
    getTime();
}

function draw(){
    
    if(bgImage)
    background(bgImage);
    Engine.update(engine);

    fill("red");
    text("SCORE: "+ score,750,40);

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

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();
    
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
async function getTime(){

    var response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata');
    var responseJson = await response.json();
    var dt = responseJson.datetime;
    var hour = dt.slice(11,13);
    if(hour >= 06 && hour <= 18){
        bg = "day.jpg"
    }else{
        bg = "night.jpg";
    }
    bgImage = loadImage(bg);
}