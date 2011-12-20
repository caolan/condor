condor = {};

condor.game = {

	stage: null,
	
    init: function () {

        this.stage = condor.interface.init();
        this.restart();
    },

    restart: function () {
		
		// temp
		for (var i=0, s; i<100; i++) {
			var angle = Math.random()*57.2957795;
			var speed = 5+Math.random()*20; 
			var p = new condor.Particle();
			p.position(condor.interface.width/2, condor.interface.height/2);
			p.accelerate(speed*Math.sin(angle),speed*Math.cos(angle));
			this.stage.addChild(p);
		}
		
        //start game timer
        Ticker.addListener(this);
    },

    tick: function() {

        // physics
        // player control
        // enemy movement
		
		this.stage.update();
    }
};
