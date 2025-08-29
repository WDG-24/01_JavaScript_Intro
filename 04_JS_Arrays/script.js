const numbers = [1, 2, 'wizard', false, [6, 3, [53]], false];

// Array-Zugriff über Index - gibt das Element an Position 4 zurück: [6, 3, [53]]
console.log(numbers[4]);

// Länge des Arrays ermitteln
console.log(numbers.length);

// Letztes Element mit at(-1) abrufen - moderne Alternative
console.log(numbers.at(-1));

// Letztes Element über Index abrufen - klassische Methode
console.log(numbers[numbers.length - 1]);

// Einzelnes Element ändern - Index 0 wird überschrieben
numbers[0] = 'etwas neues';

// FEHLER: Neuzuweisung einer const-Variable ist nicht erlaubt!
// numbers = [3];

console.log(numbers);

// Klassische for-Schleife über alle Elemente
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Moderne for...of Schleife - direkter Zugriff auf Werte
for (const element of numbers) {
  console.log('for... of: ', element);
}

// toSpliced() erstellt neues Array ab Index 3 - IMMUTABLE Operation
const splicedCopy = numbers.toSpliced(3);
splicedCopy[0] = 'überschrieben';
console.log(splicedCopy); // Neues Array wurde verändert
console.log(numbers); // Original-Array bleibt unverändert

const myNumbers = [8, 32, 7, 4, 1, 8, 3, 6];

// toSorted() sortiert und erstellt neues Array - IMMUTABLE Operation
console.log(myNumbers.toSorted()); // Sortiertes neues Array
console.log(myNumbers); // Original bleibt unverändert
