const fs = require('fs');
const input = fs.readFileSync('day-13/day-13-input.txt').toString().split('\r\n');
const busArr = input[1].split(',');
console.log(busArr);

const getEarliestTime = (busID, timestamp) => {
	if(timestamp % busID === 0) {
		return timestamp;
	} else {
		return timestamp + (busID - (timestamp % busID));
	};
};

const getTimestamp = (busArr) => {
	let timestamp = 0;
	let found = false;
	let counter = 0;
	while(!found) {
		counter += 1;
		timestamp += 601;
		let times = [];
		let time = 0;
		//console.log(timestamp);
		for(let i = 0; i < busArr.length; i++) {
			if(busArr[i] === 'x') {
				time += 1;
				times.push(time);
			} else {
				time = getEarliestTime(busArr[i], timestamp);
				times.push(time);
			};
		};
		//console.log(times);
		found = true;
		for(let j = 0; j < times.length - 1; j++) {
			if(times[j] != (times[j+1] - 1)) {
				//console.log(`Time1: ${times[j]} - Time2: ${times[j+1]}`);
				found = false;
			};
		};
	};
	return timestamp;
};

console.log(getTimestamp(busArr));

module.exports = {getEarliestTime};