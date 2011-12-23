condor.ParticleManager = {

	// maximum amount of projectiles on screen at once
	LIMIT: 200,

	particles: [],
	cache: [],
	
	// allows us to precreate and cache a selection of particles
	init: function() {
		
	},

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
	
	spark: function (object, size) {
		console.log('spark!');
		
		var size = size || 10;
		
		for (var i=0; i< size; i++) {
			var n = new condor.Particle();
			var angle = Math.random()*57.2957795;
			var speed = 5+Math.random()*10;
			n.position(object.x,object.y);
			n.accelerate(speed*Math.sin(angle),speed*Math.cos(angle));
			this.add(n);
			condor.interface.stage.addChild(n);
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