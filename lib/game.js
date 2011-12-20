condor = {};

condor.game = {

    init: function () {

        condor.interface.init();
        this.restart();
    },

    restart: function () {

        //start game timer
        Ticker.addListener(this);
    },

    tick: function() {

        // physics
        // player control
        // enemy movement
    }
};
