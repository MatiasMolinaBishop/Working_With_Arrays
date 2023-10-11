/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
  ]);
  
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
  
  /////////////////////////////////////////////////
//   arrays are object and they get access to special built in methods.

let arr = ['a', 'b', 'c', 'd', 'e'];

// The slice() method of Array instances returns a shallow copy of a portion of an array into a new 
// array object selected from start to end (end not included) where start and end represent the index of items in that array. 
// The original array will not be modified / mutated.

console.log(arr.slice(2))
// [ 'c', 'd', 'e' ]. The 1st parameter is from where the you start. Basically anything before gets discated
console.log(arr.slice(2, 4))
// [ 'c', 'd' ] the second parameter specifies up to when you want to slice the arr. Note that the number it self is not included. 
console.log(arr.slice(-2))
console.log(arr.slice(-1))
console.log(arr.slice(1, -2))

// The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// If not specified it will just remove the original arr.
// arr.splice(2) returns ['c', 'd', 'e'];
// Note that when we console.log(arr) now it would retun ['a', 'b']

// To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced(). To access part of an array without modifying it, see slice().
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

// A common use case is to remove the last element of an array
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr2.splice(-1))
console.log(arr2)

// //////// REVERSE METHOD
// Note that the reverse methid mutates the original array. 
console.log(arr2.reverse())
console.log(arr2)

// CONCAT METHOD
// Concat does not mutate the original array

console.log(arr.concat(arr2))

// JOIN METHOD
// Joins an arr into a string

console.log(arr.join('&'))

///////////////////////////////////////
// The new at Method

// Basically the same as specifying index of the arr / bracket notation
const arr3 = [23, 11, 64];
console.log(arr3[0]);
console.log(arr3.at(0));

// getting last array element
console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-1)[0]);
console.log(arr3.at(-1));

console.log('jonas'.at(0));
console.log('jonas'.at(-1));