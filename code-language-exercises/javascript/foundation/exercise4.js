//A simple linear search
function linearSearch(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return true;
        }
    }
    return false;
}

//make test cases for the program
console.log(linearSearch([1, 2, 3, 4, 5], 3)); //true
console.log(linearSearch([1, 2, 3, 4, 5], 6)); //false
console.log(linearSearch([1, 2, 3, 4, 5], 1)); //true
console.log(linearSearch([1, 2, 3, 4, 5], 5)); //true
console.log(linearSearch([1, 2, 3, 4, 5], 2)); //true