
/*
 * HTMLBRElement
 * HTML5: 4.5.3 The hr Element
 * http://dev.w3.org/html5/spec/Overview.html#the-br-element
 */
 
(function(){
    
var log = Envjs.logger();

Envjs.once('tick', function(){
    log = Envjs.logger('Envjs.HTML.HTMLBRElement').
		debug('HTMLBRElement available');    
});

exports.HTMLBRElement = HTMLBRElement = function(ownerDocument) {
    HTMLElement.apply(this, arguments);
};

HTMLBRElement.prototype = new HTMLElement();
__extend__(HTMLBRElement.prototype, {

    // no additional properties or elements
    toString: function() {
        return '[object HTMLBRElement]';
    }
});

}(/*Envjs.HTML.HTMLBRElement*/));
