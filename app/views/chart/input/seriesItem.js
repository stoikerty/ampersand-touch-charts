var View = require('ampersand-view');
var templates = require('../../../templates');

module.exports = View.extend({
    template : templates.chart.input.seriesItem,
    autoRender : true,
    
    bindings: {
        'model.value': {
            type: 'value',
            hook: 'value'
        }
    },

    initialize : function(){
    },
    render : function(options){
        this.renderWithTemplate();

        //
    }
});