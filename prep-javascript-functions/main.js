function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var addTwoNumbersResult = addTwoNumbers(4, 4);
console.log('addTwoNumbers Exercise:', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(5);
console.log('convertHoursToMinutes Exercise:', minutes);

function getGreeting(name) {
  return 'Hello ' + name;
}

var greeting = getGreeting('Good Morning');
console.log('getGreeting Exercise:', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var product = addAndMultiplyBy5(4, 8);
console.log('addAndMultiplyBy5 Exercise:', product);

function multipleAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var quotient = multipleAndDivideBy5(10, 2);
console.log('multiplyAndDivideBy5 Exercise:', quotient);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var difference = subtractTwoNumbers(15, 4);
console.log('subtractTwoNumbers Exercise:', difference);

function getCircleCumference(radius) {
  return 2 * Math.PI * radius;
}

var circumference = getCircleCumference(5);
console.log('getCircleCircumference Exercise:', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Alvin', 'Cho');
console.log('getFullName Exercise:', fullName);

function cube(number) {
  return number * number * number;
}

var cubed = cube(10);
console.log('cube Exercise:', cubed);
