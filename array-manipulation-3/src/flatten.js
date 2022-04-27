/* exported flatten */
function flatten(array) {
  var flattened = [];
  for (var i = 0; i < array.length; i++) {
    var arrayIndex = array[i];
    if (!Array.isArray(arrayIndex)) {
      flattened.push(arrayIndex);
      continue;
    }
    for (var x = 0; x < arrayIndex.length; x++) {
      flattened.push(arrayIndex[x]);
    }
  }
  return flattened;
}
