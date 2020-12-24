const assert = require('assert');
const distancePrevious = require('../day-15/day-15-1.js').distancePrevious;
const memoryGame = require('../day-15/day-15-1.js').memoryGame;

describe('distancePrevious', () => {
	it('calculates when the last element of a given array was prevoiously spoken; returns the number of turns', () => {
		//setup
		const input = [0, 3, 6, 0];
		const expected = 3;
		//exercise
		const result = distancePrevious(input);
		//verify
		assert.strictEqual(expected, result);
	});
	it('calculates when the last element of a given array was prevoiously spoken; returns 0 if not spoken before', () => {
		//setup
		const input = [0, 3, 6, 1];
		const expected = 0;
		//exercise
		const result = distancePrevious(input);
		//verify
		assert.strictEqual(expected, result);
	});
});

describe('memoryGame', () => {
	it('adds a given number to a given array and calls distancePrevious on the array; recursively calls itself with the output of distancePrevious and the new array; stops after a specified length of input is reached', () => {
		//setup
		const input = [0, 3, 4];
		const number = 0;
		const limit = 6;
		const expected = [0, 3, 4, 0, 3, 3];
		//exercise
		const result = memoryGame(number, input, limit);
		//verify
		assert.deepEqual(expected, result);
	});
});
