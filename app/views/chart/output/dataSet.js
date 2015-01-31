var View = require('ampersand-view');
var templates = require('../../../templates');
var DataSet_itemView = require('./dataSet_item');

module.exports = View.extend({
    template : templates.chart.output.dataSet,
    autoRender : true,
    
    bindings: {
        'model.minDataSetValue': {
            type: 'text',
            hook: 'scale-number-min'
        },
        'model.maxDataSetValue': {
            type: function (el, value, previousValue) {
                this.updateSeriesItems();
                this.updateScaleNumbers();    
            },
            hook: 'value'
        }
    },

    round : function(x, digits){
        return parseFloat(x.toFixed(digits));
    },

    translate : function(element, x, y) {
        element.style["-webkit-transform"] = "translate(" + x + "px, " + y + "px)";
        element.style["-moz-transform"]    = "translate(" + x + "px, " + y + "px)";
        element.style["-ms-transform"]     = "translate(" + x + "px, " + y + "px)";
        element.style["-o-transform"]      = "translate(" + x + "px, " + y + "px)";
        element.style["transform"]         = "translate(" + x + "px, " + y + "px)";
    },

    // update all items to use the correct height
    // by triggering a change on their model
    updateSeriesItems : function(){
        this.model.dataSet.forEach(function(model){
            model.series.forEach(function(series_item){
                series_item.trigger('change');
            });
        });
    },

    // make the text in the numbers scale reflect the item values
    updateScaleNumbers : function(){
        var parentContainerHeight =
            this.nullNumberElement.parentElement.clientHeight
            - this.nullNumberElement.clientHeight;

        for (i = 0; i < this.allNumberElements.length; i++){
            var selected = this.allNumberElements.length - (i + 1);
            var maxNumber = this.model.maxDataSetValue;
            var percentage = ((i+1) / (this.allNumberElements.length));

            var roundedNumber = this.round(((maxNumber) * percentage), 0);
            if (roundedNumber > 100) roundedNumber = this.round((roundedNumber / 10), 0) * 10;
            if (roundedNumber > 1000) roundedNumber = this.round((roundedNumber / 100), 0) * 100;
            this.allNumberElements[selected].innerText = roundedNumber;

            percentage = ((i) / (this.allNumberElements.length));
            var pixelPercentage = this.round((parentContainerHeight * percentage), 0);
            this.translate(this.allNumberElements[i], 0, pixelPercentage);
        }
        this.nullNumberElement.innerText = 0;
        this.translate(this.nullNumberElement, 0, parentContainerHeight);
    },

    initialize : function(){
    },
    render : function(options){
        this.renderWithTemplate();

        // cache scale number elements
        this.allNumberElements = this.queryAll('[data-hook="scale-number"]');
        this.nullNumberElement = this.query('[data-hook="scale-null"]');
        this.updateScaleNumbers();

        this.renderCollection(
            this.model.dataSet,
            DataSet_itemView,
            this.queryByHook('dataSet'),
            {
                viewOptions : {
                    chartInterfaceModel : this.model
                }
            }
        );
    }
});