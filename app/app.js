var domready = require('domready');
var BodyView = require('./views/body');

var ChartGlobals = require('./models/chartGlobals');
window.chartGlobals = new ChartGlobals();
chartGlobals.minDataSetValue = 0;
chartGlobals.maxDataSetValue = 0;

window.app = {
    init : function(){
        var self = this;

        // populate the head with meta tags
        var meta = document.createElement('meta');
        meta.httpEquiv = 'X-UA-Compatible';
        meta.content = 'IE=edge';
        document.getElementsByTagName('head')[0].appendChild(meta);

        var viewPortTag = document.createElement('meta');
        viewPortTag.id = 'viewport';
        viewPortTag.name = 'viewport';
        viewPortTag.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1';
        document.getElementsByTagName('head')[0].appendChild(viewPortTag);

        // start up the app
        domready(function(){
            // create the main view
            self.view = new BodyView({
                el : document.body
            });
        });
    }
};

window.app.init();