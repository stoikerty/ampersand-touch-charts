var View = require('ampersand-view');
var templates = require('../templates');
var InputView = require('./chart/input');
var OutputView = require('./chart/output');

// import sample-data for project
chartInterfaceModel = require('../_sample-data/chartInterface');

module.exports = View.extend({
    template : templates.chart.interface,
    autoRender : true,

    initialize : function(){
    },
    render : function(options){
        this.renderWithTemplate();

        // create the interface view
        this.view = new InputView({
            el : this.queryByHook("input-container"),
            model : chartInterfaceModel
        });

        this.view = new OutputView({
            el : this.queryByHook("output-container"),
            model : chartInterfaceModel
        });
    }
});