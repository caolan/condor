condor.ProjectileCannon = condor.Projectile.extend({
	
    WIDTH: 6,
    HEIGHT: 6,
    FRICTION: 1,	 // projectiles never slow down
	
	display: function () { 
	
        this.body = new Shape();
        var g = this.body.graphics;
        g.clear();
        g.beginFill("#7F00DD");
        g.drawCircle(0,0,this.WIDTH);
        this.addChild(this.body);
	}
});
