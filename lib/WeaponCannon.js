condor.WeaponCannon = function(){return {
	
	SPEED: 10,
	RELOAD: 10, // in frames
	
	reloading: 0,
	
	fire: function (obj) {
	
		if (--this.reloading > 0) return false;
	
        var a = new condor.ProjectileCannon();
		condor.ParticleManager.add(a);
        a.position(obj.x, obj.y);
		a.accelerate(0, this.SPEED);
		this.reloading = this.RELOAD;
		
		return a;
	}
}};