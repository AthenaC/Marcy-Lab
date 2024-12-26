// Question 1:
const solution = (recording) => {
    let count = 0;
    for (let i = 0; i < recording.length - 1; i++) {
      if (recording[i].toLowerCase() == recording[i+1].toLowerCase()) {
        continue
      } else {
        count++;
      }
    }
    return count;
  }
  
  const case1 = ['W', 'w', 'a', 'A', 'a', 'b', 'B'];
  console.log(solution(case1));

// Question 2:
const solution = (numbers) => {
    const res1 = [numbers[0]]
    const res2 = [numbers[1]]
    
    for (let i = 2; i < numbers.length; i++) {
      // [5] [7]
      const new1 = res1.filter((x) => x > numbers[i]) // []
      const new2 = res2.filter((x) => x > numbers[i]) // [7]
      
      if (new1.length < new2.length) {
        res2.push(numbers[i])
      } else if (new1.length > new2.length) {
        res1.push(numbers[i])
      } else {
        if (res1.length < res2.length) {
          res1.push(numbers[i])
        } else if (res1.length > res2.length) {
          res2.push(numbers[i])
        } else {
          res1.push(numbers[i])
        }
      }
    }
    
    return res1.concat(res2);
  }
  
  
  const case1 = [5, 7, 6, 9, 2];
  console.log(solution(case1));

// Question 3:
const solution = (length, breakpoints, actions) => {
    let curr = 1;
    while (actions.length > 0 && curr < length) {
      console.log(curr, actions, breakpoints);
      const todo = actions[0];
      actions = actions.splice(1);
  
      if (todo == 'next') {
        curr += 1;
      } else { // 'continue'
        if (breakpoints.length == 0) {
          curr = length;
        }
        for (const [index,val] of breakpoints.entries()) {
          if (curr < val) {
            curr = val;
            breakpoints = breakpoints.splice(index);
            break;
          }
        }
      }
    }
    return curr;
  }
  
  const length = 55;
  const breakpoints = [2, 5, 21, 44];
  const actions = ["next", "next", "continue", "next", "next"];
  
  console.log(solution(l, breakpoints, actions));

// Question 4:
const solution = (a) => {
    let shift = 0;
    let b = a.map(x => String(x))
    for (let i = 0; i < b.length; i++) {
      for (let j = i + 1; j < b.length; j++) {
        const astr = b[i]
        const bstr = b[j]
        const bsqd = b + b
        if (astr.length === bstr.length) {
          if (bsqd.includes(astr)) {
            shift++
          }
        }
      }
    }
    return shift
  }
  
  
  const a = [13, 5604, 31, 2, 13, 4560, 546, 654, 456];
  
  console.log(solution(a))