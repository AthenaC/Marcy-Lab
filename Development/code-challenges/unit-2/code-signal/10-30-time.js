// My Code:
const solution = (time) => {
    const arr = time.split(":");
    if (arr[0] > 23 || arr[1] > 59) {
        return false;
    } else {
        return true;
    };
};
console.log(solution("13:30"));

// Fernando's Code:
const solution = (time) => {
    if (time.split(":")[0] > 23 || time.split(":")[1] > 59) {
        return false
       }
       return true
};

// Isaac's Code:
function solution(time) {
    const split = time.split(':');
    if (split[0] >= 24 || split[1] > 59) {
        return false
    } else {
        return true
    }
};

// Jordi's Code:
const solution = (time) => {
    let arr = time.split(':') 
    return arr[0] <= 23 && arr[1] <= 59
};

// Catalina's Code:
/**
 * Checks if the given string is a correct time representation of the 24-hour clock
 * @param `time` {String} representation of time in 'HH:MM' format
 * @returns {boolean} whether `time` is a correct representation of the 24-hour clock
 */
function solution(time) {
    // guard clause for missing argument and for String inputs not of same length as "HH:MM"
    if (time == undefined || time.length !== 5) return false;
    
    const timeArr = time.split(":"); // converts `time` into array, separated by ":" (["HH", "MM"])
    // checks if parts of `timeArr` fit structure of correct time representation
    // correct range of hours starts at zero and ends at 23, inclusive
    if (parseInt(timeArr[0]) <= 23 && parseInt(timeArr[0]) >= 0) {
        // correct range of minutes starts at 0 and ends at 59, inclusive
        if (parseInt(timeArr[1]) >= 0 && parseInt(timeArr[1]) <= 59) return true;
    }
    return false;
}