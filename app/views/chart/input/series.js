var View = require('ampersand-view');
var templates = require('../../../templates');
var SeriesItemView = require('./seriesItem');

module.exports = View.extend({
    template : templates.chart.input.series,
    autoRender : true,

    initialize : function(){
    },
    render : function(options){
        this.renderWithTemplate();
        

        this.renderCollection(
            this.collection,
            SeriesItemView,
            this.queryByHook('series')
        );
    }
});