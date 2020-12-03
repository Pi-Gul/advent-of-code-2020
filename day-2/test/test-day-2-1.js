const assert = require('assert');
const checkPassword = require('../day-2-1.js');

describe('checkPassword', () => {
	it('checks whether the password is valid given the policy', () => {
		const passArr = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'];
		assert.deepEqual(checkPassword(passArr), [passArr[0], passArr[2]]);
	});
});