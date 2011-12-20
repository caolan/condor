condor = {};

condor.game = {

	stage: null,
	
    init: function () {

        this.stage = condor.interface.init();
        this.restart();
    },

    restart: function () {
		
		// temp
		this.particle = new condor.Particle();
		this.particle.accelerate(20,20);
		this.stage.addChild(this.particle);
		
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
