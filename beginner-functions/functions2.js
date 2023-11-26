
//function 2
  //function expressions, In a function expression, the function name is usually omitted.
  // A function with no name is called an anonymous function. A function expression is often stored in a variable in order to refer to it.
  const plantNeedsWater = function (day) {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(plantNeedsWater('Tuesday'));

  //Arrow functions remove the need to type out the keyword function every time you need to create a function.
  //Instead, you first include the parameters inside the ( ) and then add an arrow => that points to the function body surrounded in { } like this:
  const rectangleArea = (width, height) => {
    let area = width * height;
    return area;
  };
//Another example, I've changed the variable name so that there'd be no errors
const plantNeedWater = (day) => {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };
  
  console.log(plantNeedsWater('Wednesday'));

//Concise Body Arrow Functions
//functionNumber is a variable
//zero parameters
const functionOne  = () => {};
//one parameters
const functiontwo = paramOne => {};
//two or more parameters
const functionMore = (paramOne, paramTwo) => {};
//doing a function that has the size of a single line block, using implicit return
const sumNumber = number => number + number;
//example, if we have a function of:
const squaresNum = (num) => {
  return num * num;
};
//we can refactor the function to: I've changed the variable name so that there'd be no errors.
const squareNum = num => num * num;
//Another example: Changing the variable name to avoid errors
const plantNeedssWater = day => day === 'Wednesday' ? true :false;


//----------------------S U M M M A R Y---------------------------
//Implementing the same function but in different styles of writing.

//this is a function expression
const myName = function (name) {
    if (name === 'Anthony') {
        return true;
    } else {
        return false;
    }
};

//this is an arrow function
const myName1 = name => {
    if (name === 'Anthony') {
        return true;
    } else {
        return false;
    }
};

//this is a concise body arrow function
const myName2 = name => name === 'Anthony' ? true : false;