const fs = require('fs');
let input = fs.readFileSync('day-15/day-15-input.txt').toString().split(',').map((chr) => {return parseInt(chr)});
console.log(input);
//console.log(input, lastNum);

//Calculate when the last element of a given array was prevoiously spoken.
//Return the distance in turns.
//Return 0 if not spoken before.
const distancePrevious = (input) => {
	const lastIndex = input.length - 1;
	const lastNum = input[lastIndex];
	for(let i = input.length - 2; i >= 0; i--){
		let currNum = input[i];
		if(lastNum === currNum) {
			return lastIndex - i;
		};
	};
	return 0;
};

//Add a given number to a given array and calls distancePrevious on the array. 
//Recursively call itself with the output of distancePrevious and the new array. 
//Stop after a specified length of input is reached.
const memoryGame = (number, input, limit) => {
	//console.log(input.length);
	//console.log(input);
	if(input.length < limit) {
		input.push(number);
		let newNumber = distancePrevious(input);
		memoryGame(newNumber, input, limit);
	};
	return input;
};

let counter = 0;
let solution = [];
while(counter < 30000) {
	//console.log('TEST');
	counter += 1;
	//console.log(counter);
	let lastNum = input.pop();
	input = memoryGame(lastNum, input, 1100);
	solution = solution.concat(input.slice(0, 1000));
	input = input.slice(999, 1100);
};
console.log(solution.length);
console.log(input.pop());

module.exports = {distancePrevious, memoryGame};