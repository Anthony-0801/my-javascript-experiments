//Sort three numbers
let input = [Number(prompt('Enter the first number: ')), Number(prompt('Enter the second number: ')), Number(prompt('Enter the third number: '))];
console.log(input.sort((a, b) => a - b).join('\n'));

