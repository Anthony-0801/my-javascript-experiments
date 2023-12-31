//all challenges are written in a function
//challenge 1
function print1to20() {
    // Enter code below
let num;
for (num = 1; num <= 20; num++) {
    console.log(num);
};
}

//challenge 2
function printOdd3to20 () {
    let num;
for (num = 3; num <=20; num++) {
    if(num % 2 !== 0) {
        console.log(num);
    }
};
}

//challenge 3
function printEven4to22 () {
    // Enter code below
let num;
for (num = 4; num <=22; num++) {
    if (num % 2== 0) {
        console.log(num);
    }
};
}

//challenge 4
function multipleOf7 () {
    // Enter code below
let num;
for (num = 7; num <=62; num++) {
    if (num %7 == 0) {
        console.log(num);
    }
};
}

//challenge 5
function countdownBy5 () {
    // Enter code below
let num;
for (num = 50; num > 0; num--) {
    if (num %5 == 0) {
        console.log(num)
    }
};
}

//challenge 6
function firstPlusLength (arr) {
    // Enter code below
let result = arr[0] + arr.length;
console.log(result);
}

//challenge 7
function printEven4to22() {
    // Enter code below
let sum = 0;
for(let num =4; num<=22; num++){
    if (num % 2 == 0) {
        console.log(num);
         sum += num;
    }
}  return sum;
}

//challenge 8
function addOddInts () {
    // Enter code below
let sum = 0;
for (num = -25000; num <= 30000; num++) {
    if (num % 2 !== 0) {
         sum += num;
    }
}return (sum); 
}

//challenge 9
function printArray(arr) {
    // Enter code below
for (let num = 0; num <=arr.length -1; num +=1) {
    console.log(arr[num]);
    };
}

//challenge 10
function printPositives (arr) {
    // Enter code below
for (let num = 0; num <= arr.length; num +=1) { if (arr[num] > 0) {
    console.log(arr[num])
}
};
}

//challenge 11
function bePositive (arr) {
    // Enter code below
let newArr = [];
for (let num = 0; num < arr.length; num++)
    { if (arr[num] < 0) {
        newArr.push(-arr[num]);
    } else { newArr.push(arr[num]);
    }
    } return newArr;
}

//challenge 12
function squareEval (arr) {
    // Enter code below
let newArr = [];
for (let num = 0; num < arr.length; num++) { 
    newArr.push(arr[num] * arr[num]);
}
return newArr;
}

//challenge 13
function printPositiveIndex(arr) {
    // Enter code below
for (let num = 0; num < arr.length; num+= 1) {
    if (arr[num] > 0) {
        console.log(num);
    }
};
}

//challenge 14
function noNeg (arr) {
    // Enter code below
let newArr = [];
for (let num = 0; num < arr.length; num +=1) {if (arr[num] > 0) {
    newArr.push(arr[num]);
} else {newArr.push(0);}
}
return newArr;
}

//challenge 15
function findSum (arr) {
    // Enter code below
let sum = 0;
for (let num = 0; num < arr.length; num++) { sum += arr[num]; } return sum;
}

//challenge 16
function findMax (arr) {
    // Enter code below
let max = arr[0];
for (let num = 0; num < arr.length; num++) {
    if (arr[num] > max) {
        max = arr[num];
    }
}
return max;
}

//challenge 17
function findMin (arr) {
    // Enter code below
let min = arr[0];
for (let num = 1; num < arr.length; num++) {
    if (arr[num] < min) {
        min = arr[num];
    }
}
return min;
}

//challenge 18
function findMinMax (arr) {
    // Enter code below
let min = arr[0];
let max = arr[0];


for (let num = 1; num < arr.length; num++) {
    if (arr[num] < min) {
        min = arr[num];}
        
    if (arr[num] > max)  {
        max = arr[num];}
}

return[min, max];
}

//challenge 19
function countPositives (arr) {
    // Enter code below
let count = 0;
for (let num = 0; num < arr.length; num++) { if (arr[num] > 0) {
    count++;
}
} arr[arr.length -1] = count;
return arr;
}

//challenge 20
function valuesGreaterThanSecond (arr) {
    // Enter code below
let greatValues = [];
let sum = 0;
for (let num = 0; num < arr.length; num++) {
    if (arr[num] > arr[1]) {
        greatValues.push(arr[num]);
        sum += arr[num];
    }
}
console.log(greatValues.join(' '));
return sum;
}

//challenge 21
function thisLengthThatValue (num1, num2) {
    // Enter code below
let newArray = new Array(num1).fill(num2);
return newArray;
}

//challenge 22

