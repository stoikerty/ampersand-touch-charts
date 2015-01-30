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

        // render one dataSet_item for each existing data-set
        // this.view = new DataSet_itemView({
        //     el : this.queryByHook('dataSet'),
        //     collection : this.collection
        // });

        this.renderCollection(
            this.collection,
            DataSet_itemView,
            this.queryByHook('dataSet')
        );
    }
});