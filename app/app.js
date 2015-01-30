var domready = require('domready');
var BodyView = require('./views/body');

var ChartGlobals = require('./models/chartGlobals');
window.chartGlobals = new ChartGlobals();
chartGlobals.minDataSetValue = 0;
chartGlobals.maxDataSetValue = 0;

window.app = {
    init : function(){
        var self = this;

        domready(function(){
            console.log('starting app');

            // create the main view
            self.view = new BodyView({
                el : document.body
            });
        });
    }
};

window.app.init();