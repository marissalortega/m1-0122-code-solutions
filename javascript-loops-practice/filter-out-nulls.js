/* exported filterOutNulls */
function filterOutNulls(values) {
  var noNull = values.filter(function (value) {
    return value !== null;
  });
  return noNull;
}
