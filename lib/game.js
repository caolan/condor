condor = {};

condor.game = {

    stage: null,
    controls: null,
    player: null,

    init: function () {

        this.stage = condor.interface.init();
        this.controls = condor.controls.init();
        condor.LevelManager.init();
		
        this.restart();
    },

    restart: function () {
		
        this.player = new condor.Player();
        this.player.position(
            condor.interface.width / 2,
            condor.interface.height - 20
        );
        this.stage.addChild(this.player);

        // start game loop
    	Ticker.addListener(this);
		Ticker.setFPS(30);
		
		condor.LevelManager.restart();
    },

    tick: function() {
		
        // player control
		this.controls.update();
		
        // cull old projectiles
		condor.ParticleManager.tick();
		
        // waves
		condor.LevelManager.tick();
		
        // collisions
        this.collisions();
        
		// rendering
        condor.interface.update();
		this.stage.update();
    },
    
    collisions: function () {
        
        for (var i in condor.LevelManager.enemies) {
            var enemy = condor.LevelManager.enemies[i];
            
            //
        }
    }
};
