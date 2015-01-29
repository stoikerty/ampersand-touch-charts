var View = require('ampersand-view');
var templates = require('../../../templates');
var SeriesView = require('./series');

module.exports = View.extend({
    template : templates.chart.input.dataSetItem,
    autoRender : true,

    bindings: {
        'model.label': {
            type: 'value',
            hook: 'title'
        }
    },
    
    initialize : function(){
    },
    render : function(options){
        this.renderWithTemplate();

        this.renderCollection(
            this.model.collection,
            SeriesView,
            this.queryByHook('series')
        );
    }
});