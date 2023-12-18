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

