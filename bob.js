class Bob{
    constructor(x,y,r){
        var options={
            'restitution':1.37,
            'friction':0.9,
            'density':1.2
}
this.x=x;
this.y=y;
this.r=r;
this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,options);
//this.image=loadImage("paper.png");
World.add(world,this.body);
}
display(){

    var pos = this.body.position;
//    var angle = this.body.angle;

    push();

    translate(pos.x,pos.y);
    rectMode(CENTER);
    fill(rgb(192,192,192));
    ellipse(0,0,this.r,this.r);
    pop();

   }


}