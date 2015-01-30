var View = require('ampersand-view');
var templates = require('../../../templates');
var DataSet_itemView = require('./dataSet_item');

module.exports = View.extend({
    template : templates.chart.input.dataSet,
    autoRender : true,

    initialize : function(){
    },
    render : function(options){
        this.renderWithTemplate();
        
        console.log('dataSet');

        this.renderCollection(
            this.collection,
            DataSet_itemView,
            this.queryByHook('dataSet')
        );
    }
});