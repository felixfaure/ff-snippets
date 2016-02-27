//Window width/height IE9+
var windowW = window.innerWidth;
var windowH = window.innerHeight;
//Cross-browser solution
var windowW = window.innerHeight || document.documentElement.clientWidth || document.body.clientWidth;
var windowH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

//Window vertical/horizontal scroll IE9+
var windowScrollY = window.scrollY || window.pageYOffset;
var windowScrollX = window.scrollX || window.pageXOffset;
//Ou si on veut simplifier :
var windowScrollY = window.pageYOffset;
var windowScrollX = window.pageXOffset;
//Cross-browser solution
var windowScrollY = window.pageYOffset !== undefined ? window.pageYOffset : ((document.compatMode || "") === "CSS1Compat") ? document.documentElement.scrollTop : document.body.scrollTop;
var windowScrollX = window.pageXOffset !== undefined ? window.pageXOffset : ((document.compatMode || "") === "CSS1Compat") ? document.documentElement.scrollLeft : document.body.scrollLeft;

//Hauteur/largeur d'un élément (avec padding)
var height = el.clientHeight;
var width = el.clientWidth;
//Hauteur/largeur d'un élément (avec border, padding, scrollbar)
var height = el.offsetHeight;
var width = el.offsetWidth;
//Hauteur/largeur interne (+ scrollbar) d'un élément IE9+ (pour cross-browser voir window.innerHeight plus haut)
var height = el.innerHeight;
var width = el.innerWidth;

//Scroll vertical/horizontal d'un élément
var scrollY = el.scrollTop;
var scrollX = el.scrollLeft;

//Position relative to offsetParent
var offsetT = el.offsetTop;
var offsetL = el.offsetLeft;
//Position Relative To Viewport
var offsetT = el.getBoundingClientRect().top;
var offsetL = el.getBoundingClientRect().left;
//Position relative to top of the document
var offsetT = el.getBoundingClientRect().top + windowScrollY;
var offsetL = el.getBoundingClientRect().left + windowScrollX;
