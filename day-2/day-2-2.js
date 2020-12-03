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

//extract the letter and the expected positions (pos1, pos2) from a policy
const parsePolicy = (str) => {
	const letter = str.split(' ')[1];
	const range = str.split(' ')[0];
	const pos1 = parseInt(range.split('-')[0]);
	const pos2 = parseInt(range.split('-')[1]);
	return [letter, pos1, pos2];
};

const checkPassword = (inputArr) => {
 return inputArr.filter((line) => {
	 [policy, pass] = getPolicyPassword(line);
	 [letter, pos1, pos2] = parsePolicy(policy);
	 //console.log(letterCounter + ' : ' + pos1 + ' : ' + pos2);
	 return (!(pass[pos1-1] === letter) && pass[pos2-1] === letter) || (pass[pos1-1] === letter && !(pass[pos2-1] === letter));
 }); 
};

//console.log(getPolicyPassword('1-3 a: abcde'));
//console.log(parsePolicy('1-3 a: abcde'));
//console.log(countLetter('a', 'abcadea'));
console.log(checkPassword(input).length);

module.exports = checkPassword;