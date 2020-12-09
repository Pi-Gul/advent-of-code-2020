const fs = require('fs');

const input = fs.readFileSync('day-7/day-7-input.txt').toString().split('\r\n');
//console.log(input);

//Parse input line2.
//Return the containing bag and an array of contained bags with quantities.
const parseLine = (inputLine) => {
	const bagContaining = inputLine.split(' bags contain ')[0];
	const rePattern = /(\d) (\w+ \w+)/g;
	const reMatches = [...inputLine.matchAll(rePattern)];
	const bagsContained = reMatches.map((match) => {return [match[2], match[1]]})
	return [bagContaining, bagsContained];
};

//Transform the input into an object with {Containing: [Contained]} by calling parseLine() for every line.
const parseInput = (input) => {
	let parsedObj = {};
	input.forEach((inputLine) => {parsedObj[parseLine(inputLine)[0]] = parseLine(inputLine)[1]});
	return parsedObj;
};

//Counts how many sub-bags a given bag contains
const countBags = (bagData, bag1, counter) => {
	console.log(bag1);
	const keys = Object.keys(bagData);
	if(keys.includes(bag1)) {
		for(let i = 0; i < bagData[bag1].length; i++) {
			let subBag = bagData[bag1][i];
			for(let j = 0; j < subBag[1]; j++) {
				counter += 1;
				counter = countBags(bagData, subBag[0], counter);
			};
		};
	};
	return counter;
};

const bagObject = parseInput(input);
//console.log(bagObject);
//console.log(Object.keys(bagObject).sort());

console.log(countBags(bagObject, 'shiny gold', 0));

module.exports = {parseLine, countBags};