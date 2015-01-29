var View = require('ampersand-view');
var templates = require('../templates');

/*

Code is working,
let's comment it out for later extension & use

*/
/*
var DataSetModel = require('../models/data-set');
var SeriesItemModel = require('../models/series-item');

window.dataSetModel = new DataSetModel({
    id : '1',
    title : '5 inch gloss',
    seriesList : ['series-a', 'series-b'],
});

window.seriesItemModel = new SeriesItemModel({
    id : '1',
    label : 'Orders',
    value : 500
});

// see what is inside the state models
console.log(dataSetModel.serialize());
console.log(seriesItemModel.serialize());
*/

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