var View = require('ampersand-view');
var templates = require('../templates');
var ChartInterfaceView = require('./chart-interface');

module.exports = View.extend({
    template : templates.body,
    autoRender : true,
    initialize : function(){
        document.title = '{ Project }';
    },
    render : function(options){
        this.renderWithTemplate();
        
        console.log('document body rendered');

        this.interfaceContainerEl = this.queryByHook("interface-container");

        // create the interface view
        this.view = new ChartInterfaceView({
            el : this.interfaceContainerEl
        });
    }
});