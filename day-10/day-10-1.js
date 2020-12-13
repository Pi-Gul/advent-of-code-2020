const fs = require('fs');
const input = fs.readFileSync('day-10/day-10-input.txt').toString().split('\r\n').map((str) => {return parseInt(str)});
console.log(input.sort((a,b) => {return a - b}));

const checkNextAdapter = (joltInput, adapter) => {
	if(adapter > joltInput && adapter <= joltInput + 3) {
		return adapter - joltInput;
	} else {
		return false;
	};
};

const getJoltDifferences = (input) => {
	input = input.sort((a,b) => {return a - b});
	let joltInput = 0;
	let counterOne = 0;
	let counterThree = 1;
	for(let i = 0; i < input.length; i++) {
		let difference = checkNextAdapter(joltInput, input[i]);
		if(difference === 1) {
			counterOne += 1;
		} else if(difference === 3) {
			counterThree += 1;
		};
		joltInput = input[i];
	};
	return [counterOne, counterThree];
};

console.log(getJoltDifferences(input)[0] * getJoltDifferences(input)[1]);
console.log(getJoltDifferences(input));

module.exports = {checkNextAdapter};