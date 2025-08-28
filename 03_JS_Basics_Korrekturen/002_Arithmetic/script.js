// Eine Zahl
let someInt = 7;

// Zahl zu String konvertieren und Text anhängen
let stringOfSomeInt = String(someInt) + 'wer'; // Ergebnis: "7wer"

// ❌ Subtraktion: String wird zu NaN konvertiert → 7 - NaN = NaN
console.log('Subtraktion: ', someInt - stringOfSomeInt);

// ✅ String "7" wird automatisch zu Zahl 7 konvertiert → 7 - 7 = 0
console.log(7 - '7');

// ❌ "test" kann nicht zu Zahl werden → "test" wird NaN → NaN - 42 = NaN
console.log('test' - 42);

// ✅ + bei Strings = Konkatenation (Zusammenfügen)
console.log('Hallo' + ' ' + 'Welt'); // "Hallo Welt"

// ❌ Multiplikation: "7wer" wird zu NaN → 7 * NaN = NaN
console.log('Multiplikation: ', someInt * stringOfSomeInt);

// ❌ Division: "7wer" wird zu NaN → 7 / NaN = NaN
console.log('Division: ', someInt / stringOfSomeInt);

// ❌ Modulus: "7wer" wird zu NaN → 7 % NaN = NaN
console.log('Modulus: ', someInt % stringOfSomeInt);

// 💡 Merke: + macht String-Konkatenation, -, *, /, % versuchen Zahlen-Konvertierung
