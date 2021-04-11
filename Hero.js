class Hero{
    constructor(x, y, r) {
    
        var ball_options= {
    
            restitution:0.5,
            friction:1
    
        }
    
        this.body= Bodies.circle(x, y, r, ball_options)
        this.image= loadImage("Sprites/Superhero-01.png")
        World.add(world, this.body)
    
    
        this.w= r
        this.h= r
    
    }
    
    
    display() {
    
        push();
        //ellipseMode(RADIUS);
        //translate(this.body.position.x, this.body.position.y)
        //rotate(this.body.angle);
        fill("blue");
        imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y, this.w+100, this.h)
        pop();
    
    }
    
    }