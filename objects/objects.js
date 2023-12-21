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
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

spaceship.color = 'glorious gold';
spaceship.numEngines = 1,2,3,4,5,6,7,8,9,10;
delete spaceship['Secret Mission'];
console.log(spaceship);