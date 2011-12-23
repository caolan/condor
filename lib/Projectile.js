condor.Projectile = condor.Body.extend({

 	SPEED: 40,
    WIDTH: 2,
    HEIGHT: 8,

    // projectiles never slow down
    FRICTION: 1,

    initialize: function () {
        Container.prototype.initialize.call(this);

		this.display();
    },
	
	display: function () { 
	
        this.body = new Shape();
        var g = this.body.graphics;
        g.clear();
        g.beginStroke("#333333");
        g.beginFill("#000");
        g.moveTo(-this.WIDTH, -this.HEIGHT);
		g.lineTo(this.WIDTH, -this.HEIGHT);
		g.lineTo(0, this.HEIGHT);
        this.addChild(this.body);
	},

    fire: function () {
        this.accelerate(0, -this.SPEED);
    },
	
	tick: function () {

		if (!this.checkBounds()) {
			condor.ParticleManager.spark(this);
		}
		
		this.update();
	}

});
