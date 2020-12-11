const fs = require('fs');

const input = fs.readFileSync('day-9/day-9-input.txt').toString().split('\r\n').map((str) => {return parseInt(str)});
//console.log(input);

//Find a contiguous set of at least two numbers in input which sum to a given number.
const findContiguousSet = (input, number) => {
	let index = 0;
	for(let i = index; i < input.length-1; i++) {
		//console.log('Current number: ' + input[i]);
		let acc = input[i];
		let numArr = [input[i]];
		for(let j = i+1; j < input.length; j++) {
			acc += input[j];
			numArr.push(input[j]);
			//console.log('Current accumulator: ' + acc);
			//console.log(numArr);
			if(acc === number) {
				return numArr;
			};
		};
	};
};

const solution = findContiguousSet(input, 552655238).sort();
console.log(solution[solution.length-1]);
console.log(solution[0]+solution[solution.length-1]);

module.exports = {findContiguousSet};