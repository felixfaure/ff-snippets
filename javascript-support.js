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

//Function to test a css property
//testCSS('object-fit');
function testCSS(prop) {
  if (prop.indexOf('-') != -1) {
    prop = toCameCase(prop);
  }
  var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
      prefixes = 'Moz O ms Webkit',
      prefixesArr = prefixes.split(' '),
      props = (prop + ' ' + prefixesArr.join(ucProp + ' ') + ucProp).split(' ');

  var el = document.createElement('a');
  var propsLength = props.length,
      i,
      p;
  for (i = 0; i < propsLength; i++) {
    p = props[i];
    if (el.style[p] !== undefined) {
      return p;
    }
  }
  return false;
}

//Video
//return :
//obj     => true
//obj.ogg => 'probably'
function support_video() {
  var elem = createElement('video');
  var bool = false;

  try {
    if (bool = !!elem.canPlayType) {
      bool = new Boolean(bool);
      bool.ogg = elem.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, '');
      bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, '');
      bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, '');
      bool.vp9 = elem.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, '');
      bool.hls = elem.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, '');
    }
  } catch (e) {}
  return bool;
});
