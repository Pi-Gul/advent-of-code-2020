const fs = require('fs');

const inputTemp = fs.readFileSync('day-6/day-6-input.txt').toString().split('\r\n\r\n');
const input = inputTemp.map((line) => {
	return line.split('\r\n');
});

//console.log(input);

const countAnswersInGroup = (group) => {
	let answerObj = {};
	group.forEach((person) => {
		person.split('').forEach((answer) => {
			if(answerObj[answer] === undefined) {
				answerObj[answer] = 1;
			} else {
				answerObj[answer] += 1;
			};
		});	
	});
	//console.log(answerObj);
	return answerObj;
};


const solution = input.map((group) => {
	let counter = 0;
	let groupObj = countAnswersInGroup(group);
	Object.keys(groupObj).forEach((key) => {
		if(groupObj[key] === group.length) {
			counter += 1;
		};
	});
	//console.log(groupObj);
	//console.log(counter);
	return counter;
	}).reduce((acc, curr) => {return acc + curr});

console.log(solution);

module.exports = countAnswersInGroup;