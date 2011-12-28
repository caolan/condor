condor.Collectable = condor.Body.extend({

 	SPEED: 5,
    RADIUS: 15,
	POINTS: 1000,
	TYPES: [
		'life',
		'weapon',
		'bomb',
		'upgrade'
	],
	
    // collectables never slow down
    FRICTION: 1,

    initialize: function () {
        Container.prototype.initialize.call(this);

        this.body = new Shape();
        var g = this.body.graphics;
        g.clear();
        g.beginFill("orange");
		g.drawPolyStar(0,0,this.RADIUS,5, 0, -90);

        this.addChild(this.body);
    }

});
