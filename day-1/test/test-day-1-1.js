const assert = require('assert');
const findNumbersWithSum = require('../day-1-1.js');

describe('findNumbersWithSum', () => {
	it('finds two numbers that add up to the given sum', () => {
		const numbers = [1721, 979, 366, 299, 675, 1456];
		
		assert.ok(findNumbersWithSum(2020)[0] + findNumbersWithSum(2020)[1] === 2020);
	});
});