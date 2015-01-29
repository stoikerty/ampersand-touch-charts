var Collection = require('ampersand-collection');
var dataSet_item = require('./dataSet_item');

module.exports = Collection.extend({
    model: dataSet_item
});