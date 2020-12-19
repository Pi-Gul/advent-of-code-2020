const assert = require('assert');
const moveShip = require('../day-12/day-12-1.js').moveShip;

describe('moveShip', () => {
	it('changes the position of the ship according to a given instruction', () => {
		//setup
		const ship = {position: [0, 0], orientation: 'W'};
		const instr = 'F10';
		const expected = {position: [-10, 0], orientation: 'W'};
		//exercise
		const result = moveShip(ship, instr);
		//verify
		assert.deepEqual(expected, result);
	});
	it('changes the orientation of the ship according to a given instruction', () => {
		//setup
		const ship = {position: [0, 0], orientation: 'S'};
		const instr = 'L90';
		const expected = {position: [0, 0], orientation: 'E'};
		//exercise
		const result = moveShip(ship, instr);
		//verify
		assert.deepEqual(expected, result);
	})
});