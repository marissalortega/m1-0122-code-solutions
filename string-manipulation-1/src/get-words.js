/* exported getWords */
function getWords(string) {
  if (typeof string[0] === 'string') {
    return string.split(' ');
  } else {
    return [];
  }
}
