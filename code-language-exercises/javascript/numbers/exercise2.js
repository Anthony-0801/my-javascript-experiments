//Creating a function that only accepts integers as input

function isNumber(num) {
    num = prompt("Enter an integer: ");

    while (Number(num) !== parseInt(num)) {
        alert("Please enter a valid integer.");
        num = prompt("Enter an integer: ");
    }

    document.write(`The number ${num} is an integer.`);
}

isNumber();