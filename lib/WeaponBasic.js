condor.WeaponBasic = function(rate){return {
	
	SPEED: 40,
	SPACING: 15,
	SPREAD: 0.5,
	
	rate: rate || 1,

	fire: function (obj) {
	
		var projectiles = [];
		var t = this.rate;
		
		if (this.rate%2) {
			// if not even
	        var a = new condor.Projectile();
			condor.particleManager.add(a);
	        a.position(obj.x, obj.y-10);
			a.accelerate(0, -this.SPEED);
			projectiles.push(a);
			t--;
		}
		
		for (var i=1; i<=t;i++) {
			var offset = (i%2) ? i*this.SPACING : (i-1)*-this.SPACING;
			var rotate = (i%2) ? i*this.SPREAD : (i-1)*-this.SPREAD; 
	        var a = new condor.Projectile();
			condor.particleManager.add(a);
	        a.position(obj.x+offset, obj.y-10);
			a.accelerate(rotate, -this.SPEED);
			projectiles.push(a);
		}

		return projectiles;
	}
}};