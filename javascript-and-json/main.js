var booksArray = [
  {
    isbn: '12345',
    title: 'East of Eden',
    author: 'Steinbeck, John'
  },
  {
    isbn: '67890',
    title: 'The Bell Jar',
    author: 'Plath, Sylvia'
  },
  {
    isbn: '54321',
    title: 'Shutter Island',
    author: 'Lehane, Dennis'
  }
];

console.log('books:', booksArray);
console.log('type:', typeof booksArray);

var booksStringify = JSON.stringify(booksArray);

console.log('booksStringify result:', booksStringify);
console.log('booksStringify type:', typeof booksStringify);

var jsonStudent = '{"id": 3648, "name": "Marissa Ortega"}';

console.log('student result:', jsonStudent);
console.log('jsonStudent type:', typeof jsonStudent);

var studentParse = JSON.parse(jsonStudent);
console.log('studentParse result:', studentParse);
console.log('studentParse type:', typeof studentParse);
