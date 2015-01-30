var View = require('ampersand-view');
var templates = require('../templates');
var InputView = require('./chart/input');
var OutputView = require('./chart/output');

/*               */
var DataSetCollection = require('../models/dataSet');
window.dataSetCollection = new DataSetCollection();
var SeriesCollection = require('../models/series');

dataSetCollection.add({
    id : '0',
    caption : '5 inch gloss'
});
dataSetCollection.at(0).series = new SeriesCollection();
dataSetCollection.at(0).series.add({ id : '0', name : 'Orders', value : 50 });
dataSetCollection.at(0).series.add({ id : '1', name : 'Items', value : 700 });

dataSetCollection.add({
    id : '1',
    caption : '5 inch lustre'
});
dataSetCollection.at(1).series = new SeriesCollection();
dataSetCollection.at(1).series.add({ id : '0', name : 'Orders', value : 30 });
dataSetCollection.at(1).series.add({ id : '1', name : 'Items', value : 500 });

dataSetCollection.add({
    id : '2',
    caption : '6 inch gloss'
});
dataSetCollection.at(2).series = new SeriesCollection();
dataSetCollection.at(2).series.add({ id : '0', name : 'Orders', value : 40 });
dataSetCollection.at(2).series.add({ id : '1', name : 'Items', value : 600 });

dataSetCollection.add({
    id : '3',
    caption : '6 inch lustre'
});
dataSetCollection.at(3).series = new SeriesCollection();
dataSetCollection.at(3).series.add({ id : '0', label : 'Orders', value : 60 });
dataSetCollection.at(3).series.add({ id : '1', label : 'Items', value : 900 });


module.exports = View.extend({
    template : templates.chart.interface,
    autoRender : true,

    initialize : function(){
    },
    render : function(options){
        this.renderWithTemplate();

        console.log('outputting interface + some css');

        this.inputEl = this.queryByHook("input-container");
        this.outputEl = this.queryByHook("output-container");

        console.log(this.inputEl);
        console.log(this.outputEl);

        // create the interface view
        this.view = new InputView({
            el : this.inputEl,
            collection : dataSetCollection
        });

        this.view = new OutputView({
            el : this.outputEl,
            collection : dataSetCollection
        });
    }
});