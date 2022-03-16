/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var chars = string.split('');
  var first = chars[firstIndex];
  var second = chars[secondIndex];
  chars[firstIndex] = second;
  chars[secondIndex] = first;
  string = chars.join('');
  return string;
}
