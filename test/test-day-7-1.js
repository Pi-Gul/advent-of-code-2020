const assert = require('assert');
const parseLine = require('../day-7/day-7-1.js').parseLine;
const containsBag = require('../day-7/day-7-1.js').containsBag;

describe('parseLine', () => {
	it('parses input line2; returns the containing bag, an array of contained bags with quantities', () => {
		//setup
		const inputLine = 'dim silver bags contain 2 shiny chartreuse bags, 4 dull magenta bags.';
		const expected = ['dim silver', [['shiny chartreuse', 2], ['dull magenta', 4]]];
		//exercise
		const result = parseLine(inputLine);
		//verify
		assert.deepEqual(result, expected);
	});
	it('parses input line4; returns the containing bag, an array of contained bags with quantities', () => {
		//setup
		const inputLine = 'shiny cyan bags contain 4 plaid green bags, 4 dim coral bags, 4 dull indigo bags.';
		const expected = ['shiny cyan', [['plaid green', 4], ['dim coral', 4], ['dull indigo', 4]]];
		//exercise
		const result = parseLine(inputLine);
		//verify
		assert.deepEqual(result, expected);
	});
});
describe('containsBag', () => {
	it('checks whether bag1 contains bag2 based on the input without multiple contained', () => {
		//setup
		const input = {'dark red': [['light blue', 1]], 'light blue': [['light green', 1]]};
		const bag1 = 'dark red';
		const bag2 = 'light green';
		//exercise
		const result = containsBag(input, bag1, bag2, false);
		//verify
		assert.ok(result);
	});
	it('checks whether bag1 contains bag2 based on the input with multiple contained', () => {
		//setup
		const input = {'dark red': [['light blue', 1]], 'light blue': [['dark grey', 2], ['light green', 1]]};
		const bag1 = 'dark red';
		const bag2 = 'light green';
		//exercise
		const result = containsBag(input, bag1, bag2, false);
		//verify
		assert.ok(result);
	});
});