condor.controls = _.extend(Events, {

    keys: {},
	touches: {},
	touch: false,
	
    key_mapping: {
        'up':       38,
        'down':     40,
        'left':     37,
        'right':    39,
        'space':    32, 
    },
	
	touch_mapping: {
		'left':     'joy-left',
		'right': 	'joy-right'
	},
    
    init: function () {

        this.bindEvents();
        return this;
    },
	
	update: function () {
		
		var o = c = (new Date()).getTime();
		
		for(var keyname in this.key_mapping) {
			o = this.keyIsDown(keyname);
			
			// include the time that a key has been pressed in emitted event
			if (o) this.trigger(keyname, c-o);
		}
		
		// only check for touch input if supported
		if (this.touch) {
			
			for(var keyname in this.touch_mapping) {
				o = this.isTouched(keyname);
				
				// include the time that a key has been pressed in emitted event
				if (o) this.trigger(keyname, c-o);
			}
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
        if (_.isString(key)) key = this.key_mapping[key];
        
        return this.keys[key];
    },
	
    isTouched: function (key) {
        
        key = this.touch_mapping[key];        
        return this.touches[key];
    },
	
	touchEnable: function () {
		this.touch = true;
	},
	
	touchStart: function (ev) {
		this.touches[ev.currentTarget.id] = (new Date()).getTime();
	},

	touchEnd: function (ev) {
		this.touches[ev.currentTarget.id] = false;
	},
   
    bindEvents: function () {
        _.bindAll(this, 'keyDown', 'keyUp', 'touchStart', 'touchEnd', 'touchEnable');

        // we want to resize the canvas keep proportions
        $(window).bind('keydown', this.keyDown);
        $(window).bind('keyup', this.keyUp);
		$(window).bind('touchstart', this.touchEnable);
		$('.joystick').bind('touchstart', this.touchStart);
		$('.joystick').bind('touchend', this.touchEnd);
    }
});
