/*
PEDAC
PROBLEM:
- INPUT: an integer
- OUTPUT: an integer

EDGE CASES:
- EXAMPLE 1:
    - INPUT: n = 52134
        5 - 2 + 1 - 3 + 4 = 5
    - OUTPUT: 5

- EXAMPLE 2: 
    - INPUT: n = 12345
        1 - 2 + 3 - 4 + 5 = 3
    - OUTPUT: 3

- EXAMPLE 3:
    - INPUT: n = 104956
        1 - 0 + 4 - 9 + 5 - 6 = -5
    - OUTPUT: -5

DATA TYPES:
- String()
- .split()
- .map()
- Number()
- .filter()
- .reduce()

ALGORITHM:
- Turn `n` into a string
- Split `n` into an array
- Turn each number in the array into a number
- Filter the array into even and odd indices
- Add all the numbers in the even and odd indices array
- Minus both numbers together

CODE:
*/
const solution = (n) => {
    const even = String(n).split("").map(n => Number(n)).filter((n, i) => i % 2 === 0).reduce((a, b) => a + b, 0);
    const odd = String(n).split("").map(n => Number(n)).filter((n, i) => i % 2 !== 0).reduce((a, b) => a + b, 0);
    return even - odd;
}

// Raffy's Code:
function solution(n) {
    let flag = true;
    let [b1,b2] = [0,0];
    let count = 0;
    
    while (n > 0) {
      count++;
      const rem = n % 10;
      if (flag) b1 += rem;
      else b2 += rem;
      flag = !flag;
      n = Math.floor(n / 10)
    }
    
    if (count%2 === 0) return b2-b1;
    else return b1-b2;
  }

// Catalina's Code:
/**
 * Calculate the alternating sum of a number's digits
 * @param {number} n an integer
 * @returns {number} alternating sum
 */
const solution = n => {
    // combines digits, dependent on whether their indices are even
    return String(n).split("").reduce((alt, d, i) => {
        if (i % 2 === 0) return alt + Number(d);
        else return alt - Number(d);
    }, 0);
}

// Mario's Code:
/*
input: int

inbetween: combine all digits alternating, 
EX: 1234 input
1 - 2 + 3  - 4 
output: -1

output: int
*/

function solution(n) {
    const digits = String(n).split("")
    // turn the number into a string and then split it into an array
    
    let sum = 0
    
    for (let i = 0; i <= digits.length - 1; i++) {
    // every even digit is added (0,2,4,6) while every odd digit is subtracted (1,3,5,7)
        if (i % 2 === 0) {
            sum += Number(digits[i])
        } else {
            sum -= Number(digits[i])
        }
    }
    
    return sum
}

// Felipe's Code:
function solution(n) {
    nStr = String(n)
    console.log(nStr)
    
    let right = 0;
    let total = 0;
    
    let sumOrMinus = true;
    while (right < nStr.length) {
        if (sumOrMinus) {
            total += Number(nStr[right])
            sumOrMinus = false
        } else {
            total -=  Number(nStr[right])
            sumOrMinus = true
        }
        
        right++
    }
    console.log(total);
    return total;
}