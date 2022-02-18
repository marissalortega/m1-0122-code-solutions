function convertMinutesToSeconds(minutes) {
  var convertMinutesToSeconds = 60 * minutes;
  return convertMinutesToSeconds;
}

var fiveMinutes = convertMinutesToSeconds(5);
console.log('convertMinutesToSeconds result:', fiveMinutes);

function greet(name) {
  var greet = 'Hello there, ' + name + '!';
  return greet;
}

var greetMarissa = greet('Marissa');
console.log('greet result:', greetMarissa);

function getArea(width, height) {
  var getArea = width * height;
  return getArea;
}

var rectangleArea = getArea(17, 42);
console.log('getArea result:', rectangleArea);

function getFirstName(person) {
  var getFirstName = person.firstName;
  return getFirstName;
}

var firstName = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('first name:', firstName);

function getLastElement(array) {
  var getLastElement = array[array.length - 1];
  return getLastElement;
}

var lastElement = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('lastElement result:', lastElement);
