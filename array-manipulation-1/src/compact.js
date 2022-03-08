/* exported compact */
function compact(array) {
  var falsy;
  var trueArray = [];
  for (var i = 0; i < array.length; i++) {
    falsy = Boolean(array[i]);
    if (falsy === true) {
      trueArray.push(array[i]);
    }
  }
  return trueArray;
}
