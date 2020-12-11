const assert = require('assert');
const checkNumberValidity = require('../day-9/day-9-1.js').checkNumberValidity;

describe('checkNumberValidity', () => {
	it('verifies that a number at index i in input is the sum of two of the n numbers before; returns the first pair of such numbers', () => {
		//setup
		const numberIndex = 12;
		const n = 12;
		const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 20];
		const expected = [8, 12];
		//exercise
		const result = checkNumberValidity(input, numberIndex, n);
		//verify
		assert.deepEqual(expected, result);
	});
	it('verifies that a number at index i in input is not the sum of two of the n numbers before; returns the number', () => {
		//setup
		const numberIndex = 12;
		const n = 12;
		const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 40];
		const expected = 40;
		//exercise
		const result = checkNumberValidity(input, numberIndex, n);
		//verify
		assert.deepEqual(expected, result);
	});
});
