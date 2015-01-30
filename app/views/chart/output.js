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
        
        console.log('output');

        this.view = new DataSetView({
            el : this.queryByHook('output-container'),
            collection : this.collection
        });
    }
});