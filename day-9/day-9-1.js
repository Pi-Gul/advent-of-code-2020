const fs = require('fs');

const input = fs.readFileSync('day-9/day-9-input.txt').toString().split('\r\n').map((str) => {return parseInt(str)});
//console.log(input);

//Check whether a number at index i in input is the sum of two of the n numbers before; 
//Return the first pair of such numbers, else return the number.
const checkNumberValidity = (input, numberIndex, n) => {
	const number = input[numberIndex];
	const range = input.slice(numberIndex-n, numberIndex);
	for(let i = 0; i < range.length-1; i++) {
		let subRange = range.slice(i+1);
		for(let j = 0; j < subRange.length; j++) {
			if(range[i] + subRange[j] === number) {
				return [range[i], subRange[j]];
			};
		};
	};
	return number;
};

for(let i = 25; i < input.length; i++) {
	let solution = checkNumberValidity(input, i, 25);
	if(typeof solution === 'number') {
		console.log(solution);
	};
};

module.exports = {checkNumberValidity};