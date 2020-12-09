const assert = require('assert');
const countLetters = require('../day-6/day-6-1.js');

describe('countLetters', () => {
	it('Counts the occurences of each letter in a string', () => {
		//setup
		const str = 'test';
		const expected = {t: 2, e: 1, s: 1};
		//exercise
		const result = countLetters(str);
		//verify
		assert.deepEqual(result, expected);
	});
});