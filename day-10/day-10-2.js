//Read the input sequence from file
const fs = require('fs');
let input = fs.readFileSync('day-10/day-10-input.txt').toString().split('\r\n').map((str) => {return parseInt(str)});

//Sort the sequence and add the final adapter (the device)
input = input.sort((a,b) => {return a - b});
input.push(input[input.length - 1] + 3);

//Check whether an adapter is within the 3 units range from a given joltage and return the difference
const checkNextAdapter = (joltInput, adapter) => {
	if(adapter > joltInput && adapter <= joltInput + 3) {
		return adapter - joltInput;
	} else {
		return false;
	};
};

//Get joltage differences for all sorted adapters
const getJoltDifferences = (input) => {
	let joltInput = 0;
	let counterOne = 0;
	let counterThree = 1;
	let joltDifferences = [];
	for(let i = 0; i < input.length; i++) {
		let difference = checkNextAdapter(joltInput, input[i]);
		if(difference === 1) {
			counterOne += 1;
		} else if(difference === 3) {
			counterThree += 1;
		};
		joltDifferences.push(difference);
		joltInput = input[i];
	};
	return joltDifferences;
};

//Count the number of possible adapter arrangements
const getAdapterArrangements = (joltDifferences) => {
	const joltDifferencesStr = joltDifferences.join('');
	const rePattern = /(1+)13/g;
	const oneSequences = [... joltDifferencesStr.matchAll(rePattern)].map((match) => {return match[1]});
	let arrangements = 1;
	oneSequences.forEach((sequence) => {
		if(sequence === '1') {
			arrangements *= 2;
		} else if(sequence === '11') {
			arrangements *= 4;
		} else if(sequence === '111') {
			arrangements *= 7;
		};
	});
	return arrangements;
};

//Get the solution
console.log(getAdapterArrangements(getJoltDifferences(input)));