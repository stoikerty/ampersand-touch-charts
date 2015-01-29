var Collection = require('ampersand-collection');
var dataSetItem = require('./data-set-item');

module.exports = Collection.extend({
    model: dataSetItem
});