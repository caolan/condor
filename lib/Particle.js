condor.Particle = Container.extend({

    DAMPENING: 0.05,
    FRICTION: 0.95,
    body: null,
    oldx: 0,
    oldy: 0,
    
    tick: function () {

        // vertlet integration
        var tmpx = this.x;
        var tmpy = this.y;
        this.x += (this.x - this.oldx) * this.FRICTION;
        this.y += (this.y - this.oldy) * this.FRICTION;
        this.oldx = tmpx;
        this.oldy = tmpy;
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
        g.drawCircle(0,0,10);
        this.addChild(this.body);
    }
    
});