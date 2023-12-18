//print numbers starting from 5 to 10
for (let num = 5; num < 11; num++) {
    console.log(num);
  }

// The loop below loops from 0 to 3. It loop backwards from 3 to 0
for (let counter = 3; counter >= 0; counter--) {
  console.log(counter);
}

// Looping through arrays
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for (let i = 0; i < vacationSpots.length; i++) {
  console.log("I would love to visit " + vacationSpots[i]);
}

//Nested loops for comparing two arrays
let bobsFollowers = ['Anne', 'Michael', 'Elliot', 'John'];
let tinasFollowers = ['Anne', 'Dane', 'John'];
let mutualFollowers = [];

for (let a = 0; a < bobsFollowers.length; a++) {
  for (let b = 0; b < tinasFollowers.length; b++){
    if (bobsFollowers[a] === tinasFollowers[b]) {
      mutualFollowers.push(bobsFollowers[a]);
      console.log(mutualFollowers);
    }
  }
};

//using while loop to iterate until there's a spade
const cards = ["diamond", "spade", "heart", "club"];
let currentCard;
while (currentCard !== "spade") {
 currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
};


//using do while to check if the added sugar adds and does not exceeds our sugar levels heh
let cupsOfSugarNeeded = 3;
let cupsAdded = 0;
do {
  cupsAdded++
  console.log(cupsAdded + " cups was added.")
} while (cupsAdded < cupsOfSugarNeeded)

//using break to stop a loop from printing names in the rapper list
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === "Notorious B.I.G.") {
    console.log("Ooops let's stop! ");
    break;
  }
}

console.log("And if you don't know, now you know.");

