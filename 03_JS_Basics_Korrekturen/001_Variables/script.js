// Variable declaration mit let - kann später geändert werden
let age = 25;

// Konstante mit const - kann NICHT geändert werden
const birthYear = 1999;

// Template literals mit Backticks `` funktionieren wie normale Strings
// Ermöglichen mehrzeilige Strings und das direkte Einsetzen von Variablen
let name = `John Doe`;

// Boolean Werte: true oder false
const isStudent = true;

// let Variablen können neue Werte erhalten
age = 26;
name = 'Jane Doe'; // Strings mit ' oder " oder `` sind alle gültig

// Diese Zeile ist auskommentiert - const kann nicht neu zugewiesen werden!
// birthYear = 2000; // ❌ TypeError: Assignment to constant variable

// Object shorthand: { name, age } ist dasselbe wie { name: name, age: age }
console.log({ name, age, isStudent });
