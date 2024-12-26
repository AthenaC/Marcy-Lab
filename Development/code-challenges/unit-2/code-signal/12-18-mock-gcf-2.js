// Question 1:
/*
You are given an array of uppercase and lowercase English letters recording representing a sequence of letters typed by the user.

Your task is to count the number of times that the user changed keys while typing the sequence, considering that the uppercase and lowercase letters for a given letter require the user to press same letter key (ignoring modifiers like Shift or Caps Lock). For example, typing 'W' and 'w' require the user to press the same key, whereas typing 'W' and 'E' or typing 'W' and 'e' require the user to change keys.

Example

    For recording = ['W', 'w', 'a', 'A', 'a', 'b', 'B'], the output should be solution(recording) = 2.

    Explanation:
        Typing 'W' and 'w' require the same key 'w'.
        Typing 'A' and 'a' require the same key 'a'.
        Typing 'b' and 'B' require the same key 'b'.
        So, the user changed keys in the following order: 'w' -> 'a' -> 'b', and the total number of key changes is 2.

    For recording = ['w', 'w', 'a', 'w', 'a'], the output should be solution(recording) = 3.

    Explanation:
    The user changed keys in the following order: 'w' -> 'a' -> 'w' -> 'a', and the total number of key changes is 3.
*/
const solution1 = (recording) => {

}

// -------------------------------------------------------------------------------------------------------------------------------
// Question 2: 
/*
Given an array of integers numbers, distribute all of its integers between two arrays, first and second, based on the following rules:

    The first number, numbers[0], goes to the first array.
    The second number, numbers[1], goes to the second array.
    Each following number, numbers[i] where i > 1, goes to the array with the higher number of elements that are strictly greater than the numbers[i]. In case of a tie, numbers[i] goes to the array with a lower length. If it is still a tie, numbers[i] goes to the first array.

Your task is to return a single array - the combination of first and second by appending all elements of second to the end of first.

Note: You are not expected to provide the most optimal solution, but a solution with time complexity not worse than O(numbers.length2) will fit within the execution time limit.

Example

For numbers = [5, 7, 6, 9, 2], the output should be solution(numbers) = [5, 9, 2, 7, 6].

[5, 7, 6, 9, 2]

[5] ct = 0
[7] ct = 1

[5] ct = 0
[7,6] ct = 0

[5,9] ct = 2
[7,6] ct = 2

[5,9,2]
[7,6]

a1+a2



Explanation:

    numbers[0] = 5 goes to the first array and numbers[1] = 7 goes to the second array. At this point, first = [5] and second = [7].
    Considering numbers[2] = 6:
        There are 0 elements in the first array that are greater than numbers[2] = 6,
        There is 1 element in the second array that is greater than numbers[2] = 6,
        As 1 > 0, numbers[2] goes to the second array,
        At this point, first = [5] and second = [7, 6].
    Considering numbers[3] = 9:
        There are 0 elements in the first array that are greater than numbers[3] = 9,
        There are 0 elements in the second array that is greater than numbers[3] = 9,
        As 0 = 0, it is a tie, numbers[3] goes to the array with the lowest length, which is the first array,
        At this point, first = [5, 9] and second = [7, 6].
    Considering numbers[4] = 2:
        There are 2 elements in the first array that are greater than numbers[4] = 2,
        There are 2 elements in the second array that is greater than numbers[4] = 2,
        As 2 = 2, it is a tie, numbers[4] should go to the array with the lowest length. As both arrays have equal length (first.length = second.length = 2), numbers[4] goes to the first array.
        At this point, first = [5, 9, 2] and second = [7, 6].
    Appending second to the end of first results in the following array: [5, 9, 2] + [7, 6] = [5, 9, 2, 7, 6].

Input/Output

    [execution time limit] 4 seconds (py3)

    [memory limit] 1 GB

    [input] array.integer numbers

    An array of integer numbers.

    Guaranteed constraints:
    2 ≤ numbers.length ≤ 103,
    0 ≤ numbers[i] ≤ 105.

    [output] array.integer

    The result of appending second array to the end of the first array, after splitting all integers from numbers based on the rules described above.
*/
const solution2 = (numbers) => {

}

// -------------------------------------------------------------------------------------------------------------------------------
// Question 3:
/*
Debugging code is a well-known feature of IDEs. When debugging, it is possible to set breakpoints at specific lines of code to let the debugger intercept code execution when it reaches this line.

You are given length, which represents the last line number of some code snippet that you are debugging, and a list of unique integers breakpoints representing the line numbers that are set as breakpoints for the debugger. It is guaranteed that all breakpoints are on unique lines and 1 ≤ breakpoints[i] ≤ length.

You are also given a list of actions that the user made. Your task is to determine which line the debugger will end on after processing all of the user's actions. Initially, the debugger starts on line 1.

The list of possible user actions:

    "next" - jump to the next line
    "continue" - jump forward to the first breakpoint after the current line, or jump to the last line of the code if there are no more breakpoints.

Example
breakpoints = [4, 10]
actions = ["continue", "continue", "next", "next", "next"]
length = 10

curr = 10





    For length = 55, breakpoints = [2, 5, 21, 44], and actions = ["next", "next", "continue", "next", "next"], the output should be solution(length, breakpoints, actions) = 7.
        The first two "next" actions will move the debugger to line 3.
        The "continue" action moves the debugger to the next breakpoint, which is located on line 5.
        The final two "next" actions move the debugger to line 7 which is the answer.

    For length = 10, breakpoints = [4, 10], and actions = ["continue", "continue", "next", "next", "next"], the output should be solution(length, breakpoints, actions) = 10.
        The first "continue" action moves the debugger to the breakpoint on line 4.
        Then, the second "continue" action moves the debugger to the next breakpoint on line 10.
        The last three "next" actions do not move the debugger, because it is already on the last line of the code. Thus, the final output is 10.

    For length = 10, breakpoints = [4, 8], and actions = ["next", "next", "next", "continue", "continue", "continue"], the output should be solution(length, breakpoints, actions) = 10.
        The first three "next" actions move the debugger to line 4.
        Then, the first "continue" action moves the debugger to the next breakpoint on line 8.
        Then, the second "continue" action moves the debugger to the last line 10, as there are no more breakpoints after line 8.
        Finally, the last "continue" action does not affect the debugger position as it's already on the final line, so the final answer is 10.
*/
const solution3 = (length, breakpoints, actions) => {

}

// -------------------------------------------------------------------------------------------------------------------------------
// Question 4:
/*
A cyclic shift is the operation of rearranging the digits in a number (in decimal format) by moving some digits at the end of the number to before the beginning of the number, while shifting all other digits to the next position. Given two integers of the same length a and b, a would be a cyclic pair of b if it's possible for a to become equal to b after performing cyclic shifts on a - moving 0 or more ending digits to the beginning while shifting all other digits to the next position in the same order.

Given an array of positive integers a, your task is to count the number of cyclic pairs i and j (where 0 ≤ i < j < a.length), such that a[i] and a[j] have the same number of digits and a[i] is equal to a cyclic shift of a[j].

Example

For a = [13, 5604, 31, 2, 13, 4560, 546, 654, 456], the output should be solution(a) = 5.

[13, 5604, 31, 2, 13, 4560, 546, 654, 456]
.map((x) => String(x));

i=0
[13] against [5604, 31, 2, 13, 4560, 546, 654, 456]
shift += 2 (31, 13)
i=1
[5604] against [31, 2, 13, 4560, 546, 654, 456]
5604 x 6045 , 0456, 4560

a = 5604
b = 4560

b+b = 45604560.includes(a)

0404->0044
0044->0044





shift += 1 (4560)
i=2
[31] against [2, 13, 4560, 546, 654, 456]
shift += 1 (13)
*/
const solution4 = (a) => {

}
