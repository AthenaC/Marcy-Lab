/* 
PEDAC
PROBLEMS:
- INPUT: an array of positive integers
- OUTPUT: whether it's strictly increasing, decreasing, or none

EDGE CASE:
- EXAMPLE 1:
INPUT: numbers = [12, 65, 15, 72, 19, 72]
numbers[0] = 12
numbers[2] = 15
numbers[4] = 19
12 < 15 < 19 (strictly increasing)
OUTPUT: "increasing"

- EXAMPLE 2: 
INPUT: numbers = [12, 1, 54, 5, 19, 14]
numbers[0] = 12
numbers[2] = 54
numbers[4] = 19
12 < 54 > 19
OUTPUT: "none"

- EXAMPLE 3:
INPUT: numbers = [666, 17, 66, 5, 6, 23]
numbers[0] = 666
numbers[2] = 66
numbers[4] = 6
666 > 66 > 6
OUTPUT: "decreasing"

DATA TYPES:
- how to compare the elements in the even positions
- how to compare elements to know if they are sorted

ALGORITHM:
ALGORITHM 1: 
TIME: O(n*n^2) sort
- loop through only even indices in the array
- add even indices to an array

- after elements are added in an array
- using the sort method, find out if array is sorted or not

ALGORITHM 2: 
TIME: O(n)
- loop through only even indices in numbers array
- compare every element to the even positioned element before it
    - if the elements to do fit the order of the first two elements, return none

MY ALGORITHM:
- .every() is ideal because it stops as soon as it finds a single element that violates the condition, and it ensures that all elements meets the condition 
- EXAMPLE 1: 
    numbers = [12, 65, 15, 72, 19, 72]
    filtered = [12, 15, 19]
    1. First iteration: i = 0
        - `i === 0`, so the element 12 is valid
    2. Second iteration: i = 1 (num = 15)
        - Compare arr[i - 1] = 12 and num = 15: 12 < 15 (true)
    3. Third iteration: i = 2 (num = 19)
        - Compare arr[i - 1] = 15 and num = 19: 15 < 19 (true)
    `increase = true` and `decrease = false`

CODE:
*/
const solution = (numbers) => {
    const filtered = numbers.filter((num, i) => i % 2 === 0);
    // The `every` method iterates over the array, checking if a condition is true for every element
    // For each `num` at index `i`, if it is the first element `i === 0`, there's no previous element to compare to, so it's considered valid
    // Otherwise, it checks if the current element `num` is greater than the previous element `arr[i - 1]`
    const increase = filtered.every((num, i, arr) => i === 0 || arr[i - 1] < num);
    // Otherwise, it checks if the current element `num` is less than the previous element `arr[i - 1]`
    const decrease = filtered.every((num, i, arr) => i === 0 || arr[i - 1] > num)
    if (increase) {
        return "increasing";
    } else if (decrease) {
        return "decreasing";
    } else {
        return "none";
    };
};

// Catalina's Code:
/**
 * Checks whether even-positioned numbers are strictly increasing or decreasing
 * @param: numbers {array of numbers}
 * @returns monotonic {string} whether even-positioned numbers all increase, decrease, or neither
 */
const solution = (numbers) => {
    // default value of variable gauging type of monotony is "none"
    let monotonic = "none";
    if (numbers.length > 2) {
        // changes value of `monotonic` if values change between zeroth and second position
        if (numbers[2] > numbers[0]) monotonic = "increasing";
        else if (numbers[0] > numbers[2]) monotonic = "decreasing";
        // if `numbers[0]` is equal to `numbers[2]`, not monotonic
        else return monotonic;
    }
    if (numbers.length > 4) {
        for (let i = 4; i < numbers.length; i += 2) {
            // if values do not follow the initial path of monotony strictly, return "none"
            if (numbers[i] === numbers[i - 2]) return "none";
            if (numbers[i] > numbers[i - 2] && monotonic !== "increasing") return "none";
            if (numbers[i - 2] > numbers[i] && monotonic !== "decreasing") return "none";
        }
    }
    return monotonic;
}