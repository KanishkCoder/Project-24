class Rubber {
    constructor(x, y,radius) {
      var options = {
          'restitution':0.3,
          'friction':5.0,
          'density':1.0,
          isStatic: false
      }
      this.x=x;
      this.y=y;
      this.radius=radius;
      
      this.body = Matter.Bodies.circle(x, y, radius, options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      strokeWeight(4);
      stroke("green");
      fill(255);
      ellipseMode(CENTER)
      ellipse(0, 0, 55, 55)
      pop();
    }
  };
  