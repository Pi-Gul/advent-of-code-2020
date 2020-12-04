const fs = require('fs');

const inputFile = fs.readFileSync('./day-4-input.txt').toString().split('\r\n');


const passportArr = []
let newPassport = {};
inputFile.forEach((line) => {
	if(line === '') {
		passportArr.push(newPassport);
		newPassport = {};
	} else {
		strArr = line.split(' ');
		strArr.forEach((str) => {
			let key = str.split(':')[0];
			let value = str.split(':')[1];
			newPassport[key] = value;
		});
	};
});
passportArr.push(newPassport);

//console.log(passportArr);

const checkPassportValidity = (passportArr) => {
	return passportArr.filter((passport) => {
		let keys = Object.keys(passport);
		//console.log(keys);
		//console.log(keys.includes('byr'));
		let conditions = keys.includes('byr') 
		&& keys.includes('iyr') 
		&& keys.includes('eyr') 
		&& keys.includes('hgt') 
		&& keys.includes('hcl') 
		&& keys.includes('ecl') 
		&& keys.includes('pid')
		&& (keys.includes('cid') || !keys.includes('cid'));
		//console.log(conditions);
		return conditions;
	});
};

//console.log(inputFile);
//console.log(passportArr);
console.log(checkPassportValidity(passportArr).length);
//console.log(checkPassportValidity(passportArr)[10]);