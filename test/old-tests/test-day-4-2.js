const assert = require('assert');
const validateValue = require('../day-4/day-4-2.js');

describe('validateValue', () => {
	it('Validates Birth Year', () => {
		assert.ok(validateValue('byr', '2002'));
	});
	it('Validates Issue Year', () => {
		assert.ok(validateValue('iyr', '2010'));
	});
	it('Validates Expiration Year', () => {
		assert.ok(validateValue('eyr', '2020'));
	});
	it('Validates Height (cm)', () => {
		assert.ok(validateValue('hgt', '150cm'));
	});
	it('Validates Height (in)', () => {
		assert.ok(validateValue('hgt', '59in'));
	});
	it('Validates Hair Color', () => {
		assert.ok(validateValue('hcl', '#123abc'));
	});
	it('Validates Eye Color', () => {
		assert.ok(validateValue('ecl', 'grn'));
	});
	it('Validates Passport ID', () => {
		assert.ok(validateValue('pid', '000000001'));
	});
});