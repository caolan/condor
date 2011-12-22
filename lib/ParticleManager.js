condor.ParticleManager = {

	// maximum amount of projectiles on screen at once
	LIMIT: 100,

	particles: [],

	add: function (n) {
	
		// have we run out of available projectiles?
		if (this.particles.length >= this.LIMIT)
		{
			var p = this.particles.shift();
			p.destroy();
		}
		
        // create and record new projectile
        this.particles.push(n);
		return n;
	},
	
	spark: function (x, y, size) {
	
		var size = size || 10;
		
		for (var i=0; i< size; i++) {
			var p = new condor.Particle();
			var angle = Math.random()*57.2957795;
			var speed = 5+Math.random()*20; 
			p.position(x,y);
			p.accelerate(speed*Math.sin(angle),speed*Math.cos(angle));
			this.add(p);
			condor.interface.stage.addChild(p);
		}
	},
    
    tick: function () {
    
        for (var p in this.particles) {
        
            if (!this.particles[p].checkBounds()) {
                this.particles[p].destroy();
                this.particles.splice(p, 1);
            }
        }
    }
}