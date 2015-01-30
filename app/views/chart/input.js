var View = require('ampersand-view');
var templates = require('../../templates');
var DataSetView = require('./input/dataSet');

/*               */
var DataSetCollection = require('../../models/dataSet');
window.dataSetCollection = new DataSetCollection();
var SeriesCollection = require('../../models/series');

dataSetCollection.add({
    id : '0',
    title : '5 inch gloss'
});
dataSetCollection.at(0).series = new SeriesCollection();
dataSetCollection.at(0).series.add({ id : '0', label : 'Orders', value : 50 });
dataSetCollection.at(0).series.add({ id : '1', label : 'Items', value : 700 });

dataSetCollection.add({
    id : '1',
    title : '5 inch lustre'
});
dataSetCollection.at(1).series = new SeriesCollection();
dataSetCollection.at(1).series.add({ id : '0', label : 'Orders', value : 30 });
dataSetCollection.at(1).series.add({ id : '1', label : 'Items', value : 500 });

dataSetCollection.add({
    id : '2',
    title : '6 inch gloss'
});
dataSetCollection.at(2).series = new SeriesCollection();
dataSetCollection.at(2).series.add({ id : '0', label : 'Orders', value : 40 });
dataSetCollection.at(2).series.add({ id : '1', label : 'Items', value : 600 });

dataSetCollection.add({
    id : '3',
    title : '6 inch lustre'
});
dataSetCollection.at(3).series = new SeriesCollection();
dataSetCollection.at(3).series.add({ id : '0', label : 'Orders', value : 60 });
dataSetCollection.at(3).series.add({ id : '1', label : 'Items', value : 900 });



module.exports = View.extend({
    template : '<div class="input" data-hook="input"></div>',
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
            el : this.queryByHook('input'),
            collection : dataSetCollection
        });
    }
});