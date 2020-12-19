const fs = require('fs');
const input = fs.readFileSync('day-13/day-13-input.txt').toString().split('\r\n');
const timestamp = parseInt(input[0]);
const busArr = input[1].split(',').filter((chr) => {return chr != 'x'}).map((num) => {return parseInt(num)});
console.log(timestamp);
console.log(busArr);

const getEarliestTime = (busID, timestamp) => {
	let timePoint = 0;
	for(let i = 0; i < timestamp; i += busID) {
		timePoint += busID;
		//console.log(timePoint);
	};
	return timePoint;
};

let times = {};
busArr.forEach((busID) => {times[getEarliestTime(busID, timestamp)] = busID});

const earliestTime = Object.keys(times).map((key) => {return parseInt(key)}).sort((a, b) => {return a - b})[0];
const minutesToWait = earliestTime - timestamp;
console.log(minutesToWait);
console.log(minutesToWait * times[earliestTime]);

//console.log(times);

module.exports = {getEarliestTime};