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
    
    initialize : function(options){
        this.chartInterfaceModel = options.chartInterfaceModel;
    },
    render : function(options){
        //console.log(this.chartInterfaceModel.renderCSS);
        //if (!this.chartInterfaceModel.renderCSS){
            this.renderWithTemplate();
        //}

        this.view = new SeriesView({
            el : this.queryByHook('series-container'),
            collection : this.model.series,
            chartInterfaceModel : this.chartInterfaceModel//,
            //options : options
        });
    }
});