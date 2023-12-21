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
