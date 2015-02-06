var View = require('ampersand-view');
var templates = require('../../../templates');

module.exports = View.extend({
    template : templates.chart.input.series_item,
    autoRender : true,

    events: {
        'keyup [data-hook=value]': 'changeValue',
        'blur [data-hook=value]': 'changeValue'
    },
    
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

    initialize : function(options){
        this.chartInterfaceModel = options.chartInterfaceModel;
        // console.log(options);

        // catch the changes on the model
        this.listenTo(this.model, 'change:value', this.valueChanged);
        this.valueChanged();
    },
    render : function(options){
        this.renderWithTemplate();

        this.valueEl = this.queryByHook('value');
        //console.log('rendering');
    },

    valueChanged: function () {
        // NOTE: not sure why this is triggered 4 times on a single change

        // set our limit
        // (to be placed into changeValue as well)
        var smallestAllowed = -1000000000;
        var largestAllowed = 1000000000;

        // start with big number for reduction later
        var minValue = largestAllowed;
        // start with small number to be increased later
        var maxValue = smallestAllowed;

        // find the smallest and largest value
        this.chartInterfaceModel.dataSet.forEach(function(model){
            model.series.forEach(function(series_item){
                maxValue = Math.max(maxValue, series_item.value);
                minValue = Math.min(minValue, series_item.value);
            });
        });

        // save it
        this.chartInterfaceModel.minDataSetValue = minValue;
        this.chartInterfaceModel.maxDataSetValue = maxValue;
    },

    // save the new Value to the model
    changeValue: function () {
        var val = this.valueEl.value.trim();
        if (val) {
            this.model.set({
                value: val
            });
        } else {
            //
        }
    }
});