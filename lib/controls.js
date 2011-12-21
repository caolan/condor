condor.controls = _.extend(Events, {

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
	
	update: function () {
		
		var o = c = (new Date()).getTime();
		
		for(var keyname in this.mapping) {
			o = this.keyIsDown(keyname);
			
			// include the time that a key has been pressed in emitted event
			if (o) this.trigger(keyname, c-o);
		}
	},

    keyDown: function (ev) {
        var key = ev.keyCode || window.event.keyCode;
		
		// record when this key was pressed down
        this.keys[key] = (new Date()).getTime();
    },
    
    keyUp: function (ev) {
        var key = ev.keyCode || window.event.keyCode;
        this.keys[key] = false;
    },
    
    keyIsDown: function (key) {
        
        // allow passing of keycode or key name
        if (_.isString(key)) key = this.mapping[key];
        
        return this.keys[key];
    },
    
    bindEvents: function () {
        _.bindAll(this, 'keyDown', 'keyUp');

        // we want to resize the canvas keep proportions
        $(window).bind('keydown', this.keyDown);
        $(window).bind('keyup', this.keyUp);
    }
});
