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

        this.view = new DataSetView({
            el : this.queryByHook('input-container'),
            model : this.model
        });
    }
});