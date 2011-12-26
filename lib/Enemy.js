condor.Enemy = condor.Body.extend({
 
 	ACCELERATION: 3,
	FRICTION: 0.6,
	BOUND: 40,
	WIDTH: 10,
	HEIGHT: 10,
	POINTS: 100,
	
	life: 2,
	weapon: 0,
	waypoints: [],
	current: 0,
	nextx: 0,
	nexty: 0,
	
	initialize: function () {
		Container.prototype.initialize.call(this);
		
		this.weapon = new condor.WeaponCannon();
        this.display();
	},

    fire: function () {
		var p = this.weapon.fire(this);
		condor.interface.addChildTo(p, 'enemy_projectiles');
    },
	
	display: function () {
		
        // temporary graphic
        this.body = new Shape();
        var g = this.body.graphics;
        g.clear();
        g.beginStroke("#333333");
        g.moveTo(0, -this.HEIGHT);
		g.lineTo(this.WIDTH, 0);
		g.lineTo(0, this.HEIGHT);
		g.lineTo(-this.WIDTH, 0);
		g.closePath();
		
        this.addChild(this.body);
	},
	
	tick: function () {
		
		this.checkWaypoint();
		this.move();
		this.fire();
		
		this.update();
	},
	
	setWaypoints: function (waypoints) {
		this.waypoints = waypoints;
		this.nextWaypoint();
	},
	
	checkWaypoint: function () {
	
		var diffx = Math.abs(this.x - this.nextx);
		var diffy = Math.abs(this.y - this.nexty);
		if (diffx < this.BOUND && diffy < this.BOUND) {
			this.nextWaypoint();
		}
	},
	
	nextWaypoint: function () {
		this.current++;
		
		// no more waypoints?
		if (this.current >= this.waypoints.length) return this.destroy();
		
		// cache target coordinates
		this.nextx = (condor.interface.width/100)*this.waypoints[this.current][0];
		this.nexty = (condor.interface.height/100)*this.waypoints[this.current][1];	
	},
	
	move: function () {
		var waypoint = this.waypoints[this.current];
		var diffx = this.nextx - this.x;
		var diffy = this.y - this.nexty;
		var angle = Math.atan2(diffx, diffy) * 57.2957795;
				
		this.accelerate(Math.cos(angle)*this.ACCELERATION, Math.sin(angle)*this.ACCELERATION);
	},
	
	hit: function () {
		condor.ParticleManager.spark(this, 5);
		
		if (--this.life <= 0) {
			this.kill();
		}
	},
	
	kill: function () {
		condor.LevelManager.addPoints(this.POINTS);
		condor.interface.shake = 10;
		this.destroy();
	}
});