class Blocks{

    constructor(x,y){

        var options= {

            isStatic: true
        }

        this.body= Bodies.rectangle(x, y, 30, 40, options);
        World.add(world, this.body);
    }

display(){
var angle= this.body.angle;
push()
translate(this.body.position.x, this.body.position.y);
rotate(angle);
rectMode(CENTER);
rect(0, 0, 30, 40);
pop()

}
}