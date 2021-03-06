var View = require('ampersand-view');
var templates = require('../../../templates');
var DataSet_itemView = require('./dataSet_item');
var debounce = require('amp-debounce');

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

    // ---
    // Utilities
    // ---

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

    animateUpdatedElement : function(element, number) {
        if (element){
            // animate element out of view
            element.childNodes[0].classList.add('updated');
            setTimeout(function(){
                // update element text
                element.childNodes[0].innerText = element.childNodes[0].textContent = number;
                // animate element into view again
                element.childNodes[0].classList.remove('updated');
            }, 200);
        }
    },

    // ---
    // Adapt the number-scale to use the right numbers
    // ---

    // update all items to use the correct height
    // by triggering a change on their model
    updateSeriesItems : function(){
        this.model.dataSet.forEach(function(model){
            model.series.forEach(function(series_item){
                series_item.trigger('change');
                series_item.trigger('maxValueChanged');
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
            var percentage = ((i+1) / this.allNumberElements.length);

            // update with a sensibly rounded number
            var roundedNumber = this.round((maxNumber * percentage), 0);
            if (roundedNumber > 100) roundedNumber = this.round((roundedNumber / 10), 0) * 10;
            
            debounce(
                this.animateUpdatedElement(this.allNumberElements[selected], roundedNumber)
            , 500);

            // set it into the correct position
            percentage = (i / this.allNumberElements.length);
            var pixelPercentage = this.round((parentContainerHeight * percentage), 0);
            this.translate(this.allNumberElements[i], 0, pixelPercentage);
        }

        // also animate null element and put it in its correct position
        debounce(
            this.animateUpdatedElement(this.nullNumberElement, 0)
        , 500);
        this.translate(this.nullNumberElement, 0, parentContainerHeight);
    },

    // ---

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