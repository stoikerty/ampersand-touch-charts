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
    },
    render : function(options){
        this.renderWithTemplate();


        // catch the topmost parent model through options object
        // log it to make sure it's working
        console.log(this.chartInterfaceModel.minDataSetValue);
        // see if we can catch the changes on the model
        this.listenTo(this.model, 'change:value', this.changed);


        this.valueEl = this.queryByHook('value');
    },

    // 'save' point.
    changed: function () {
        console.log('model changed');

        // now we can check for a min and max value
        // and save it to the parent model
        this.chartInterfaceModel.minDataSetValue = this.model.value;
        console.log(this.chartInterfaceModel.minDataSetValue);
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