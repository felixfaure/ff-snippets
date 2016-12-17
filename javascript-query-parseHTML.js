(function(global) {

  function parseHTML(str) {
    var frag = document.createDocumentFragment();
    var tmp = frag.appendChild(document.createElement('div'));
    tmp.innerHTML = str;
    return tmp.childNodes;
  }

  if(global.ff) global.ff.parseHTML = parseHTML;
  else global.ff = { "parseHTML": parseHTML };

})(this);
