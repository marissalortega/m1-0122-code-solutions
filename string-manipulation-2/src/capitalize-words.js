/* exported capitalizeWords */
// define a function, 'capitalizeWords', with one parameter, 'string'.
// use the tolowercase() method of the 'string' object and assign the return value to the variable 'lowerString'.
// use the split() method of the 'lowerString' object to separate the string by ' '.  Assign the return value to the varible, 'words'.
// use the toUpperCase() method of the 'word' object to capitalize the first letter of ever word.
// return the value of the join() method of the 'word' object.

function capitalizeWords(string) {
  var lowerString = string.toLowerCase();
  var words = lowerString.split(' ');
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(' ');
}

// define a function, 'capitalizeWords', with one parameter, 'string'.
// use the tolowercase() method of the 'string' object and assign the return value to the variable 'lowerString'.
// use the split() method of the 'lowerString' object to separate the string by ' '.  Assign the return value to the varible, 'words'.
// use a for loop to loop through the array of words, and inside the loop, capitalize the first letter of the word and concatenate that with the rest of the string.
// return the value of the join() method of the 'word' object calling one argument, a space.
