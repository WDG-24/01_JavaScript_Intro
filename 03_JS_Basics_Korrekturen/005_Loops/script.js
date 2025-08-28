// Array von Tieren im Zoo
const animals = ['lion', 'tiger', 'bear', 'giraffe', 'zebra', 'monkey'];

// For-Schleife mit hoher Kondition (nur für unsere Übung)
// for (let i = 0; i < 1000; i++) {
//   if (animals[i] !== undefined) {
//     counter++;
//   } else {
//     break;  // Bricht ab, wenn undefined erreicht wird
//   }
// }
// console.log(counter);

// Modernerer Syntax für Schleifen über Arrays
// for...of → für Arrays (Werte)
// for...in → für Objekte (Keys/Indices)
// let totalanimals = 0;
// for (const animal of animals) {
//   totalanimals++;  // Zählt jedes Tier
// }

// Array-Zugriff über Index
// const index = 3
// console.log(animals[index]);  // "giraffe"

// While-Schleife: Läuft SOLANGE Bedingung true ist
// let i = 0;
// let totalAnimals = 0;
// while (i < animals.length) {
//   if (animals[i].length >= 5) {  // Tiere mit 5+ Buchstaben
//     totalAnimals++;
//   }
//   i++;  // ← Vergiss das nie! Sonst Endlosschleife!
// }
// console.log(totalAnimals);

// DO-WHILE: Läuft mindestens einmal, prüft dann Bedingung
let i = 0;
let totalAnimals = 0;

do {
  totalAnimals++; // Zählt immer mindestens 1
  i++;
} while (animals[i][0] !== 'm'); // Läuft bis ein Tier mit 'm' gefunden wird

console.log(totalAnimals); // Ausgabe: 5 (alle Tiere bis 'monkey')

// Schleifenarten im Überblick:
// - for: Klassisch, vollste Kontrolle
// - for...of: Modern für Arrays (Werte)
// - for...in: Für Objekte (Keys)
// - while: Läuft solange Bedingung true
// - do...while: Läuft mindestens einmal, dann prüft
