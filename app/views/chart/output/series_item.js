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
                // when the model changes, don't re-render,
                // only change the height for the element
                this.updateStyle(el);
            },
            hook: 'value'
        }
    },

    updateStyle : function(el){
        this.valueEl = this.valueEl || this.el;

        // transform the bar-height to the approriate % value
        this.valueEl.style.height = (this.model.value / this.chartInterfaceModel.maxDataSetValue * 100) + '%';
    
        // fit every element of the collection into the series-chart
        this.el.style.width = (100 / this.collection.length) + '%';
    },

    initialize : function(options){
        this.chartInterfaceModel = options.chartInterfaceModel;

        var self = this;
        self.model.on('change', function () {
            self.updateStyle();
        });
    },
    render : function(options){
        this.renderWithTemplate();

        // caching element
        this.valueEl = this.queryByHook('value');

        // update the element style
        this.updateStyle();
    }
});