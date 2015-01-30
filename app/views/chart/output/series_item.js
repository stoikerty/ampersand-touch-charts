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
            type: function (el, value, previousValue) {
                // when the model changes, we don't want to re-render
                // only change the height for the element
                el.style.height = (value / this.chartInterfaceModel.maxDataSetValue * 100) + '%';
            },
            hook: 'value'
        }
    },

    initialize : function(options){
        this.chartInterfaceModel = options.chartInterfaceModel;
    },
    render : function(options){
        //if (options && !options.renderTemplate) this.renderWithTemplate();
        this.renderWithTemplate();

        // start by correctly rendering all values on the first run
        this.queryByHook('value').style.height = (this.model.value / this.chartInterfaceModel.maxDataSetValue * 100) + '%';

        // fit every element of the collection into the series-chart
        this.el.style.width = (100 / this.collection.length) + '%';
    }
});