let myAge = 21; //my current age (Anthony) in 2023;

//The first two years of a dog's life count as 10.5 dog years each.
let earlyYears = 2;
earlyYears *= 10.5;

//Since we already accounted for the first 2 years, subtract 2 from myAge
let laterYears = myAge -= 2;

//Multiply lateryears by 4 to calculate the number of dog years accounted for by your later years.
laterYears *= 4;

let myAgeInDogYears = earlyYears + laterYears;
myName = ("Anthony".toLowerCase());

document.write(`My name is ${myName}. I am ${myAge} (deducted by two years) years old in human years which is ${myAgeInDogYears} years old in dog years.`);