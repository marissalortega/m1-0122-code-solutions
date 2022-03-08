/* exported ransomCase */
// define a new function, 'ransomCase', with one parameter, 'string'.
// declare a new variable, 'ransomCase'.
// loop through the string starting at index 1 and return the toUpperCase() method of the 'ransomeCase' object.

function ransomCase(string) {
  var makeLower = string.toLowerCase();
  var character = makeLower.split('');
  for (var i = 1; i < character.length; i += 2) {
    character[i] = character[i].toUpperCase();
  }
  return character.join('');
}

// define a new function, 'ransomeCase', with one parameter, 'string'.
// make the string all lowercase with the toLowercase() method and assign that value to a new variable, 'makeLower'.
// use the split() method to separate the characters in the string and assign that value to the variable 'character'.
// use a for loop to loop through the characters.length, starting with the second character and incrementing by 2.
// within the loop, use the toUpperCase() method to capitalize each character the loop pull out.
// join the characters back together by returning join() method of the character object.
