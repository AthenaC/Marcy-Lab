/* 
PEDAC
PROBLEM: 
- INPUT: an array of numbers
- OUTPUT: a number that appears only once in the array

EDGE CASES:
- Example 1:
    - Input: nums = [2,2,1]
    - Output: 1

- Example 2:
    - Input: nums = [4,1,2,1,2]
    - Output: 4

- Example 3:
    - Input: nums = [1]
    - Output: 1

DATA TYPES:
- nest for loops
or 
- XOR Operator (only works with paired or even amount of numbers)
or
- indexOf
- lastIndexOf
- includes

ALGORITHM:
- Iterate through the array
- Find the element that only appeared once in the array

CODE:
*/
/* 
XOR Operator Steps:
Key Properties of XOR (^)
- Self-canceling: 
    a ⊕ a = 0 (any number XORed with itself is 0).
- Identity: 
    a ⊕ 0 = a (any number XORed with 0 remains unchanged).
- Order does not matter: 
    - XOR is commutative (a ⊕ b = b ⊕ a) and associative ( (a ⊕ b) ⊕ c = a ⊕ (b ⊕ c) ).

Steps:
1. Initialize the accumulator: acc = 0
2. Process each number in the array using XOR. For each number, acc = acc ^ num:
Step	|   num	  |  acc (before XOR)	|   acc (after XOR)	 |   Explanation
1	        4	            0	                4	                0 ⊕ 4 = 4
2	        1	            4	                5	                4 ⊕ 1 = 5
3	        2	            5	                7	                5 ⊕ 2 = 7
4	        1	            7	                6	                7 ⊕ 1 = 6
5	        2	            6	                4	                6 ⊕ 2 = 4

Explanation:
- Numbers that appear twice cancel each other out due to the property 𝑎 ⊕ 𝑎 = 0.
    - Example: 1 ⊕ 1 = 0, 2 ⊕ 2 = 0.
- The number that appears once remains unaffected because XOR with 0 leaves it unchanged.
    - Example: 0 ⊕ 4 = 4.
- Thus, at the end of the process, only the unique number remains.

5-years-old Explanation:
You have a magical pair of gloves that can "cancel" two matching toys when you touch them together. 
If you touch a toy to itself, poof, it disappears!
Now, you have a pile of toys: [4, 1, 2, 1, 2].

You start picking them up one by one:
1. You grab the first toy: 4
    - There’s nothing to cancel it with yet, so you keep it in your hand.
    - In hand: [4]
2. You grab the second toy: 1
    - No match for 1, so you keep it too.
    - In hand: [4, 1]
3. You grab the third toy: 2
    - No match for 2, so you keep it as well.
    - In hand: [4, 1, 2]
4. You grab the fourth toy: 1
    - Wait! You already have a 1 in your hand. The magical gloves cancel them out (poof).
    - In hand: [4, 2]
5. You grab the fifth toy: 2
    - Oh! There’s already a 2 in your hand. They cancel each other out (poof).
    - In hand: [4]
At the end, the only toy left in your hand is 4. Since there wasn’t another 4 to cancel it, it’s the special toy!
*/
const solution = (nums) => {
    return nums.reduce((acc, num) => acc ^ num, 0);
};
