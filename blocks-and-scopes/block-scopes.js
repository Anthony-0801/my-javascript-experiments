const city = "New York City"
function logCitySkyline() {
  let skyscraper  = "Empire State Building"
  return 'The stars over the ' + skyscraper + ' in ' + city;
}

console.log(logCitySkyline());

//Global scope are variables declared outside of blocks. They are not bound inside a block and therefore can be accessed by any code in the program. 
//See the example below:
const color = 'blue';

const returnSkyColor = () => {
  return color; // blue 
};

console.log(returnSkyColor()); // blue
//Even though the color variable is defined outside of the block, it can be accessed in the function block, giving it global scope.
//In turn, color can be accessed within the returnSkyColor function block.

//Another example:
let satellite = "The Moon";
let galaxy = "The Milky Way";
let stars = "North Star";

function callMyNightSky () {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky());