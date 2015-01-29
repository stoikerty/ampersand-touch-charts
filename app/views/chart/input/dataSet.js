var View = require('ampersand-view');
var templates = require('../../../templates');
var DataSetItemView = require('./dataSetItem');

module.exports = View.extend({
    template : templates.chart.input.dataSet,
    autoRender : true,

    initialize : function(){
    },
    render : function(options){
        this.renderWithTemplate();

        this.renderCollection(
            this.collection.at(0).series,
            DataSetItemView,
            this.queryByHook('data-set')
        );
    }
});