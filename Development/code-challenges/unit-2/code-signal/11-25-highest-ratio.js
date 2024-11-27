/* 
PEDAC
PROBLEM:
- INPUT: two different kinds of arrays
- OUTPUT: the index of the items with the highest ratio

EDGE CASES:
- EXAMPLE 1:
prices = [7, 5, 2, 11]
ratings = [3, 4, 1, 3]

0: 3 / 7 = 0.43
1: 4 / 5 = 0.80
2: 1 / 2 = 0.50
3: 3 / 11 = 0.27

output = 1 (because 4 / 5 is the highest ratio and they're at index 1)

- EXAMPLE 2:
prices = [6, 5, 4, 3]
ratings = [4, 3, 1, 2]

0: 4 / 6 = 0.66
1: 3 / 5 = 0.60
2: 1 / 4 = 0.25
3: 2 / 3 = 0.66

output = 0 (because both 4 / 6 (index 0) and 2 / 3 (index 3) are the highest ratio, and 0 < 3)

- ratio: rating/price
- find highest ratio for each index

DATA TYPES:


ALGORITHM:


CODE:
*/
const solution = (prices, ratings) => {
    // Create a highestRatio variable: 0
    let highestRatio = 0;
    // Create a highestIndex variable
    let highestIndex;
    
    // First, go through each "item" (loop through all indices)
    // ratings.forEach((num, index) => {
    //     let ratio = num[index] / prices[index];
    //     if (ratio > highestRatio) {
    //         highestRatio = ratio;
    //         highestIndex = i;
    //     };
    // })
    for (let i = 0; i < ratings.length; i++) {
        // Second: for each index, find the ratio
        let ratio = ratings[i] / prices[i];
        // If that ratio is higher than current highest:
        if (ratio > highestRatio) {
            highestRatio = ratio;
            highestIndex = i;
        };
    };
    // Third: return the highest ratio's index
    return highestIndex;

    // my attempt:
    // let ratio = 0;
    // for (let i = 0; i < ratings.length; i++) {
    //     ratio = (ratings[i] / prices[i]);
    // };
    // for (let j = 0; j < ratios.length; j++) {
    //     let highest = ratio[j];
    //     if (ratio[j] <= ratio[j + 1]) highest += ratio.indexOf(highest);
    //         highest ;
    // };
    // return highest;
};
prices = [6, 5, 4, 3]
ratings = [4, 3, 1, 2]
console.log(solution(prices, ratings))

// Mario's Code: 
function solution(prices, ratings) {
    const ratios = prices.map((price, index) => ratings[index] / price);

    const max = ratios.reduce((highInd, ratio, index, arr) => {
        if (ratio > arr[highInd] || (ratio === arr[highInd] && index < highInd)) {
            return index;
        }
        return highInd;
    }, 0);

    return maxIndex;
};

// Felipe's Code:
const solution = (prices, ratings) => {
    let highestRatioIndex = 0; 
    let currentRatio  = 0;
  for (let i = 0; i < prices.length; i++) { // since we know for sure both arrays have the same length we can just either to have our loop run as long as i < eitherArray.length.
       if (ratings[i] / prices[i] > currentRatio) { // if the result of price at index i divided by price i is higher than current ratio which at the beginning is = to 0 then update both current ratio and highest ratio index variables.
           currentRatio = ratings[i] / prices[i]; // set it equal to the ratio so that we can keep comparing it to the remainder elements.
           highestRatioIndex = i; // set it equal to i which represent the current index of the item with the highest ratio.
       }
      
  }
  return highestRatioIndex
}

// Braily's Code:
const solution = (prices, ratings) => {
    // Store an initial ratio of the first element.
    let currentRatio = ratings[0] / prices[0];
    
    // Store the index with an initial value of 0.
    let index = 0;
    
    // Iterate through the prices array (each item), starting from 1.
    for (let i = 1; i < prices.length; i++) {
        // Store the ratio of the item we are iterating over.
        const itemRatio = ratings[i] / prices[i];
        
        // If we find a greater ratio than the current, store that ratio and index.
        if (currentRatio < itemRatio) {
            currentRatio = itemRatio;
            index = i;
        }    
    }
    
    return index;
};

// Raffy's Code:
function solution(prices, ratings) {
    // "tuple" of [index, ratio]
    let max = [-1, -1];
    for (let i = 0; i < prices.length; i++) {
      // current "tuple"
      const curr = [i, ratings[i] / prices[i]];
      // if current "tuple" ratio > max "tuple" ratio
      if (curr[1] > max[1]) max = curr;
    }
    // return index from "tuple"
    return max[0];
};

// Catalina's Code:
/**
 * Find the lowest index of item with the highest rating-to-price ratio
 * @param prices {array of numbers} the prices of items
 * @param rating {array of numbers} the ratings of items
 * @returns {number} the index of the item with the highest rating-to-price ratio and lowest index
 */
const solution = (prices, ratings) => {
    if (prices.length === 0) return null; // error handling for empty-array inputs
    // maps ratings to create an array of the ratios of ratings to prices
    const ratios = ratings.map((r, i) => r/prices[i]);
    // sorts a copy of the ratios array in ascending order
    const sorted = [...ratios].sort((a, b) => a - b);
    // returns the index of the highest-valued rating of lowest index
    return ratios.indexOf(sorted[sorted.length - 1]);
};

// Fernando's Code:
const solution = (prices, ratings) => {
    // Establish counters for highest ratio and index of highest ratio
    let maxRatio = 0;
    let bestIndex = 0;

    for (let i = 0; i < prices.length; i++) {
        const ratio = ratings[i] / prices[i]; // Calculate the ratio for each item
        // This works because prices.length === ratings.length
        // i can be used for both ratings and prices
        
        console.log(ratio)

        // Check if the current ratio is higher than the maximum found so far,
        // or if it's equal but the current index is smaller
        if (ratio > maxRatio || (ratio === maxRatio && i < bestIndex)) {
            maxRatio = ratio;
            bestIndex = i;
        }
    }

    return bestIndex; // Return the index of the item with the highest ratio
};

// Ana's Code:

function solution(prices, ratings) {
    let maxR = 0;  // set max rating at 0(the lowest)
    let maxI = 0;  // set max Index at 0(the lowest)
    // iterate through prices arr
    for (let i = 0; i < prices.length; i++) {
        // created a var ratio to store the total ratio
        let ratio = ratings[i] / prices[i]; 
        // If the current ratio is greater than maxR, update maxR and maxI
        if (ratio > maxR) {
            maxR = ratio;
            maxI = i;
        }
    }
    //return the index with the highest ratio
    return maxI;  
};