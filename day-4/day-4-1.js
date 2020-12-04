const fs = require('fs');

const inputFile = fs.readFileSync('./day-4-input.txt').toString().split('\r\n');


const passportArr = []
let newPassport = {};
inputFile.forEach((line) => {
	strArr = line.split(' ');
	strArr.forEach((str) => {
		if(str === '') {
			passportArr.push(newPassport);
			newPassport = {};
		};
		let key = str.split(':')[0];
		let value = str.split(':')[1];
		newPassport[key] = value;
	});
});


//console.log(inputFile);
console.log(passportArr);