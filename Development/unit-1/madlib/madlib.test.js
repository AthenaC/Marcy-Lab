/* 
You should have: 
- madlib.js file with the madlib function exported
- a madlib.test.js or madlib.spec.js file

1. import a function
2. execute that function with various inputs
3. compare the output with expected output
*/

const madlib = require('./madlib');

describe('madlib test', () => {
    it('returns a multiline story', () => {
        let expected = `There was a Basket Weaver named Gilbert.\n`;
        expected += `They loved to breakdance.\n`;
        expected += `They went to the olympics to breakdance, lost, and never did it again.`;
        
        expect(madlib('Basket Weaver', 'Gilbert', 'breakdance', false)).toBe(expected);

        // expect(functionCall()).toBe(expectedResult)
    })
})