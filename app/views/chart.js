var View = require('ampersand-view');
var templates = require('../templates');

module.exports = View.extend({
    template : templates.chart.interface,
    autoRender : true,

    initialize : function(){
        document.title = '{ Project }';
    },
    render : function(options){
        this.renderWithTemplate();

        this.inputEl = this.queryByHook("input");
        this.outputEl = this.queryByHook("output");
        
        console.log('document body rendered');
    }
});