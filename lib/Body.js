condor.Body = Container.extend({

    DAMPENING: 0.05,
    FRICTION: 0.96,
	WIDTH: 5,
	HEIGHT: 5,
	SPEED: 10,
	
    body: null,
    oldx: 0,
    oldy: 0,

    tick: function() {
        this.update();
    },

    update: function () {

        // vertlet integration
        var tmpx = this.x;
        var tmpy = this.y;
        this.x += (this.x - this.oldx) * this.FRICTION;
        this.y += (this.y - this.oldy) * this.FRICTION;
        this.oldx = tmpx;
        this.oldy = tmpy;
		
        if (!this.checkBounds()) {
            this.destroy();
        }
    },

    position: function(x, y) {

        // need to set old and new x when changing position
        // due to verlet integration
        this.oldx = this.x = x;
        this.oldy = this.y = y;
    },

    accelerate: function (x, y) {
        this.oldx -= (x || 0);
        this.oldy -= (y || 0);
    },
	
	// give this body a random direction and speed
	kick: function (){
		
		var s = this.SPEED || 10;
		var angle = Math.random()*57.2957795;
		var speed = (s/2)+Math.random()*s;
		this.accelerate(speed*Math.sin(angle),speed*Math.cos(angle));	
	},

    checkBounds: function () {
    
        if (this.x-this.WIDTH > this.getStage().width) return false;
        if (this.y-this.HEIGHT > this.getStage().height) return false;
        if (this.x+this.WIDTH < 0) return false;
        if (this.y+this.HEIGHT < 0) return false;
        return true;
    },
	
	boundsIntersect: function (obj) {
		
		var dist = (obj.x-this.x)*(obj.x-this.x)+(obj.y-this.y)*(obj.y-this.y);
		var r1 = Math.max(this.WIDTH, this.HEIGHT);
		var r2 = Math.max(obj.WIDTH, obj.HEIGHT);
		return Math.sqrt(dist) < (r1+r2);
	},
	
	destroy: function () {
		// is there anything else to clean up here?
		this.parent.removeChild(this);
		delete this;
	}
    
});
