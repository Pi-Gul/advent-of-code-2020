const assert = require('assert');
const checkNextAdapter = require('../day-10/day-10-1.js').checkNextAdapter;

describe('checkNextAdapter', () => {
	it('checks whether an adapter is within a +3 range of a given jolt value; returns the joltage difference', () => {
		//setup
		const adapter = 2;
		const joltInput = 0;
		const expected = 2;
		//exercise
		const result = checkNextAdapter(joltInput, adapter);
		//verify
		assert.deepEqual(expected, result);
	});
});
