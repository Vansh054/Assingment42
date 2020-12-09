class Baarish {
    constructor(x,y){
    var options = {
            isStatic:false,
            friction:0.2,
            density:2
    }
      this.body = Bodies.circle(x,y,3.5,options)
      this.radius = 3.5
      World.add(world,this.body)
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y)
      rotate(angle)
      ellipseMode(CENTER)
      fill("blue")
      ellipse(0,0,this.radius)
      pop();

      if (pos.y > height ){
        Matter.Body.setPosition(this.body, {x:random(0,400),y:random(0,100)})
      }
    }
}