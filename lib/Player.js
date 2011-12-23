condor.Player = condor.Body.extend({

    ACCELERATION: 15,
    FRICTION: 0.5,
	WIDTH: 12,
	HEIGHT: 16,
	
	weapon: null,
	
    initialize: function () {
        condor.Body.prototype.initialize.call(this);

		this.weapon = new condor.WeaponBasic();
        this.bindEvents();
		this.display();
    },

	display: function () {
		
        // temporary graphic
        this.body = new Shape();
        var g = this.body.graphics;
        g.clear();
        g.beginStroke("#333333");
        g.beginFill("#aaaaaa");
        g.moveTo(0,-this.HEIGHT);
		g.lineTo(this.WIDTH,this.HEIGHT);
		g.lineTo(-this.WIDTH,this.HEIGHT);
		g.closePath();
        this.addChild(this.body);
	},
	

    bindEvents: function () {
        _.bindAll(this, 'moveLeft', 'moveRight', 'moveUp', 'moveDown', 'fire');

        condor.controls.bind('left', this.moveLeft);
        condor.controls.bind('right', this.moveRight);
        condor.controls.bind('up', this.moveUp);
        condor.controls.bind('down', this.moveDown);
        condor.controls.bind('space', this.fire);
    },

    moveLeft: function () {
        this.accelerate(-this.ACCELERATION);
    },

    moveRight: function () {
        this.accelerate(this.ACCELERATION);
    },
	
    moveUp: function () {
        this.accelerate(null, -this.ACCELERATION);
    },

    moveDown: function () {
        this.accelerate(null, this.ACCELERATION);
    },

    fire: function () {
		// todo, use get callee
		this.weapon.fire(this);		
    }

});
