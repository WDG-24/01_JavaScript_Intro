// Array mit Beispielzahlen
const zahlen = [23, 4, 5, 23, 45, 3];

// Eigene transform-Methode zu Array.prototype hinzufügen
// ACHTUNG: In echten Projekten sollte man prototype nicht verändern!
Array.prototype.transform = function (callback) {
  console.log(this); // 'this' bezieht sich auf das Array, das die Methode aufruft
  const out = [];
  for (const element of this) {
    const val = callback(element);
    out.push(val);
  }
  return out; // Neues transformiertes Array zurückgeben
};

const double = (num) => num * 2;

// Da transform ein Array zurückgibt, können wir weitere Array Methoden verketten.
console.log(zahlen.transform(double).join('-'));

// Die Callbacks in Array methoden haben auch auf mehr Zugriff
// CB: (aktueller_wert, index, gesamtes_array) => {}
const doubled = zahlen.map((number, index, array) => {
  // Quadriert die Zahl und addiert den Index
  // index = Position im Array (0, 1, 2, ...)
  // array = Referenz auf das ursprüngliche Array
  return number * number + index;
});
console.log(doubled); // [529, 17, 27, 532, 2029, 14]

// includes() prüft, ob ein Wert im Array enthalten ist
const userRole = 'user';
console.log(['admin', 'user', 'superuser'].includes(userRole)); // true
