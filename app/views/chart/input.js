var View = require('ampersand-view');
var templates = require('../../templates');
var InputDataSetView = require('./input/dataSet');

module.exports = View.extend({
    template : '<div data-hook="input-container"></div>',
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