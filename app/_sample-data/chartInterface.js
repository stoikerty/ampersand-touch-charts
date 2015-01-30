var ChartInterfaceModel = require('../models/chartInterface');
var DataSetCollection = require('../models/dataSet');
var SeriesCollection = require('../models/series');


var chartInterface = new ChartInterfaceModel();
//window.chartInterface = chartInterface;

chartInterface.minDataSetValue = 0;
chartInterface.maxDataSetValue = 0;
chartInterface.renderCSS = false;
chartInterface.dataSet = new DataSetCollection();

chartInterface.dataSet.add({
    id : '0',
    caption : '5 inch gloss'
});
chartInterface.dataSet.at(0).series = new SeriesCollection();
chartInterface.dataSet.at(0).series.add({ id : '0', name : 'Orders', value : 50 });
chartInterface.dataSet.at(0).series.add({ id : '1', name : 'Items', value : 700 });
chartInterface.dataSet.at(0).series.add({ id : '2', name : 'Extra', value : 400 });

chartInterface.dataSet.add({
    id : '1',
    caption : '5 inch lustre'
});
chartInterface.dataSet.at(1).series = new SeriesCollection();
chartInterface.dataSet.at(1).series.add({ id : '0', name : 'Orders', value : 30 });
chartInterface.dataSet.at(1).series.add({ id : '1', name : 'Items', value : 500 });
chartInterface.dataSet.at(1).series.add({ id : '2', name : 'Extra', value : 300 });

chartInterface.dataSet.add({
    id : '2',
    caption : '6 inch gloss'
});
chartInterface.dataSet.at(2).series = new SeriesCollection();
chartInterface.dataSet.at(2).series.add({ id : '0', name : 'Orders', value : 40 });
chartInterface.dataSet.at(2).series.add({ id : '1', name : 'Items', value : 600 });
chartInterface.dataSet.at(2).series.add({ id : '2', name : 'Extra', value : 200 });

chartInterface.dataSet.add({
    id : '3',
    caption : '6 inch lustre'
});
chartInterface.dataSet.at(3).series = new SeriesCollection();
chartInterface.dataSet.at(3).series.add({ id : '0', name : 'Orders', value : 60 });
chartInterface.dataSet.at(3).series.add({ id : '1', name : 'Items', value : 900 });
chartInterface.dataSet.at(3).series.add({ id : '2', name : 'Extra', value : 100 });

module.exports = chartInterface;