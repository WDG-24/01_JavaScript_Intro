// == vs === - Der Unterschied zwischen "locker" und "streng"
console.log('5 == "5": ', 5 == '5'); // ✅ true - konvertiert "5" zu 5, dann verglichen
console.log('5 === "5": ', 5 === '5'); // ❌ false - verschiedene Typen (number vs string)

// Vergleiche mit >= - beide Seiten werden zu Zahlen konvertiert
console.log(5 >= 5 && '5' >= 5); // true && true = true

// null und undefined sind "falsy" Werte
const nullVar = null; // explizit "nichts"
let notDefined; // undefined (nicht initialisiert)

// if prüft "truthiness" - null ist falsy
if (nullVar) {
  console.log('Das ist true');
} else {
  console.log('Das ist false'); // ← Das wird ausgegeben!
}

// Falsy Werte in JavaScript: false, 0, "", null, undefined, NaN
// Alles andere ist truthy!
// Faustregel: Verwende === statt == (außer du willst bewusst konvertieren)
