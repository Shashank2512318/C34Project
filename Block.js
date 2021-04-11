class block{
    constructor(x, y, w, h) {
    
        var block_options= {
    
            restitution:0.5,
            friction:1
    
        }
    
        this.body= Bodies.rectangle(x, y, w, h, block_options);
        World.add(world, this.body);
    
    
        this.w= w;
        this.h= h;
    
    }
    
    
    display() {
    
        push();
        rectMode(CENTER);
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle);
        fill("pink");
        rect(0, 0, this.w, this.h);
        pop();
    
    }
    
    }