class Hex {

    constructor(x,y,width,height) {

        var options={
            'restitution':1,
            'friction':1.0,
            'density':1.0,
            'isStatic':true
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("hexagon (1).png");
        World.add(world,this.body);

    }

    display() {

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image ,this.body.position.x,this.body.position.y,250,200);
        pop();

    }
}