//Single
//http://stackoverflow.com/questions/12820953/asynchronous-script-loading-callback
//IE10+
function async(script, callback) {
  var s = document.createElement('script'),
      head = document.getElementsByTagName('head')[0];
  s.type = "text/javascript";
  s.async = true;
  s.src = '//' + script;
  if (typeof callback == 'function') { s.addEventListener('load', function (e) { callback.call(); }, false); }
  head.appendChild(s);
}

//Usage :
async('cdn.plyr.io/2.0.11/plyr.js', callback);


//Multi
//https://css-tricks.com/snippets/javascript/async-script-loader-with-callback/
var Async = function () { }
Async.prototype = {
  require: function (scripts, callback) {
    this.loadCount      = 0;
    this.totalRequired  = scripts.length;
    this.callback       = callback;

    for (var i = 0; i < scripts.length; i++) {
      this.writeScript(scripts[i]);
    }
  },
  loaded: function (evt) {
    this.loadCount++;
    if (this.loadCount == this.totalRequired && typeof this.callback == 'function') this.callback.call();
  },
  writeScript: function (src) {
    var self = this;
    var s = document.createElement('script');
    s.type = "text/javascript";
    s.async = true;
    s.src = src;
    s.addEventListener('load', function (e) { self.loaded(e); }, false);
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(s);
  }
}

//Usage :
var l = new Async();
l.require(["example-script-1.js", "example-script-2.js"], function() {
  console.log('All Scripts Loaded');
});
