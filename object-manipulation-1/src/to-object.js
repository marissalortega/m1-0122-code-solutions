/* exported toObject */
function toObject(keyValuePair) {
  var newObject = {};
  for (var i = 0; i < keyValuePair.length; i++) {
    if (keyValuePair[i] !== undefined) {
      newObject[keyValuePair[0]] = keyValuePair[i];
    }
  }
  return newObject;
}
