const assert = require('assert');
const checkValidity = require('../day-16/day-16-1.js').checkValidity;
 
describe('checkValidity', () => {
	it('checks whether a given number is in any of the provided ranges', () => {
		//setup
		const inputRanges = {val1: [[1, 3], [5, 7]], val2: [[6, 11], [33, 44]]};
		const inputNumber = 3;
		const expected = true;
		//exercise
		const result = checkValidity(inputNumber, inputRanges);
		//verify
		assert.strictEqual(expected, result);
	});
});
