//Convert kebab-case to camelCase
function toCameCase(name) {
  return name.replace(/([a-z])-([a-z])/g, function(str, m1, m2) {
    return m1 + m2.toUpperCase();
  }).replace(/^-/, '');
}

//Convert camelCase to kebab-case
function toKebabCase(name) {
  return name.replace(/([A-Z])/g, function(str, m1) {
    return '-' + m1.toLowerCase();
  });
}
