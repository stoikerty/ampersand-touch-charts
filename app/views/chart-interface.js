var View = require('ampersand-view');
var templates = require('../templates');
var InputView = require('./chart/input');
var OutputView = require('./chart/output');

// import sample-data for project
chartInterfaceData = require('../_sample-data/chartInterface');

module.exports = View.extend({
    template : templates.chart.interface,
    autoRender : true,

    initialize : function(){
    },
    render : function(options){
        this.renderWithTemplate();

        console.log('rendering interface');

        // create the interface view
        this.view = new InputView({
            el : this.queryByHook("input-container"),
            model : chartInterfaceData
        });

        this.view = new OutputView({
            el : this.queryByHook("output-container"),
            model : chartInterfaceData
        });
    }
});