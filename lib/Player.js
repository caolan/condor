condor.Player = condor.Body.extend({

    ACCELERATION: 15,
    FRICTION: 0.5,

    initialize: function () {
        condor.Body.prototype.initialize.call(this);

        this.bindEvents();
    },

    bindEvents: function () {
        _.bindAll(this, 'moveLeft', 'moveRight', 'fire');

        condor.controls.bind('left', this.moveLeft);
        condor.controls.bind('right', this.moveRight);
        condor.controls.bind('space', this.fire);
    },

    moveLeft: function () {
        this.accelerate(-this.ACCELERATION);
    },

    moveRight: function () {
        this.accelerate(this.ACCELERATION);
    },

    fire: function () {

        var p = new condor.Projectile();
        p.position(this.x, this.y-10);
        p.fire();
        this.getStage().addChild(p);
    }

});
