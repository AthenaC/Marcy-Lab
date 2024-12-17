// Question 1: 
/* 
PEDAC
PROBLEM:
- INPUT: an array of integers
-OUTPUT: number of integers that are not equal to the first and second elements

EDGE CASES:
numbers = [4, 3, 2, 3, 2, 5, 4, 3]
numbers[2] = 2
numbers[4] = 2
numbers[5] = 5
output = 3

DATA TYPES:


ALGORITHM:
- an array of integers
- create a count variable and start at 0
- iterate through the array starting at index 2
    - check if each integers is not equal to the starting index and index 1
    - if true, add 1 to count
- return the final count

CODE:
*/
const solution = (numbers) => {
    let count = 0;
    for (let i = 2; i < numbers.length; i++) {
        if (numbers[0] !== numbers[i] && numbers[1] !== numbers[i]) {
            count++;
        };
    };
    return count;
};

// Question 2:
/* 
PEDAC
PROBLEM:
- INPUT: an array of positive integers
- OUTPUT: percentage from min to max value, if 0, return -1

EDGE CASES:
numbers = [65, 68, 72, 59, 72]
72 / 59 ≈ 1.22
22%
output = 22

DATA TYPES:
- sort method
- Math.floor() to round down the percentage integer

ALGORITHM:
- sort the array
- find the min and the max values
- if the min value equals to 0, return -1
- or return the percentage between the max and min values

CODE:
*/
const solution2 = (numbers) => {
    const sort = numbers.sort((a, b) => a - b);
    const min = sort[0];
    const max = sort[sort.length - 1];
    if (min === 0) return -1;
    return Math.floor(((max / min) - 1) * 100);
};

// Question 3:
/* 
PEDAC
PROBLEM:
- INPUT: an array of digits, and an array of letters in a string
- OUTPUT: an array of Boolean for each messages

EDGE CASES:
- Example 1:
digits = [2, 3]
words = ["abc", "gdef"]
output = [true, false]

- Example 2:
digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
words = ["abc", "gdef", "x"]
output = [true, true, true]

DATA TYPES:
- .map()
- .filter()
- .includes()
- .push()
- if statements

ALGORITHM:
- Create an array where each digits is assigned to the letters based on the phone.
    - Digits would be the index of the new array.
- Iterate through the array of `digits` given, and pull the group of letters by assigning the numbers in `digits` to the array created before this.
    - Combine all the all the groups of letters pulled together into one string
- Create an empty array
- For each message in the `words` array, split each message separately
    - Filter out any letters that is not included in the letters `digits` calls for
    - If these filtered letters exist, add `false` into the empty array
    - If not, add `true` into the empty array
- Return new array

CODE:
*/
const solution3 = (digits, words) => {
    // Turning digits into index
    const phone = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    // Array of groups of letters that the digits can do based on the `digits` provided
    const working = digits.map((num) => phone[num]).join('');
    // Create an empty array
    const arr = [];
    // Iterate through `words` array
    words.map((msg) => {
        // Split each message 
        const split = msg.split('');
        // Filter the `split` array if the letter is NOT included in `phoneNum`
        const filter = split.filter(letter => !working.includes(letter));
        // If the length of the filtered letter is more than 0, add `false` into the empty array or `true` if there are 0 filtered letter
        filter.length > 0 ? arr.push(false) : arr.push(true);
    })
    // Return the new array
    return arr;
};

// digits = [2, 3]
// words = ["abc", "gdef"] 
// console.log(solution3(digits, words)) // [true, false]

// digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// words = ["abc", "gdef", "x"] 
// console.log(solution3(digits, words)) // [true, true, true]

// digits = [3, 6, 7, 9]
// words = ["word", "door", "window"]
// console.log(solution3(digits, words)) // [true, true, false]

// Catalina's Code for Question 3:
const solution = (digits, words) => {
    const buttons = ["", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    const allowed = digits.map((d) => buttons[d - 1]).join("").split("");
    return words.map(w => w.split("").every(c => allowed.includes(c)));
};

// Braily's Code for Question 3: 
const solution = (digits, words) => {
    // Create an empty array which will be used to store whether or not words can be typed.
    const boolArr = [];
    
    // Create an object with the key representing the digit and the value representing the characters.
    const obj = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }
    
    // Iterate through the words array.
    for (const word of words) {
        let works = true;
        
        for (const char of word) {
            /*
            1. We iterate through the digits array using the `.find` method.
            2. We check if the digit exists on the object, and if it includes
            the character of the word we are currently working with.
            3. If the character was not found, we set works as false.
            */
            
            const found = digits.find(digit => obj[digit] && obj[digit].includes(char));
            
            if (!found) {
                works = false;
            }
        }
        
        // We push the value of works to the boolean array.
        boolArr.push(works);
    }
    
    // Return the boolean array.
    return boolArr;
}

// Raffy's Code for Question 3:
function solution(digits, words) {
    const chars = {
      2: 'abc',
      3: 'def',
      4: 'ghi',
      5: 'jkl',
      6: 'mno',
      7: 'pqrs',
      8: 'tuv',
      9: 'wxyz'
    }
    res = []
    
    // building out a superstring
    // this is no different in doing .map().join() btw!
    let superstring = ''
    for (const val of digits) {
      superstring += chars[val];
    }
    
    // iterating through all the words
    for (const [wordInd, word] of words.entries()) {
      // initialize result to true at first
      res[wordInd] = true;
      // then loop to see if we need to set to false
      for (const char of word) {
        if (!superstring.includes(char)) res[wordInd] = false;
      }
    }
    
    return res;
  };