class Superman{
	constructor(x,y,r){
		var options={
			restitution:0,
			friction:0,
			density:0.5
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("superman.png");
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			// rectMode(CENTER)
			// rotate(this.body.angle)
			fill(255,0,255)
			imageMode(CENTER);
			ellipseMode(RADIUS)
			image(this.image, 0,0,this.r*12, this.r*8)
			pop()
			
	}

}