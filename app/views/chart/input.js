var View = require('ampersand-view');
var templates = require('../../templates');
var DataSetView = require('./input/dataSet');

module.exports = View.extend({
    template : '<div class="input-container" data-hook="input-container"></div>',
    autoRender : true,

    initialize : function(){
    },
    render : function(options){
        this.renderWithTemplate();
        
        console.log('input');

        this.view = new DataSetView({
            el : this.queryByHook('input-container'),
            collection : this.collection
        });
    }
});