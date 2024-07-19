// Making a factorial 

function factorial(n) {
  if(typeof n !== 'number') {
    return 'Invalid input';
  }

  let i, result = 1;
  for(i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

//make test cases for the program
console.log(factorial(5)); //120
console.log(factorial(0)); //1
console.log(factorial(1)); //1
console.log(factorial(3)); //6
console.log(factorial(6)); //720