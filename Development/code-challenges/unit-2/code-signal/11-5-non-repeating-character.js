/* 
PEDAC
PROBLEM:
- input: string
- output: non-repeating letter of the string or "_"

EDGE CASES/EXAMPLES:
"abc" => "a"
"poop" => "_"

DATA STRUCTURE:
- array

ALGORITHM:
- Turn the string into an array
- Find the first index and the last index of the same letter and see if they match
- If they don't match, return an underscore

CODE:
*/
// my code:
const solution = (s) => {
    return s.split("").find((letter) => s.indexOf(letter) === s.lastIndexOf(letter)) || "_";
}
console.log(solution("abacabad"))

// Fernando's:
//  Use a frequency object to keep track of how many times a character appears
//  If the value of the key is strictly equal to 1 then that first character will be returned
/*  
    If there are no unique characters or any of the keys in the 
    frequency the object is equal to only one, then return "_"
*/

// Converted solution function to arrow function
const solution = (s) => {
    // Problem: Find the first nonrepeating character
    // Convert s into an array
    let arr = s.split('')
    console.log(arr)
    
    // initialize frequency object
    let frequency = {}
    
    // Build frequency obj
    for (const element of arr) {
        frequency[element] = (frequency[element] || 0) + 1;
        console.log(frequency)
    }
    
    // Find first non repeating char
    for (const element of arr) {
        if(frequency[element] === 1){
            console.log(element)
            return element;
    // Note: this only returns the first instance of a non repeating character
        }
    } 
    console.log('_')
    return '_'
}

// Isaac's:
const solution = (str) => {
    for (let i = 0; i < str.length; i += 1) {
      if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
        return str[i]
      }
    }
    return ('_')
  }

// Carmen's:
/*
P
input: string(s)
output: string(s)
return the first letter that is non repeating in the string, if there no non-reapting letter, return "_"

E
"abc" -> "a"
"poop" -> "_"

Data Stuture/Data Types
- object

A
high level:
- read the string left to right to keep track of frequency of each letter 
- read the string again to find which letter from left to right is the first letter that has a frequency of 1 

--------
low level aglorithm(psuedocode):
- create frequency object
- iterate through each letter in the string
    - if a letter is a key in the string:       
         increment it's value 
    else
        add it to the object with a value of 1 
    
- iterate through the string again
    the first letter that has a value of 1 in the freq obj, will be returned 
    
if after iterating no letter had a value of 1, return "_"

 */
function solution(s) {
    let freq = {}
    
    for(const letter  of s){ 
        freq[letter] ? freq[letter]++ : freq[letter] = 1
    }
    
    for(const letter  of s){
        if(freq[letter] === 1) return letter
    }
    
    return "_"
    
}

// Raffy's:
/*
**Problem**
Find the first non-repeating [char] in an input [string].

**Examples/Edge Cases:** 
"meow" -> "m"
"meowmoe" -> "w""

**Data Structures**
- Arrays
- Strings

**Algorithm** 
- loop through every [char] in the [string]:
  - return result as soon as first index is not equal to last index of specific [char]
- if not found, return '_'
*/

// Same approach with HW: swe-1-2/from-scratch.js/hasOnlyOneOfThisLetter (Question #7)
function solution(s) {
    // one-liner
    return [...s].find(char => s.indexOf(char) === s.lastIndexOf(char)) || '_';
  }