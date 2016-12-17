(function(global) {

  function insertAfter(newNode, el) {
    el.parentNode.insertBefore(newNode, el.nextElementSibling);
  }

  if(global.ff) global.ff.insertAfter = insertAfter;
  else global.ff = { "insertAfter": insertAfter };

})(this);
