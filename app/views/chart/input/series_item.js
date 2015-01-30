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

    initialize : function(){
    },
    render : function(options){
        this.renderWithTemplate();

        this.valueEl = this.queryByHook('value');
    },

    // 'save' point.
    changeValue: function () {
        var val = this.valueEl.value.trim();
        if (val) {
            this.model.set({
                value: val
            });
        } else {
            //this.model.destroy();
        }
    }
});