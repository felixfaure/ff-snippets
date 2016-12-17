//Plutôt utilisé le polyfill : https://github.com/jonathantneal/closest

(function(global) {

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

  if(global.ff) global.ff.closest = getClosest;
  else global.ff = { "closest": getClosest };

})(this);
