class Roof
{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            friction:0.5
        }
        this.body=Bodies.rect(x,y,width,height,options);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
        push();
        translate(pos.x,pos.y);
        strokeweight(4);
        pop();
    }
}