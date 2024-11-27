const solution = (arr) => {
    // let newArr = [];
    // for (let i = 0; i < arr.length - 2; i++) {
    //     if (arr[i] + arr[i + 1] > arr[i + 2] && arr[i] + arr[i + 2] > arr[i + 1] && arr[i + 1] + arr[i + 2] > arr[i]) {
    //         newArr.push(1);
    //     } else {
    //         newArr.push(0);
    //     };
    // };
    // return newArr;
    return arr.slice(0, arr.length - 2).reduce((newArr, _, i) => {
        const a = arr[i];
        const b = arr[i + 1];
        const c = arr[i + 2];
        newArr.push((a + b > c && a + c > b && b + c > a) ? 1 : 0);
        return newArr; 
    }, []); 
};
let arr = [2, 10, 2, 10, 2];
solution(arr) // [0, 1, 0]
// output[0] = 0 because 2 + 2 ≤ 10, so we can't form a triangle with side lengths 2, 2, and 10.
// output[1] = 1 because we can form a triangle with side lengths 2, 10, and 10.
// output[2] = 0 because 2 + 2 ≤ 10, so we can't form a triangle with side lengths 2, 2, and 10.

// Braily's Code: 
const solution = (arr) => {
    // Create an empty array
    const newArr = [];
    
    // Iterate through the length of the array minus 2 (avoid exceeding).
    for (let i = 0; i < arr.length - 2; i++) {
        // Slice the array to start with i and grab the first three elements.
        const [a, b, c] = arr.slice(i);
        
        // Store the triangle expression
        const canFormTriangle = (a + b) > c && (a + c) > b && (b + c) > a;
        
        // Push 1 if canFormTriangle is truthy, otherwise push 0.
        newArr.push(canFormTriangle ? 1 : 0);
    }
    
    // Return the final array.
    return newArr;
}

