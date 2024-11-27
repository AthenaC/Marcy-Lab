// Ana's Code:
const solution = (s) => {
    let sum = 0;
    const vowels = "aeiou";
    for (let char of s) {
        if (vowels.includes(char)) {
            sum += 1;
        } else {
            sum += 2
        }
    }
    return sum;
};
solution("abcde") // should return 8 => 1 + 2 + 2 + 2 + 1

// ChatGPT's corrected version of my code:
const solution = (s) => {
    // Convert string into an array of characters
    const arr = s.split("");
    
    // Define vowel set
    const vowelsSet = new Set("aeiou");

    // Map the string to numbers: 1 for vowels, 2 for consonants
    const mapped = arr.map((letter) => {
        if (vowelsSet.has(letter)) {
            return 1;  // Vowel
        } else if (/[a-z]/i.test(letter)) { // Check if it's a letter (ignore non-alphabets)
            return 2;  // Consonant
        } else {
            return 0;  // Non-alphabet characters can be treated as 0 (or ignored)
        }
    });

    // Calculate the sum of all mapped values
    const sum = mapped.reduce((a, b) => a + b, 0);

    return sum;
};

console.log(solution("abcde"));  // Should return 8

// Fernando's Code:
function solution(s) {
    let newArr = s.split('')
    console.log(newArr)
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === 'a' || newArr[i] === 'e' || newArr[i] === 'i' || newArr[i] === 'o' || newArr[i] === 'u') {
            newArr[i] = 1
        } else if (newArr[i] === '' || newArr[i] === "") {
            newArr[i] = 0
        } else {
            newArr[i] = 2
        }
        console.log(newArr)
        console.log(newArr.reduce((acc, curr) => acc + curr))
    }
    return newArr.reduce((acc, curr) => acc + curr, 0)
}

// King's Code:
/*
## PEDAC
**Problem**
input: string of letters (string)
output: sum of numbers together (integer)
The vowels and constants are checked within the string and if it is a vowel, add 1 to the sum. If a constant, add 2 to the sum. Finally, return the final sum.

**Examples/Edge Case:** 
Come up with two of your own examples: 
"" -> 0
"ab" -> 3

edge case:
input: "12345"
output: what would the output be for this input?
the input isn't a string of letters, so the output should be "Invalid string. Please submit only letters and try again!"

**Data Structure/Data Type**
What data structures will we use to solve this problem?
data types: strings, integers, an array
conversion: from a string to a integer
 
**Algorithm** 
output number will start at 0

each character is looked at
    if it is a vowel
        add 1 to the output
    
    if it a constant
        add 2 to the output
        
return the sum at the end
*/
// Code your solution!


const solution = (str) => {
    const strArr = str.split("");
    const vowels = "aeiou";
    
    // can do 2 separate counting variables
    let vowelCount = 0;
    let constantCount = 0;
    
    // or 1 counting variable
    // let totalSum = 0;
    
    // forEach implementation 
    strArr.forEach(letter => {
        if (vowels.includes(letter)) {
            vowelCount += 1; // or totalSum += 1;
        } else {
            constantCount += 2; // or totalSum += 2;
        }
    })
    
    return vowelCount + constantCount; // or return totalSum;
    
    // regex (regular expression) implementation
    // for (const letter of str) {
    //     if (/[aeiou]/.test(letter)) {
    //         vowelCount += 1; // or totalSum += 1;
    //     } else {
    //         constantCount += 2; // or totalSum += 2;
    //     }
    // }
    
    // return vowelCount + constantCount; // or return totalSum;
    
    };

// Catalina's Code:
/**
 * Sums letters of an inputted string
 * @param s {string} a string of lowercase letters
 * @return sum of letters in s
 */
const solution = s => {
    // converts s to array and uses reducer function to add value per letter to overall sum
    return s.split('').reduce((sum, c) => {
        if (/[aeiou]/.test(c)) return sum + 1; // adds one to sum if character is a vowel
        else if (/[a-z]/.test(c)) return sum + 2; // adds two to sum if character is a consonant
        return sum; // no change if character is not a letter
    }, 0);
}