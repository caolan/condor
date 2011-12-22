condor.levels = [{
	name: 'Level 1',
	waves: [[{
		class: 'Enemy',	// type of enemy
		points: 1000,	
		multiple: 10,	// spawn many
		delay: 1,		// with this much delay between
		movement: [
			[50, 	0, 		0],
			[40,	20, 	2],
			[60,	40, 	2],
			[50,	110, 	2]
		]
	}]]
}];