const fs = require('fs');

const input = fs.readFileSync('day-14/day-14-input.txt').toString().split('\r\n');
let blockArr = [];
let newBlock = [];
let mask = '';
input.forEach((line) => {
	console.log(line);
	[left, right] = line.split(' = ');
	console.log(left);
	console.log(right);
	if(left === 'mask') {
		blockArr.push(newBlock);
		mask = left;
		newBlock = [[mask, right]];
	} else {
		newBlock.push([left, parseInt(right).toString(2).padStart(36, '0')]);
	};
});
blockArr = blockArr.slice(1);
console.log(blockArr);

const applyMask = (mask, number) => {
	let newNumber = '';
	for(let i = 0; i < mask.length; i++) {
		if(mask[i] != 'X') {
			newNumber += mask[i];
		} else {
			newNumber += number[i];
		};
	};
	return newNumber;
};

const mem = {};
const rePattern = /\d+/;

blockArr.forEach((block) => {
	mask = block[0][1];
	block.slice(1).forEach((instr) => {
		//console.log(instr[1]);
		//console.log(`${instr[0]} = ${instr[1]}`);
		mem[instr[0].match(rePattern)] = applyMask(mask, instr[1]);
	});
});

//mem[1] = '000000000000001001000001110001111100';
console.log(mem);

let solution = 0;

Object.keys(mem).forEach((key) => {solution += parseInt(mem[key], 2)});

console.log(solution);

module.exports = {applyMask};