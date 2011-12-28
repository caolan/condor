condor.particleManager = {

	// maximum amount of projectiles on screen at once
	LIMIT: 200,

	particles: [],
	cache: [],
	
	// allows us to precreate and cache a selection of particles
	init: function() {
		
	},

	add: function (n) {
	
		var projectiles = condor.interface.layers.enemy_projectiles.getNumChildren() + 
					      condor.interface.layers.player_projectiles.getNumChildren() +
						  condor.interface.layers.particles.getNumChildren();
		
		// have we run out of available bodies?
		// limit includes only projectiles
		if (projectiles >= this.LIMIT)
		{
			var p = condor.interface.layers.enemy_projectiles.children.shift();
			p.destroy();
		}
		
		return n;
	},
	
	spark: function (object, size) {
		
		var size = size || 10;
		
		for (var i=0; i< size; i++) {
			var n = new condor.Particle();
			n.position(object.x,object.y);
			n.kick();
			this.add(n);
			condor.interface.addChildTo(n, 'particles');
		}
	}
}