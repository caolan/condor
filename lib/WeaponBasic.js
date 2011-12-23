condor.WeaponBasic = function(){return {
	
	SPEED: 40,

	fire: function (obj) {
	
		var s = obj.getStage();
        var p = new condor.Projectile();
		condor.ParticleManager.add(p);
        p.position(obj.x-15, obj.y-10);
		p.accelerate(0, -this.SPEED);
        s.addChild(p);
		
        var p = new condor.Projectile();
		condor.ParticleManager.add(p);
        p.position(obj.x+15, obj.y-10);
        p.accelerate(0, -this.SPEED);
      	s.addChild(p);
	}
}};