/* exported tail */
// define a function named "tail" with one parameter named "array".
// declare a variable called "newArray".
// use a for loop to loop through the original array starting at the second index of the array.
// push the values of the array into the "newArray" variable.
// return the value of "newArray".

function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// define a function named "tail" with a single parameter, "array".
// declare a variable called "newArray".
// use a for loop to loop through the length of original array starting at the second index of the array, incrementing through each index.
// in the loop, push the values of the array called as an argument of the tail function into the variable, '"newArray".
// return the variable, "newArray".
