const fs = require('fs');

const inputFile = fs.readFileSync('day-4/day-4-input.txt').toString().split('\r\n');


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

console.log(passportArr.length);

const validateValue = (code, value) => {
	if(code === 'byr') {
		if(/\b\d{4}\b/.test(value)) {
			if(parseInt(value) >= 1920 && parseInt(value) <= 2002) {
				return true;
			};
		};
		return false;
	} else if(code === 'iyr') {
		if(/\b\d{4}\b/.test(value)) {
			if(parseInt(value) >= 2010 && parseInt(value) <= 2020) {
				return true;
			};
		};
		return false;
	} else if(code === 'eyr') {
		if(/\b\d{4}\b/.test(value)) {
			if(parseInt(value) >= 2020 && parseInt(value) <= 2030) {
				return true;
			};
		};
		return false;
	} else if(code === 'hgt') {
		if(/\b\d+cm\b/.test(value)) {
			if(parseInt(/\b\d+/.exec(value)) >= 150 && parseInt(/\b\d+/.exec(value)) <= 193) {
				return true;
			};
		} else if(/\b\d+in\b/.test(value)) {
			if(parseInt(/\b\d+/.exec(value)) >= 59 && parseInt(/\b\d+/.exec(value)) <= 76) {
				return true;
			};
		};
		return false;
	} else if(code === 'hcl') {
		if(/#[0-9|a-f]{6}\b/.test(value)) {
			return true;
		};
		return false;
	} else if(code === 'ecl') {
		if(value === 'amb' || value === 'blu' || value === 'brn' || value === 'gry' 
		|| value === 'grn' || value === 'hzl' || value === 'oth') {
			return true;
		};
		return false;
	} else if(code === 'pid') {
		if(/\b\d{9}\b/.test(value)) {
			return true;
		};
		return false;
	};
};

const checkPassportValidity = (passportArr) => {
	return passportArr.filter((passport) => {
		let keys = Object.keys(passport);
		//console.log(passport);
		let conditions = (keys.includes('byr') && validateValue('byr', passport['byr'])) 
		&& (keys.includes('iyr') && validateValue('iyr', passport['iyr']))
		&& (keys.includes('eyr') && validateValue('eyr', passport['eyr']))
		&& (keys.includes('hgt') && validateValue('hgt', passport['hgt']))
		&& (keys.includes('hcl') && validateValue('hcl', passport['hcl']))
		&& (keys.includes('ecl') && validateValue('ecl', passport['ecl']))
		&& (keys.includes('pid') && validateValue('pid', passport['pid']))
		&& (keys.includes('cid') || !keys.includes('cid'));
		//console.log(conditions);
		return conditions;
	});
};

//console.log(inputFile);
//console.log(passportArr);
console.log(checkPassportValidity(passportArr).length);

module.exports = validateValue;