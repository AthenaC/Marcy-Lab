// my code:
/* 
PEDAC
PROBLEM:
- INPUT: numbers is an array of integers, and pivot is an integer
- OUTPUT: an array of numbers if each integers in numbers array matches the sign of pivot

EDGE CASES:
numbers = [6, -5, 0]
pivot = 2
- 2 is a positive integer
- iterate through the array
    - 6 is a positive integer and matches with pivot, return 1
    - -5 is a negative integer and doesn't match with pivot, return -1
    - 0 should return 0
- output: [1, -1, 0]

DATA TYPES:
- an array of integers
- check if pivot is positive or negative
- iterate through the array
- if sign of pivot matches with the sign of each integers, return 1
- if 0, return 0
- if the sign of pivot doesn't matches with the sign of sign of each integers, return -1
- return new array

ALGORITHM:

CODE:
*/
const solution = (numbers, pivot) => {
    // let arr = [];
    // let check = Math.sign(pivot);
    // for (let i = 0; i < numbers.length; i++) {
    //     if (check === Math.sign(numbers[i])) {
    //         arr.push(1)
    //     } else if (numbers[i] === 0) {
    //         arr.push(0)
    //     } else {
    //         arr.push(-1);
    //     };
    // };
    // return arr;

    let arr = [];
    numbers.map((num) => {
        if (Math.sign(pivot) === Math.sign(num)) {
            arr.push(1);   
        } else if (num === 0) {
            arr.push(0);
        } else {
            arr.push(-1);
        };
    });
    return arr;
}
console.log(solution([6, -5, 0], 2)) // output: [1, -1, 0]

// Mario's Code:
function solution(numbers, pivot) {
    return numbers.map(number =>
        number === 0 ? 0 : (number > 0) === (pivot > 0) ? 1: -1
    );
};

// Catalina's Code:
/**
 * Create an array of numbers dependent on numbers of inputted array's signage in relation to inputted pivot value
 * @param numbers {array of numbers} array of integers
 * @param pivot {number} integer not equal to zero
 * @returns {array of numbers} array containing values including exclusively 0, 1, and -1
*/
const solution = (numbers, pivot) => {
    // map function to push 0, 1, or -1 into array depending on each number in numbers' signage
    return numbers.map(c => {
        // adds 0 to mapped array if current value is zero
        if (c === 0) return 0;
        // adds 1 to mapped array if current and pivot values have the same signage
        if (c > 0 && pivot > 0 || c < 0 && pivot < 0) return 1;
        // adds -1 to mapped array if current and pivot values have different signage
        return -1;
    });
    
    // reducer function to push 0, 1, or -1 into array depending on each number in numbers' signage
    return numbers.reduce((output, c) => {
        // adds 0 to output array if current value is zero
        if (c === 0) output.push(0);
        // adds 1 to output array if current and pivot values have the same signage
        else if (c > 0 && pivot > 0 || c < 0 && pivot < 0) output.push(1);
        // adds -1 to output array if current and pivot values have different signage
        else output.push(-1);
        // returns output separately — `output.push(value)` evaluates to output's new length
        return output;
    }, []);
}