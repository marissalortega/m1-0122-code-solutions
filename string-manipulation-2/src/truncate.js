/* exported truncate */
// define a new function, 'truncate', with 2 parameters, 'length' and 'string'.
// return the 'string' variable at 'length' concatenated with an elipsis.

function truncate(length, string) {
  return string.substring(0, length) + '...';
}

// define a new function, 'truncate', with 2 parameters, 'length' and 'string'.
// return the substring method of the string object with 2 parameters, '0' and 'length'; concatenate that with an elipsis.
