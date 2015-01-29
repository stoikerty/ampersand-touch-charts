var View = require('ampersand-view');
var templates = require('../templates');
var ChartInterfaceView = require('./chart-interface');

/*

Code is working,
let's comment it out for later extension & use

*/
/*
var SeriesItemModel = require('../models/series-item');

window.seriesItemModel = new SeriesItemModel({
    id : '1',
    label : 'Orders',
    value : 500
});

// see what is inside the state models
console.log(seriesItemModel.serialize());
*/


var DataSetCollection = require('../models/data-set');
var dataSetCollection = new DataSetCollection();
var SeriesCollection = require('../models/series');

dataSetCollection.add({
    id : '0',
    title : '5 inch gloss',
    series : new SeriesCollection(),
});

dataSetCollection.at(0).series.add({ id : '0', label : 'Orders', value : 50 });
dataSetCollection.at(0).series.add({ id : '1', label : 'Orders', value : 10 });
dataSetCollection.at(0).series.add({ id : '2', label : 'Orders', value : 30 });
dataSetCollection.at(0).series.add({ id : '3', label : 'Orders', value : 60 });

dataSetCollection.add({
    id : '1',
    title : '5 inch lustre',
    series : new SeriesCollection(),
});

dataSetCollection.at(1).series.add({ id : '0', label : 'Items', value : 800 });
dataSetCollection.at(1).series.add({ id : '1', label : 'Items', value : 500 });
dataSetCollection.at(1).series.add({ id : '2', label : 'Items', value : 600 });
dataSetCollection.at(1).series.add({ id : '3', label : 'Items', value : 1200 });

module.exports = View.extend({
    template : templates.body,
    autoRender : true,
    initialize : function(){
        document.title = '{ Project }';
    },
    render : function(options){
        this.renderWithTemplate();
        
        console.log('document body rendered');

        this.interfaceContainerEl = this.queryByHook("interface-container");

        // create the interface view
        this.view = new ChartInterfaceView({
            el : this.interfaceContainerEl,
            collection : dataSetCollection
        });
    }
});