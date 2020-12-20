const assert = require('assert');
const getEarliestTime = require('../day-13/day-13-1.js').getEarliestTime;

describe('getEarliestTime', () => {
	it('finds a departure time of a given bus closest to a given timestamp', () => {
		//setup
		const busID = 59;
		const timestamp = 939;
		expected = 944;
		//exercise
		const result = getEarliestTime(busID, timestamp);
		//verify
		assert.strictEqual(expected, result);
	});
});