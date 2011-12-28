condor.WeaponBasic = function(){return {
	
	SPEED: 40,

	fire: function (obj) {
	
        var a = new condor.Projectile();
		condor.particleManager.add(a);
        a.position(obj.x-15, obj.y-10);
		a.accelerate(-0.4, -this.SPEED);
		
        var b = new condor.Projectile();
		condor.particleManager.add(b);
        b.position(obj.x+15, obj.y-10);
        b.accelerate(0.4, -this.SPEED);
      	
		return [a,b];
	}
}};