// My Code:
/*
## PEDAC
**Problem**
input: n(int)
output: array of strings
What is the task? How would you rephrase the problem in your own words? 
- Return an array where all elements are the numbers 1 to n, but
    - multiples of only 3 we add "Fizz"
    - multiples of only 5 we add "Buzz"
    - multiples of both 3 and 5, we add "FizzBuzz"

**Examples/Edge Case:** 
Come up with two of your own examples: 
input: solution(15)
output: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]

**Data Structure/Data Type**
What data structures will we use to solve this problem? 
- Convert numbers to string before adding to the array

**Algorithm** 
How will you convert the input to output? 
Try out your algorithm with one of your examples/edge cases. Does it convert the input into the correct output? 
- create an empty array
- iterate through numbers 1 - n
    - add each number to the array:
        - multiples of only 3 we add "Fizz"
        - multiples of only 5 we add "Buzz"
        - multiples of both 3 and 5, we add "FizzBuzz"
    - otherwise: 
        - add each number to the array
- After iteration is done:
    - Return the output array

**Code** 
Write your code implementing the algorithm!
*/
//Code
const solution = (n) => {
    let newArr = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            newArr.push('FizzBuzz');
        } else if (i % 3 === 0) {
            newArr.push('Fizz');
        } else if (i % 5 === 0) {
            newArr.push('Buzz');
        } else {
            newArr.push(String(i)); // or newArr.push(`${i}`);
        };
    };
    return newArr;
};
console.log(solution(15));

// Raffy's Code:
/*
**Algorithm** 
1. Check if n > 0. (otherwise return [])
2. Initialize an empty result array.
3. Iterate from 1 to **n**.
    3.a. If item is divisible by both 3 and 5: push "fizzbuzz" into resulting array.
    3.b. If item is divisible by only 3: push "fizz" into resulting array.
    3.c. If item is divisible by only 5: push "buzz" into resulting array.
    3.d. If item is neither of the above, turn it into a String representation of
         itself and push it into the resulting array.
4. Return the resulting array.
*/

// fun experiment but not optimal because
// we waste time initializing all values in the array with .fill()
function solution(n) {
    if (n <= 0) { return []; } // Step 1
    return Array(n).fill().map((val, i, arr) => { // Steps 2,3,4
        // Steps 3.a to 3.d
        let str = '';
        // shoutout to the algorithm Isaac shared the other day!
        if ((i+1) % 3 === 0) { str += "Fizz"; }
        if ((i+1) % 5 === 0) { str += "Buzz"; }
        if (str.length === 0) { str = String(i+1); }
        return str;
    })
}

// Braily's Code:
const solution = (n) => {
    const arr = [];
    
    for (let i = 1; i <= n; i++) {
        let val = `${i}`;
        
        if (i % 3 === 0 && i % 5 === 0) {
            val = 'FizzBuzz';
        } else if (i % 3 === 0) {
            val = 'Fizz';
        } else if (i % 5 === 0) {
            val = 'Buzz';
        }
        
        arr.push(val);
    }
    
    return arr;
};