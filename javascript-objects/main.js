var student = {
  firstName: 'Marissa',
  lastName: 'Ortega',
  age: 34
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Hair Stylist';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'Subaru',
  model: 'Outback',
  year: 2021
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;

console.log("value of vehicle['color']:", vehicle['color']);
console.log("value of vehicle['isConvertible']", vehicle['isConvertible']);
console.log('value of vehicle', vehicle);

var pet = {
  name: 'Chili',
  type: 'pug'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
