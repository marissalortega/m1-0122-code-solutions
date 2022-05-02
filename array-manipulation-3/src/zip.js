/* exported zip */

// define a new function, zip, with 2 parameters, first and second.
// use the map method

function zip(first, second) {
  first.splice(second.length);

  var zipped = first.map(function (e, i) {
    return [e, second[i]];
  });
  return zipped;
}

// define a new function, zip, with 2 parameters, first and second.
// make the first array the same length of the second array by using the splice method of the first object calling the length property of the second array.
// use the map method of the first object, being called with one arugument a function with the parameters, e and i.  in the code block for the function return an array with e at index 0 and i at index 1.  Store the value of this method on the variable zipped.
// return zipped.
