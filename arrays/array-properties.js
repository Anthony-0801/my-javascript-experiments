//Compilation of in built properties of array

// .length property - returns the number of items in the array
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);

// .push property - adds an item at the end of the array
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('read', 'write');
console.log(chores);

// .pop property - removes the last item in the array
const chores1 = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop();
console.log(chores);

//.shift property - Removes and returns the first element of the array.
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
console.log(groceryList.shift());

// .unshift property - Adds one or more elements to beginning of array and returns new length.
groceryList.unshift('popcorn');
console.log(groceryList);

// .slice property - returns a shallow copy of all or part of an array without modifying the original.
// A shallow copy duplicates the contents of an object into a new instance by reference; which is why changes to the copy are not reflected in the original.
console.log(groceryList.slice(1,4));
console.log(groceryList);

// .indexOf property - returns the first index at which an element can be found. Returns -1 if the element is not found
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);
