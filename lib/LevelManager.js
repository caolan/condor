condor.LevelManager = _.extend({

	level: 0,
	wave: 0,
    stage: null,
	current: null,
	statistics: {},
	time_last: 0,
	time_start: 0,
	
	init: function () {
		this.stage = condor.interface.stage;
	},
		
	default: {
		time: 0,
		bonuses: 0,
		points: 0,
		collectables: 0,
		kills: 0,
		shots: 0,
		lives: 3
	},
	
	restart: function () {
	    this.current = condor.levels[this.level];
		this.wave = 0;
		this.time_start = (new Date()).getTime();
		
		// reset stats and trigger events to update UI
		this.statistics = _.clone(this.default);
		for(var i in this.statistics) {
			this.trigger(i, this.statistics[i]);
		}
	},
	
	complete: function () {
		
		// record total level time

		var t = (new Date()).getTime();
		this.statistics.time = t-this.time_start;
	},
	
	incStatistic: function(key, value) {

		var value = value || 1;
		this.statistics[key] += value;
		this.trigger(key, this.statistics[key]);
	},
	
	decStatistic: function(key, value) {

		var value = value || 1;
		this.statistics[key] -= value;
		this.trigger(key, this.statistics[key]);
	},
	
    tick: function () {
		
		if (!this.current) return;
		
		var enemies = this.current.waves[this.wave];
		var time_now = (new Date()).getTime();
		
		// we only need to run this enemy spawn logic every half a second or so.
		if (time_now - this.time_last < 500) return;
		
    	for(var i in enemies) {
			var enemy = enemies[i];
			var spawn = enemy.movement[0];
			
			// has this guy been created already
			if (!enemy.multiple && enemy.spawned || enemy.spawned >= enemy.multiple) continue;
			
			// not time for this badboy yet
			var delay = enemy.multiple && enemy.spawned ? enemy.delay*enemy.spawned : 0;
			if (time_now-this.time_start < enemy.offset*1000+delay*1000) continue;
			
			// were ready for you
			var e = new condor[enemy.class]();
			e.position((condor.interface.width/100)*spawn[0], (condor.interface.height/100)*spawn[1]);
			e.setWaypoints(enemy.movement);
			
			// add the enemy to the stage on correct layer
			condor.interface.addChildTo(e, 'enemies');
			enemy.spawned = _.isNumber(enemy.spawned) ? ++enemy.spawned : 1;
		}
    }
}, Events);