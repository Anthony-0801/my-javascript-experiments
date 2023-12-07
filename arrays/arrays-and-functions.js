const flowers = ['peony', 'daffodil', 'marigold'];

function addFlower(arr) {
  arr.push('lily');
}

addFlower(flowers);

console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']

//another array and functions
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept); //[ 'arrays', 'can', 'be', 'MUTATED' ]

function removeElement(newArr) {
  newArr.pop();
}

removeElement(concept);
console.log(concept); //[ 'arrays', 'can', 'be' ]
