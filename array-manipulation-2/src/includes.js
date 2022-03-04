/* exported includes */
// define a function, 'includes', with 2 parameters, 'array' and 'value'.
// use a for loop to loop through each index of the 'array'.
// use an if statement with the expression 'value' is strictly equal to the array at index, return true; otherwise, return false.

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

// define a function, 'includes', with 2 parameters, 'array' and 'value'.
// use a for loop to loop through each index of the 'array'.
// within the loop, use an if statement with the expression 'array[i]' is strictly equal to 'value', return true;
// outside of the loop, return false.
