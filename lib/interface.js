condor.interface = {

    RATIO: 1024/768,

    canvas: null,
    stage: null,

    init: function () {
        this.canvas = document.getElementById('condor');
        this.stage = new Stage(this.canvas);

        this.resize();
        this.bindEvents();
		
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

        // resize canvas context itself
        var context = this.canvas.getContext('2d');
        context.canvas.width = width;
        context.canvas.height = height;
    },

    reset: function () {

        this.stage.clear();
    },

    bindEvents: function () {
        _.bindAll(this, 'resize');

        // we want to resize the canvas keep proportions
        $(window).resize(this.resize);
    }
};
