// Slicing
// =======

// #### Objective:

// Learn how to use the `slice` method in JavaScript to extract portions of an array without modifying the original array.

// #### Instructions:

// 1.  You will be given an array.
// 2.  Use the `slice` method to extract
// different portions of the array.
// 3.  Print the original array and the sliced portions
//  to the console.
const array = [2, 4, 6, 8, 10, 12, 14, 16];

// Is the original array affected?

// Extract different portions of the array and print the results

// items from index 2-4 (including 4)
const slice1 = array.slice(2, 5);
console.log(slice1);
console.log(array);

// items from index 0-5 (including 5)
const slice2 = array.slice(0, 6);
console.log(slice2);

// last 2 items
const slice3 = array.slice(-2);
console.log(slice3);

const ticTacToe = [
  [' ', 'X', ' '],
  ['O', 'X', 'O'],
  [' ', 'X', ' '],
];

const t2 = ticTacToe;
t2[1] = 42;

const copyT = [...ticTacToe];
copyT[0][0] = 'test';

const sliceT = ticTacToe.slice(0, 2);
// console.log(sliceT)
// sliceT[0][0] = "X"

console.log(ticTacToe);
