let aName = "hannah";

const firstTwoLetters = aName.substring(0,2);
const thirdLetter = aName.substring(2,3);
const lastLetters = aName.substring(3);

console.log(`${firstTwoLetters.toLowerCase()}${thirdLetter.toUpperCase()}${lastLetters.toLowerCase()}`);
// udskriver peTer

console.log(
  `${firstTwoLetters.toUpperCase()}${thirdLetter.toUpperCase()}${lastLetters.toLowerCase()}`
);
// udskriver PETer

console.log(
  `${firstTwoLetters.toLowerCase()}${thirdLetter.toUpperCase()}${lastLetters.toUpperCase()}`
);
// peTER

console.log(
  `${firstTwoLetters.toUpperCase()}${thirdLetter.toUpperCase()}${lastLetters.toUpperCase()}`
);
console.log(
  `${aName.toUpperCase()}`
);
// udskriver begge PETER


// first letter CAP

const firstLetter = aName.substring(0, 1);
const restOfLetters = aName.substring(1);

console.log(`${firstLetter.toUpperCase()}${restOfLetters.toLowerCase()}`);
// udskriver navn med stort bogstav først = Peter / Hannah / Mikkeline