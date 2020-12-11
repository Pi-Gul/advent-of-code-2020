const assert = require('assert');
const runProgram = require('../day-8/day-8-1.js').runProgram;

describe('runProgram', () => {
	it('runs a program provided as a list of instructions (operation, argument)', () => {
		//setup
		const input = [['nop', '0'], ['acc', 1], ['acc', 2], ['jmp', -3]];
		const expected = 3;
		//exercise
		const result = runProgram(input);
		//verify
		assert.strictEqual(expected, result);
	});
});
