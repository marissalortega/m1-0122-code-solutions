/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

// isUnderFive

function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

// isEven

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// startsWithJ

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

// isOldEnoughToDrink

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

// isOldEnoughToDrive

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

// isOldeEnoughToDrinkAndDrive

function isOldEnoughToDrinkAndDrive(person) {
  if (person.age >= 0) {
    return false;
  }
}

// categorizeAcidity

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if ((pH >= 0) && (pH < 7)) {
    return 'acid';
  } else if ((pH > 7) && (pH <= 14)) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

// introduceWarnerBro

function introduceWarnerBro(name) {
  if ((name === 'yakko') || (name === 'wakko')) {
    return "We're the warner brothers!";
  } else if (name === 'dot') {
    return "I'm cute~";
  } else {
    return 'Goodnight everybody!';
  }
}
