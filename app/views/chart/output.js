var View = require('ampersand-view');
var templates = require('../../templates');

module.exports = View.extend({
    template : templates.chart.output.dataSet,
    autoRender : true,

    initialize : function(){
    },
    render : function(options){
        this.renderWithTemplate();

        console.log('output: dataSet');
    }
});