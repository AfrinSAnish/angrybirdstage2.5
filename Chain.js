class Chain{
    constructor(BodyA,BodyB){

        var options={
            bodyA:BodyA,
            bodyB:BodyB,
            stiffness:0.04,
            length:10
        }

        this.chain=Constraint.create(options)
        World.add(world,this.chain);

    }
    display(){
    strokeWeight(4)
    var pointA=this.chain.bodyA.position
    var pointB=this.chain.bodyB.position
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}