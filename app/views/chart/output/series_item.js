var View = require('ampersand-view');
var templates = require('../../../templates');
var Hammer = require('hammerjs');
var debounce = require('amp-debounce');

module.exports = View.extend({
    template : templates.chart.output.series_item,
    autoRender : true,
    renderCSSonly : false,

    bindings: {
        'model.name': {
            type: 'text',
            hook: 'name'
        },
        'model.value': {
            type: function (el, value, previousValue) {
                // when the model changes, don't re-render,
                // only change the height for the element
                //debounce(this.updateStyle(el), 500);
            },
            hook: 'value'
        }
    },

    // ---
    // Utilities
    // ---

    round : function(x, digits){
        if (x < 1) x = 0;
        return parseFloat(x.toFixed(digits));
    },

    scale : function(element, x, y) {
        element.style["-webkit-transform"] = "scale(" + x + ", " + y + ")";
        element.style["-moz-transform"]    = "scale(" + x + ", " + y + ")";
        element.style["-ms-transform"]     = "scale(" + x + ", " + y + ")";
        element.style["-o-transform"]      = "scale(" + x + ", " + y + ")";
        element.style["transform"]         = "scale(" + x + ", " + y + ")";
    },

    // ---
    // handle logic
    // ---

    registerHandleEvents : function(){
        var self = this;
        this.hammer = new Hammer(this.handleEl);

        this.hammer.get('pan').set({ direction: Hammer.DIRECTION_ALL, threshold : 0 });
        this.hammer.get('press').set({ time: 1 });

        this.hammer.on('press', function(e) {
            e.preventDefault();
            self.startHandle();
            return false;
        });

        this.hammer.on('panup pandown', function(e) {
            e.preventDefault();
            self.updateHandle(e);
            return false;
        });

        this.hammer.on('panend', function(e) {
            e.preventDefault();
            self.stopHandle();
            return false;
        });

        this.hammer.on('pressup', function(e) {
            e.preventDefault();
            self.stopHandle();
            return false;
        });
    },

    handleStartValue : 0,
    handleCurrentValue : 0,
    handleActive : false,

    startHandle : function(event){
        this.handleEl.classList.add('is-touched');
        this.valueEl.classList.add('is-touched');
        document.body.classList.add('disable-selection');

        this.handleStartValue = this.model.value;
        this.handleCurrentValue = this.model.value;
        this.handleActive = true;
    },

    maxValueChanged : function(event){
        // when the max value for chart data has been changed,
        // we need to update the handleStartValue
        if (this.handleActive && (this.model.value <= this.handleStartValue)){
            // use the last cursor position's model.value as the new start value
            this.handleStartValue = this.handleCurrentValue;
            this.handleEl.classList.remove('is-moving-up');
            this.handleEl.classList.remove('is-moving-down');
        }
    },

    updateHandle : function(event){
        // always keep the last model.value acted upon for later use
        // see the function above
        this.handleCurrentValue = this.model.value;

        // first, get the current percent and pixel values
        var valueHeightPercentage = (this.handleStartValue / this.chartInterfaceModel.maxDataSetValue * 100);
        var valueHeightPixels = this.el.clientHeight / 100 * valueHeightPercentage;
        var newValueHeightPercentage = 0;

        // retrieve how much the handle has moved
        var handlePixelMovement = -event.deltaY || 0;
        
        // add it to the current value height
        valueHeightPixels = valueHeightPixels + handlePixelMovement;

        // convert it into a percentage value
        newValueHeightPercentage = valueHeightPixels / this.el.clientHeight * 100;

        // // and then convert it back into a model value for display
        this.model.value = this.round((this.chartInterfaceModel.maxDataSetValue / 100) * newValueHeightPercentage, 0);

        if (newValueHeightPercentage > (valueHeightPercentage + 10)) {
            this.handleEl.classList.add('is-moving-up');
        } else if (newValueHeightPercentage < (valueHeightPercentage - 10)) {
            this.handleEl.classList.add('is-moving-down');
        } else {
            this.handleEl.classList.remove('is-moving-up');
            this.handleEl.classList.remove('is-moving-down');
        }

        //console.log('distance: ' + this.round(event.deltaY, 0) + ' - percentage: ' + this.round(this.el.clientHeight / event.deltaY, 0));
    },

    stopHandle : function(event){
        this.handleEl.classList.remove('is-touched');
        this.valueEl.classList.remove('is-touched');
        this.handleEl.classList.remove('is-moving-up');
        this.handleEl.classList.remove('is-moving-down');
        document.body.classList.remove('disable-selection');

        this.handleStartValue   = 0;
        this.handleCurrentValue = 0;
        this.handleActive = false;
    },

    // ---
    // update the height of a bar when the model changes
    // ---

    updateStyle : function(){
        this.valueEl = this.valueEl || this.el;

        // transform the bar-height to the approriate % value
        if (this.chartInterfaceModel.maxDataSetValue == 0){
            this.scale(this.valueEl, 1, 0);
        } else {
            var currentHeightPercentage = (this.model.value / this.chartInterfaceModel.maxDataSetValue);
            //this.valueEl.style.height = currentHeightPercentage + '%';
            this.scale(this.valueEl, 1, currentHeightPercentage);
        }

        // fit every element of the collection into the series-chart
        this.el.style.width = (100 / this.collection.length) + '%';

        this.handleValueEl = this.handleValueEl || this.queryByHook('handle-value');
        this.handleValueEl.innerText = this.handleValueEl.textContent = this.model.value;
    },

    // ---

    initialize : function(options){
        this.chartInterfaceModel = options.chartInterfaceModel;

        var self = this;
        self.model.on('change', function () {
            //self.updateStyle();
        });
        self.model.on('maxValueChanged', function () {
            self.maxValueChanged();
        });

        // add current Animation to Stack
        app.addAnimation(this, this.updateStyle);
    },
    render : function(options){
        this.renderWithTemplate();

        // cache elements
        this.valueEl = this.queryByHook('value');
        this.handleEl = this.queryByHook('handle');
        this.handleValueEl = this.queryByHook('handle-value');

        // touch events using hammerjs
        this.registerHandleEvents();
    }
});