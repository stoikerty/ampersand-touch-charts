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
                this.updateSeriesItems();
                this.updateScaleNumbers();    
            },
            hook: 'value'
        }
    },

    round : function(x, digits){
        return parseFloat(x.toFixed(digits));
    },

    // update all items to use the correct height
    // by triggering a change on their model
    updateSeriesItems : function(){
        this.model.dataSet.forEach(function(model){
            model.series.forEach(function(series_item){
                series_item.trigger('change');
            });
        });
    },

    // make the text in the numbers scale reflect the item values
    updateScaleNumbers : function(){
        for (i = 0; i < this.allNumberElements.length; i++){
            var selected = this.allNumberElements.length - (i + 1);
            var maxNumber = this.model.maxDataSetValue;
            var percentage = ((i+1) / (this.allNumberElements.length));

            this.allNumberElements[selected].innerText = this.round((maxNumber * percentage), 0);
        }
    },

    initialize : function(){
    },
    render : function(options){
        this.renderWithTemplate();

        // cache scale number elements
        this.allNumberElements = this.queryAll('[data-hook="scale-number"]');
        this.updateScaleNumbers();

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