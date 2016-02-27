// ================================================================================
// Find
// ================================================================================
// http://lea.verou.me/2015/04/jquery-considered-harmful/
function $(expr, container) {
    return typeof expr === "string" ? (container || document).querySelector(expr) : expr || null;
}
function $$(expr, container) {
    return [].slice.call((container || document).querySelectorAll(expr));
}

// http://blog.garstasio.com/you-dont-need-jquery/selectors/
function $(selector) {
    var selectorType = 'querySelectorAll';
    if (selector.indexOf('#') === 0) {
        selectorType = 'getElementById';
        selector = selector.substr(1, selector.length);
    }
    return document[selectorType](selector);
};

// Perso
function $(selector, container) {
    if (selector.indexOf('#') === 0) return document.getElementById(selector.substr(1, selector.length));
    return (container || document).querySelector(selector);
};
function $$(selector, container) {
    return (container || document).querySelectorAll(selector);
}


// ================================================================================
// Closest
// ================================================================================
//Plutôt utilisé le polyfill : https://github.com/jonathantneal/closest
function getClosest(elem, selector) {
    if(!elem) return false;
    var firstChar = selector.charAt(0);
    for ( ; elem && elem !== document; elem = elem.parentNode ) {
        if (
            firstChar === '.' && ffclass.has(elem, selector.substr(1))
            || firstChar === '#' && elem.id === selector.substr(1)
            || firstChar === '[' && elem.hasAttribute( selector.substr(1, selector.length - 2) )
            || elem.tagName.toLowerCase() === selector
        ) {
            return elem;
        }
    }
    return false;
}


// ================================================================================
// Siblings
// ================================================================================
function siblings(el) {
  return Array.prototype.filter.call(el.parentNode.children, function(child){
    return child !== el;
  });
}
