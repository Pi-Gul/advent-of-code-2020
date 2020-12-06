const assert = require('assert');
const parseBoardingPass = require('../day-5/day-5-1.js');

describe('parseBoardingPass', () => {
	it('parses a boarding pass code; returns row, column and seat ID', () => {
		//setup
		const passCode = 'BBFFBBFRLL';
		const expectedRow = 102;
		const expectedCol = 4;
		const expectedSeatID = 820;
		//exercise
		const result = parseBoardingPass(passCode);
		//verify
		assert.deepEqual(result, expectedSeatID);
	});
});