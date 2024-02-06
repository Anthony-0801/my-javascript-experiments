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
function maxMinAvg(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
        sum += arr[i];
    }
    var avg = sum / arr.length;
    return [max, min, avg];
}
y = maxMinAvg([1,2,31,4,5,16,7,8,9,10]);
console.log(y); // should log [31,1,9.3]
y = maxMinAvg([1,22,3, 4, 15]);
console.log(y); // should log [22,1,9]
y = maxMinAvg([1,2,3,4,5,6,7,8,9,10,11]);
console.log(y); // should log [11,1,6]



//Given an array of numbers, create a function that returns a new array where negative values were replaced with the string 'Dojo'.
function replaceNegatives(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = "Dojo";
        }
    }
    return arr;
}
y = replaceNegatives([1,2,-3,-5,5, -7]);
console.log(y); // should log [1,2,'Dojo','Dojo',5, 'Dojo']
y = replaceNegatives([-1,-3,-5]);
console.log(y); // should log ['Dojo','Dojo','Dojo']
y = replaceNegatives([42,72,23]);
console.log(y); // should log [42, 72, 23]




//Given an array, and indices start and end, remove values in that index range, working in place (hence shortening the array).
function removeVals(arr, start, end){
    arr.splice(start, end - start + 1);
    return arr;
}
y = removeVals([20,30,40,50,60,70],2,4);
console.log(y); // should log [20,30,70]
y = removeVals([20,30,40,50,60,70],2,3);
console.log(y); // should log [20,30,60,70]
y = removeVals([20,30,40,50,60,70],1,5);
console.log(y); // should log [20]
y = removeVals([20,30,40,50,60,70],0,5);
console.log(y); // should log []
