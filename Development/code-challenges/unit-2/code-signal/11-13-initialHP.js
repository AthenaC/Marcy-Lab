//  My code:
/* 
PEDAC
PROBLEM:
- input: 
    - initialHP(integer)
    - deltas (arrays of integer)

curHP cannot surpass 100
curHP cannot go below 0
every index/element in the deltas array will be added to the curHP

EDGE CASES/EXAMPLES:
initialHP = 12
deltas = [-4, -12, 6, 2]
output = 8

curHP = 8 + -12 = -4

DATA STRUCTURE:

ALGORITHM:

CODE:
*/

const solution = (initialHP, deltas) => {
    // for (let i = 0; i < deltas.length; i++) {
    //     initialHP += deltas[i];
    //     if (initialHP > 100) initialHP = 100;
    //     if (initialHP < 0) initialHP = 0;
    // };
    // return initialHP;

    deltas.forEach((num) => {
        initialHP += num;
        if (initialHP < 0) initialHP = 0;
        if (initialHP > 100) initialHP = 100;
    });
    return initialHP;
};
console.log(solution(50, [48, 15, 5, -47, -49, -19, 60, 74])); //100

// Ana's COde:
function solution(initialHP, deltas) {
    let curHP = initialHP;  
    for (let delta of deltas) {
       curHP += delta;  
      curHP = Math.max(0, Math.min(curHP,100));
    }
    return curHP;
}

// Braily's Code:
const solution = (initialHP, deltas) => {
    // Return the value of the reduced deltas array
    return deltas.reduce((acc, val) => {
        // Store the sum of the accumulator + value
        const sum = acc + val;
        // Create a variable for dynamically storing the result
        let result = 0;
        
        // Controw flow to assign the result accordingly.
        if (sum > 100) {
            result = 100;
        } else if (sum < 0) {
            result = 0;
        } else {
            result = sum;
        }
        
        // Return the final result.
        return result;   
    }, initialHP)
    //   ^^^: set the initial value of the accumulator to be initialHP
}

// Fernando's Code:
function solution(initialHP, deltas) {
    return deltas.reduce((curHP, delta) => {
        curHP += delta;
        return Math.min(Math.max(curHP, 0), 100);
    }, initialHP);
}

// King's COde:
/*
## PEDAC
**Problem**
input: 
initialHp (integer)
deltas (array of integers [positive and negative])

output:
curHP (cannot surpass 100 and cannot go below 0)

every index/element in the deltas array will be added to the current health (curHP)

**Examples/Edge Case:** 
initialHP = 12 
deltas = [-4, -12, 6, 2]
output = 8

curHP = 12 + -4 = 8
curHP = 8 + -12 = -4 (cannot go below 0 so jumps back to 0)
curHP = 0 + 6 = 6 
curHP = 6 + 2 = 8

**Data Structure/Data Type**
integers, arrays, for loop
 
**Algorithm** 
- curHP will start at initialHP

every index/elememt in the deltas array willl be added to the curHp:
be added to the curHP:
    if curHP surpasses 100: reset to 100
    if curHP goes below: reset to 0
    
return the curHP after all levels have be iterated through
*/
// Code your solution!

const solution = (initialHP, deltas) => {
    let curHP = initialHP;

// for of implementation
for (const level of deltas) {
    curHP += level;
    
    if (curHP < 0) {
        curHP = 0;
    } else if (curHP > 100) {
        curHP = 100;
    }
}
return curHP;

// forEach implementation 
// deltas.forEach(level => {
//     curHP += level;
//     if (curHP < 0) {
//         curHP = 0;
//     } else if (curHP > 100) {
//         curHP = 100;
//     }
// });

// return curHP;
    
// reduce method implementation  
// return deltas.reduce((curHP, level) => {
//     let finalHP = curHP + level;
    
//     if (finalHP < 0) {
//        return 0;
//     } else if (finalHP > 100) {
//         return 100;
//     }
//     return finalHP;
// }, initialHP);
};

// Catalina's Code:
/**
 * Changes health value as player goes through levels
 * @param initialHP (number) player's starting health value
 * @param deltas {array} changes in health value per level
 * @returns final health value of player
 */
const solution = (initialHP, deltas) => {
    
    // solution i: reducer that changes then bumps health value
    return deltas.reduce((curHP, levelChange) => {
        // error handling for changes in health values that are not numbers
        if (Number.isNaN(levelChange) || typeof levelChange !== 'number') return curHP;
        
        curHP += levelChange; // adds change in value for current level to current health value
        if (curHP < 0) curHP = 0; // bumps health value back to zero if less than zero
        if (curHP > 100) curHP = 100; // bumps health value back to 100 if greater than 100
        return curHP;
    }, initialHP);
    
    let curHP = initialHP; // creates variable for current health value
    
    // solution ii: changes then, if exceeding 100 or negative, bumps health value
    deltas.forEach(levelChange => {
        // error handling for changes in health values that are not numbers
        if (Number.isNaN(levelChange) || typeof levelChange !== 'number') return;
        
        curHP += levelChange; // adds change in value for current level to current health value
        if (curHP < 0) curHP = 0; // bumps health value back to zero if less than zero
        if (curHP > 100) curHP = 100; // bumps health value back to 100 if greater than 100
    });
    return curHP;
    
    // solution iii: immediate bump without initial change to curHP
    deltas.forEach(levelChange => {
        // error handling for changes in health values that are not numbers
        if (Number.isNaN(levelChange) || typeof levelChange !== 'number') return;
        
        let newHP = curHP + levelChange; // sum of current health value and change for current level
        if (newHP < 0) curHP = 0; // sets curHP to zero if sum is less than zero
        else if (newHP > 100) curHP = 100; // sets curHP to 100 if sum is greater than 100
        else curHP = newHP; // adds sum to current health value
    });
    return curHP;
}
