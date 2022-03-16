/* exported capitalizeWord */
// define a function 'capitalizeWord' with a single parameter, 'word'.
// assign the value of word at 0, to the variable 'firstLetter'.
// i don't know...

function capitalizeWord(word) {
  var lowerCaseWord = word.toLowerCase();
  var endOfWord = lowerCaseWord.slice(1);
  var firstLetter = lowerCaseWord[0];
  var capFirstLetter = firstLetter.toUpperCase();
  var newString = capFirstLetter + endOfWord;

  if (lowerCaseWord === 'javascript') {
    return 'JavaScript';
  } else if (lowerCaseWord !== 'javascript') {
    return newString;
  }
}

// define a function 'capitalizeWord' with a single parameter, 'word'.
// assign the value of the toLowercase() method of the word object to the variable 'lowercaseWord'.
// assign the value of the slice() method at 1 of the 'lowerCaseWordObject' to the variable 'endOfWord'.
// assign the value of 'lowerCaseWord' at 0 to the variable 'firstLetter'.
// assign the value of the toUpperCase() method of the firstLetter object to the varibale 'capFirstLetter'.
// assign the value of 'capFirstLetter' concatenated with 'endOfWord' to the 'newString' variable.
// use an if statement with the condition if 'lowerCaseWord' is strictly equal to the string 'javascript', return the string 'JavaScript'.
// use an else if statement with the condition if 'lowerCaseWord' is not eqaul to the string 'javascript', return the 'newString' variable.
