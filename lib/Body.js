condor.Body = Container.extend({

    DAMPENING: 0.05,
    FRICTION: 0.96,
	WIDTH: 5,
	HEIGHT: 5,
	
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

    initialize: function () {
        Container.prototype.initialize.call(this);
        
        // temporary graphic to show particles
        this.body = new Shape();
        var g = this.body.graphics;
        g.clear();
		g.beginStroke("#333333");
        g.beginFill("#999999");
        g.drawCircle(0,0,this.WIDTH);
        this.addChild(this.body);
    },
	
    checkBounds: function () {
    
        if (this.x-this.WIDTH > this.getStage().width) return false;
        if (this.y-this.HEIGHT > this.getStage().height) return false;
        if (this.x+this.WIDTH < 0) return false;
        if (this.y+this.HEIGHT < 0) return false;
        return true;
    },
	
	destroy: function () {
	
		this.getStage().removeChild(this);
		delete this;
	}
    
});