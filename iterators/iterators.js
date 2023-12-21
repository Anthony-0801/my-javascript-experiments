//.forEach() method
//.forEach () method repeats every items in the array
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];
artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

//another example
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
fruits.forEach(fruitsItem => console.log("I want to eat a " + fruitsItem));


//.map() method
const numbers = [1, 2, 3, 4, 5];
const squareNumbers = numbers.map(number => {
  return number * number;
});
console.log(squareNumbers);

//another example
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => { return animal[0];});

console.log(secretMessage.join(' '));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(num => {return num/100;});
console.log("This is the array in big numbers: " + bigNumbers);
console.log("This is the array in small numbers: " + smallNumbers);


//.filter() method
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);
