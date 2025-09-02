// ===== GLOBALE OBJEKTE: MATH =====
const arr = ['Pikachu', 'Bulbasaur', 'Charmander', 'Mew', 'Enton', 'Glumanda'];

// Math.random() erzeugt eine Zufallszahl zwischen 0 und 1
// Math.floor() rundet ab zur nächsten ganzen Zahl
// Dadurch erhalten wir einen zufälligen Index für unser Array
const randomInd = Math.floor(Math.random() * arr.length);

// Würde einen zufälligen Pokémon aus dem Array ausgeben
console.log(arr[randomInd]);

// Math.min() gibt den kleinsten Wert zurück
// console.log(Math.min(30, 65, 2.54)); // Ausgabe: 2.54

// ===== GLOBALE OBJEKTE: DATE =====
// Erstellt ein neues Date-Objekt mit dem aktuellen Datum/Zeit
// const today = new Date();

// getMonth() gibt den Monat zurück (0-basiert: 0=Januar, 11=Dezember)
// console.log(today.getMonth());

// toLocaleTimeString() formatiert die Zeit nach lokalen Einstellungen
// console.log(today.toLocaleTimeString());

// ===== JS ARRAYS II: HIGHER ORDER ARRAY METHODEN =====

// const zahlen = [1, 2, 3, 4, 5];

// map() erstellt ein neues Array mit transformierten Werten
// Das ursprüngliche Array bleibt unverändert
// const zahlenPlusZwei = zahlen.map((zahl) => {
//   return zahl + 2;
// });
// console.log(zahlen);          // Original: [1, 2, 3, 4, 5]
// console.log(zahlenPlusZwei);  // Neues Array: [3, 4, 5, 6, 7]

// ===== HIGHER ORDER FUNCTIONS =====
// Eine Higher Order Function ist eine Funktion, die andere Funktionen als Parameter akzeptiert
function higherOrderFn(num, someFunction) {
  someFunction(num); // Führt die übergebene Funktion mit 'num' aus
  return num;
}

// Eine einfache Funktion, die als Parameter übergeben wird
function simpleFn(num) {
  console.log('Einfache Funktion');
  console.log(num + 5); // Gibt die Zahl + 5 aus
}

// Aufruf: higherOrderFn führt simpleFn mit der Zahl 4 aus
higherOrderFn(4, simpleFn);

// Funktionen als Rückgabewert
// adder ist eine Funktion, die eine andere Funktion zurückgibt (mit Closure)
// Die innere Funktion "erinnert" sich an den Wert von 'num'
function adder(num) {
  return function (otherNum) {
    return num + otherNum; // 'num' bleibt durch Closure verfügbar
  };
}

// addTen ist eine Funktion, die immer 10 zu einer Zahl addiert
const addTen = adder(10);
console.log(addTen(30)); // Ausgabe: 40 (10 + 30)

// ===== EIGENE MAP-IMPLEMENTATION =====
// Diese Funktion zeigt, wie map() intern funktioniert
function arrayTransformer(arr, callback) {
  const out = []; // Neues Array für die Ergebnisse

  // Durchläuft jedes Element des Arrays
  for (const element of arr) {
    const val = callback(element); // Wendet die Callback-Funktion an
    out.push(val); // Fügt das Ergebnis zum neuen Array hinzu
  }
  return out; // Gibt das transformierte Array zurück
}

const zahlen = [1, 2, 3, 4, 5];

// Callback-Funktion, die eine Zahl verdoppelt
const double = (num) => num * 2;

// Verwendet unsere eigene arrayTransformer-Funktion
const doubledNums = arrayTransformer(zahlen, double);
// console.log(doubledNums); // [2, 4, 6, 8, 10]

// Verwendet arrayTransformer mit einer inline Arrow Function
const stringNumbers = arrayTransformer(zahlen, (num) => `->${num}<-`);
console.log('transformer:', stringNumbers); // ['->1<-', '->2<-', '->3<-', '->4<-', '->5<-']

// ===== NATIVE ARRAY METHODEN =====

// ===== MAP() =====
// Die native map()-Methode macht (fast) dasselbe wie unser arrayTransformer
const stringNumbersMap = zahlen.map((num) => `->${num}<-`);
console.log('Array.map():', stringNumbersMap);

// ===== FOREACH() =====
// forEach() führt eine Funktion für jedes Array-Element aus (kein Rückgabewert)
zahlen.forEach((number) => console.log('Aus dem forEach: ', number));

// ===== FILTER() =====
// filter() erstellt ein neues Array mit allen Elementen, die den Test bestehen
// Hier: alle ungeraden Zahlen (Rest bei Division durch 2 ist nicht 0)
const oddNumbers = zahlen.filter((number) => number % 2 !== 0);
console.log('Gefiltern nach ungeraden Zahlen ', oddNumbers); // [1, 3, 5]

// ===== FIND() =====
// find() gibt das ERSTE Element zurück, das den Test besteht
const firstOdd = zahlen.find((number) => number % 2 !== 0);
console.log('Erste ungerade Zahl ', firstOdd); // 1

// ===== SOME() / EVERY() =====
// some() prüft, ob MINDESTENS ein Element den Test besteht
const hasOddNumber = zahlen.some((number) => number % 2 !== 0);
console.log('Hat mind. eine ungerade Zahl ', hasOddNumber); // true

// every() prüft, ob ALLE Elemente den Test bestehen
const hasOnlyOddNumbers = zahlen.every((number) => number % 2 !== 0);
console.log('Hat nur ungerade Zahlen ', hasOnlyOddNumbers); // false (2 und 4 sind gerade)

// ===== REDUCE() =====
// reduce() "reduziert" ein Array auf einen einzigen Wert
// Parameter: (akkumulator, aktueller_wert) => neue_akkumulator_wert, start_wert
const sumOfNumbers = zahlen.reduce(
  (zusammengerechneterWert, aktuellerWert) => zusammengerechneterWert + aktuellerWert,
  0 // Startwert ist 0
);
console.log('Summe aller Zahlen: ', sumOfNumbers); // 15 (1+2+3+4+5)

// Erweiterte reduce()-Verwendung: Summe nur der ungeraden Zahlen
const sumOdd = zahlen.reduce(
  (acc, x) => (x % 2 !== 0 ? acc + x : acc), // Wenn ungerade: addiere zu acc, sonst: acc unverändert
  0 // Startwert
);
console.log('Summe der ungeraden Zahlen: ', sumOdd); // 9 (1+3+5)
