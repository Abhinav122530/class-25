class Paper{
    constructor(x,y,radius){
        var Options=  {  
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
            
            }
            
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.image=loadImage("paper.png")
        this.body=Bodies.circle(this.x,this.y,this.radius,Options);
        World.add(world,this.body);
    }
    display(){
    push();
    translate(this.body.position.x,this.body.position.y);
    imageMode(CENTER);
    image(this.image,0,0,this.radius);
    pop();

    }
}

