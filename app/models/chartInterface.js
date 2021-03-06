var AmpersandState = require('ampersand-state');
var DataSet = require('./dataSet');

module.exports = AmpersandState.extend({
    props : {
        id : 'string',
        minDataSetValue : 'integer',
        maxDataSetValue : 'integer'
    },
    collections : {
        dataSet : DataSet
    }
});