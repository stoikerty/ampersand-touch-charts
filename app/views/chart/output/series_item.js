var View = require('ampersand-view');
var templates = require('../../../templates');

module.exports = View.extend({
    template : templates.chart.output.series_item,
    autoRender : true,
    
    bindings: {
        'model.name': {
            type: 'text',
            hook: 'name'
        },
        'model.value': {
            type: 'value',
            hook: 'value'
        }
    },

    initialize : function(){
    },
    render : function(options){
        this.renderWithTemplate();
    }
});