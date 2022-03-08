/* exported capitalize */
// define a function, 'capitalize', that has a single parameter, 'word'.
// return the value of the 'word' argument by using the toUpperCase method on the first index of the string.

function capitalize(word) {
  var firstLetterCap = word.charAt(0).toUpperCase();
  var stringRemainder = word.slice(1);
  var lowerCaseRemainder = stringRemainder.toLowerCase();
  var newString = firstLetterCap + lowerCaseRemainder;
  return newString;
}

// define a function, 'capitalize', with a single parameter, 'word'.
// declare a variable, 'firstLetterCap', that holds the value of the first letter of the string a capitalizes it.
// declare a variable, 'stringRemainder', that hold the value of the string starting at the second letter.
// declare a variable that takes 'stringRemainder' and makes it all lowercase.
// declare a new variable, 'newString' that concatenates the variables 'firstLetterCap' and 'lowerCaseRemainder'.
// return the value of 'newString'.
