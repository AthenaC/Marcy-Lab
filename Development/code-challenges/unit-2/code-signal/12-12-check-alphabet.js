/*
PEDAC
PROBLEM:
- INPUT: a string
- OUTPUT: an array of letters not included in the string

EDGE CASES:
- EXAMPLE 1:
    - INPUT: inputStr = "thequickbrownfoxjumpsoverthelazydog"
        - All letters from 'a' to 'z' are present in the inputStr
    - OUTPUT: []

- EXAMPLE 2: 
    - INPUT: inputStr = "dddeeeeffffghijklmnopqrstuvwxyz"
        - Letters 'a', 'b', and 'c' are missing in inputStr, and thus should be included in the output.
        - Letters 'd', 'e', and 'f' are replicated in inputStr, but do not impact the output.
    - OUTPUT: ["a", "b", "c"]

DATA TYPES:
- .split()
- .filter()
- .includes()

ALGORITHM:
- split the alphabet string or put into an array separating the letters
- filter the alphabet array
- split the input string and check if it doesn't includes any of the letters in the alphabet array

CODE:
*/
const solution = (inputStr) => {
    return "abcdefghijklmnopqrstuvwxyz".split("").filter(letter => !inputStr.split("").includes(letter));
};

// Mario's Code:
/*
Input: string of lowercase  letters

In-Between: get the string of letters and put in an array every letter that is not included from the ABCs

Output: array of  strings (letters)
*/

function solution(inputStr) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"; // The alphabet string to check against input
    const missing = []; // Array to store missing letters
    
    for (const letter of alphabet) {
      if (!inputStr.includes(letter)) {
        missing.push(letter); // Push the current letter to the missing array if not found
      }
    }
    
    return missing; // Returns the array of missing letters 
}

// Felipe's Code:
// given an input str consisting of lowercase english letters
// return the list of letters from the english alphabet (from 'a' to 'z') that are missing from inputStr
// The missing letters should be returned in an array sorted in ascending order

const solution = (inputStr) => {
    // create empty array to push chars missing in inputStr from an alphabet array.
    const missingLetters = [];
    // create an alphabet array
    const alphabetArray = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 
    'y', 'z'
  ];
  // iterate through alphabet array and check if each letter in InputStr is present
    for (let i = 0; i < alphabetArray.length; i++) {
        let verifier = false;
        for (let j = 0; j < inputStr.length; j++) {
            if (alphabetArray[i] === inputStr[j]) {
                verifier = true
                j = inputStr.length - 1;
            }
        }
        if (!verifier) {
            missingLetters.push(alphabetArray[i])
        }
    }
    console.log(missingLetters);
    return missingLetters;
}

// Catalina's Code:
/**
 * Find letters missing from the given string
 * @param inputStr {string}
 * @returns {array} missing letters
*/
const solution = inputStr => {
    let letters = "abcdefghijklmnopqrstuvwxyz";
    letters = letters.split("");
    // object of letters included in `inputStr`
    const includes = new Object();
    
    // iterates through indices of `inputStr`
    for (let i = 0; i < inputStr.length; i++) {
        // adds included characters to `includes` with value true
        includes[inputStr[i]] = true;
    }
    
    // returns array of letters not in `includes`
    return letters.filter(l => !includes[l]);
}

// Ana's Code:
function solution(inputStr) {
    const alphy = 'abcdefghijklmnopqrstuvwxyz'; 
    const missingAlphy = [];
        for (let letter of alphy) {
            inputStr.includes(letter) ?  null : missingAlphy.push(letter)
        }
        return missingAlphy;

};

// Raffy's Code:
//  time complexity: O(n)
// space complexity: O(1)
function solution(inputStr) {
    // Create a flag for each possible lowercase alphabet letter.
    const buckets = new Array(26).fill(false);
    // O(n) loop
    for (const char of inputStr) {
      // Flip the flag, with an applied offset of 97
      // (i.e. character 'a' == 97 in ASCII)
      buckets[char.charCodeAt(0)-97] = true;
    }
    const result = []
    // Building out the result. If flag is not flipped, append corresponding character to result array.
    // O(1) loop because buckets is a constant length of 26!!
    for (const [index,value] of buckets.entries()) {
      // Offset works similarly from before.
      if (!value) result.push(String.fromCharCode(index+97));
    }
    return result
}

// Braily's Code:
const solution = (inputStr) => {
    const inputSet = new Set(inputStr.split(''));
  
    return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .filter((letter) => !inputSet.has(letter));
};

// Isaac's Code:
function solution(inputStr) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    let missing = [];
    
    for (let i = 0; i < alpha.length; i++) {
            if (inputStr.indexOf(alpha[i]) === -1) {
                missing.push(alpha[i])
            }
        }
return missing
}

