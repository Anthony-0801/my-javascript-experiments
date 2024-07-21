let user = [Number(prompt('Enter the first number (X): ')), Number(prompt('Enter the second number (Y): '))];
let operation = prompt('Enter the operation: ');

if(typeof user[0] !== 'number' || typeof user[1] !== 'number') {
    document.write('Invalid input');
}

if(operation === 'a' || 'A') {
    document.write(`You've used addition the output of ${user[0]} and ${user[1]} is: `, user[0] + user[1]);
} else if(operation === 's' || 'S') {
    document.write(`You've used subtraction the output of ${user[0]} and ${user[1]} is: `, user[0] - user[1]);
} else if(operation === 'm' || 'M') {
    document.write(`You've used multiplication the output of ${user[0]} and ${user[1]} is: `, user[0] * user[1]);
} else if(operation === 'd' || 'D') {
    document.write(`You've used division the output of ${user[0]} and ${user[1]} is: `, user[0] / user[1]);
} else if(operation === 'r' || 'R') {
    document.write(`You've used remainder the output of ${user[0]} and ${user[1]} is: `, user[0] % user[1]);
} else if(operation === 'e' || 'E') {
    document.write(`You've used exponent the output of ${user[0]} and ${user[1]} is: `, user[0] ** user[1]);
} else {
    document.write('Invalid operation');
}

