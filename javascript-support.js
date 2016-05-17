//CSS filter
function support_css_filter() {
  var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
  var el = document.createElement('a');
  el.style.cssText = prefixes.join('filter:blur(2px); ');
  return !!el.style.length && ((document.documentMode === undefined || document.documentMode > 9));
}

//Object-fit
supports.objectFit = ('objectFit' in html.style === false) ? false : true;


//History
var ua = navigator.userAgent;
function test_history() {
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
      ua.indexOf('Mobile Safari') !== -1 &&
      ua.indexOf('Chrome') === -1 &&
      ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  return (window.history && 'pushState' in window.history);
}
