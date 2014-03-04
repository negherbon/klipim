var s, 
Klipim = {

    settings: {
        numArticles: 10,
        targetStickersList: $('#stickers-list'),
        jsonURL: 'public/json/stickers.json'
    },

    init: function() {
        s = this.settings;
        this.readStickers();
    },

    readStickers: function() {
        var stickersHTML = '';
        $.getJSON(s.jsonURL, function(json) {
            
            $.each(json['stickers'], function(index, value) {
                stickersHTML += '<li class="sticker-item sticker-' + index + '">' +
                                '<img class="sticker-item-image" src="stickers/' + value[0].path + '" />' +
                                '</li>';
            });

            s.targetStickersList.html(stickersHTML);
        });
    }

};
;(function( window, document, undefined ) {

"use strict";

var inProduction = 'klip.im' === window.location.hostname;
var inDevMode = ( '?development' === window.location.search );
var inProductionAndNotDevMode = inProduction && ! inDevMode;

if( inProductionAndNotDevMode ) {
    window.console = console || {};
    console.assert = console.clear = console.constructor = console.count = console.debug = console.dir = console.dirxml = console.error = console.group = console.groupCollapsed = console.groupEnd = console.info = console.log = console.markTimeline = console.profile = console.profileEnd = console.table = console.time = console.timeEnd = console.timeStamp = console.timeline = console.timelineEnd = console.trace = console.warn = function() { return false; };
}

// -------------------------------------------

var App = (function() {

return {

    init : function init() {
        window.Klipim.init();
    }

}; // return

})(); // klipim

document.addEventListener( 'DOMContentLoaded', function() {
    App.init();
});

})( window, document );