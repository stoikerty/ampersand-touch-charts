var View = require('ampersand-view');
var templates = require('../../../templates');
var SeriesView = require('./series');

module.exports = View.extend({
    template : templates.chart.input.dataSet_item,
    autoRender : true,
    
    initialize : function(){
    },
    render : function(options){
        this.renderWithTemplate();

        // this.view = new SeriesView({
        //     el : this.queryByHook('series'),
        //     model : this.model
        // });
        
        console.log(' - dataSet_item');

        // this.renderCollection(
        //     this.collection,
        //     SeriesView,
        //     this.queryByHook('dataSet_item')
        // );

        this.view = new SeriesView({
            el : this.queryByHook('series-container'),
            collection : this.model.series
        });
    }
});