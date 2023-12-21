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
//When .map() is called on an array, it takes an argument of a callback function and returns a new array! 
const numbers = [1, 2, 3, 4, 5];
const squareNumbers = numbers.map(number => {
  return number * number;
});
console.log(squareNumbers);

//another examples
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
const secretMessage = animals.map(animal => { return animal[0];});////
console.log(secretMessage.join(' '));

const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(num => {return num/100;});
console.log("This is the array in big numbers: " + bigNumbers);
console.log("This is the array in small numbers: " + smallNumbers);


//.filter() method
//.filter() returns an array of elements after filtering out certain elements from the original array. 
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];
const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});
console.log(onlyNumbers);

//another examples
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

const shortWords = words.filter(word => {
  return word.length < 6;
});

const randomNumbers = [375, 200, 3.14, 7, 13, 852];
// Call .filter() on randomNumbers below
const smallNumberss = randomNumbers.filter(randnum => {
  return randnum < 250;
});
console.log("Numbers that are less than 250: " + smallNumberss);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene', 'amalgamation'];
// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(faveword => {
  return faveword.length > 7;
});
console.log("Favorite words that are greater than 7 in length: " + longFavoriteWords);


//.findIndex()
//on an array will return the index of the first element that evaluates to true in the callback function.
const jumbledNums = [123, 25, 78, 5, 9]; 

const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});

//another example
const animalss = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animalss.findIndex( ani => {
  return ani === 'elephant';
});
console.log("Find the index of the 'elephant' element: " + foundAnimal);

const startsWithS = animalss.findIndex(anim => {
  return anim[0] === 's';
});
console.log("Find animals that starts with letter 's': " + startsWithS);


//.reduce() 
//.reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array.
const numbersss = [1, 2, 4, 10];

const summedNums = numbersss.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})

console.log(summedNums) // Output: 17

//another example
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log("The value of accumulator: ", accumulator);
  console.log("The value of currentValue: ", currentValue);
    return accumulator + currentValue;
}, 10);
console.log("The sum of accumulator and currentValue: ", newSum);


//more iterator methods
const worrds = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Use .some to check for even numbers in the array
console.log(worrds.some((word) => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = worrds.filter(woord => {return woord.length > 5;});
console.log(interestingWords);

console.log(interestingWords.every((word) => { return word.length > 5} ));
