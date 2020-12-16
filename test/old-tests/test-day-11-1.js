const assert = require('assert');
const checkSeat = require('../day-11/day-11-1.js').checkSeat;
const updateSeats = require('../day-11/day-11-1.js').updateSeats

describe('checkSeat', () => {
	it('checks whether a given seat becomes occupied', () => {
		//setup
		const input = [
									['.','.','.'],
									['.','L','.'],
									['.','.','.']
									];
		const seat = [1,1];
		const expected = '#';
		//exercise
		const result = checkSeat(input, seat);
		//verify
		assert.strictEqual(expected, result);
	});
	it('checks whether a given seat becomes empty', () => {
		//setup
		const input = [
									['.','.','#'],
									['#','#','#'],
									['.','#','.']
									];
		const seat = [1,1];
		const expected = 'L';
		//exercise
		const result = checkSeat(input, seat);
		//verify
		assert.strictEqual(expected, result);
	});
	it('checks whether a given seat remains unchanged', () => {
		//setup
		const input = [
									['.','.','#'],
									['#','#','.'],
									['.','.','.']
									];
		const seat = [1,1];
		const expected = '#';
		//exercise
		const result = checkSeat(input, seat);
		//verify
		assert.strictEqual(expected, result);
	});
});
describe('updateSeats',() => {
	it('looks at every seat in a given array and updates its status', () => {
		//setup
		const input = [
									['#','#','L'],
									['#','.','.'],
									['#','#','.']
									];
		const expected = [
									['#','#','L'],
									['L','.','.'],
									['#','#','.']
		];
		//exercise
		const result = updateSeats(input);
		//verify
		assert.deepEqual(expected, result);
	})
})