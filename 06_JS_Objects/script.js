// === PRIMITIVE DATENTYPEN ===

// Number - Ganze Zahlen und Dezimalzahlen
const myNumber = 23;
const myFloat = 23.234;

// Boolean - true/false Werte
const myBoolean = false;

// String - Textdaten (hier mit Apostroph im Text)
const myString = "they're";

// BigInt - Sehr große Ganzzahlen (erkennbar am 'n' am Ende)
const myBitInt = 1232343445634541n;

// Symbol - Einzigartige Identifikatoren
const mySymbol = Symbol('das ist einzigartig');

// Spezielle Werte
const myNull = null; // Explizit leerer Wert
const myUndefined = undefined; // Nicht definierter Wert

// Hinweis: typeof null gibt "object" zurück (bekannter JavaScript-Bug)
// console.log(typeof myNull);

// === OBJEKTE ===

// Objekt mit verschiedenen Eigenschaften und Methoden
const sheep = {
  // Einfache Eigenschaften
  name: 'Alba',
  fellFarbe: '#fff',
  age: 12,
  geschoren: true,

  // Property mit Bindestrich (muss in Anführungszeichen)
  'lieblings-futter': ['Heu', 'Hafer', 'Pellets'],

  // Verschachteltes Objekt
  location: {
    lat: 52.123234,
    long: 13.234,
  },

  // Methode (Funktion als Objekteigenschaft)
  makeSound() {
    return 'Määhhhh';
  },
};

// === OBJEKTZUGRIFF ===

// Beide Zugriffsmethoden sind equivalent
console.log(sheep.geschoren); // Dot-Notation
console.log(sheep['geschoren']); // Bracket-Notation

// Dynamischer Propertzugriff mit Variablen
const myKey = 'age';
console.log(sheep[myKey]); // Verwendet den Wert von myKey als Property-Name

// Dot-Notation für verschachtelte Objekte
console.log(sheep.location.long);

// Bracket-Notation für Properties mit Bindestrichen
console.log(sheep['lieblings-futter'][1]); // Zugriff auf Array-Element

// === OBJEKTMANIPULATION ===

// Property-Wert ändern
sheep.geschoren = false;

// Neue Property hinzufügen
sheep.race = 'Ouessant';

// Property löschen
delete sheep.age;

// Gesamtes Objekt ausgeben
// console.log(sheep);

// === METHODENAUFRUF ===

// Objektmethode aufrufen
console.log(sheep.makeSound());
