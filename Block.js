class Block {

    constructor(x, y, width, height) {

        var options={
          restitution : 1,
          friction : 0.6,
          isStatic : false
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

      }

      display() {
        if(this.body.speed < 3){
         display();
          console.log(this.body.speed);
          }
          else{
            World.remove(world,this.body);
            push();
            this.Visibility = this.Visibility - 5;
            tint(255,this.Visibility);
            image(this.image,this.body.position.x, this.body.position.y,50,50);
            pop();
          }
      }
      
}
