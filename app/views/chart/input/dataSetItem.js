var View = require('ampersand-view');
var templates = require('../../../templates');
var SeriesView = require('./seriesItem');

module.exports = View.extend({
    template : templates.chart.input.series,
    autoRender : true,

    initialize : function(){
    },
    render : function(options){
        this.renderWithTemplate();

        this.renderCollection(
            this.collection,
            SeriesView,
            this.queryByHook('series')
        );
    }
});