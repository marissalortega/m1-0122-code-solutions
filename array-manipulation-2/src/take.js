/* exported take */
// define a new function, 'take', with 2 parameters, 'array' and 'count'.
// assign an empty array to the variable, 'newArray'.
// use a for loop to loop through the objects of the array up to the condition that the index is less than or equal to the count variable.
// push the results of the for loop into the empty array.
// return 'newArray'.

function take(array, count) {
  var newArray = [];
  for (var i = 0; i < count; i++) {
    if (count <= array.length) {
      newArray.push(array[i]);
    } else if (count >= array.length) {
      return newArray;
    }
  }
  return newArray;
}

// define a new function, 'take', with 2 parameters, 'array' and 'count'.
// assign an empty array to the variable, 'newArray'.
// use a for loop to loop through the array variable with the conditional expression that the index is less than the count, and the final expression increments the index.
// use an if statement that says if the count is less than or equal to the length of the array, the array at index will be pushed into the 'newArray'.
// use an else if statemet that says if the count is greater than or equal to length of the array, the value of 'newArray' will be returned.
// when the loop ends,return the 'newArray'.
