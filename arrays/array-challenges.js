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
