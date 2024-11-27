// const value = NaN;
// console.log(typeof value); // number


// let myName = "John";
// const sayJohn = () => {
//    // let myName = 'Jon';
//     let private = "shhh";
//     //console.log(myName);
//     return private;
// };
// sayJohn(); // Jon
// console.log(myName); // John
// const message = console.log(sayJohn()); // shhh


// { // code block/blocked scope
//     const x = 5;
//     let y = 10;
//     var z = 20;
// }
// console.log(x, y, z); //undefined
// console.log(z); // 20


// // bad practice of coding----------
// foo(); // undefined
// function foo() {
//     console.log(x); 
// }
// var x = 5;
// foo(); // 5
// // bad practice of coding----------


// const message = 'Hello there!';
// console.log( message.length ); // Prints 12

// // The length property is useful for calculating indexes from the end of the string
// console.log( message[message.length - 1] ); // Prints "!" 
// console.log( message[message.length - 2] ); // Prints "e" 
// console.log( message[message.length - 12] ); // Prints "H" 

// const firstAndLastAreTheSame = (str) => {
//   return str[0] === str[str.length-1]
// }

// console.log(firstAndLastAreTheSame('hello')); // Prints false
// console.log(firstAndLastAreTheSame('helloh')); // Prints true


const fruits = 'apples, bananas, cherries';

// These return a boolean
console.log( fruits.includes('ana') ) // Prints true
console.log( fruits.includes('ANA') ) // Prints false
console.log( fruits.startsWith('apple') ) // Prints true
console.log( fruits.endsWith('s') ) // Prints true

// These return an index number (or -1 if not found)
console.log( fruits.indexOf('p') ) // Prints 1
console.log( fruits.lastIndexOf('p') ) // Prints 2
console.log( fruits.indexOf('?') ) // Prints -1

const hasOnlyOne = (str, letter) => {
  return str.indexOf(letter) === str.lastIndexOf(letter);
}
console.log(hasOnlyOne('hello', 'h')) // Prints true
console.log(hasOnlyOne('hello', 'l')) // Prints false