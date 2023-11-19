let arrangeMe = [10, 32, 402, 21, 11, 103, 23, 1, 5, 95];
let i;
document.write("<p> 1. Printing out the numbers without arranging </p>"); 
for (i = 0; i < arrangeMe.length; i++) {
    document.write(arrangeMe[i] + ",  ");
}

document.write("<p> 2. Printing out the array in ascending order using a bubble sort function</p>");
const bubbleSort = (arr) => {
let swapped;
do {
    swapped = false;
    for(let a = 0; a < arr.length - 1; a++) {
        if (arr[a] > arr[a + 1]) {
            let temp = arr[a];
            arr[a] = arr[a + 1];
            arr[a + 1] = temp;
            swapped = true;
        }
    }
} while (swapped);
return arr;
};

document.write(bubbleSort(arrangeMe));
