#!/bin/bash

day="day-16"

contents="
const assert = require('assert');\n
const myFunc = require('../${day}/${day}-1.js').myFunc;\n
\n
describe('myFunc', () => {\n
	it('does something', () => {\n
		//setup\n
			const input = '';\n
			const expected = '';\n
		//exercise\n
			const result = myFunc(input);\n
		//verify\n
			assert.strictEqual(expected, result);\n
	});\n
});"

echo -e ${contents} > test/test-${day}-1.js
