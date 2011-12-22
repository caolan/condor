condor.LevelManager = {

	level: 0,
	wave: 0,
    stage: null,
	current: null,
	statistics: {},
	time_last: 0,
	
	init: function () {
		this.stage = condor.interface.stage;
	},
		
	default: {
		time_start: null,
		time_total: null,
		bonuses: 0,
		points: 0,
		collectables: 0,
		kills: 0
	},
	
	restart: function () {
	    this.current = condor.levels[this.level];
		this.wave = 0;
		
		// reset stats
		this.statistics = _.clone(this.default);
		this.statistics.time_start = (new Date()).getTime();
	},
	
	complete: function () {
		
		// record total level time

		var t = (new Date()).getTime();
		this.statistics.time_total = t-this.statistics.time_start;
	},
    
    tick: function () {
		
		if (!this.current) return;
		
		var enemies = this.current.waves[this.wave];
		var time_now = (new Date()).getTime();
		
		// we only need to run this enemy spawn logic every half a second or so.
		if (this.time_now - this.time_last < 500) return;
		
    	for(var i in enemies) {
			var enemy = enemies[i];
			var spawn = enemy.movement[0];
			
			// this guy should have been created by now!
			if (!enemy.spawned) {
				var e = new condor.Body();
				e.position((condor.interface.width/100)*spawn[0], (condor.interface.height/100)*spawn[1]);
				this.stage.addChild(e);
				enemy.spawned = true;
			}
		}
    }
}