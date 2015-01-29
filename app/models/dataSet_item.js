var AmpersandState = require('ampersand-state');
var Series = require('./series');

module.exports = AmpersandState.extend({
    props : {
        id : 'string',
        title : 'string',
        series : new Series
    }
});