//Finding the minimum number

function min(arr) {
    let min = Infinity;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    } 
    console.log(min);
}

//Help me make some test cases for my function in which the minimum number is not just 1, it must be random number
//Test case 1
min([1, 2, 0, 9, 5]); //0
//Test case 2
min([2, 4, 6, 1, 10]); //1
//Test case 3
min([3, 6, 9, 12, -12]); //-12
//Test case 4
min([4, -1, 12, 16, 20]); //-1
//Test case 5
min([]); //Infinity

