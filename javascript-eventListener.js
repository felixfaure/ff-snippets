function addEventListener(el, eventName, handler) {
    if (el.addEventListener) {
        el.addEventListener(eventName, handler);
    } else {
        //For IE8-
        el.attachEvent('on' + eventName, function(){
            handler.call(el);
        });
    }
}

function removeEventListener(el, eventName, handler) {
    if (el.removeEventListener) {
        el.removeEventListener(eventName, handler);
    } else {
        //For IE8-
        el.detachEvent('on' + eventName, handler);
    }
}
