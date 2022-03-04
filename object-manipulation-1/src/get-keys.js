/* exported getKeys */
// define a function, 'getKeys', with a single parameter, 'object'.
// assign an empty array to the variable 'objectKeys'.
// use a for...in loop to get the object keys.
// push the object key into the 'objectKeys' array.
// return 'objectKeys'.

function getKeys(object) {
  var objectKeys = [];
  for (var key in object) {
    objectKeys.push(key);
  }
  return objectKeys;
}

// define a function, 'getKeys', with a single parameter, 'object'.
// assign an empty array to the variable 'objectKeys'.
// use a for...in loop to acces the keys in the object.
// push the object key into the 'objectKeys' array.
// return 'objectKeys'.
