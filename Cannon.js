class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannonImg = loadImage("canon.png")
    this.cBaseImg = loadImage("cannonBase.png")
  }
  display(){
    push()
    imageMode(CENTER)
    image(this.cannonImg,this.x,this.y,this.width,this.height,this.angle)
    pop()
    image(this.cBaseImg,70,20,200,200)
    noFill()
  }
}


