condor.levels = [{
	name: 'Level 1',
	collectables: {
		chance: 0.5,
		max: 2
	},
	waves: [[{
		class: 'Enemy',	// type of enemy
		delay: 1,		// with this much delay between
		multiple: 100,
		offset: 1,
		movement: [
			[50, 0],
			[10, 20],
			[90, 30],
			[10, 40],
			[90, 50],
			[50, 110]
		]
	},{
		class: 'Enemy',	// type of enemy
		delay: 2,		// with this much delay between
		multiple: 10,
		offset: 1,
		movement: [
			[50, 0],
			[90, 20],
			[10, 30],
			[90, 40],
			[10, 50],
			[50, 110]
		]
	}]]
}];