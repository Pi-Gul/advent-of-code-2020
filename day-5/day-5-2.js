const fs = require('fs');

const input = fs.readFileSync('day-5/day-5-input.txt').toString().split('\r\n');
//console.log(input);

//Parse the boarding pass code; return the row, column and seat ID
const parseBoardingPass = (passCode) => {
	let min = 0;
	let max = 127;
	passCode.slice(0, 7).split('').forEach((chr) => {
		if(chr === 'F') {
			max -= Math.ceil((max - min) / 2);
		} else if(chr === 'B') {
			min += Math.ceil((max - min) / 2);
		};
		//console.log(`Char: ${chr}; Min: ${min}; Max: ${max}`);
	});
	let row = min;	
	min = 0;
	max = 7;
	passCode.slice(7).split('').forEach((chr) => {
		if(chr === 'L') {
			max -= Math.ceil((max - min) / 2);
		} else if(chr === 'R') {
			min += Math.ceil((max - min) / 2);
		};
		//console.log(`Char: ${chr}; Min: ${min}; Max: ${max}`);
	});
	let col = min;	
	let seatID = (row * 8) + col;	
	return seatID;
};

let solution = input.map((passCode) => {
	return parseBoardingPass(passCode);
});

solution = solution.sort((a,b) => {return (a - b) * -1});
//console.log(solution);

for (let i = 0; i < solution.length-3; i++) {
	if((solution[i] - 1) != solution[i+1]) {
		console.log([solution[i], solution[i+1], solution[i+2]]);
	};
};

module.exports = parseBoardingPass;