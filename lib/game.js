condor = {};

condor.game = {

    FRAMERATE: 30,
    
    stage: null,
    controls: null,
    player: null,

    init: function () {

        Zap.init();
        condor.levelManager.init();
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
		Ticker.setFPS(this.FRAMERATE);
		
		condor.levelManager.restart();
    },

    tick: function() {
		
        // player control
		this.controls.update();
		
        // waves
		condor.levelManager.tick();
		
        // collisions
        this.collisions();
        
		// rendering
        condor.interface.update();
		this.stage.update();
    },
    
    collisions: function () {
        
        // test enemies with players projectiles
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
        
        // test player with enemies projectiles
        for (var j in condor.interface.layers.enemy_projectiles.children) {
            var projectile = condor.interface.layers.enemy_projectiles.children[j];
                
            if (this.player.boundsIntersect(projectile)) {
                this.player.hit(projectile);
                break;
            }
        }
        
        // test player against collectables
        for (var k in condor.interface.layers.collectables.children) {
            var collectable = condor.interface.layers.collectables.children[k];
                
            if (this.player.boundsIntersect(collectable)) {
                this.player.collect(collectable);
                break;
            }
        }
    }
};
