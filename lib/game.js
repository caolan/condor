condor = {};

condor.game = {

	stage: null,
	controls: null,
    
    init: function () {

        this.stage = condor.interface.init();
        this.controls = condor.controls.init();
        this.restart();
    },

    restart: function () {
		
		// temp
		for (var i=0, s; i<200; i++) {
			var angle = Math.random()*57.2957795;
			var speed = 5+Math.random()*20; 
			var p = new condor.Particle();
			p.position(condor.interface.width/2, condor.interface.height/2);
			p.accelerate(speed*Math.sin(angle),speed*Math.cos(angle));
			this.stage.addChild(p);
		}
		
        // start game loop
    	Ticker.addListener(this);
		Ticker.setFPS(30);
    },

    tick: function() {

        // physics
        // player control
        // enemy movement
		// rendering
		this.stage.update();
    }
};
