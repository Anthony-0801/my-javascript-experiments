//  IVE CHANGED THE VARIABLE NAMES SO THAT THERE'S NO ERROR TO OCCUR
// The this keyword references the calling object which provides access to the calling object’s properties.
const goat = {
    dietType: 'herbivore',
    makeSound() {
      console.log('baaa');
    },
    diet() {
      console.log(this.dietType);
    }
  };
  
  goat.diet(); 
  // Output: herbivore
  
  // another example
  const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() {
      return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
    }
  };
  
  console.log(robot.provideInfo());

 // Arrow functions inherently bind, or tie, an already defined this value to the function itself that is NOT the calling object. 
 // I M P O R T A N T   N O T E --- AVOID USING ARROW FUNCTION WHEN USING .THIS METHOD


 //PRIVACY - Accessing and updating properties is fundamental in working with objects. However, there are cases in which we don’t want other code simply accessing and updating an object’s properties.
 //Place underscore beside the name of an object's property in order to distinguish that it shouldn't be altered
 

 //Getters are methods that get and return the internal properties of an object.
 const person = {
    _firstName: 'John',
    _lastName: 'Doe',
    get fullName() {
      if (this._firstName && this._lastName){
        return `${this._firstName} ${this._lastName}`;
      } else {
        return 'Missing a first name or a last name.';
      }
    }
  }
  
  // To call the getter method: 
  person.fullName; // 'John Doe'

  //another example
  const robots = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel() {
      if (typeof this._energyLevel === 'number') {
        return `My current energy level is ${this._energyLevel}`
      } else {
        return 'System malfunction: cannot retrieve energy level'
      }
    }
  };
  
  console.log(robots.energyLevel);

  //Along with getter methods, we can also create setter methods which reassign values of existing properties within an object.
  const robotss = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    
    set numOfSensors(num){
      if (typeof num === 'number' && num >= 0) {
         this._numOfSensors = num;
      } else {
        console.log('Pass in a number that is greater than or equal to 0');
      }
    }
  };
  
  robotss.numOfSensors = 100;
  console.log(robotss.numOfSensors);
  
  
//Factory functions  -  A factory function is a function that returns an object and can be reused to make multiple object instances. 
//Factory functions can also have parameters allowing us to customize the object that gets returned.
//Creating a factory function
const monsterFactory = (name, age, energySource, catchPhrase) => {
    return { 
      name: name,
      age: age, 
      energySource: energySource,
      scare() {
        console.log(catchPhrase);
      } 
    }
  };
  const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
  ghost.scare(); // 'BOO!'

  //another example
  function robotFactory (model, mobile) {
    return {
      model: model,
      mobile: mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  };
  
  const tinCan = robotFactory('P-500', true);
  tinCan.beep();


  //Property Value SHorthand
  //Without property value shorthand
  const monstersFactory = (name, age) => {
    return { 
      name: name,
      age: age
    }
  };
//With property value shorthand
const monsterssFactory = (name, age) => {
    return { 
      name,
      age 
    }
  };



  //Destructured assignment - we can use this when we want to extract key-value pairs from objects and save them as variables.
  const vampire = {
    name: 'Dracula',
    residence: 'Transylvania',
    preferences: {
      day: 'stay inside',
      night: 'satisfy appetite'
    }
  };
  
  //Without destructured assignment
  const residence = vampire.residence; 
  console.log(residence); // Prints 'Transylvania' 
  //With destructured assignment
  const { residences } = vampire; //I've changed variable name so that there's no error
console.log(residence); // Prints 'Transylvania'
//using destructured assignment in a nested propoerties of an object
const { day } = vampire.preferences; 
console.log(day); // Prints 'stay inside'

//another example
const robotsss = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
  
  const { functionality } = robotsss;
  functionality.beep();

  
  //Built in Object methods 
  const robotssss = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robotssss);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = console.log(Object.entries(robotssss));

console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = (Object.assign({laserBlaster: true, voiceRecognition: true}, robotssss));
  
//Summaty of Lessons