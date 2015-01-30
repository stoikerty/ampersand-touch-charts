var View = require('ampersand-view');
var templates = require('../../../templates');
var Series_itemView = require('./series_item');

module.exports = View.extend({
    template : templates.chart.input.series,
    autoRender : true,
    
    initialize : function(options){
    },
    render : function(options){
        this.renderWithTemplate();

        //window.currentModel = this.model;

        console.log('   - series');

        window.seriesCollection = this.collection;

        this.renderCollection(
            this.collection,
            Series_itemView,
            this.queryByHook('series')
        );
    }
});