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
                this.updateInputHeight(el);
            },
            hook: 'value'
        }
    },

    updateInputHeight : function(el){
        this.valueEl = this.valueEl || this.el;
        this.valueEl.style.height = (this.model.value / this.chartInterfaceModel.maxDataSetValue * 100) + '%';
    },

    initialize : function(options){
        this.chartInterfaceModel = options.chartInterfaceModel;

        var self = this;
        self.model.on('change', function () {
            self.updateInputHeight();
        });
    },
    render : function(options){
        this.renderWithTemplate();

        // caching element
        this.valueEl = this.queryByHook('value');

        // start by correctly rendering all values on the first run
        this.updateInputHeight();

        // fit every element of the collection into the series-chart
        this.el.style.width = (100 / this.collection.length) + '%';
    }
});