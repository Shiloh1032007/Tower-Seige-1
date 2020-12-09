class Rope
{
    constructor(bodyA,bodyB)
    {
        var options= {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world,this.sling)
    }

    display()
    {
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(3);
        stroke(rgb(48,22,8));
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }

}