var View = require('ampersand-view');
var templates = require('../../templates');
var InputDataSetView = require('./input/dataSet');

module.exports = View.extend({
    template : '<div class="input" data-hook="input"></div>',
    autoRender : true,

    initialize : function(){
    },
    render : function(options){
        this.renderWithTemplate();
        
        console.log('input');

        this.renderCollection(
            this.collection,
            InputDataSetView,
            this.queryByHook('input-container')
        );
    }
});