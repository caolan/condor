condor.interface = {

    RATIO: 1024/768,

    width: 0,
    height: 0,
    canvas: null,
    stage: null,
	shake: 0,

    init: function () {
        this.canvas = document.getElementById('condor');
        this.stage = new Stage(this.canvas);

        this.resize();
        this.bindEvents();
        this.fpsCounter();

        return this.stage;
    },

    resize: function () {

        // calculate width from ratio
        var height = $(window).height();
        var width = height*this.RATIO;

        // resize canvas dom element
        $(this.canvas).css({
            width: width,
            height: height
        });
		
        $('article').css({
            width: width,
            height: height
        });
		
        // resize canvas context itself
        var context = this.canvas.getContext('2d');
        context.canvas.width = this.width = width;
        context.canvas.height = this.height = height;
    },

    reset: function () {

        this.stage.clear();
    },
	
	update: function () {
	
		// if shaking is happening
		if (this.shake > 0) {
			// reset if we are at the end of shaking
			if (--this.shake > 0) {
				// calculate a random x/y offset within bounds
				var shakex = -this.shake+(Math.random()*this.shake);
				var shakey = -this.shake+(Math.random()*this.shake);
			} else {
				var shakex = 0;
				var shakey = 0;
			}
			
			// move tha actual canvas aboot
	        $(this.canvas).css({
	            top: shakex,
	            left: shakey
	        });
		}
	},

    fpsCounter: function () {

        var stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        $('body').append(stats.domElement);

        setInterval(function () {

            stats.update();

        }, 1000 / 60 );
    },

    bindEvents: function () {
        _.bindAll(this, 'resize');

        // we want to resize the canvas keep proportions
        $(window).resize(this.resize);
    }
};
