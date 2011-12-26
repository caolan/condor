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
        var g = this.body.graphics;
        g.clear();
        g.beginFill("rgba(16, 48, 16, 1)");
		g.drawPolyStar(0,0,this.RADIUS,sides, 0, -90);

        this.addChild(this.body);
    }

});
