/* exported intersection */
function intersection(first, second) {
  var intersection = first.filter(Set.prototype.has, new Set(second));
  return intersection;
}
