/* 
mkdir madlib
cd madlib
touch index.js
npm init -y         // create package.json
npm i prompt-sync   // added prompt-sync in package.json and should have dependencies and devDependencies
npm i -D jest       // create node-modules
*/

// x is the parameter
// g(x) => x + 5
// 10 is the argument
// g(10) => 15
// f(x) => x * 2
// f(10) => 20
// y = g(10)
// f(y) or f(g(10)) => 30

// helper functions
const madlib = require('./madlib.js');

// "runner" function
const main = () => {
    const message = madlib('Basket Weaver', 'Gilbert', 'breakdance', false);
    console.log(message);
};

main();

