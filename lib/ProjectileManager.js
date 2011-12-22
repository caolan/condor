condor.ProjectileManager = {

	// maximum amount of projectiles on screen at once
	LIMIT: 100,

	projectiles: [],

	create: function () {
	
		// have we run out of available projectiles?
		if (this.projectiles.length >= this.LIMIT)
		{
			var p = this.projectiles.shift();
			p.destroy();
		}
		
        // create and record new projectile
        var n = new condor.Projectile();
        this.projectiles.push(n);
		return n;
	},
    
    tick: function () {
    
        for (var p in this.projectiles) {
        
            if (!this.projectiles[p].checkBounds()) {
                this.projectiles[p].destroy();
                this.projectiles.splice(p, 1);
            }
        }
    }
}