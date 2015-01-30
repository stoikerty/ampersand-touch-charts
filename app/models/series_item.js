var AmpersandState = require('ampersand-state');

module.exports = AmpersandState.extend({
    // initialize: function () {
    //     // Listen to changes to the current item
    //     this.listenTo(this, 'change', this.handleUpdate);
    //     // We also want to calculate these values once on init
    //     this.handleUpdate();

    //     window.state = this;
    // },
    // handleUpdate : function(){

    //     console.log('item changed');
    //     console.log(window.chartGlobals);
    // },
    props : {
        id : 'string',
        name : 'string',
        value : 'integer'
    }
});