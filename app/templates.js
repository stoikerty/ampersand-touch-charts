(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else if (typeof root === 'undefined' || root !== Object(root)) {
        throw new Error('templatizer: window does not exist or is not an object');
    } else {
        root.templatizer = factory();
    }
}(this, function () {
    var jade=function(){function e(e){return null!=e&&""!==e}function n(t){return(Array.isArray(t)?t.map(n):t&&"object"==typeof t?Object.keys(t).filter(function(e){return t[e]}):[t]).filter(e).join(" ")}var t={};return t.merge=function r(n,t){if(1===arguments.length){for(var a=n[0],i=1;i<n.length;i++)a=r(a,n[i]);return a}var o=n["class"],s=t["class"];(o||s)&&(o=o||[],s=s||[],Array.isArray(o)||(o=[o]),Array.isArray(s)||(s=[s]),n["class"]=o.concat(s).filter(e));for(var l in t)"class"!=l&&(n[l]=t[l]);return n},t.joinClasses=n,t.cls=function(e,r){for(var a=[],i=0;i<e.length;i++)a.push(r&&r[i]?t.escape(n([e[i]])):n(e[i]));var o=n(a);return o.length?' class="'+o+'"':""},t.style=function(e){return e&&"object"==typeof e?Object.keys(e).map(function(n){return n+":"+e[n]}).join(";"):e},t.attr=function(e,n,r,a){return"style"===e&&(n=t.style(n)),"boolean"==typeof n||null==n?n?" "+(a?e:e+'="'+e+'"'):"":0==e.indexOf("data")&&"string"!=typeof n?(-1!==JSON.stringify(n).indexOf("&")&&console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"),n&&"function"==typeof n.toISOString&&console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0")," "+e+"='"+JSON.stringify(n).replace(/'/g,"&apos;")+"'"):r?(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+e+'="'+t.escape(n)+'"'):(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+e+'="'+n+'"')},t.attrs=function(e,r){var a=[],i=Object.keys(e);if(i.length)for(var o=0;o<i.length;++o){var s=i[o],l=e[s];"class"==s?(l=n(l))&&a.push(" "+s+'="'+l+'"'):a.push(t.attr(s,l,!1,r))}return a.join("")},t.escape=function(e){var n=String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return n===""+e?e:n},t.rethrow=function a(e,n,t,r){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||r))throw e.message+=" on line "+t,e;try{r=r||require("fs").readFileSync(n,"utf8")}catch(i){a(e,null,t)}var o=3,s=r.split("\n"),l=Math.max(t-o,0),f=Math.min(s.length,t+o),o=s.slice(l,f).map(function(e,n){var r=n+l+1;return(r==t?"  > ":"    ")+r+"| "+e}).join("\n");throw e.path=n,e.message=(n||"Jade")+":"+t+"\n"+o+"\n\n"+e.message,e},t}();

    var templatizer = {};
    templatizer["chart"] = {};
    templatizer["chart"]["input"] = {};
    templatizer["chart"]["output"] = {};

    // body.jade compiled template
    templatizer["body"] = function tmpl_body() {
        return '<body><div data-hook="interface-container" class="interface-container"></div></body>';
    };

    // chart\input\dataSet.jade compiled template
    templatizer["chart"]["input"]["dataSet"] = function tmpl_chart_input_dataSet() {
        return '<div class="dataSet-input"><ul data-hook="dataSet" class="dataSet"></ul></div>';
    };

    // chart\input\dataSet_item.jade compiled template
    templatizer["chart"]["input"]["dataSet_item"] = function tmpl_chart_input_dataSet_item() {
        return '<li class="dataSet_item"><div data-hook="caption" class="caption"></div><div data-hook="series-container" class="series-container"></div></li>';
    };

    // chart\input\series.jade compiled template
    templatizer["chart"]["input"]["series"] = function tmpl_chart_input_series() {
        return '<div class="series-container"><ul data-hook="series" class="series"></ul></div>';
    };

    // chart\input\series_item.jade compiled template
    templatizer["chart"]["input"]["series_item"] = function tmpl_chart_input_series_item() {
        return '<li class="series_item"><div data-hook="name" class="name"></div><input data-hook="value" class="value"/></li>';
    };

    // chart\interface.jade compiled template
    templatizer["chart"]["interface"] = function tmpl_chart_interface() {
        return '<div class="chart-interface"><div class="input"><div data-hook="input-container" class="input-container"></div></div><div class="output"><div data-hook="output-container" class="output-container"> </div></div><div class="explanation"><p>Touch-Charts created with ampersandjs, scss & hammerjs.<br>Find the source code on Github<br><a href="https://github.com/stoikerty/ampersand-touch-charts">https://github.com/stoikerty/ampersand-touch-charts</a></p><p>Jorge Antunes<br><a href="https://twitter.com/stoikerty">@stoikerty</a></p></div></div>';
    };

    // chart\output\dataSet.jade compiled template
    templatizer["chart"]["output"]["dataSet"] = function tmpl_chart_output_dataSet() {
        return '<div class="dataSet-output"><div class="scale"><div class="numbers"><div data-hook="scale-number" class="number max"><div class="value"></div></div><div data-hook="scale-number" class="number"><div class="value"></div></div><div data-hook="scale-number" class="number"><div class="value"></div></div><div data-hook="scale-number" class="number"><div class="value"></div></div><div data-hook="scale-number" class="number"><div class="value"></div></div><div data-hook="scale-number" class="number"><div class="value"></div></div><div data-hook="scale-number" class="number"><div class="value"></div></div><div data-hook="scale-number" class="number"><div class="value"></div></div><div data-hook="scale-number" class="number"><div class="value"></div></div><div data-hook="scale-null" class="number min"><div class="value"></div></div></div></div><ul data-hook="dataSet" class="dataSet"></ul></div>';
    };

    // chart\output\dataSet_item.jade compiled template
    templatizer["chart"]["output"]["dataSet_item"] = function tmpl_chart_output_dataSet_item() {
        return '<li class="dataSet_item"><div data-hook="caption" class="caption"></div><div data-hook="series-container" class="series-container"></div></li>';
    };

    // chart\output\series.jade compiled template
    templatizer["chart"]["output"]["series"] = function tmpl_chart_output_series() {
        return '<div class="series-container"><ul data-hook="series" class="series"></ul></div>';
    };

    // chart\output\series_item.jade compiled template
    templatizer["chart"]["output"]["series_item"] = function tmpl_chart_output_series_item() {
        return '<li class="series_item"><div data-hook="name" class="name"></div><div data-hook="value" class="value"></div><div data-hook="handle" class="handle"><div data-hook="handle-value" class="handle-value"></div></div></li>';
    };

    return templatizer;
}));