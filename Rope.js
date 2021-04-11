class string{
    constructor(Body, point) {

        var options= {
 
            bodyA:Body,
            pointB:point,
            stiffness:1,
            length:200


        }
        this.rope= Constraint.create(options);
        World.add(world, this.rope);



    }



    display() {
        
        push();
        stroke("white");
        strokeWeight(0);
        line(this.rope.bodyA.position.x, this.rope.bodyA.position.y, this.rope.pointB.x, this.rope.pointB.y)
        pop();



    }


}