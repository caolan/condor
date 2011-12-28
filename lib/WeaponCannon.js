condor.WeaponCannon = function(){return {
	
	SPEED: 10,
	RELOAD: 15, // in frames
	
	reloading: 0,
	
	fire: function (obj) {
	
		if (--this.reloading > 0) return false;
	
        var a = new condor.ProjectileCannon();
		condor.particleManager.add(a);
        a.position(obj.x, obj.y);
		a.accelerate(0, this.SPEED);
		this.reloading = this.RELOAD;
		
		return a;
	}
}};