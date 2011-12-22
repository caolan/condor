condor.Player = condor.Body.extend({

    ACCELERATION: 15,
    FRICTION: 0.5,

    initialize: function () {
        condor.Body.prototype.initialize.call(this);

        this.bindEvents();
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

        var p = new condor.Projectile();
		condor.ParticleManager.add(p);
        p.position(this.x-15, this.y-10);
        p.fire();
        this.getStage().addChild(p);
		
        var p = new condor.Projectile();
		condor.ParticleManager.add(p);
        p.position(this.x+15, this.y-10);
        p.fire();
        this.getStage().addChild(p);
		
    }

});
