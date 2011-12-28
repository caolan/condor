condor.Projectile = condor.Body.extend({

	PLAYER_PROJECTILE: 0,
	ENEMY_PROJECTILE: 1,
	
    WIDTH: 3,
    HEIGHT: 10,
    FRICTION: 1,	 // projectiles never slow down

    initialize: function () {
        Container.prototype.initialize.call(this);

		this.display();
    },
	
	display: function () { 
	
        this.body = new Shape();
        var g = this.body.graphics;
        g.clear();
        g.beginFill("rgb(0, 128, 128)");
        g.moveTo(-this.WIDTH, -this.HEIGHT);
		g.lineTo(this.WIDTH, -this.HEIGHT);
		g.lineTo(0, this.HEIGHT);
		g.closePath();
        this.addChild(this.body);
	},
	
	tick: function () {

		if (!this.checkBounds()) {
			condor.particleManager.spark(this);
		}
		
		this.update();
	}

});
