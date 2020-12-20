const fs = require('fs');

const input = fs.readFileSync('day-14/day-14-input.txt').toString().split('\r\n');
let blockArr = [];
let newBlock = [];
let mask = '';
let rePattern = /\d+/;
input.forEach((line) => {
	//console.log(line);
	[left, right] = line.split(' = ');
	//console.log(left);
	//console.log(right);
	if(left === 'mask') {
		blockArr.push(newBlock);
		mask = left;
		newBlock = [[mask, right]];
	} else {
		newBlock.push([parseInt(left.match(/\d+/)[0]).toString(2).padStart(36, '0'), right]);
	};
});
blockArr = blockArr.slice(1);
//console.log(blockArr);

const applyMaskFloat = (startInd, newStr, base, addresses) => {
	for(let i = startInd; i < base.length; i++) {
		if(base[i] === 'X') {
			applyMaskFloat(i + 1, newStr.slice(0,i) + '1', base, addresses);
			newStr += '0';
		} else {
			newStr += base[i];
		};
	};
	addresses.push(newStr);
	return addresses;
};

const getAddresses = (number, mask) => {
	let newNumber = '';
	for(let i = 0; i < mask.length; i++) {
		if(mask[i] === '1') {
			newNumber += '1';
		} else if(mask[i] === 'X') {
			newNumber += 'X';
		} else {
			newNumber += number[i];
		};
	};
	return applyMaskFloat(0, '', newNumber, []);
	//return newNumber;
};

const getSolution = (input) => {
	let mem = {};
	for(let i = 0; i < input.length; i++) {
		let currentMask = input[i][0][1];
		//console.log('Mask: ' + currentMask);
		for(let j = 1; j < input[i].length; j++) {
			let currentNum = input[i][j][0];
			let currentVal = input[i][j][1];
			let currentAddresses = getAddresses(currentNum, currentMask);
			//console.log(currentAddresses);
			currentAddresses.forEach((address) => {mem[address] = currentVal});
		};
	};
	return mem;
};

let mem = getSolution(blockArr);
let solution = 0;
//console.log(mem);
Object.keys(mem).forEach((key) => {solution += parseInt(mem[key])});
console.log(solution);