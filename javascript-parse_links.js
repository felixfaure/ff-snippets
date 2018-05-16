//Parse links
function getLocation(href) {
  var location = document.createElement("a");
  location.href = href;
  // IE doesn't populate all link properties when setting .href with a relative URL,
  // however .href will return an absolute URL which then can be used on itself
  // to populate these additional fields.
  if (location.host == "") {
    location.href = location.href;
  }
  return location;
};

//Absolute url of a link
function get_absolute_link(url) {
  var link_protocol = w.location.protocol;
  var link_host = w.location.host;
  var link_pathname = w.location.pathname;
  var link_absolute;
  if(url) {
    var l = getLocation(url);
    link_protocol = l.protocol;
    link_host = l.host;
    link_pathname = l.pathname;
  }
  link_absolute = link_protocol.replace(/\:/g, '') + "://" + link_host.replace(/\/$/g, '') + "/" + link_pathname.replace(/^\//g, '');
  return link_absolute;
}
