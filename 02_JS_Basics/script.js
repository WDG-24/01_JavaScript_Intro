// Ausgabe in der Browser-Konsole (F12 oder Strg+Shift+I drücken)
console.log('Hallo aus der script.js');

// HTML-Element finden und Text ändern
document.querySelector('h1').textContent = 'Manipuliert mit JavaScript!';

// STRING WERTE - um Text zu speichern
// 'Wörter';

// BOOLEAN WERTE - wahr oder falsch
// true;
// false;

/*
 Mehrzeiliger Kommentar
 für längere Erklärungen
*/

// VARIABLEN - Behälter für Daten
let myNumber = 5; // Zahl speichern
myNumber = 'ein Wort'; // Wert ändern (jetzt Text)

// MATHEMATISCHE OPERATIONEN
// console.log(40 + 4);    // Addition: 44
// console.log(40 - 4);    // Subtraktion: 36
// console.log(40 * 4);    // Multiplikation: 160
// console.log(40 / 4);    // Division: 10
// console.log(42 % 4);    // Rest (Modulo): 2

// console.log(myNumber * 5);
// console.log(myNumber + 5);

// console.log(myNumber);

// VERGLEICHSOPERATOREN - geben true/false zurück
// console.log(age > miniumAgeForDriversLicense);    // größer als
// console.log(age < miniumAgeForDriversLicense);    // kleiner als
// console.log(age <= miniumAgeForDriversLicense);   // kleiner gleich
// console.log(age === miniumAgeForDriversLicense);  // exakt gleich (empfohlen)
// console.log(age == miniumAgeForDriversLicense);   // gleich (weniger strikt)

// console.log(age !== miniumAgeForDriversLicense);  // ungleich

// LOGISCHE OPERATOREN
// console.log(17 === 16 && 20 === 20);  // UND: beide müssen wahr sein
// console.log(17 === 16 || 20 === 20);  // ODER: eine muss wahr sein

// Kurze Schreibweise für einfache Bedingungen
// 40 === 40 && console.log('Eine Aktion ausführen');
// 40 === 41 || console.log('Eine andere Aktion ausführen');

// KONSTANTEN - können nicht geändert werden
const age = 25;
const miniumAgeForDriversLicense = 18;

// IF-ELSE BEDINGUNGEN - Code nur unter bestimmten Bedingungen ausführen
if (age === miniumAgeForDriversLicense) {
  console.log('Du könntst deinen Führerschein machen');
} else if (age < miniumAgeForDriversLicense) {
  console.log('Du bist noch zu jung');
} else {
  console.log('Du bist schon älter als die Mindestanforderung');
}

// BLOCK SCOPE - Variablen sind nur in ihren {} verfügbar
// {
//   const blockScopeVar = 123;
//   console.log(blockScopeVar);
//   {
//     {
//       console.log('Innerer Scope', blockScopeVar);
//     }
//   }
// }

// FUNKTIONEN - wiederverwendbare Codeblöcke
function incrementAge(currentAge) {
  const someFunctionVariable = 'Hallo'; // nur in Funktion verfügbar
  currentAge = currentAge + 1;
  return currentAge; // Wert zurückgeben
}

// Variable außerhalb der Funktion nicht verfügbar
// try {
//   console.log(someFunctionVariable);
// } catch (error) {}

// FUNKTIONEN AUFRUFEN
// let myAge = 25;
// console.log(myAge);

// myAge = incrementAge(myAge);  // Funktion nutzen
// console.log(myAge);

// incrementAge(38);
// incrementAge(42);

// WHILE SCHLEIFE - wiederholt Code solange Bedingung wahr ist
// let myAge = 25;

// while (myAge < 30) {
//   console.log('Let the Party go on');
//   myAge = incrementAge(myAge);
// }

// WHILE SCHLEIFE mit Countdown
let counter = 10;

while (counter > 0) {
  console.log('Another round in the Loop');
  counter--; // verkürzte Schreibweise für: counter = counter - 1
}

// FOR SCHLEIFE - kompakte Form für feste Anzahl Wiederholungen
for (let i = 0; i < 100; i++) {
  // Start; Bedingung; Schritt
  console.log('Ein neuer Tag in der Schleife!');
}
