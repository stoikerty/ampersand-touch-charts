var View = require('ampersand-view');
var templates = require('../../templates');
var DataSetView = require('./output/dataSet');

module.exports = View.extend({
    template : '<div class="output-container" data-hook="output-container"></div>',
    autoRender : true,

    initialize : function(){
    },
    render : function(options){
        this.renderWithTemplate();

        this.view = new DataSetView({
            el : this.queryByHook('output-container'),
            model : this.model
        });
    }
});