//Functions as a Data, assigning a function to a data const
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  
  // Write your code below
  const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
  isTwoPlusTwo();
  console.log(isTwoPlusTwo.name);
  
//Functions as a Parameter, assigning a function as a parameter of another function
const addTwo = num => {
    return num + 2;
  }
  
  const checkConsistentOutput = (func, val) => {
    let checkA = val + 2;
    let checkB= func(val);
  
    if (checkA === checkB) {
      return checkB;
    } else {
      console.log('inconsistent results.');
    }
  }
  
  console.log(checkConsistentOutput(addTwo, 5));


