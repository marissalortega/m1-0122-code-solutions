/* exported isVowel */
function isVowel(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] === 'a' || word[i] === 'A' || word[i] === 'e' || word[i] === 'E' || word[i] === 'i' || word[i] === 'I' || word[i] === 'o' || word[i] === 'O' || word[i] === 'u' || word[i] === 'U') {
      return true;
    }
  }
  return false;
}
