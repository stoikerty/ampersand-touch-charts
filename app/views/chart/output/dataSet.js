var View = require('ampersand-view');
var templates = require('../../../templates');
var DataSet_itemView = require('./dataSet_item');

module.exports = View.extend({
    template : templates.chart.output.dataSet,
    autoRender : true,
    
    bindings: {
        'model.minDataSetValue': {
            type: 'text',
            hook: 'scale-number-min'
        },
        'model.maxDataSetValue': {
            type: function (el, value, previousValue) {
                // update all items to use the correct height
                // by triggering a change on their model
                this.model.dataSet.forEach(function(model){
                    model.series.forEach(function(series_item){
                        series_item.trigger('change');
                    });
                });                
            },
            hook: 'value'
        }
    },

    initialize : function(){
    },
    render : function(options){
        this.renderWithTemplate();

        this.renderCollection(
            this.model.dataSet,
            DataSet_itemView,
            this.queryByHook('dataSet'),
            {
                viewOptions : {
                    chartInterfaceModel : this.model
                }
            }
        );
    }
});