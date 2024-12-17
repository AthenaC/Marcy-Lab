/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/*
PEDAC
PROBLEM: 
- INPUT: an array of integers (nums), and an integer (target)
- OUTPUT: an array of two indices of the integers that sums up to `target`

EDGE CASES:
- EXAMPLE 1:
    - INPUT: nums = [2,7,11,15], target = 9
        nums[0] + nums[1] == 9
    - OUTPUT: [0,1]

- EXAMPLE 2: 
    - INPUT: nums = [3,2,4], target = 6
        nums[1] + nums[2] == 6
    - OUTPUT: [1,2]

- EXAMPLE 3: 
    - INPUT: nums = [3,3], target = 6
        nums[0] + nums[1] == 6
    - OUTPUT: [0,1]

DATA TYPES:

ALGORITHM:

CODE:
*/
// Nested `for` loop
const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) { // Check all pairs
            if (nums[i] + nums[j] === target) {
                return [i, j]; // Return the indices as soon as the pair is found
            }
        }
    }
    return []; // Return an empty array if no pair is found
};

// Carmen's Code:
const twoSum = (nums, target) => {
    let result = [];
    let compliments = {};

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let compliment = target - num;

        if (num in compliments) {
            // One way:
            // result[0] = compliments[num];
            // result[1] = i;
            // Second way:
            return [compliments[num], i];
        } else {
            compliments[compliment] = i;
        };
    };
    // One way:
    // return result;
};

// Raffy's Code:
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const found = {}

    for (const [i,val] of nums.entries()) {
        const toFind = target-val;
        
        if (!(toFind in found)) {
            found[val] = i;
        } else {
            return [found[toFind], i];
        }
    }
};

// Mario's Code:
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // Use reduce to iterate through the array and find the indices
    return nums.reduce((output, num, ind) => {
        if (output.length) return output;

        // Find the index of the complimentary number needed to reach the target
        const complimentIndex = nums.findIndex((n, i) => n === target - num && i !== ind);

        // If a valid compliment is found, return the pair of indices
        if (complimentIndex !== -1) {
            output.push(ind, complimentIndex);
        }

        return output;
    }, []);
};

// Ana's Code:
//Example 1:

//Input: nums = [2,7,11,15], target = 9
//Output: [0,1]
//Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

var twoSum = function(nums, target) {
    const map = new Map(); // made new  map aka (hashmap) to store numbers and their places in the index.
    for(let i = 0; i < nums.length; i++) { // iterated through my nums array 
        const difference = target - nums[i] // get difference by subtracting target=(9) by the nums[i]=(2) which would be 7 
        if(map.has(difference)) { // check if map has difference(aka 7) means we found key value pair 
            return [map.get(difference), i] // if found return index of previous num and current index
        }
        map.set(nums[i],i); // store the current number and its index in the map.
    }
    return []; // if no pair found we will return empty array 
};

// Catalina's Code:
/**
 * @param {number[]} nums array of integers
 * @param {number} target sum to find
 * @return {number[]} indices of numbers that sum to `target`
 */
const twoSum = (nums, target) => {
    const hash = new Object();
    for (let i = 0; i < nums.length; i++) {
        let comp = target - nums[i];
        if (hash[comp]) {
            return [hash[comp], i];
            // indices.push(hash[comp]);
            // indices.push(i);
            // return indices;
        }
        hash[nums[i]] = i;
    }
    // O(n^2)
    const indices = new Array();
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j && nums[i] + nums[j] === target) {
                indices.push(i);
                indices.push(j);
                return indices;
            }
        }
    }
};