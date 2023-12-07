//Creating an array
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
console.log(newYearsResolutions);

const hobbies = ['biking', 'reading', 'playing video games'];
console.log(hobbies);

//Accessing the content or an index of an array
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

let listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]); //undefined

// Changing the content of an index in an array
let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList [1] = 'avocados';
console.log(groceryList);

//array in let and const
//in const you cannot reassign a new array or different value, but we could change the content of the array
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments [0] = 'Mayo';
console.log(condiments);
condiments = ['Mayo'];
console.log(condiments);

utensils [3] = 'Spoon';
console.log(utensils);