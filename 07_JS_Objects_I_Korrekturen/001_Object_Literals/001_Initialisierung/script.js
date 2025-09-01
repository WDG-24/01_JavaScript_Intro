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

const book = {
  title: '1984',
  author: 'George Orwell',
  pages: 321,
  isRead: true,

  summary() {
    // let readVal;
    // if (this.isRead) {
    //   readVal = 'Yes';
    // } else {
    //   readVal = 'No';
    // }

    return `
    Title: ${this.title},
    Author: ${this.author},
    Pages: ${this.pages},
    Read: ${this.isRead ? 'Yes' : 'No'}`;
  },

  tearOutPage() {
    this.pages--;
    return this;
  },
};

[12, 23, 5, 45].join(' ').padEnd(13, '-').split();

console.log(book.summary());
// 3. Add a method named summary to the book object.
//    This method should return a string summarizing the book details
//    in the format:
//        "Title: [title], Author: [author], Pages: [pages], Read: [Yes/No]"

const favouriteNumber = 25;
console.log(`This is a dynamic string: ${favouriteNumber + 23}`);

//  Ternary Operator
false ? console.log('Das ist wahr') : console.log('Das ist falsch');

const isLongBook = book.pages > 800 ? "It's a long book" : "It's a short read";

const temperatur = 26;
const wetter = temperatur > 20 ? 'Es ist warm' : 'Es ist kühl';

console.log(wetter);

console.log(book.tearOutPage().tearOutPage().tearOutPage());

book.pages > 320 ? console.log('long') : book.pages > 280 ? console.log('medium') : console.log('small');
