//Given an array and a value Y, count and print the number of array values greater than Y.

function greaterThanY(arr, Y){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > Y){
            count++;
        }
    }
    return count;
}
y = greaterThanY([9, 2, 1, 7, 6, 33, 23], 3);
console.log(y); // should log 5
y = greaterThanY([1, 3, 5, 7], 6);
console.log(y); // should log 1
y = greaterThanY([15, 33, 65, 7], 8);
console.log(y); // should log 3



//Given an array, print the max, min, and average values for that array.

