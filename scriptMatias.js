'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//   arrays are object and they get access to special built in methods.

let arr = ['a', 'b', 'c', 'd', 'e'];

// The slice() method of Array instances returns a shallow copy of a portion of an array into a new
// array object selected from start to end (end not included) where start and end represent the index of items in that array.
// The original array will not be modified / mutated.

console.log(arr.slice(2));
// [ 'c', 'd', 'e' ]. The 1st parameter is from where the you start. Basically anything before gets discated
console.log(arr.slice(2, 4));
// [ 'c', 'd' ] the second parameter specifies up to when you want to slice the arr. Note that the number it self is not included.
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));

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
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr2.splice(-1));
console.log(arr2);

// //////// REVERSE METHOD
// Note that the reverse methid mutates the original array.
console.log(arr2.reverse());
console.log(arr2);

// CONCAT METHOD
// Concat does not mutate the original array

console.log(arr.concat(arr2));

// JOIN METHOD
// Joins an arr into a string

console.log(arr.join('&'));

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

///////////////////////////////////////
// Looping Arrays: forEach
//////////////////////////////
//NOTE - you cannot use continu or break in forEach() if you need this go back to for loops
//forEach is technically a higher order function that requires a callback function to tell it what to do
//the forEach metho calls the call back function we define instead of us calling it ourselfs

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);

// for (let movement = 0; movement < movements.length; movement++) {
//   if (movements[movement] < 0) {
//     console.log('You withdrew money');
//   } else if (movements[movement] > 0) {
//     console.log('You deposited money');
//   } else {
//     console.log('No transaction');
//   }
// }

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }

console.log(
  'forEach method takes in a callback function that is applied to every element of the array'
);
movements.forEach(movement => {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    //Math.abs(movement) removes the sign using the number abosolute value
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

//If we wneeded access to a counter variable? Just like we can access the current index of an array in the for of loop
//entires() array method that returns an array of arrays in the position contains the current index and the the value itself
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement${i + 1} You deposited ${movement}`);
  } else {
    //Math.abs(movement) removes the sign using the number abosolute value
    console.log(`Movement${i + 1} You withdrew ${Math.abs(movement)}`);
  }
}

// For each gives us access to the index and the entire array
movements.forEach((movement, index, array) => {
  if (movement > 0) {
    console.log(`Movement ${index + 1} You deposited ${movement}`);
  } else {
    //Math.abs(movement) removes the sign using the number abosolute value
    console.log(`Movement ${index + 1} You withdrew ${Math.abs(movement)}`);
  }
});

///////////////////////////////////////
// forEach With Maps and Sets
// Map

//WHY NOT SHOWING?
