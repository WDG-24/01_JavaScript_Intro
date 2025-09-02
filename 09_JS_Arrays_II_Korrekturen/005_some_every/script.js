// Some and Every
// ==============

// **Objective:**

// Learn how to use the `some` and `every` methods to test whether some or all elements in an array pass the provided function's test in JavaScript.

// **Instructions:**

// 1.  **Initialize an Array of Numbers:**

//     *   Create an array called `numbers` containing the following values in order: `4`, `8`, `15`, `16`, `23`, `42`.
const numbers = [4, 8, 15, 16, 23, 42];
// 2.  **Use the `some` Method to Check for Numbers Greater Than 20:**

//     *   Use the `some` method to check if there are any numbers in
//     *   `numbers` that are greater than `20`.
//     *   Print the result to the console (should be `true`).
const resultSome = numbers.some((number) => number > 20);
resultSome;

// 3.  **Use the `every` Method to Check for Numbers Less Than 50:**
//     *   Use the `every` method to check if all numbers in
//     *   `numbers` are less than `50`.
//     *   Print the result to the console (should be `true`).
const resultEvery = numbers.every((number) => number < 50);
console.log(resultEvery);

// 4.  **Initialize an Array of Objects:**

//     *   Create an array called `students` containing the following objects:
//         *   `{ name: "Alice", age: 25, passed: true }`
//         *   `{ name: "Bob", age: 22, passed: false }`
//         *   `{ name: "Charlie", age: 27, passed: true }`
//         *   `{ name: "David", age: 20, passed: true }`
const students = [
  { name: 'Alice', age: 25, passed: true },
  { name: 'Bob', age: 22, passed: false },
  { name: 'Carol', age: 27, passed: true },
  { name: 'David', age: 20, passed: true },
];

// 5.  **Use the `some` Method to Check if Any Student Failed:**
//     *   Use the `some` method to check if there are any students
//     *   in `students` who have `passed` set to `false`.
//     *   Print the result to the console (should be `true`).
// const anyFailed = students.some((student) => student.passed === false);
const anyFailed = students.some(({ passed }) => !passed);
console.log(anyFailed);

// 6.  **Use the `every` Method to Check if All Students are
// Older Than 18:**
//     *   Use the `every` method to check if all students in
//     *  `students` are older than `18`.
//     *   Print the result to the console (should be `true`).
const above18 = students.every((student) => student.age > 18);
console.log(above18);
