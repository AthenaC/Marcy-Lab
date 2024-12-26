/*
PEDAC
PROBLEM:
- INPUT: an array of words
- OUTPUT: an array of first letter and last letter of the next word

EDGE CASES:
- EXAMPLE 1: 
    - INPUT: a = ["cat", "dog", "ferret", "scorpion"]
        [c]at, do[g] => "cg"
        [d]og, ferre[t] => "dt"
        [f]erret, scorpio[n] => "fn"
        [s]corpion, ca[t] => "st"
    - OUTPUT: ["cg", "dt", "fn", "st"]

- EXAMPLE 2: 
    - INPUT: a = ["I", "have", "a", "nice", "surprise"]
        [I], hav[e] => "Ie"
        [h]ave, [a] => "ha"
        [a], nic[e] => "ae"
        [n]ice, surpris[e] => "ne"
        [s]urprise, [I] => "sI"
    - OUTPUT: ["Ie", "ha", "ae", "ne", "sI"]

DATA TYPES:

ALGORITHM:

CODE:
*/
const solution = (a) => {
    const twoArr = []
    for (let i = 0; i < a.length; i++){
        if (i === a.length - 1) {
            twoArr.push((a[i][0]) + (a[0][a[0].length - 1]))
        } else {
            twoArr.push((a[i][0]) + (a[i+1][a[i+1].length - 1]))
        }
    }
    return twoArr
}

// Raffy's Code:
// less messy
function solution(a) {
    a.push(a[0]);
    const res = [];
    for (let i = 0; i < a.length - 1; i++) {
      res.push(a[i][0] + a[i + 1][a[i + 1].length - 1]);
    }
    return res;
  }
  
  // first attempt
  function solution(a) {
    if (a.length <= 1) return [a[0][0]+a[0][a[0].length-1]];
    const res = [];
    for (let i=0; i<a.length-1; i++) {
      res.push(a[i][0]+a[i+1][a[i+1].length-1]);
    }
    res.push(a[a.length-1][0]+a[0][a[0].length-1]);
    return res;
  }

// Braily's Code:
/**
 * @param {string[]} arr
 * @returns {string[]}
 */

const solution = (arr) => {
    const output = [];
    
    for (let i = 0; i < arr.length; i++) {
        const currentStr = arr[i];
        const firstChar = currentStr[0];
        
        const nextStr = arr[i + 1];
        
        if (!nextStr) {
            const firstStr = arr[0];
            output.push(`${firstChar}${firstStr[firstStr.length - 1]}`);
            return output;
        }
        
        const endChar = nextStr[nextStr.length - 1];
        
        output.push(`${firstChar}${endChar}`)
    }
    
    return output;
}

// Mario's Code:
/*
input: array

inbetween: make an array where all the strings are based on the first letter of string n and the last letter of string n+1, if its the last element use the first elements last letter

output: array
*/
function solution(a) {
    let result = [];
    
    for (let i = 0; i < a.length; i++) {
        const firstLet = a[i][0]; // First character of a[i]
        const nextString = a[(i + 1) % a.length];
        const lastLet = nextString[nextString.length - 1]; // Last character of the next string
        
        result.push(firstLet + lastLet);
    }
    
    return result;
}

// Catalina's Code:
/**
 * Construct an array of the concatenations of the first and last characters of consecutive words
 * @param {array} a array of strings
 * @returns {array} concatenations of the first and last characters of consecutive words
 * 
 */
const solution = a => {
    //handles edge case of empty-array input
    if (a.length === 0) return new Array();
    
    // combines the first and last char of string if only value in `a` or returns copy of `a`
    if (a.length === 1) {
        if (a[0].length === 0) return [...a];
        return [`${a[0][0] + a[0][a[0].length - 1]}`];
    }
    
    // reducer function to combine first and last chars of consecutive values of `a`
    return a.reduce((conc, c, i) => {
        if (i === a.length - 1) conc.push(c[0] + a[0][a[0].length - 1]);
        else conc.push(c[0] + a[i + 1][a[i + 1].length - 1]);
        return conc;
    }, []);
}