fs = require('fs');

//const input = [1721, 979, 366, 299, 675, 1456];
//const answer = 514579;

const input = fs.readFileSync('./day-1-input.txt').toString().split('\r\n');

//console.log('START');
//console.log(input);

//Look for two numbers that add up to a sum
function findNumbersWithSum(sum) {
	for(let i = 0; i < input.length; i++) {
		let num1 = parseInt(input[i]);
		//console.log(num1);
		for(let j = 0; j < input.length; j++) {
			let num2 = parseInt(input[j]);
			//console.log(num2);
			for(let k = 0; k < input.length; k++) {
				let num3 = parseInt(input[k]);
				if(num1+num2+num3 === sum) {
					return [num1, num2, num3];
				};
			};
		};
	};
	/*	
	let numbers = [];
	input.forEach((num1) => {
		input.forEach((num2) => {
			console.log('NUM1: ' + num1);
			console.log('NUM2: ' + num2);
			console.log('SUM: ' + (num1+num2));
			if(num1 + num2 === 2020) {
				numbers = [num1, num2];
				console.log('CONDITION FOUND');
			};
		});
	};
	return numbers
	*/
};

//Run the solution code
const numbersWithSum = findNumbersWithSum(2020);
console.log(numbersWithSum);
console.log(numbersWithSum[0] * numbersWithSum[1] * numbersWithSum[2]);

//Test the solution
//console.log((numbersWithSum[0] * numbersWithSum[1]) === answer);