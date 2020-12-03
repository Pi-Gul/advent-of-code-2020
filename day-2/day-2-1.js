const fs = require('fs');

const input = fs.readFileSync('./day-2-input.txt').toString().split('\r\n');
console.log(input);

//const input = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'];

//split a line of the input file into the policy and the password
const getPolicyPassword = (str) => {
	const policy = str.split(': ')[0];
	const pass = str.split(': ')[1];
	return [policy, pass];
};

//extract the letter and the allowed number of repetitions (min, max) from a policy
const parsePolicy = (str) => {
	const letter = str.split(' ')[1];
	const range = str.split(' ')[0];
	const min = parseInt(range.split('-')[0]);
	const max = parseInt(range.split('-')[1]);
	return [letter, min, max];
};

//count the instances of a given letter in a string
const countLetter = (letter, str) => {
	let counter = 0;
	str.split('').forEach((chr) => {
		if(chr === letter) {
			counter += 1;
		};
	});
	return counter;
};

const checkPassword = (inputArr) => {
 return inputArr.filter((line) => {
	 [policy, pass] = getPolicyPassword(line);
	 [letter, min, max] = parsePolicy(policy);
	 const letterCounter = countLetter(letter, pass);
	 //console.log(letterCounter + ' : ' + min + ' : ' + max);
	 return (letterCounter >= min && letterCounter <= max);
 }); 
};

//console.log(getPolicyPassword('1-3 a: abcde'));
//console.log(parsePolicy('1-3 a: abcde'));
//console.log(countLetter('a', 'abcadea'));
console.log(checkPassword(input).length);

module.exports = checkPassword;