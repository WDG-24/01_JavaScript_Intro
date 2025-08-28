// HOISTING: Function Declarations können VOR ihrer Definition aufgerufen werden!
greetDeclaration(); // ✅ Funktioniert - JavaScript "hisst" die Funktion nach oben

function greetDeclaration() {
  console.log('Hallo, Wels!');
}

// Arrow Function: Moderne, kurze Syntax (ES6+)
let greetArrow = () => console.log('Hallo, Wels - Arrow Function');

greetArrow(); // ✅ Funktioniert nur NACH der Definition (kein Hoisting)

// Function Expression: Funktion in Variable gespeichert; eher selten
let greetVar = function () {
  console.log('Hallo, Wels!');
};

// Funktion mit Parameter und Rückgabewert
function square(x) {
  return x ** 2; // ** = Potenzierung (x^2)
}

console.log(square(5)); // Ausgabe: 25

// Funktion mit mehreren return-Statements
// Sobald ein return erreicht wird, verlassen wir die Funktion!
function getDayname(i) {
  switch (i) {
    case 0:
      return 'Sunday'; // Kein break nötig - return verlässt die Funktion

    case 1:
      return 'Monday';

    case 2:
      return 'Tuesday';

    case 3:
      return 'Wednesday';

    case 4:
      return 'Thursday';

    case 5:
      return 'Friday';

    case 6:
      return 'Saturday';

    default:
      return 'Invalid day'; // Fallback für ungültige Eingaben
  }
}
console.log(getDayname(5)); // Ausgabe: "Friday"

// Funktionsarten im Überblick:
// - function declaration: Hoisting ✅, this-binding ✅ (ist später Thema)
// - function expression: Kein Hoisting ❌, this-binding ✅
// - arrow function: Kein Hoisting ❌, kein this-binding ❌, kurze Syntax ✅
//
//  return verlässt die Funktion sofort - kein break im switch nötig!
