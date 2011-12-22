condor.Projectile = condor.Body.extend({
 
 	SPEED: 25,
    WIDTH: 2,
    HEIGHT: 2,
    
    // projectiles never slow down
	FRICTION: 1,
    
    initialize: function () {
        Container.prototype.initialize.call(this);
        
        this.body = new Shape();
        var g = this.body.graphics;
        g.clear();
		g.beginStroke("#333333");
        g.beginFill("#000");
        g.drawCircle(0,0,this.WIDTH);
        this.addChild(this.body);
        
    },
    
    fire: function () {
        this.accelerate(0, -this.SPEED);
    }
    
});