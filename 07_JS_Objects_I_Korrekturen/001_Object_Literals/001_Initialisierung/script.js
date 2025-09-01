// Object Literals
// ==============

// **Objective:**

// Learn how to initialize an object using object literals in JavaScript and understand how to define properties and methods within an object.

// **Instructions:**

// 1. Create an object called book using object literal syntax.
// 2. The book object should have the following properties:
//        title: a string representing the title of the book.
//        author: a string representing the author of the book.
//        pages: a number representing the total pages in the book.
//        isRead: a boolean indicating if the book has been read or not.

// Objekt-Literal: Einfache Syntax zur Objekterstellung mit {}
const book = {
  // Objekteigenschaften (Properties)
  title: '1984',
  author: 'George Orwell',
  pages: 321,
  isRead: true,

  // Objektmethode: Funktion als Eigenschaft
  summary() {
    // Auskommentierter Code zeigt if/else Alternative zum ternären Operator
    // let readVal;
    // if (this.isRead) {
    //   readVal = 'Yes';
    // } else {
    //   readVal = 'No';
    // }

    // Template Literal mit ${} für dynamische Werte
    // 'this' bezieht sich auf das aktuelle Objekt (book)
    // Ternärer Operator: bedingung ? wert_wenn_wahr : wert_wenn_falsch
    return `
    Title: ${this.title},
    Author: ${this.author},
    Pages: ${this.pages},
    Read: ${this.isRead ? 'Yes' : 'No'}`;
  },

  // Method Chaining: Rückgabe von 'this' ermöglicht Verkettung
  tearOutPage() {
    this.pages--; // Seitenzahl um 1 reduzieren
    return this; // Objekt zurückgeben für Chaining
  },
};

// 3. Add a method named summary to the book object.
//    This method should return a string summarizing the book details
//    in the format:
//        "Title: [title], Author: [author], Pages: [pages], Read: [Yes/No]"
// Methodenaufruf auf dem book-Objekt
console.log(book.summary());

// === TEMPLATE LITERALS ===

// Variable für Template Literal Beispiel
const favouriteNumber = 25;
// Template Literal: Backticks `` erlauben eingebettete Ausdrücke mit ${}
console.log(`This is a dynamic string: ${favouriteNumber + 23}`);

// === TERNÄRER OPERATOR ===

//  Ternary Operator
// Inline if/else: bedingung ? ausführung_wenn_wahr : ausführung_wenn_falsch
false ? console.log('Das ist wahr') : console.log('Das ist falsch');

// Ternärer Operator zur Variablenzuweisung
const isLongBook = book.pages > 800 ? "It's a long book" : "It's a short read";

// Weitere Beispiele für ternären Operator
const temperatur = 26;
const wetter = temperatur > 20 ? 'Es ist warm' : 'Es ist kühl';

console.log(wetter);

// === METHOD CHAINING ===

// Beispiel für Method Chaining mit Array-Methoden
// join() verbindet Array-Elemente, padEnd() füllt String auf, split() teilt wieder
[12, 23, 5, 45].join(' ').padEnd(13, '-').split();

// Method Chaining: Mehrere Methodenaufrufe hintereinander
// Jeder tearOutPage() Aufruf gibt 'this' zurück, ermöglicht weitere Aufrufe
console.log(book.tearOutPage().tearOutPage().tearOutPage());

// === VERSCHACHTELTE TERNÄRE OPERATOREN ===

// Mehrfach verschachtelte ternäre Operatoren (kann schwer lesbar werden)
// Entspricht: if (pages > 320) "long" else if (pages > 280) "medium" else "small"
book.pages > 320 ? console.log('long') : book.pages > 280 ? console.log('medium') : console.log('small');
