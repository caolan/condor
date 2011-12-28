condor.Collectable = condor.Body.extend({

 	SPEED: 5,
    RADIUS: 15,
	POINTS: 1000,
	TYPES: ['life', 'weapon', 'bomb', 'upgrade'],
    FRICTION: 1, // collectables never slow down

	type: null,
	
    initialize: function () {
        condor.Body.prototype.initialize.call(this);

		this.display();
		this.chooseType();
    },
	
	collect: function () {
	
		switch(this.type) {
			case 'life':
				condor.levelManager.incStatistic('lives');
				break;
			case 'weapon':
				condor.player.upgradeWeapon();
				break;
			case 'bomb':
				console.log('bomb got');
				break;
			case 'upgrade':
				condor.player.upgradeShip();
				break;
		}
		
		console.log(this.type + ' got');
		this.destroy();
	},
	
	chooseType: function () {
	
		var rand = Math.floor(Math.random()*this.TYPES.length);
		this.type = this.TYPES[rand];
	},
	
    display: function () {
        this.body = new Shape();
        var g = this.body.graphics;
        g.clear();
        g.beginFill("orange");
		g.drawPolyStar(0,0,this.RADIUS,5, 0, -90);

        this.addChild(this.body);
    }

});
