var View = require('ampersand-view');
var templates = require('../../../templates');

module.exports = View.extend({
    template : templates.chart.output.series_item,
    autoRender : true,
    renderCSSonly : false,
    
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

                // NOTE: sadly this doesn't work
                // when the maxDataSetValue changes,
                // everything gets rerendered and destroyed :(
                this.renderCSSonly = true;
            },
            hook: 'value'
        }
    },

    initialize : function(options){
        this.chartInterfaceModel = options.chartInterfaceModel;

        this.model.on('change:value', function (model, val) {
            console.log('value is now: ', val);
            this.renderCSSonly = true;
        });
    },
    render : function(options){
        if (!this.renderCSSonly){
            this.renderWithTemplate();
        }

        // caching element, still destroys an elment if the model changes
        this.cacheElements({
            valueEl: '[data-hook=value]'
        });

        // start by correctly rendering all values on the first run
        this.valueEl.style.height = (this.model.value / this.chartInterfaceModel.maxDataSetValue * 100) + '%';

        // fit every element of the collection into the series-chart
        this.el.style.width = (100 / this.collection.length) + '%';
    }
});