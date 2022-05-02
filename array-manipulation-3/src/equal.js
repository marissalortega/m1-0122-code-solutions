/* exported equal */
// defined a new function, equal, with 2 parameters, first and second.
// use an if statement.
// use a for loop.

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}

// defined a new function, equal, with 2 parameters, first and second.
// use an if statement with the condition that is the length of the first array is not equal to the second, false will be returned.
// use a for loop to loop through the first array.
// use and if statement with the condition that if first at i is not equal to second at i, false is returned.
// if all those conditons are not false, then true is returned.
