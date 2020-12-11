const fs = require('fs');

let input = fs.readFileSync('day-8/day-8-input.txt').toString().split('\r\n');
//console.log(input);
input = input.map((line) => {return [line.split(' ')[0], parseInt(line.split(' ')[1])]});
//console.log(input);

const runProgram = (input) => {
	let accumulator = 0;
	let executedInstructions = [];
	for(let i = 0; i < input.length; i++) {
		if(executedInstructions.includes(i)) {
			return [false, accumulator];
		};
		executedInstructions.push(i);
		let operation = input[i][0];
		let argument = input[i][1];
		if(operation === 'acc') {
			accumulator += argument; 
		} else if(operation === 'jmp') {
			i += argument - 1;
		};
	};
	return [true, accumulator];
};

const fixProgram = (input) => {
	let foundFix = false;
	while(!foundFix) {
		for(let i = 0; i < input.length; i++) {
			let operation = input[i][0];
			let argument = input[i][1];
			if(operation === 'jmp') {
				input[i][0] = 'nop';
				let output = runProgram(input);
				if(output[0]) {
					return output[1];
				} else {
					input[i][0] = 'jmp';
				};
			} else if(operation === 'nop') {
				input[i][0] = 'jmp';
				let output = runProgram(input);
				if(output[0]) {
					return output[1];
				} else {
					input[i][0] = 'nop';
				};
			};
		};
	};
};

//console.log(runProgram(input));
console.log(fixProgram(input));

module.exports = {runProgram};