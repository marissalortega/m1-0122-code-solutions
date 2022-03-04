/* exported drop */
// define a new function, 'drop', with 2 parameters, 'array' and 'count'.
// assign an empty array to the variable 'newArray'.
// use a for loop to loop through the array, with the initial expression of index is equal to the count minus one.
// loop through the length of the array and increment by 1.
// within the loop, use an if statement to push into into the 'newArray'.
// return the value of 'newArray.'

function drop(array, count) {
  var newArray = [];
  for (var i = count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// define a new function, 'drop', with 2 parameters, 'array' and 'count'.
// assign an empty array to the variable 'newArray'.
// use a for loop to loop through the array, with the initial expression of index is equal to the variable 'count'.
// push the 'array' at 'i' into the 'newArray' variable.
// return the value of 'newArray'.
