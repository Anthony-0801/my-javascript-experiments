//creating an object literal
// Write your fasterShip object literal below
let fasterShip = {
    'Fuel Type': 'Turbo Fuel',
    color: 'silver'
  }

//accessing properties of an object
//first method is the use of dot notation .()
let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
  };
  
  let crewCount = spaceship.numCrew;
  console.log("Number of crews in the spaceship: ", crewCount);
  
  let planetArray = spaceship.flightPath;
  console.log("Flightpath of the ship: ", planetArray);

//using bracket notation
let spacesship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };

let propName =  'Active Mission';
let isActive = spacesship['Active Mission'];
console.log(isActive);

//using assignment operator = 
let spaceeship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

spaceeship.color = 'glorious gold';
spaceeship.numEngines = 1,2,3,4,5,6,7,8,9,10;
delete spaceeship['Secret Mission'];
console.log(spaceeship);


//object methods
//When the data stored on an object is a function we call that a method. A property is what an object has, while a method is what an object does.
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

//set some methods
let alienShip = {
  retreat () {
    console.log(retreatMessage);
},

  takeOff() {
    console.log("Spim... Borp... Glix... Blastoff!");
  }
};

//call the set methods
alienShip.retreat();
alienShip.takeOff();

//accesssing in nested objects
let spacceship = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 
//accessing the spaceship nested object and assigning it into a variable
let capFave = spacceship.crew.captain['favorite foods'][0];
console.log(capFave);
spaceship.passengers = [
  {
    name: 'Anthony'
  }
]

let firstPassenger = spacceship.passengers[0];
console.log(firstPassenger);


//Pass by Reference
//Objects are passed by reference. This means when we pass a variable assigned to an object into a function as an argument,
//the computer interprets the parameter name as pointing to the space in memory holding that object. 
//As a result, functions which change object properties actually mutate the object permanently (even when the object is assigned to a const variable).
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

let greenEnergy = object => {
  object['Fuel Type'] = 'avocado oil'
}

let remotelyDisable = objec => {
  objec.disabled = true;
}

greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship);

//looping through objects
let sspaceship = {
  crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

for (let crewMember in sspaceship.crew) {
  console.log(`${crewMember}: ${sspaceship.crew[crewMember].name}`);
};

console.log('\n');
for (let crewDeg in sspaceship.crew) {
  console.log(`${sspaceship.crew[crewDeg].name}: ${sspaceship.crew[crewDeg].degree}`)
};
