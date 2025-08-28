console.log('Hallo aus der script.js');

document.querySelector('h1').textContent = 'Manipuliert mit JavaScript!';

// ('Wörter');

// true;
// false;

/*
 Dies ist ein mehrzeiliger Kommentar.
 Hallo
*/

let myNumber = 5;
myNumber = 'ein Wort';

// console.log(40 + 4);
// console.log(40 - 4);
// console.log(40 * 4);
// console.log(40 / 4);
// console.log(42 % 4);

// console.log(myNumber * 5);
// console.log(myNumber + 5);

// console.log(myNumber);

// console.log(age > miniumAgeForDriversLicense);
// console.log(age < miniumAgeForDriversLicense);
// console.log(age <= miniumAgeForDriversLicense);
// console.log(age === miniumAgeForDriversLicense);
// console.log(age == miniumAgeForDriversLicense);

// console.log(age !== miniumAgeForDriversLicense);

// console.log(17 === 16 && 20 === 20);

// console.log(17 === 16 || 20 === 20);

// 40 === 40 && console.log('Eine Aktion ausführen');
// 40 === 41 || console.log('Eine andere Aktion ausführen');

const age = 25;
const miniumAgeForDriversLicense = 18;

if (age === miniumAgeForDriversLicense) {
  console.log('Du könntst deinen Führerschein machen');
} else if (age < miniumAgeForDriversLicense) {
  console.log('Du bist noch zu jung');
} else {
  console.log('Du bist schon älter als die Mindestanforderung');
}

// {
//   const blockScopeVar = 123;
//   console.log(blockScopeVar);
//   {
//     {
//       console.log('Innerer Scope', blockScopeVar);
//     }
//   }
// }

function incrementAge(currentAge) {
  const someFunctionVariable = 'Hallo';
  currentAge = currentAge + 1;
  return currentAge;
}

// try {
//   console.log(someFunctionVariable);
// } catch (error) {}

// let myAge = 25;
// console.log(myAge);

// myAge = incrementAge(myAge);
// console.log(myAge);

// incrementAge(38);

// incrementAge(42);

// let myAge = 25;

// while (myAge < 30) {
//   console.log('Let the Party go on');
//   myAge = incrementAge(myAge);
// }

let counter = 10;

while (counter > 0) {
  console.log('Another round in the Loop');
  counter--;
}

for (let i = 0; i < 100; i++) {
  console.log('Ein neuer Tag in der Schleife!');
}
