function rgb2hex(rgb) {
  if (/^#?[0-9A-F]{6}$/i.test(rgb)) return '#'+(''+rgb).replace(/#/g, '');

  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  function hex(x) {
    return ("0" + parseInt(x).toString(16)).slice(-2);
  }
  return rgb ? ("#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3])) : false;
}
