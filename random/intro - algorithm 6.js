//Return the given array, after setting any negative values to zero.  For example resetNegatives( [1,2,-1, -3]) should return [1,2,0,0].
function resetNegatives(x){
    for(var i = 0; i < x.length; i++){
        if(x[i] < 0){
            x[i] = 0;
        }
    }
    return x;
}
y = resetNegatives([1,2,-1, -3]);
console.log(y); // should log [1,2,0,0]
y = resetNegatives([2,5,8]);
console.log(y); // should log [2,5,8]
y = resetNegatives([-1,-3,-5]);
console.log(y); // should log [0,0,0]



//Given an array, move all values forward by one index, dropping the first and leaving a '0' value at the end.
function moveForward(x){
    for(var i = 0; i < x.length - 1; i++){
        x[i] = x[i + 1];
    }
    x[x.length - 1] = 0;
    return x;
}
y = moveForward([1,2,3]);
console.log(y); // should log [2,3,0]
y = moveForward([2,5,8]);
console.log(y); // should log [5,8,0]
y = moveForward([42,72,23]);
console.log(y); // should log [72,23,0]



//Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swap([1,2,3,4,5,6]) should return [6,2,4,3,5,1].   
function swap(x){
    for(var i = 0; i < x.length / 2; i += 2){
        var temp = x[i];
        x[i] = x[x.length - 1 - i];
        x[x.length - 1 - i] = temp;
    }
    return x;
}
y = swap([1,2,3,4,5,6]);
console.log(y); // should log [6,2,4,3,5,1]
y = swap([2,5,8]);
console.log(y); // should log [8,5,2]
y = swap([42,72,23, 1, 2, 3]);
console.log(y); // should log [3,72,2,1,23,42]



//Create a function that changes a given array to list each original element twice, retaining the original order.  Have the function return the new array.  For example repeatTwice( [4,”Ulysses”, 42, false] ) should return [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].
function repeatTwice(x){
    for(var i = x.length - 1; i >= 0; i--){
        x[i * 2 + 1] = x[i];
        x[i * 2] = x[i];
    }
    return x;
}
y = repeatTwice([4,"Ulysses", 42, false]);
console.log(y); // should log [4,4, "Ulysses", "Ulysses", 42, 42, false, false]
y = repeatTwice([2,5,8]);
console.log(y); // should log [2,2,5,5,8,8]
y = repeatTwice([42,72,23]);
console.log(y); // should log [42,42,72,72,23,23]
y = repeatTwice([1,2,3,4,5,6]);
console.log(y); // should log [1,1,2,2,3,3,4,4,5,5,6,6]