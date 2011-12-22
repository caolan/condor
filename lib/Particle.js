condor.Particle = condor.Body.extend({

 	SPEED: 80,
    RADIUS: 3,
	MIN_SIDES: 3,
	MAX_SIDES: 6,

    // projectiles never slow down
    FRICTION: 1,

    initialize: function () {
        Container.prototype.initialize.call(this);

        this.body = new Shape();
		var sides = this.MIN_SIDES + Math.floor(Math.random()*(this.MAX_SIDES-this.MIN_SIDES));		
		var angle = (Math.PI*2)/sides;
        var g = this.body.graphics;
        g.clear();
        g.beginFill("rgba(16, 48, 16, 0.8)");
		
		for(var i=1; i<=sides; i++) {
		
			if (!i) {
				g.moveTo(-this.WIDTH, -this.HEIGHT);
			} else {
				g.lineTo(Math.cos(angle*i)*this.RADIUS, Math.sin(angle*i)*this.RADIUS);
			}
		}
		
        this.addChild(this.body);
    }

});
