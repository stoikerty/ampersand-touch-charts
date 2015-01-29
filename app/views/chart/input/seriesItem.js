var View = require('ampersand-view');
var templates = require('../../../templates');

module.exports = View.extend({
    template : templates.chart.input.seriesItem,
    autoRender : true,

    initialize : function(){
    },
    render : function(options){
        this.renderWithTemplate();

        //console.log(this.model);

        //console.log(this.collection.serialize());

        // console.log('item : ',
        //     this.model.label,
        //     this.model.value
        // );
    }
});