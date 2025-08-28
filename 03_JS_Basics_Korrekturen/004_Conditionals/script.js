let temperature = 8;

// ✅ KORREKT: if/else if/else - nur EINE Bedingung wird ausgeführt
if (temperature < 15) {
  console.log("Du musst'n Mantel tragen");
} else if (temperature >= 15 && temperature <= 25) {
  console.log('Zeit für ein Sweater');
} else {
  console.log('Zeit für ein T-Shirt');
}

// ❌ FEHLER: Separate if-Statements - MEHRERE können ausgeführt werden
// Hier läuft das erste if (temperature < 15) UND das else vom zweiten if
if (temperature < 15) {
  console.log("Du musst'n Mantel tragen"); // ← Läuft bei temp = 8
}
if (temperature >= 15 && temperature <= 25) {
  console.log('Zeit für ein Sweater'); // ← Läuft NICHT
} else {
  console.log('Zeit für ein T-Shirt'); // ← Läuft AUCH! (weil 8 < 15)
}

// Switch für EXAKTE Werte - gut für spezifische Fälle
// Ausführung des Programms springt zum passenden Case
switch (temperature) {
  case 8: // Mehrere cases ohne break = "fall-through"
  case 9:
  case 10:
    console.log("Du musst'n Mantel tragen");
    break; // ← Wichtig! Ohne break läuft der nächste case auch!
  case 20:
    console.log('Zeit für ein Sweater');
    break;
  case 30:
    console.log('Zeit für ein T-Shirt');
    break;
  default: // Wie "else" - läuft wenn kein case passt
    console.log('Keine passende Temperatur');
}

// switch(true) für Bereiche
// Checkt alle Konditionen bit Passende gefunden wird
switch (true) {
  case temperature < 16:
    console.log("Du musst'n Mantel tragen");
    break;
  case temperature >= 16 && temperature < 26:
    console.log('Zeit für ein Sweater');
    break;
  default:
    console.log('Zeit für ein T-Shirt');
    break;
}

// - if/else if = nur eine Bedingung läuft
// - Separate ifs = mehrere können laufen
// - switch(true) = Alternative für Bereiche
