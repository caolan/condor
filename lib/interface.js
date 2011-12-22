condor.interface = {

    RATIO: 1024/768,

	width: 0,
	height: 0,
    canvas: null,
    stage: null,

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
