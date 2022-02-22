var a = 3;
var b = 6;
var c = 14;

var maximumValue = Math.max(a, b, c);
console.log('maximum value:', maximumValue);

var heroes = ['Batman', 'Scarlett Witch', 'Spiderman', 'Hulk'];

var randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('value of randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'Lord of the Rings',
    author: 'Tolkien'
  },
  {
    title: 'East of Eden',
    author: 'Steinbeck'
  },
  {
    title: 'The Bell Jar',
    author: 'Plath'
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

var fullName = 'Marissa Ortega';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
