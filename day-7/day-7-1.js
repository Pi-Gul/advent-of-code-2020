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

//Check whether bag1 contains bag2 based on a bag database
const containsBag = (bagData, bag1, bag2, found) => {
	const keys = Object.keys(bagData);
	//console.log(keys);
	if(bag1 === bag2) {
		return true;
	};
	if(keys.includes(bag1)) {
		for(let i = 0; i < bagData[bag1].length; i++) {
			found = containsBag(bagData, bagData[bag1][i][0], bag2, found);
		};
	};
	return found;	
};


//console.log([...parseLine('plaid beige bags contain 3 drab magenta bags.')][0]);
//console.log(parseLine('plaid beige bags contain 3 drab magenta bags, 3 light red bags, 8 dark brown bags.'));
//console.log(parseInput(input));


const bagObject = parseInput(input);
//console.log(bagObject);
//console.log(Object.keys(bagObject).sort());
const targetBag = 'shiny gold';

console.log(Object.keys(bagObject).filter((bag) => {return containsBag(bagObject, bag, targetBag, false)}).length - 1);

module.exports = {parseLine, containsBag};