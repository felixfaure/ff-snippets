var main = $('#main'),
    nav = $('#primaryNav');

//Exemple de sélections
//==================================================
//Sélection classique de plusieurs éléments
$$('p').forEach(function(el, idx) {
  el.style.color = "red";
  el.classList.add("anotherclass");
  el.setAttribute("data-test",true);
  el.id = 'p_'+idx;
});
//Sélection seulement du premier élément
$('p').style.color = "blue";
//Sélection d'un élément dans un containeur
$('.biggest',main).style.color = "orange";
//Autres
// $('#p_1',main).previousElementSibling
// $('#p_1',main).nextElementSibling
// $('ul',nav).children
// main.firstChild
// main.lastChild
// main.parentNode
// $('#p_1',main).closest('main')
// ffquery.siblings($('#p_1',main));

//Autres
//==================================================
//Filter
var pBig = $$('h6').filter(function(el, idx) {
  return el.classList.contains("green");
}).forEach(function(el, idx) {
  el.style.color = "green";
  el.style.fontSize = "40px";
});
//Utilisation d'un méthode qui retourne un nodeList (children), utilisation de la fonction toArray pour le convertire en tableau
ffquery.toArray($('ul',nav).children).forEach(function(el, idx) {
  el.innerHTML = '<strong>'+el.textContent+'</strong>';
});
$('ul',nav).outerHTML = '<ol>'+$('ul',nav).innerHTML+'</ol>';

//Exemples de manipulations
//==================================================
$('#p_1',main).previousElementSibling.textContent = "Un texte !";
$('#p_2',main).remove();
$('#p_3',main).innerHTML = '';
$('#p_6',main).insertAdjacentHTML('beforebegin', '<p>beforebegin</p>');
$('#p_6',main).insertAdjacentHTML('afterbegin', '<strong>afterbegin</strong><br>');
$('#p_6',main).insertAdjacentHTML('beforeend', '<br><strong>beforeend</strong>');
$('#p_6',main).insertAdjacentHTML('afterend', '<p>afterend</p>');
$('#p_4',main).nextElementSibling.outerHTML = "<ul><li>Item</li><li>Item</li><li>Item</li><li>Item</li></ul>";
main.appendChild($('#p_0',main)); //append
main.insertBefore($('#p_1',main),main.firstChild); //prepende
main.insertBefore($('#p_4',main),$('#p_1',main)); //before
main.insertBefore($('#p_8',main),$('#p_4',main).nextElementSibling); //after

//Styles, dimensions
//==================================================
var padTop = getComputedStyle(main).getPropertyValue("padding-top");
var rect = $('#p_7',main).getBoundingClientRect();
var dims = {
  top: rect.top + document.body.scrollTop,
  left: rect.left + document.body.scrollLeft,
  outerHeight: $('#p_7',main).offsetHeight,
  outerWidth: $('#p_7',main).offsetWidth,
  offsetLeft: $('#p_7',main).offsetLeft,
  offsetTop: $('#p_7',main).offsetTop,
  offsetLeftViewport: rect.left,
  offsetTopViewport: rect.top,
};

/*

** => Need polyfill

Javascript IE9+ :
=================
Arrays:
-------
Array.isArray()
Array.prototype.concat()
Array.prototype.every()
Array.prototype.filter()
Array.prototype.forEach
Array.prototype.indexOf()
Array.prototype.lastIndexOf()
Array.prototype.join()
Array.prototype.map()
Array.prototype.pop()
Array.prototype.shift()
Array.prototype.push()
Array.prototype.unshift()
Array.prototype.reduce()
Array.prototype.reduceRight()
Array.prototype.reverse()
Array.prototype.slice()
Array.prototype.some()
Array.prototype.sort()
Array.prototype.splice()
**Array.prototype.fill()
**Array.prototype.find()
**Array.prototype.findIndex()
**Array.prototype.includes()


Strings:
--------
**String.prototype.includes()


Objects:
--------
Object.keys()
Object.prototype.hasOwnProperty()
**Object.is()


Elements:
---------
Element.getElementsByClassName()
Element.getElementsByTagName()
Element.querySelector()
Element.querySelectorAll()
Node.childNodes //All node (textNode, comment, etc.)
Node.parentNode
Node.firstChild //All node
Node.lastChild //All node
ParentNode.children //Only Element (div, h1, etc.)
ParentNode.firstElementChild //Only Element
ParentNode.lastElementChild //Only Element
Node.nextElementSibling
Node.previousElementSibling
**Element.closest()
ParentNode.childElementCount
Node.contains
**Element.matches()

Element.insertAdjacentHTML() //beforebegin, afterbegin, beforeend, afterend
Element.insertBefore()
**ChildNode.remove()

Element.clientHeight, //padding
Element.clientWidth //padding
Element.getBoundingClientRect() //left, top, right, bottom, width, height
Element.scrollHeight
Element.scrollWidth
Element.scrollTop
Element.scrollLeft

Element.innerHTML
Element.outerHTML
Node.textContent

Node.nodeName
Element.tagName //in the uppercase form
Element.className
**Element.classList
Element.id
Element.getAttribute()
Element.setAttribute()
Element.hasAttribute()
Element.removeAttribute()


Events:
-------
element.addEventListener
element.removeEventListener
element.dispatchEvent


Window:
-------
Window.devicePixelRatio //IE11+
window.document
window.location
window.navigator

window.innerHeight
window.innerWidth
Window.outerHeight
Window.outerWidth

Window.scrollMaxX
Window.scrollMaxY
Window.scrollX
Window.scrollY
window.scrollTo()
Window.scrollBy()
Window.scrollByLines()

window.alert()
window.confirm()
window.prompt()

window.setInterval()
window.clearInterval()
window.setTimeout()
window.clearTimeout()

window.getComputedStyle()
Window.print()
**window.matchMedia()
**Window.requestAnimationFrame()

*/
