condor.levels = [{
	name: 'Level 1',
	waves: [[{
		class: 'Enemy',	// type of enemy
		multiple: 10,	// spawn many
		delay: 1,		// with this much delay between
		movement: [
			[50, 	0, 		1],
			[40,	20, 	2],
			[60,	40, 	2],
			[50,	110, 	2]
		]
	}]]
}];