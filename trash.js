class trash {
    constructor(x,y){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2 
         }
        this.body = Bodies.circle(x,y,10,options);
        this.radius = 10;
        World.add(world,this.body);

        function keyPressed(){
            if(keyCode === UP_ARROW){
                Matter.Body.applyForce(paperObject.body,paperObject.Body.position,{x:85,y:-85});
            }
        }

    }

    display(){
        var pos = this.body.position;
        fill("red")
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, 20, 20);
    }

}