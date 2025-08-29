// Push, pop, shift and unshift
// ============================

// **Objective:**

// Learn how to use the `.push`, `.pop`, `.shift`, and `.unshift` methods to manipulate arrays in JavaScript.

// **Instructions:**

// 1.  **Initialize an Array:**

//     *   Create an array called `myArray` containing the
//  following values in order: `1`, `2`, `3`, `4`, `5`.
const myArray = [1, 2, 3, 4, 5];

// 2.  **Add Elements to the End of the Array:**

//     *   Use the `.push` method to add the values `6` and `7`
// to the end of the array.
myArray.push(6, 7);

//     *   Print the array to the console.
console.log(myArray);

// 3.  **Remove the Last Element from the Array:**

//     *   Use the `.pop` method to remove the last element of the array.
const lastElement = myArray.pop();
console.log(lastElement);

//     *   Print the array to the console.
console.log(myArray);

// 4.  **Remove the First Element from the Array:**

//     *   Use the `.shift` method to remove the first element of the array.
const firstEl = myArray.shift();
console.log(firstEl);

//     *   Print the array to the console.
console.log(myArray);
// 5.  **Add Elements to the Beginning of the Array:**

//     *   Use the `.unshift` method to add the values `0` and `-1`
//  to the beginning of the array.
const returnVal = myArray.unshift(-1, 0);
console.log(returnVal);

//     *   Print the array to the console.
console.log(myArray);
