const Engine= Matter.Engine; 
const World= Matter.World; 
const Bodies= Matter.Bodies; 
const Constraint= Matter.Constraint;


var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;
var block17, block18, block19, block20, block21, block22, block23, block24, block25;
var ground, ground2, ground3;
var polygon;
var slingshot;

function preload(){


}
function setup(){

    var canvas= createCanvas(1000, 800);
    
    engine= Engine.create();
    world= engine.world; 
    
    polygon= new Hexagon(200, 400);

    slingshot= new Slingshot(polygon.body, {x: 200, y: 300});
   
    block1= new Blocks(503, 568);
    block2= new Blocks(535, 568);
    block3= new Blocks(567, 568);
    block4= new Blocks(599, 568);
    block5= new Blocks(631, 568);
    block6= new Blocks(471, 568);
    block7= new Blocks(439, 568);

    block8= new Blocks(599, 528);
    block9= new Blocks(567, 528);
    block10= new Blocks(535, 528);
    block11= new Blocks(503, 528);
    block12= new Blocks(471, 528);

    block13= new Blocks(535, 487);
    block14= new Blocks(503, 487);
    block15= new Blocks(567, 487);

    block16= new Blocks(535, 446);

    block17= new Blocks(800, 268);
    block18= new Blocks(832, 268);
    block19= new Blocks(864, 268);
    block20= new Blocks(768, 268);
    block21= new Blocks(736, 268);

    block22= new Blocks(800, 226);
    block23= new Blocks(832, 226);
    block24= new Blocks(768, 226);

    block25= new Blocks(800, 184);

    ground= new Ground(500, 780, 1300, 20);
    ground2= new Ground(534, 600, 250, 20);
    ground3= new Ground(800, 300, 200, 20);

    


    Engine.run(engine);

}
function draw(){

    

    fill("green");

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    fill("yellow");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    fill("blue");
    block13.display();
    block14.display();
    block15.display();

    fill("pink");
    block16.display();

    fill("green");
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();

    fill("yellow");
    block22.display();
    block23.display();
    block24.display();

    fill("blue");
    block25.display();

    ground.display();
    ground2.display();
    ground3.display();

    slingshot.display();
    polygon.display();
    
}

function mouseDragged(){

    Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY});

}
function mouseReleased(){

    slingshot.fly();
}