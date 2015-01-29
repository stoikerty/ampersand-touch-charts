var View = require('ampersand-view');
var templates = require('../templates');
var InputView = require('./chart/input');
var OutputView = require('./chart/output');

module.exports = View.extend({
    template : templates.chart.interface,
    autoRender : true,

    initialize : function(){
    },
    render : function(options){
        this.renderWithTemplate();

        console.log('outputting interface + some css');

        this.inputEl = this.queryByHook("input");
        this.outputEl = this.queryByHook("output");

        console.log(this.inputEl);
        console.log(this.outputEl);

        console.log('chart data-set : ', this.collection.serialize());

        // this.renderCollection(
        //     this.collection.at(1).series,
        //     OutputView,
        //     this.outputEl
        // );

        // create the interface view
        this.view = new InputView({
            el : this.inputEl,
            collection : this.collection
        });

        // // create the interface view
        // this.view = new OutputView({
        //     el : this.outputEl,
        //     collection : this.collection
        // });
    }
});