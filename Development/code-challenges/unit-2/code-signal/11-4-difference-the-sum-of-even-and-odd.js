/* 
PEDAC
PROBLEM:
- input: n(integer)
- output: integer

EDGE CASES/EXAMPLES:
360215
6 + 0 + 2 = 8
3 + 1 + 5 = 9
8 - 9 = -1

n = 23
output = 1

DATA STRUCTURE:
integer => string
"360215"

ALGORITHM:
- suming all even digits in n
- suming all odd digits in n
- returning the difference of the two sums

- convert input to string
- iterate through string to create sums
    if a digit is even, add it to the even variable else, add odd variable

return the difference between even and odd sums
    
How can you sum all even and odd digits?

CODE:
*/

// my way:
const solution = (n) => {
    const arr = n.toString().split("").map((n) => Number(n));
    let even = arr.filter((num) => num % 2 === 0).reduce((a, b) => a + b, 0);
    let odd = arr.filter((num) => num % 2 === 1).reduce((a, b) => a + b, 0);
    return even - odd;
};
console.log(solution(412));

// Fernando's:
function solution(n) {
    // Convert n to a string
    let arr = n.toString();
    
    // Filter out characters at odd indices and convert them to numbers
    let oddIndexValues = arr
        .split('') // Split the string into an array of characters
        .filter((index) => index % 2 !== 0) // Keep only characters at odd indices
        .map(Number) // Convert each character to a number
    // Reduce or add together all the idicies
        .reduce((acc, curr) => acc + curr, 0);

    
    // Filter out indicies that are even
    let evenIndexValues = arr
        .split('')
        .filter((index) => index % 2 === 0)
        .map(Number)
    // Reduce or add together all the idicies
        .reduce((acc, curr) => acc + curr, 0);
    console.log(oddIndexValues, evenIndexValues) // console debugging
    
    return evenIndexValues - oddIndexValues
}

// Carmen's:
function solution(n) {
    let nStr = String(n)
    let evenSum = 0
    let oddSum = 0
    
    for(const char of nStr){
        if(char % 2 === 0){
            //if even 
            evenSum += Number(char)
        }else{
            //if odd 
            oddSum += char*1
        }
    }
    
    return evenSum - oddSum 
}

// Catalina's:
/**
 * Finds the difference between the sum of a number's even and odd digits.
 * @param n {number} number for which digits will be summed
 * @returns the sum of a n's digits
*/
const solution = n => {
    if (isNaN(n) || typeof n !== "number") return; // guard clause for if n is not a number
    
    let na = String(n).split("").map(d => Number(d)); // array of n's digits
    
    // returns difference between reducer functions on na
    return na.reduce((es, d) => {
        if (d % 2 === 0) return es += d; // adds even digits to sum of even digits
        return es;
    }, 0) - na.reduce((os, d) => { // subtracts sum of odd digits from sum of even digits
        if (d % 2 !== 0) return os += d; // adds odd digits to sum of odd digits
        return os;
    }, 0);
    
    // other solution
    // returns result of reducer function on na
    // return na.reduce((s, d) => {
    //     if (d % 2 === 0) return s += d; // adds to sum if digit is even
    //     return s -= d; // subtracts from sum if digit is odd
    // }, 0);
}

// Braily's:
/*
## PEDAC
**Problem**
Input: Number (ex. 412)
Output: The difference of the odd and even values.

**Examples/Edge Case:** 
3197

1. add up even numbers: 3 + 9 = 12
2. add up odd numbers: 1 + 7 = 8
3. calculate the difference between the two: 12 - 8 = 4

**Data Structure/Data Type**
Store the sum of odd and even numbers on separate variables.
 
**Algorithm** 
1. Convert the number into a string.
2. Iterate through the string length and convert the current element to a number.
3. If the number is an odd number, add the number to the current value of odd.
   Otherwise, add to the current value of odd.
4. Calculate the difference between the even and the odd sum values, and return it.

*/
// Code your solution!

const solution = (n) => {
    const str = String(n);
    let even = 0;
    let odd = 0;
    
    for (const element of str) {
        const num = Number(element);
        
        if (num % 2 === 0) {
            even += num;
            continue;
        }
        
        odd += num;
    }
    
    return even - odd;
}

// Raffy's:
/*
**Algorithm** 
1. Convert number into string.
2. Split string into array.
3. Convert each item into a number.
4. Look at each number in the array: if even, add value to sum, else subtract value from sum.
*/
function solution(n) {
    // method approach
    return [...String(n)] // step 1 and 2
             .reduce((sum, val) => // step 3 and 4
               // loose equality for type conversion
               (val%2 == 0) ? sum+Number(val) : sum-Number(val), 0);
  
    // using as LITTLE methods as possible
    let sum = 0; // step 0, initializing sum
    const nums = String(n).split(''); // step 1 and 2
    for (const val of nums) { // step 3 and 4
        if (val%2==0) { // loose equality for type conversion
            sum += Number(val);
        } else {
            sum -= Number(val);
        }
    }
    return sum; // final step
  }