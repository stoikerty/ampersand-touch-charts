var View = require('ampersand-view');
var templates = require('../../../templates');
var DataSet_itemView = require('./dataSet_item');

module.exports = View.extend({
    template : templates.chart.output.dataSet,
    autoRender : true,
    
    bindings: {
        // 'model.maxDataSetValue': {
        //     type: 'text',
        //     hook: 'scale-number-max'
        // },
        'model.minDataSetValue': {
            type: 'text',
            hook: 'scale-number-min'
        },
        'model.maxDataSetValue': {
            type: function (el, value, previousValue) {
                //
                // this.model.dataSet.forEach(function(model){
                //     window.currentSeries(model.series);
                //     model.series.forEach(function(series_item){
                //         window.currentItem(series_item);
                //     });
                // });
                this.render();
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