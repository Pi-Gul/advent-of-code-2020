const assert = require('assert');
const countTrees = require('../day-3-1.js');
const fs = require('fs');

describe('countTrees', () => {
	it('counts trees given a map and a slope', () => {
		//setup
		const map = fs.readFileSync('./day-3-input-small.txt').toString().split('\r\n');
		const slope = [1,3];
		const expected = 7;
		//execute
		const given = countTrees(map, slope);
		//verify
		assert.ok(given === expected);
	});
});