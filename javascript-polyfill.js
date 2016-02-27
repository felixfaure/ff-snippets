//Closest & matches
(function (ELEMENT) {
	ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector || function matches(selector) {
		var element = this,
		elements = (element.document || element.ownerDocument).querySelectorAll(selector),
		index = 0;
		while (elements[index] && elements[index] !== element) {
			++index;
		}
		return elements[index] ? true : false;
	};

	ELEMENT.closest = ELEMENT.closest || function closest(selector) {
		var element = this;
		while (element) {
			if (element.matches(selector)) {
				break;
			}
			element = element.parentElement;
		}
		return element;
	};
}(Element.prototype));

//Remove
(function (ELEMENT) {
	ELEMENT.remove = ELEMENT.remove || function remove() {
		if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
	};
}(Element.prototype));

//array.prototype.indexOf (IE8)
if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function(searchElement, fromIndex) {
		var k;
		if (this == null) {
			throw new TypeError('"this" is null or not defined');
		}

		var O = Object(this);

		var len = O.length >>> 0;
		if (len === 0) {
			return -1;
		}

		var n = +fromIndex || 0;
		if (Math.abs(n) === Infinity) {
			n = 0;
		}

		if (n >= len) {
			return -1;
		}

		k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

		while (k < len) {
			if (k in O && O[k] === searchElement) {
				return k;
			}
			k++;
		}
		return -1;
	};
}

//RequestAnimationFrame
//https://gist.github.com/paulirish/1579671
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

//textContent (IE8)
if (Object.defineProperty && Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(Element.prototype, "textContent") && !Object.getOwnPropertyDescriptor(Element.prototype, "textContent").get) {
	(function() {
		var innerText = Object.getOwnPropertyDescriptor(Element.prototype, "innerText");
		Object.defineProperty(Element.prototype, "textContent", {
			get: function() {
				return innerText.get.call(this);
			},
			set: function(s) {
				return innerText.set.call(this, s);
			}
		});
	})();
}


//Fill
//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/fill
if (![].fill) {
  Array.prototype.fill = function(valeur) {

    // Steps 1-2.
    var O = Object(this);

    // Steps 3-5.
    var len = parseInt(O.length);

    // Steps 6-7.
    var debut = arguments[1];
    var debutRelatif = parseInt(debut) || 0;

    // Step 8.
    var k = debutRelatif < 0
            ? Math.max(len + debutRelatif, 0)
            : Math.min(debutRelatif, len);

    // Steps 9-10.
    var fin = arguments[2];
    var finRelative = fin === undefined
                      ? len
                      : (parseInt(fin) || 0);

    // Step 11.
    var final = finRelative < 0
                ? Math.max(len + finRelative, 0)
                : Math.min(finRelative, len);

    // Step 12.
    for (; k < final; k++) {
        O[k] = valeur;
    }

    // Step 13.
    return O;
  };
}


//Find
//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/find
if (!Array.prototype.find) {
  Array.prototype.find = function(predicate) {
    if (this == null) {
      throw new TypeError('Array.prototype.find a été appelé sur null ou undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate doit être une fonction');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}

//FindIndex
//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/findIndex
if (!Array.prototype.findIndex) {
  Array.prototype.findIndex = function(predicate) {
    if (this == null) {
      throw new TypeError('Array.prototype.findIndex appelé sur null ou undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate doit être une fonction');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return i;
      }
    }
    return -1;
  };
}


//Includes
//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/includes
if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement /*, fromIndex*/ ) {
    'use strict';
    var O = Object(this);
    var len = parseInt(O.length) || 0;
    if (len === 0) {
      return false;
    }
    var n = parseInt(arguments[1]) || 0;
    var k;
    if (n >= 0) {
      k = n;
    } else {
      k = len + n;
      if (k < 0) {k = 0;}
    }
    var currentElement;
    while (k < len) {
      currentElement = O[k];
      if (searchElement === currentElement ||
         (searchElement !== searchElement && currentElement !== currentElement)) { {
        // NaN !== NaN
        return true;
      }
      k++;
    }
    return false;
  };
}


//is
//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/is
if (!Object.is) {
  Object.is = function(v1, v2) {
    // Algorithme SameValue
    if (v1 === v2) { //Étapes 1-5, 7-10
      //Étapes 6.b-6.b +0 !=-0
      return v1 !== 0 || 1 / v1 === 1 / v2;
    } else {
      //Étapes 6.a: NaN == NaN
      return v1 !== v1 && v2 !== v2;
    }
  };
}


//ClassList (IE9-, opera mini)
(function () {

	if (typeof window.Element === "undefined" || "classList" in document.documentElement) return;

	var prototype = Array.prototype,
	    push = prototype.push,
	    splice = prototype.splice,
	    join = prototype.join;

	function DOMTokenList(el) {
	  this.el = el;
	  // The className needs to be trimmed and split on whitespace
	  // to retrieve a list of classes.
	  var classes = el.className.replace(/^\s+|\s+$/g,'').split(/\s+/);
	  for (var i = 0; i < classes.length; i++) {
	    push.call(this, classes[i]);
	  }
	};

	DOMTokenList.prototype = {
	  add: function(token) {
	    if(this.contains(token)) return;
	    push.call(this, token);
	    this.el.className = this.toString();
	  },
	  contains: function(token) {
	    return this.el.className.indexOf(token) != -1;
	  },
	  item: function(index) {
	    return this[index] || null;
	  },
	  remove: function(token) {
	    if (!this.contains(token)) return;
	    for (var i = 0; i < this.length; i++) {
	      if (this[i] == token) break;
	    }
	    splice.call(this, i, 1);
	    this.el.className = this.toString();
	  },
	  toString: function() {
	    return join.call(this, ' ');
	  },
	  toggle: function(token) {
	    if (!this.contains(token)) {
	      this.add(token);
	    } else {
	      this.remove(token);
	    }

	    return this.contains(token);
	  }
	};

	window.DOMTokenList = DOMTokenList;

	function defineElementGetter (obj, prop, getter) {
    if (Object.defineProperty) {
      Object.defineProperty(obj, prop,{
        get : getter
      });
    } else {
      obj.__defineGetter__(prop, getter);
    }
	}

	defineElementGetter(Element.prototype, 'classList', function () {
	  return new DOMTokenList(this);
	});

})();


//String includes
//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/includes
if ( !String.prototype.includes ) {
  String.prototype.includes = function(search, start) {
    'use strict';
    if (typeof start !== 'number') {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search,start) !== -1;
    }
  };
}
