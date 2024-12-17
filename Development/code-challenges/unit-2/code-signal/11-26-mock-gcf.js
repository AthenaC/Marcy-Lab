// Question 1:
/* 
PEDAC
PROBLEM:
- INPUT: an array of positive integers, and a target number
- OUTPUT: the index of the last integer added that is greater than the target number

EDGE CASES:
- EXAMPLE 1:
visits = [300, 200, 100, 200, 500]
target = 700
    0: 300 < 700
    1: 300 + 200 = 500 < 700
    2: 500 + 100 = 600 < 700
    3: 600 + 200 = 800 > 700
OUTPUT = 3

- EXAMPLE 2:
visits = [900, 821, 1090]
target = 900
    0: 900 = 900
OUTPUT = 0

- EXAMPLE 3:
visits = [700, 800, 500]
target = 2001
    0: 700 < 2001
    1: 700 + 800 = 1500 < 2001
    2: 1500 + 500 = 2000 < 2001
OUTPUT: -1

DATA TYPES:
- for loop / reduce()
- if statement

ALGORITHM:
- iterate through the `visits` array
- check if the first number is equal or less than target
    - make a sum variable, add first index to sum
    - if sum is equal to target, return the index of the number
    - if sum is less than target, add the next number to the sum variable
    - if sum of all numbers in the array is less than target, return -1.

CODE:
*/
const solution = (visits, target) => {
    let sum = 0;
    for (let i = 0; i < visits.length; i++) {
        sum += visits[i];
        if (sum >= target) {
            return i;
        };
    };
    return -1;
};

// Array method (ChatGPT):
/*
1. Using reduce():
    - The reduce() method iterates through the visits array, and for each element, it adds the number of visitors for that day to total_visits.
    - The accumulator (acc) starts as -1, which represents that we haven’t found a day that meets the target yet.
    - Inside the reduce callback:
    - We update the total_visits by adding visitsToday (the number of visitors for the current day).
    - If total_visits exceeds or equals the target and the accumulator is still -1, we return the current index (index) because this is the first day the target has been reached.
    - If the target is not met, the accumulator remains unchanged, and the loop continues to the next day.
2. Final return: If the target is never met, the accumulator will remain -1, and that will be returned.
*/
const solution = (visits, target) => {
    let total_visits = 0;
    // Use reduce to accumulate visits and find the first day where total >= target
    return visits.reduce((acc, visitsToday, index) => {
        total_visits += visitsToday;
        // If we have reached the target, return the index
        if (total_visits >= target && acc === -1) {
            return index;  // Return the first index where total_visits >= target
        }
        return acc;  // Continue with the current value of acc (index)
    }, -1);
}

// --------------------------------------------------------------------------------------------------------------------------------------
// Question 2:
/* 
PEDAC
PROBLEM:
- INPUT: an array of strings with names and their grades
- OUTPUT: the name who has the highest average

EDGE CASES:
- EXAMPLE 1: 
records = ["John: 5", "Michael: 4", "Ruby: 2", "Ruby: 5", "Michael: 5"]
    "John" = 5
    "Michael" = (4 + 5) / 2 = 4.5
    "Ruby" = (2 + 5) / 2 = 3.5
    5 > 4.5 > 3.5
OUTPUT = "John"

- EXAMPLE 2:
records = ["Kate: 5", "Kate: 5", "Maria: 2", "John: 5", "Michael: 4", "John: 4"]
    "Kate" = (5 + 5) / 2 = 5
    "Maria" = 2
    "John" = (5 + 4) / 2 = 4.5
    "Michael" = 4
    5 > 4.5 > 4 > 2
OUTPUT = "Kate"

DATA TYPES:

ALGORITHM:
- Initialize an empty object studentGrades where each key will be a student's name and the value will be an array of their grades.
- Loop through each record and:
- Split the string by ": " to extract the name and grade.
- Convert the grade from string to integer and update the student's grades in studentGrades.
- After collecting all grades, calculate the average for each student and keep track of the highest average.
- Return the name of the student with the highest average.

1. Split each record into a name and grade.
2. Accumulate grades per student.
3. Calculate averages and find the maximum.

CODE:
*/
// Array Method:
const solution2 = (records) => {
    // Step 1: Parse the records into an array of objects with name and grade
    const students = records.map(record => {
        // a. Split record into name and grade
        const [name, grade] = record.split(": ");
        return { name, grade: parseInt(grade, 10) };
    });

    // Step 2: Group grades by student using reduce
    const studentGrades = students.reduce((acc, { name, grade }) => {
        // a. Checking if the student has not been encountered before
        if (!acc[name]) {
            // b. If the student has been encountered for the first time, we initialise their entry in the `studentData` object
            //  - total of grade, count of times their grades has been added
            acc[name] = { total: 0, count: 0 };
        }
        // c. Accumulate sum and count
        acc[name].total += grade;
        acc[name].count += 1;
        return acc;
    }, {});

    // Step 3: Calculate averages and find the student with the highest average
    let maxAverage = -Infinity;
    let bestStudent = '';

    for (const name in studentGrades) {
        const { total, count } = studentGrades[name];
        // 10. Calculate the average
        const average = total / count;
        // 11. Check if it's the highest so far
        if (average > maxAverage) {
            maxAverage = average;
            bestStudent = name;
        };
    };
    // Step 4: Return the name of the student with the highest average
    return bestStudent;
}
// --------------------------------------------------------------------------------------------------------------------------------------
// Question 3: 
/* 
PEDAC
PROBLEM:
- INPUT:
- OUTPUT:

EDGE CASES:
- EXAMPLE 1:
n = 4
m = 4
figures = ['D', 'B', 'A', 'C']

OUTPUT = [ [1, 2, 2, 2],
           [1, 1, 3, 0],
           [1, 4, 4, 0],
           [0, 4, 4, 0] ]

- EXAMPLE 2:
n = 3
m = 5
figures = ['A', 'D', 'E']

OUTPUT = [ [1, 2, 0, 0, 0],
           [0, 2, 2, 3, 0],
           [0, 2, 3, 3, 3] ]
DATA TYPES:

ALGORITHM:

CODE:
*/
// --------------------------------------------------------------------------------------------------------------------------------------
// Question 4: 
/* 
PEDAC
PROBLEM:
- INPUT: an array of positive integers with some duplicates
- OUTPUT: the winner of the last person who removed a paired number

EDGE CASES:
- EXAMPLE 1:
numbers = [1, 4, 5, 5, 6]
    Alice starts the game by removing [5, 5] leaving the array to [1, 4, 6]
OUTPUT = "Alice" (winner)

- EXAMPLE 2:
numbers = [1, 3, 3, 1, 5]
    Alice removes [3, 3] => [1, 1, 5]
    Bob removes [1, 1] => [5]
OUTPUT = "Bob" (winner)

- EXAMPLE 3:
numbers = [1, 2, 2, 3, 3, 1, 1]
    Alice removes [2, 2] => [1, 3, 3, 1, 1]
    Bob removes [3, 3] => [1, 1, 1]
    Alice removes [1, 1] => [1]
OUPTUT = "Alice" (winner)

DATA TYPES:

ALGORITHM:
- iterate through the `numbers` array
- use `.splice()` if there are paired numbers
- return the last person who removed the last pair

CODE:
*/
const solution4 = (numbers) => {
    // 1. Initialize the turn counter, starting from 0.
    let turn = 0;
    // 2. An infinite loop until we manually break out of it.
    while (true) {
        // 3. A flag to trak if a pair was removed in the current loop.
        let removed = false;
        // 4. A loop to iterate through an array for any paired elements.
        for (let i = 0; i < numbers.length - 1; i++) {
            // 5. If a pair is found, ...
            if (numbers[i] === numbers[i + 1]) {
                // 6. Remove the pair
                numbers.splice(i, 2); 
                // 7. Mark that a pair has been removed.
                removed = true; 
                // 8. Increment turn count
                turn++; 
                // 9. Exit the inner loop and restart scanning after modification
                break; 
            }
        }
        // 10. If no pair was removed in the current iteration, exit the `while` loop
        if (!removed) {
            // 11. No more pairs to remove; the game ends
            break;
        }
    }
    // 12. If the number of turns is even, Bob wins; if it's odd, Alice wins.
    return turn % 2 === 0 ? "Bob" : "Alice";
};

const solution4 = (numbers) => {
    // 1. Create an empty stack to track numbers.
    let stack = [];
    // 2. Keep track of the number of pairs that have been removed
    let removedPairs = 0;
    // 3. Iterate through each number in the array `numbers`
    for (let num of numbers) {
        // 4. Check if the stack is not empty and the top of the stack matches the current number
        if (stack.length > 0 && stack[stack.length - 1] === num) {
            // 5. If a matching pair is found, remove the top element as a pair is found
            stack.pop(); 
            // 6. Increment the count of removed pairs
            removedPairs++; 
        } else {
            // 7. If no match, push the current number onto the stack
            stack.push(num); 
        }
    }
    // 8. Determine the winner based on the number of removed pairs
    return removedPairs % 2 === 0 ? "Bob" : "Alice";
};

const solution4 = (numbers) => {
    let removedPairs = 0;

    numbers.reduce((stack, num) => {
        if (stack.length > 0 && stack[stack.length - 1] === num) {
            stack.pop(); // Remove the last element (pair found)
            removedPairs++; // Increment the removed pairs count
        } else {
            stack.push(num); // Add the current number to the stack
        }
        return stack;
    }, []);

    // Determine the winner based on the number of removed pairs
    return removedPairs % 2 === 0 ? "Bob" : "Alice";
};