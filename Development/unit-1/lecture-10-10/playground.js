const cowsay = require('cowsay')
const prompt = require('prompt-sync')();

// const message = prompt("What does the cow say?");

// console.log(cowsay.say({
//     text: message,
//     e: "oO",
//     T: "U",
// }));

// design user interface:
// what does the user see?
// what do the they enter to choose tongue or no tongue?
const message = prompt("What does the cow say?");
const answer = prompt("Is the cow being silly?");

// 1 way
const tongueText = answer === "Yes" ? "U" : null;
console.log(cowsay.say({
    text: message,
    e: "oO",
    T: tongueText
}));

// 2nd way
console.log(cowsay.say({
    text: message,
    e: "oO",
    T: answer === "Yes" ? "U": null //ternary option
}));

// 3rd way
if (answer === "Yes") {
    console.log(cowsay.say({
        text: message,
        e: "oO",
        T: "U"
    }));
}

else {
    console.log(cowsay.say({
        text: message,
        e: "oO",
        T: null
    }));
}
