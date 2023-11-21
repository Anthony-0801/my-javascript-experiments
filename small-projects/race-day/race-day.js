let raceNumber = Math.floor(Math.random() * 1000);
//time and registrant are the only variables that must be changed

let time = parseInt(prompt("Type '0' if you're late and '1' if you're early: "));
let registrant= parseInt(prompt("Type your age here: "));
let adult = registrant >= 18 && registrant < 100;

//for young adults
 if (!adult) {
  raceNumber > 1000;
  document.write(`Your race number is ${raceNumber}`);
  document.write("<br> All youth regardless of time registered will start at 12:30 PM");
} 

//for early adult runners
else if (time === 1 && adult ) {
  raceNumber += 1000;
  document.write(`Your race number is ${raceNumber}`);
  document.write("<br> Early adult registrant will start at 9:30 AM");
} 

//for late adult runners
else if (time === 0 && adult < 100) {
  raceNumber > 1000;
  document.write(`Your race number is ${raceNumber}`);
  document.write("<br> Late adult registrant will start at 11 AM");
} 

//for possible error
else {
  document.write("Error! Please go to the registration deck for queries.");
}


