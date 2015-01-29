var View = require('ampersand-view');
var templates = require('../../../templates');
var DataSet_itemView = require('./dataSet_item');

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
        
        console.log('dataSet');

        this.view = new DataSet_itemView({
            el : this.queryByHook('dataSet'),
            collection : this.model.series
        });

        // this.renderCollection(
        //     this.model.collection,
        //     DataSet_itemView,
        //     this.queryByHook('dataSet')
        // );
    }
});