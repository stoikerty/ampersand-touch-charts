var View = require('ampersand-view');
var templates = require('../templates');

var DataSetModel = require('../models/data-set');

window.dataSetModel = new DataSetModel({
    id : '1',
    title : '5 inch gloss',
    seriesList : ['series-a', 'series-b'],
});

// see what is inside the state model
console.log(dataSetModel.serialize());


module.exports = View.extend({
    template : templates.body,
    autoRender : true,
    initialize : function(){
        document.title = '{ Project }';
    },
    render : function(options){
        var self = this;
        this.renderWithTemplate();
        
        console.log('document body rendered');
    }
});