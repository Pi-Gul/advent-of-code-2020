const fs = require('fs');

//Get and process input.
const input = fs.readFileSync('day-16/day-16-input.txt').toString().split('\r\n');
const patternRanges = /\b(.+): (\d+-\d+) or (\d+-\d+)/;
let ranges = {};
let yourTicket = [];
let nearbyTickets = [];
for(let i = 0; i < input.length; i++) {
	let line = input[i];
	let match = line.match(patternRanges);
	if(match != null) {
		const [name, range1, range2] = line.match(patternRanges).slice(1);
		ranges[name] = [range1.split('-').map((str) => {return parseInt(str)}), 
										range2.split('-').map((str) => {return parseInt(str)})];
	} else if(line === 'your ticket:') {
		yourTicket = input[i+1].split(',').map((str) => {return parseInt(str)});
	} else if(line === 'nearby tickets:') {
		nearbyTickets = input
										.slice(i+1)
										.map((str) => {return str.split(',')
																	.map((numStr) => {return parseInt(numStr)})});		
	};
};

//Check whether a given number is in any of the provided ranges.
const checkValidity = (number, ranges) => {
	const keys = Object.keys(ranges);
	for(let i = 0; i < keys.length; i++) {
		let key = keys[i];
		let rangeStart1 = ranges[key][0][0];
		//console.log('Range End1: ' + rangeStart1);
		let rangeEnd1 = ranges[key][0][1];
		let rangeStart2 = ranges[key][1][0];
		let rangeEnd2 = ranges[key][1][1];
		//console.log('Range End2: ' + rangeEnd2)
		if(number >= rangeStart1 && number <= rangeEnd1) {
			return true;
		} else if (number >= rangeStart2 && number <= rangeEnd2) {
			return true;
		};
	};
	return false;
};

//Get the solution.
let goodTickets = [];
let badTicketVals = [];
for(let i = 0; i < nearbyTickets.length; i++) {
	let ticket = nearbyTickets[i];
	for(let j = 0; j < ticket.length; j++) {
		let ticketNum = ticket[j];
		if(!checkValidity(ticketNum, ranges)) {
			badTicketVals.push(ticketNum);
		};
	};
	goodTickets.push(ticket);
};
console.log('Good tickets:' + goodTickets.length);
console.log(badTicketVals.reduce((acc, curr) => {return acc+curr}));

//Export checkValidity.
module.exports = {checkValidity};