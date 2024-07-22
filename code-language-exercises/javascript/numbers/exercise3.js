//Creating a better precision than .toPrecision() method

function betterPrecision(num, precision) {
    let stringified = num.toPrecision(precision);
    let index = stringified.indexOf('e');

    if (index !== -1) {
        let decimalIndex = Number(stringified.slice(index + 1));
        if(decimalIndex < 5) {
            console.log(Number(stringified).toString());
        }
    }   
    console.log(stringified);
}

//Create test cases for my function
betterPrecision(123456789, 3); //expected output: 123e6
betterPrecision(123456789, 5); //expected output: 12345e4
betterPrecision(123456789, 7); //expected output: 1234568e2