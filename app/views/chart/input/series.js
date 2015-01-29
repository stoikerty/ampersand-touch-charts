var View = require('ampersand-view');
var templates = require('../../../templates');
var SeriesItemView = require('./seriesItem');

module.exports = View.extend({
    template : templates.chart.input.series,
    autoRender : true,
    
    initialize : function(options){
    },
    render : function(options){
        this.renderWithTemplate();

        window.currentView = this.renderCollection(
            this.model.series,
            SeriesItemView,
            this.queryByHook('series')
        );
    }
});