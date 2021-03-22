class Hexagon{

    constructor(x,y){

    var options={

        isStatic: false, 
        restitution: 0, 
        friction: 1, 
        density:1.2
    }


    this.image= loadImage("polygon.png");
    this.body= Bodies.rectangle(x, y, 800, 80, options);
    World.add(world, this.body);

}

display(){

    var angle= this.body.angle;
    push()
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, 80, 80);
    pop()   
}
}