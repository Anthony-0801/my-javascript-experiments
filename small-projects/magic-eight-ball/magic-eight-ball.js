let userName = prompt("Enter your name: ");
userName ? document.write(`Hello, ${userName}!`) : 
                console.log("Hello");

let userQuestion = prompt("Enter your question: ");
document.write(`${userQuestion}, ${userName}?`);

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";
eightBall = randomNumber;
//Practicing control flow using switch and if else, they have the same algorithm tho for practice
// Switch Statement
switch (eightBall) {
  case 0 : document.write("It is certain");
  break;
  case 1 : document.write("It is decidedly so");
  break;
  case 2 : document.write("Reply hazy try again");
  break;
  case 3 : document.write("Cannot predict now");
  break;
  case 4 : document.write("Do not count on it");
  break;
  case 5 : document.write("My sources say no");
  break;
  case 6 : document.write("Outlook not so good");
  break;
  case 7 : document.write("Signs point to yes");
  break;
  default : document.write("It is what it is");
  break;
} 
//If-Else Statement     
/*
if (eightBall === 0) {
  console.log("It is certain");
} else if (eightBall === 1) {
  console.log("It is decidedly so");
} else if (eightBall === 2) {
  console.log("Reply hazy try again");
} else if (eightBall === 3) {
  console.log("Cannot predict now");
} else if (eightBall === 4) {
  console.log("Do not count on it");
} else if (eightBall === 5) {
  console.log("My sources say no");
} else if (eightBall === 6) {
  console.log("Outlook not so good");
} else if (eightBall === 7) {
  console.log("Signs point to yes");
} else {
  console.log("It is what it is");
}

*/