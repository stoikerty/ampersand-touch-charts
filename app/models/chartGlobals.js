var AmpersandState = require('ampersand-state');

module.exports = AmpersandState.extend({
    props : {
        id : 'string',
        minDataSetValue : 'integer',
        maxDataSetValue : 'integer',
        renderCSS : 'boolean'
    }
});