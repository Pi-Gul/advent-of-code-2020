const assert = require('assert');
const applyMask = require('../day-14/day-14-1.js').applyMask;

describe('applyMask', () => {
	it('applies a given mask to a given binary number', () => {
		//setup
		const mask = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X';
		const number = '000000000000000000000000000001100101';
		const expected = '000000000000000000000000000001100101';
		//exercise
		const result = applyMask(mask, number);
		//verify
		assert.strictEqual(expected, result);
	});
});