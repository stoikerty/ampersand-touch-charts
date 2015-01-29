var View = require('ampersand-view');
var templates = require('../templates');

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
    }
});