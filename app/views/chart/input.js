var View = require('ampersand-view');
var templates = require('../../templates');
var DataSetView = require('./input/dataSet');

/*               */
var DataSetCollection = require('../../models/dataSet');
window.dataSetCollection = new DataSetCollection();
var SeriesCollection = require('../../models/series');

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
    template : '<div class="input-container" data-hook="input-container"></div>',
    autoRender : true,

    initialize : function(){
    },
    render : function(options){
        this.renderWithTemplate();
        
        console.log('input');

        // this.renderCollection(
        //     dataSetCollection,
        //     DataSetView,
        //     this.queryByHook('input')
        // );

        this.view = new DataSetView({
            el : this.queryByHook('input-container'),
            collection : dataSetCollection
        });
    }
});