var View = require('ampersand-view');
var templates = require('../../../templates');

module.exports = View.extend({
    template : templates.chart.input.seriesItem,
    autoRender : true,

    initialize : function(){
    },
    render : function(options){
        this.renderWithTemplate();

        // console.log('item : ',
        //     this.model.label,
        //     this.model.value
        // );
    }
});