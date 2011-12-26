condor = {};

condor.game = {

    stage: null,
    controls: null,
    player: null,

    init: function () {

        condor.LevelManager.init();
        this.stage = condor.interface.init();
        this.controls = condor.controls.init();
		
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
        
        for (var i in condor.interface.layers.enemies.children) {
            var enemy = condor.interface.layers.enemies.children[i];
            
            for (var j in condor.interface.layers.player_projectiles.children) {
                var projectile = condor.interface.layers.player_projectiles.children[j];
                
                if (enemy.boundsIntersect(projectile)) {
                    enemy.hit();
                    break;
                }
            }
        }
    }
};
