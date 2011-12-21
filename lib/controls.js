condor.controls = {

    keys: [],
    
    mapping: {
        'up':       38,
        'down':     40,
        'left':     37,
        'right':    39,
        'space':    32, 
    },
    
    init: function () {

        this.bindEvents();
        return this;
    },

    keyDown: function (ev) {
        var key = ev.keyCode || window.event.keyCode;
        this.keys[key] = true;
    },
    
    keyUp: function (ev) {
        var key = ev.keyCode || window.event.keyCode;
        this.keys[key] = false;
    },
    
    keyIsDown: function (key) {
        
        // allow passing of keycode or key name
        if (_.isString(key)) key = this.mapping[key];
        
        return this.keys[key] === true;
    },
    
    bindEvents: function () {
        _.bindAll(this, 'keyDown', 'keyUp');

        // we want to resize the canvas keep proportions
        $(window).bind('keydown', this.keyDown);
        $(window).bind('keyup', this.keyUp);
    }
};
