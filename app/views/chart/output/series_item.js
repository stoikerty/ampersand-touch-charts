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
            type: 'text',
            hook: 'value'
        }
    },

    initialize : function(){
        window.initialized = (window.initialized + 1) || 1;
        console.log('initialized output series "' + this.parent.model.caption + '" : ' + window.initialized + ' : '
            + this.model.name + ' ' + this.model.value);
    },
    render : function(options){
        this.renderWithTemplate();

        // fit every element of the collection into the series-chart
        this.el.style.width  = (100 / this.parent.collection.length) + '%';

        window.currentThis = this;
    }
});