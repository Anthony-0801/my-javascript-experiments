const nestedArr = [[1], [2, 3]];

//accessing a nested array
console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2

//another nested array
let numberClusters = [[1,2], [3,4], [5,6]];
//we'll access number 6
const target = numberClusters[2][1];
console.log(target);
