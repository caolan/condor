condor.Player = condor.Body.extend({
 
 	ACCELERATION: 4,
	FRICTION: 0.85,
	
    tick: function () {

		if (condor.controls.keyIsDown('left')) {
			this.accelerate(-this.ACCELERATION);
			
		} else if (condor.controls.keyIsDown('right')) {
			this.accelerate(this.ACCELERATION);
		}
		
        this.update();
    }
});