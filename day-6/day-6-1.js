const fs = require('fs');

const inputTemp = fs.readFileSync('day-6/day-6-input.txt').toString().split('\r\n\r\n');
const input = inputTemp.map((line) => {
	return line.split('\r\n').join('');
});

//console.log(input);

const countLetters = (str) => {
	let letterObj = {};
	str.split('').forEach((chr) => {
		if(letterObj[chr] === undefined) {
			letterObj[chr] = 1;
		} else {
			letterObj[chr] += 1;
		};
	});
	console.log(letterObj);
	return letterObj;
};

module.exports = countLetters;

const solution1 = input.map((line) => {
	let lineObj = countLetters(line);
	return Object.keys(lineObj).map((key) => {return lineObj[key]}).reduce((acc, curr) => {return acc + curr});
	}).reduce((acc, curr) => {return acc + curr});

const solution2 = input.map((line) => {
	let lineObj = countLetters(line);
	return Object.keys(lineObj).length;
	}).reduce((acc, curr) => {return acc + curr});

console.log(solution2);