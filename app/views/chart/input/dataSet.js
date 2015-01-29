var View = require('ampersand-view');
var templates = require('../../../templates');
var DataSetItemView = require('./dataSetItem');

module.exports = View.extend({
    template : templates.chart.input.dataSet,
    autoRender : true,
    
    bindings: {
        'model.title': {
            type: 'text',
            hook: 'title'
        }
    },

    initialize : function(){
    },
    render : function(options){
        this.renderWithTemplate();

        this.renderCollection(
            this.model.collection,
            DataSetItemView,
            this.queryByHook('data-set')
        );
    }
});