condor.Enemy = condor.Body.extend({
 
 	ACCELERATION: 1,
	FRICTION: 0.8,
	BOUND: 40,
	
	waypoints: [],
	current: 0,
	nextx: 0,
	nexty: 0,
	
	initialize: function () {
		Container.prototype.initialize.call(this);
		
        this.display();
	},
	
	display: function () {
		
        // temporary graphic
        this.body = new Shape();
        var g = this.body.graphics;
        g.clear();
        g.beginStroke("#333333");
        g.beginFill("#999999");
        g.drawCircle(0,0,this.WIDTH);
        this.addChild(this.body);
	},
	
	tick: function () {
		
		this.checkWaypoint();
		this.move();
		
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
		
		console.log('heading for: ' + this.nextx + ' / ' + this.nexty)
	},
	
	move: function () {
		var waypoint = this.waypoints[this.current];
		var diffx = this.nextx - this.x;
		var diffy = this.y - this.nexty;
		var angle = Math.atan2(diffx, diffy) * 57.2957795;
				
		this.accelerate(Math.cos(angle)*this.ACCELERATION, Math.sin(angle)*this.ACCELERATION);
	}
});