/*
PEDAC
PROBLEM:
- INPUT: string
- OUTPUT: an altered string

EDGE CASES:
- EXAMPLE 1: 
    - INPUT: message = "codesignal"
        - VOWELS:
            message[1] = "o"
            message[3] = "e"
            message[5] = "i"
            message[8] = "a"
        - MOVEMENT: 
            message[1] = "o" moved to the next position of a vowel, message[3]
            message[3] = "e" moved to message[5]
            message[5] = "i" moved to message[8]
            message[8] = "a" moved to message[1]
    - OUTPUT: solution(message) = "cadosegnil"
    
- EXAMPLE 2:
    - INPUT: message = "plain text"
    - OUTPUT: solution(message) = "plean tixt"
    
- EXAMPLE 3:
    - INPUT: message = "some message with punctuation marks, e.g. commas, dots, etc."
    - OUTPUT: solution(message) = "semo messega weth pinctuutain morks, a.g. cemmos, dats, otc."

DATA TYPES:
- string -> array

ALGORITHM:
- find all vowels in the input string, put them in an array
    - how will you know is a character vowel?
- rotate the vowels
    - how will we rotate the vowels in an array?  pop, unshift what we popped
- Put back rotated vowel into the string

CODE:
*/
const solution = (message) => {
    const vowels = "aeiou";  // Define the list of vowels
    let vowelIndices = [];   // To store indices of vowels
    let vowelChars = [];     // To store the vowels themselves
    
    // Step 1: Identify vowels and store their positions and characters
    for (let i = 0; i < message.length; i++) {
        if (vowels.includes(message[i])) {
            vowelIndices.push(i);     // Store the index of the vowel
            vowelChars.push(message[i]); // Store the vowel itself
        }
    }
    
    // Step 2: Perform circular shift on the vowels
    if (vowelChars.length > 1) {
        // Move the last vowel to the start
        vowelChars.unshift(vowelChars.pop());
    }
    
    // Step 3: Reconstruct the string with shifted vowels
    let chars = message.split(""); // Convert string to an array
    for (let i = 0; i < vowelIndices.length; i++) {
        chars[vowelIndices[i]] = vowelChars[i]; // Replace vowels at their original indices
    }
    
    // Step 4: Return the final string
    return chars.join("");
}

// Raffy's Code:
function solution(message) {
    // 2d array to hold found vowels found and their corresponding index
    const shifts = [];
    
    // find all vowels and their indices
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    for (let i=0; i<message.length; i++) { // O(n) loop
      if (vowels.has(message[i])) shifts.push([i,message[i]]);
    }
    
    // if theres 1 or less vowels, no shifting so just return original message
    if (shifts.length <= 1) return message;
    
    // turn message str into arr for mutating
    const arr = message.split('');
    // shift the last into first
    arr[shifts[0][0]] = shifts[shifts.length-1][1]
    // shift the rest
    for (let i=1; i<shifts.length; i++) { // O(n) loop [at worst]
      arr[shifts[i][0]] = shifts[i-1][1];
    }
  
    // turn array back to string
    return arr.join('');
}

// Catalina's Code:
/**
 * Shift each vowel to the position of the next vowel in the string
 * @param {string} message
 * @returns {string} message with vowels shifted
 */
const solution = message => {
    // array of new vowels
    const vowels = new Array();
    // copy of message in array format
    const shifted = message.split("");
    shifted.forEach((char, i) => {
        // regex to check for vowels, adding indices of each to `vowels`
        if (/[aeiouAEIOU]/.test(char)) vowels.push(i);
    });
    for (let i = 0; i < vowels.length - 1; i++) {
        // changes value of shifted at next value of vowels, if any, to value of shifted at current
        if (i + 1 < vowels.length) shifted[vowels[i + 1]] = message[vowels[i]];
    }
    // swaps first vowel of shifted with last
    shifted[vowels[0]] = message[vowels[vowels.length - 1]];
    return shifted.join("");
}

// Mario's Code:
function solution(message) {
    let messarr = message.split("");
    const vowels = "aeiouAEIOU";

    // Step 1: Find all indices of vowels using .filter
    let vowelInd = messarr.map((char, index) => vowels.includes(char) ? index : -1).filter(index => index !== -1);

    // Step 2: Shift vowels in a cyclic manner using array methods
    if (vowelInd.length > 1) {
        const vowelChars = vowelInd.map(index => messarr[index]);
        vowelChars.unshift(vowelChars.pop());
        vowelInd.forEach((index, i) => {
            messarr[index] = vowelChars[i];
        });
    }

    return messarr.join("");
}

// Felipe's Code:
const solution = (message) => {
    const regex = /[aeiouAEIOU]/;
    let left = 0;
    let right = message.length - 1;
    const messageArr = message.split('');
    console.log(messageArr)
    while(left < right) {
        console.log(`left: ${left}.  right: ${right}`)
        
        if (!regex.test(messageArr[left])) {
            left++
            continue
        }
        if (!regex.test(messageArr[right])) {
            right--
            continue;
        }
        if (regex.test(messageArr[left]) && regex.test(messageArr[right])) {
             let temporary = messageArr[right];
             messageArr[right] = messageArr[left]
             messageArr[left] = temporary;
             left++
             continue
        }
        
    }
    console.log(messageArr)
    return messageArr.join('');
    
}