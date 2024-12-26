/* 
PEDAC
PROBLEM: 
- INPUT: an array of numbers
- OUTPUT: a number that appears only once in the array

EDGE CASES:
- Example 1:
    - Input: nums = [2,2,1]
    - Output: 1

- Example 2:
    - Input: nums = [4,1,2,1,2]
    - Output: 4

- Example 3:
    - Input: nums = [1]
    - Output: 1

DATA TYPES:
- nest for loops
or 
- XOR Operator (only works with paired or even amount of numbers)
or
- indexOf
- lastIndexOf
- includes

ALGORITHM:
- Iterate through the array
- Find the element that only appeared once in the array

CODE:
*/
/* 
XOR Operator Steps:
Key Properties of XOR (^)
- Self-canceling: 
    a ⊕ a = 0 (any number XORed with itself is 0).
- Identity: 
    a ⊕ 0 = a (any number XORed with 0 remains unchanged).
- Order does not matter: 
    - XOR is commutative (a ⊕ b = b ⊕ a) and associative ( (a ⊕ b) ⊕ c = a ⊕ (b ⊕ c) ).

Steps:
1. Initialize the accumulator: acc = 0
2. Process each number in the array using XOR. For each number, acc = acc ^ num:
Step	|   num	  |  acc (before XOR)	|   acc (after XOR)	 |   Explanation
1	        4	            0	                4	                0 ⊕ 4 = 4
2	        1	            4	                5	                4 ⊕ 1 = 5
3	        2	            5	                7	                5 ⊕ 2 = 7
4	        1	            7	                6	                7 ⊕ 1 = 6
5	        2	            6	                4	                6 ⊕ 2 = 4

Explanation:
- Numbers that appear twice cancel each other out due to the property 𝑎 ⊕ 𝑎 = 0.
    - Example: 1 ⊕ 1 = 0, 2 ⊕ 2 = 0.
- The number that appears once remains unaffected because XOR with 0 leaves it unchanged.
    - Example: 0 ⊕ 4 = 4.
- Thus, at the end of the process, only the unique number remains.

5-years-old Explanation:
You have a magical pair of gloves that can "cancel" two matching toys when you touch them together. 
If you touch a toy to itself, poof, it disappears!
Now, you have a pile of toys: [4, 1, 2, 1, 2].

You start picking them up one by one:
1. You grab the first toy: 4
    - There’s nothing to cancel it with yet, so you keep it in your hand.
    - In hand: [4]
2. You grab the second toy: 1
    - No match for 1, so you keep it too.
    - In hand: [4, 1]
3. You grab the third toy: 2
    - No match for 2, so you keep it as well.
    - In hand: [4, 1, 2]
4. You grab the fourth toy: 1
    - Wait! You already have a 1 in your hand. The magical gloves cancel them out (poof).
    - In hand: [4, 2]
5. You grab the fifth toy: 2
    - Oh! There’s already a 2 in your hand. They cancel each other out (poof).
    - In hand: [4]
At the end, the only toy left in your hand is 4. Since there wasn’t another 4 to cancel it, it’s the special toy!
*/
const solution = (nums) => {
    return nums.reduce((acc, num) => acc ^ num, 0);
};

// Mario's Code:
function solution(nums) {
    const freakyMap = nums.reduce((acc, num) => {
      acc[num] = (acc[num] || 0) + 1;
      return acc;
    }, {});
  
    const noRep = nums.filter(num => freakyMap[num] === 1);
    return noRep[0];
}

// King's Code:
/*
## PEDAC
**Problem**
input: array of integers
output: integer

What is the task? How would you rephrase the problem in your own words? 
The task is to find the element within the array that only appears once and return it.

**Examples/Edge Case:** 
input: nums = [3, 4, 5, 3, 5]
output: 4

**Data Structure/Data Type**
array, integers, 
 
**Algorithm** 
How will you convert the input to output? 
Try out your algorithm with one of your examples/edge cases. Does it convert the input into the correct output? 
*/
// Code your solution!

const solution = (nums) => {
    // create an empty object to store key value pairs of the array (nums)
    const freq = {};
    
    // iterates through the nums array and adds the current element as a key
    for (const num of nums) { 
        // if the key already has 1 as its value, add 1 to the exisiting value
        if (freq[num] === 1) {
            freq[num] += 1;
        } else {
            // else, add 1 as a value to that key (num)
            freq[num] = 1;
        }
    };
    
    // iterates through the freq object and searches for the key with the value of 1
    for (const key in freq) {
        if (freq[key] === 1) {
            // returns it as a number since the key would be a string (Number constructor)
            return Number(key);
        }
    };
};

// Catalina's Code:
/**
 * Finds the number with no duplicates in an array
 * @param nums {array of numbers} array of numbers with one value that appears only once
 * @returns {number} the number in the array that appears only once
*/
const solution = (nums) => {
    // creates an object to represent the frequency of numbers in the array
    let freq = nums.reduce((obj, c) => {
      // creates key in `obj` with a value of 1 if not already added
      if (!obj[c]) obj[c] = 1;
      // increments value of key `c` in `obj`
      else obj[c]++;
      return obj;
    }, {});
    // loops through keys of frequency object to find number with no duplicates
    for (f of Object.keys(freq)) {
      // returns value of the array that appears once, converting to a number
      if (freq[f] === 1) return Number(f);
    }
    return null;
  }

// Luis's Code:
const solution = (nums) => {
    const obj = {};
    
    for (let i = 0; i < nums.length; i += 1) {
    !obj[nums[i]] ? obj[nums[i]] = 1 : obj[nums[i]] += 1
    }
    
    for (const num in obj) {
        if (obj[num] === 1) {
            return +num
        }
    }
}