/* exported union */
// define a new function, union, with 2 parameters, first and second.
// assign an empty array to the variable unionArray.
// use a for loop and if statements.
// return unionArray.

function union(first, second) {
  var unionArray = [];

  for (var i = 0; i < first.length; i++) {
    if (unionArray.indexOf(first[i]) === -1) {
      unionArray.push(first[i]);
    }
  }

  for (var j = 0; j < second.length; j++) {
    if (unionArray.indexOf(second[j]) === -1) {
      unionArray.push(second[j]);
    }
  }
  return unionArray;
}

// define a new function, union, with 2 parameters, first and second.
// assign an empty array to the variable unionArray.
// use a for loop to loop through the first array.
// in the code block for the loop, use an if statement that says if the indexOf method of the unionArray object being called with the argument first at index is equal to -1 then the first array at i is pushed into the unionArray.
// use a for loop to loop through the second array.
// in the code block for the loop, use an if statement that says if the indexOf method of the unionArray object being called with the argument second at index is equal to -1 then the second array at j is pushed into the unionArray.
// return unionArray.
