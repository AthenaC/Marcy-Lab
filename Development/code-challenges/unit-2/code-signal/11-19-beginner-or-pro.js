// my code:
/* 
PEDAC
PROBLEM:
- input: initial number and an array
- output: beginner, intermediate, advanced, or pro

EDGE CASES:
initial = 1500
changes = [-100, -300, 450, 500, -500, -600]

1500 - 100 = 1400
1400 - 300 = 1100
1100 + 450 = 1550
1550 + 500 = 2050
2050 - 500 = 1550
1550 - 600 = 950
output: beginner

DATA TYPES:
- changes holds an array of numbers
- start with the initial number and iterate through the array to add each number one by one
- need a few if statements to check if the rating is under either beginner, intermediate, advanced, or pro category
- if there's an empty array, then the rating is equal to the intial

ALGORITHM:
- if statement for an empty array, and have rating equal to initial
- array method of map for iteration through changes
    - for each number in the array, intial plus the num will equal to rating
    - each time it adds, rating will have a new value
- a set of if statements

CODE:
*/
const solution = (initial, changes) => {
    if ([]) rating = initial;
    changes.map((num) => rating = initial += num);
    if (2000 <= rating) return "pro";
    if (1500 <= rating && rating < 2000) return "advanced";
    if (1000 <= rating && rating < 1500) return "intermediate";
    if (rating < 1000) return "beginner";
};

// Braily's Code:
const solution = (initial, changes) => {
    const rating = changes.reduce((acc, val) => acc + val, initial);
    let result = "beginner";
    
    if (rating >= 1000 && rating < 1500) {
        result = "intermediate";
    } else if (rating >= 1500 && rating < 2000) {
        result = "advanced";
    } else if (rating >= 2000) {
        result = "pro";
    }
    
    return result;
}

// Ana's Code:
function solution(initial, changes) {
    
    let finalR = initial + changes.reduce((acc, change) => acc + change, 0);
    
    if (finalR < 1000) {
        return "beginner";
    } else if (finalR < 1500) {
        return "intermediate";
    } else if (finalR < 2000) {
        return "advanced";
    } else {
        return "pro";
    }
}

// Catalina's Code:
/**
 * Finds level corresponding to overall rating on an online platform
 * @param initial {number} rating level before changes 
 * @param changes {array of numbers} changes in rating level
 * @returns {string} level corresponding to overall rating
 */
const solution = (initial, changes) => {
    // error handling for invalid initial value
    if (Number.isNaN(initial) || typeof initial !== 'number') return;
    
    // reducer function adds changes in rating to initial user rating
    let changed = changes.reduce((overall, c) => {
        // error handling for invalid c value
        if (Number.isNaN(c) || typeof c !== 'number') return overall;
        return overall += c;
    }, initial);
    
    // returns equivalent level
    if (changed < 1000) return "beginner";
    else if (changed < 1500) return "intermediate";
    else if (changed < 2000) return "advanced";
    return "pro";
}

// Azim's Code:
function solution(initial, changes) {
    let output = initial
    for (let i = 0; i < changes.length; i++) {
    output += changes[i]
    }
    if (output < 1000) return "beginner"
    if (output < 1500) return "intermediate"
    if (output < 2000) return "advanced"
    return "pro"
}

// Avionte's Code:
const solution=(initial, changes) =>{
    let rating = initial
    for(let level of changes){
     rating+=level
     }
      if(rating >= 2000 ){
         return "pro"
     }
     else if(rating >= 1500  ){
         return  "advanced"
     }
     else if(rating >= 1000  ){
         return 'intermediate'
     }
     else if(rating<1000){
         return "beginner"
     }
 }

// King's Code:
/*
## PEDAC
**Problem**
input: 
- initial (integer) 
- changes (array of integers)
    - rating: starts at initial value, all elements in changes are added to initial
    
output: 
- string 

Our task is to interate through an array of integers (changes) and add its value to initial determine the final rating value (string)

**Examples/Edge Case:** 
Come up with two of your own examples: 
input: initial: 10 | changes: [100, 900, 250, 150]
output: final rating value: 1410 = "intermediate"


**Data Structure/Data Type**
What data structures will we use to solve this problem?
array, 
Are there any data types you will use? Any data type conversion? 
integers, strings

**Algorithm** 
- accumulate all values of all changes, including initial value
- based on final value, we return a string
*/

// Code your solution!

const solution = (initial, changes) => {
    // .reduce() method implementation
    const finalRating = changes.reduce((rating, currentRating) => rating + currentRating, initial);

    if (finalRating < 1000) {
            return "beginner";
        } else if (finalRating >= 1000 && finalRating < 1500) {
            return "intermediate";
        } else if (finalRating >= 1500 && finalRating < 2000) {
            return "advanced";
        } else {
            return "pro";
        }
    
    // for of implementaion
    // let finalRating = initial;
    
    // for (const rating of changes) {
    //     finalRating += rating;
    // }
    
    // if (finalRating < 1000) {
    //     return "beginner";
    // } else if (finalRating >= 1000 && finalRating < 1500) {
    //     return "intermediate";
    // } else if (finalRating >= 1500 && finalRating < 2000) {
    //     return "advanced";
    // } else {
    //     return "pro";
    // }
    
    // .forEach() method
    // let finalRating = initial;
    
    // changes.forEach(rating => finalRating += rating);
    
    // if (finalRating < 1000) {
    //     return "beginner";
    // } else if (finalRating >= 1000 && finalRating < 1500) {
    //     return "intermediate";
    // } else if (finalRating >= 1500 && finalRating < 2000) {
    //     return "advanced";
    // } else {
    //     return "pro";
    // }
}

// Fernando's Code: 
// Integers between 1 - 2500
// Loop through array. Each value changes the initial value
// OR reduce array to single value and add it to intial value
// Determine range of initial value + change

const solution =(initial, changes) => {
    let changeValue = changes.reduce((accumulator, currentValue) => accumulator + currentValue ,initial,)
    console.log(changeValue)
    if (changeValue < 1000) {
        return "beginner"
    } else if (changeValue < 1500) {
        return "intermediate"
    } else if (changeValue < 2000) {
        return "advanced"
    } else {
        return "pro"
    }
}

// Joshua's Code:
const solution = (initial, changes) => {
    let finalRating = initial
for (let change of changes) {
        finalRating += change;
    }

    // Determine the level based on the final rating
    if (finalRating < 1000) {
        return "beginner";
    } else if (finalRating < 1500) {
        return "intermediate";
    } else if (finalRating < 2000) {
        return "advanced";
    } else {
        return "pro";
    }
}

// Xavier Campos's Code:
const solution = (initial, changes) => {
    let totalRate = initial;
    changes.forEach(num => totalRate += num);
    
    switch(true){
        case (totalRate < 1000):
            return 'beginner';
        case (totalRate < 1500):
            return 'intermediate';
        case (totalRate < 2000) :
            return 'advanced';
        default:
            return 'pro';
    }
}

// Jordi's Code:
function solution(initial, changes) {
    const rating = [...changes].reduce((acc, currVal) => {
       return acc + currVal
    }, initial)
    if (rating < 1000) return 'beginner'
    if (rating >= 1000 && rating < 1500) return 'intermediate'
    if (rating >= 1500 && rating < 2000) return 'advanced'
    return 'pro'
}

// Sangida's Code:
const solution = (initial, changes) => {

    for (let i = 0; i < changes.length; i++) 
        { 
            initial = initial + changes[i];
        }
        if (initial < 1000) {
            return "beginner";
        } else if (initial >= 1000 && initial < 1500) {
            return "intermediate";
        } else if (initial >= 1500 && initial < 2000) {
            return "advanced";
        }else {
            return "pro";
    }
};

// Ibrahim's Code:
function solution(initial, changes) {
    /*
    Save the initial value as a variable I can edit
    Update the variable with the changes
    Get the level and output it
    */
    let rating = initial
    let level = ''
    
    changes.forEach(change => rating += change)
    
    if (rating < 1000){
        level = "beginner"
    } else if (rating < 1500){
        level = "intermediate"
    } else if (rating < 2000){
        level = "advanced"
    } else if (rating >= 2000){
        level = "pro"
    }
    
    return level
}
