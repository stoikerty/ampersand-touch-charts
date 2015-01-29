var View = require('ampersand-view');
var templates = require('../../../templates');
var SeriesItemView = require('./seriesItem');

module.exports = View.extend({
    template : '<ul class="series" data-hook="series"></ul>',
    autoRender : true,

    initialize : function(){
    },
    render : function(options){
        this.renderWithTemplate();

        console.log(this.title);

        this.renderCollection(
            this.collection,
            SeriesItemView,
            this.queryByHook('series')
        );
    }
});