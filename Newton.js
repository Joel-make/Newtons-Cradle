class Newton
{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:true
			
			}
		this.x=x;
		this.y=y;
		this.width=width;
        this.height=height;
		
		this.body=Bodies.rectangle(this.x, this.y,this.width,this.height, options)
		World.add(world, this.body);
		this.image=loadImage("newton.png");

	}
	display()
	{
			
			var paperpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			//fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.width, this.height)
			//ellipse(0,0,this.r, this.r);
			pop()
			
	}

}

