// helper functions
const madlib = (profession, name, activity, isHappyEnding) => {
    let message = '';
    message += `There was a ${profession} named ${name}.\n`;
    message += `They loved to ${activity}.\n`;
    if (isHappyEnding) {
        message += `They decided to pursue their dream to ${activity} professional.`;
    } else {
        message += `They went to the olympics to ${activity}, lost, and never did it again.`
    };
    return message;
};

module.exports = madlib;