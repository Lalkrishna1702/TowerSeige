class Block1 {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.image = loadImage("rect1.png");
    this.Visiblity = 255;
    World.add(world, this.body);

    this.width = width;
    this.height = height;
  }
  display(){
    
    if(this.body.speed < 10){
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
    }else{
      World.remove(world,this.body);
      push();
      this.Visiblity = this.Visiblity-5;
      tint(255,this.Visiblity);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
    }
  }
  score(){
    if(this.Visiblity < 0 && this.Visiblity>-105){
      score++;
    }
  }
}