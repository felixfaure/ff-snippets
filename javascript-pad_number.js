function pad_int(n) {
  n = '' + n;
  return ('00' + n).slice(-Math.max(2, n.length));
}
