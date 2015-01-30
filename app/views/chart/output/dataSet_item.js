var View = require('ampersand-view');
var templates = require('../../../templates');
var SeriesView = require('./series');

module.exports = View.extend({
    template : templates.chart.output.dataSet_item,
    autoRender : true,
    
    bindings: {
        'model.caption': {
            type: 'text',
            hook: 'caption'
        }
    },
    
    initialize : function(){
    },
    render : function(options){
        this.renderWithTemplate();

        this.view = new SeriesView({
            el : this.queryByHook('series-container'),
            collection : this.model.series
        });
    }
});