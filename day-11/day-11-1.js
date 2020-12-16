const fs = require('fs');
const input = fs.readFileSync('day-11/day-11-input.txt').toString().split('\r\n').map((line) => {return line.split('')});
//console.log(input);

const checkSeat = (input, seatPos) => {
	const seatRow = seatPos[0];
	const seatCol = seatPos[1];
	let seat = input[seatRow][seatCol];
	if(seat === '.') {
		return seat;
	};
	let occupied = [];
	//console.log('Seat: ' + seat);
	//Check the row above the seat.
	if(seatRow > 0){
		if(seatCol > 0){
			if(input[seatRow-1][seatCol-1] === '#') {
				occupied.push([seatRow-1, seatCol-1]);
			};
		};
		if(input[seatRow-1][seatCol] === '#') {
			occupied.push([seatRow-1, seatCol]);
		};
		if(seatCol < input[0].length-1) {
			if(input[seatRow-1][seatCol+1] === '#') {
				occupied.push([seatRow-1, seatCol+1]);
			};
		};
	};
	//Check the row of the seat.
	if(seatCol > 0) {
		if(input[seatRow][seatCol-1] === '#') {
			occupied.push([seatRow, seatCol-1]);
		};
	};
	if(seatCol < input[0].length-1) {
		if(input[seatRow][seatCol+1] === '#') {
			occupied.push([seatRow, seatCol+1]);
		};
	};
	//Check the row below the seat.
	if(seatRow < input.length-1) {
		if(seatCol > 0) {
			if(input[seatRow+1][seatCol-1] === '#') {
				occupied.push([seatRow+1, seatCol-1]);
			};
		};
		if(input[seatRow+1][seatCol] === '#') {
			occupied.push([seatRow+1, seatCol]);
		};
		if(seatCol < input[0].length-1) {
			if(input[seatRow+1][seatCol+1] === '#') {
				occupied.push([seatRow+1, seatCol+1]);
			};
		};
	};
	//Check whether the state of the seat changes.
	if(occupied.length === 0) {
		seat = '#';
	} else if(occupied.length >= 4) {
		seat = 'L';
	};
	//console.log('Length: ' + occupied.length + ' : ' + 'Seat: ' + seat);
	return seat;
};

const updateSeats = (input) => {
	//console.log(input);
	let newArr = [];
	for(let i = 0; i < input.length; i++) {
		let currRow = [];
		for(let j = 0; j < input[0].length; j++) {
			currRow.push(checkSeat(input, [i,j]));
		};
		newArr.push(currRow);
	};
	return newArr;
};

const getSolution = (input) => {
	let oldArr = '';
	let currArr = input.map((row) => {return row.join('')}).join('');
	while(currArr != oldArr) {
		//console.log(`Old: ${oldArr} - Current: ${currArr}`);
		oldArr = currArr;
		input = updateSeats(input);
		currArr = input.map((row) => {return row.join('')}).join('');
	};
	return currArr;
};

console.log(getSolution(input).split('').filter((chr) => {return chr === '#'}).length);
//console.log(updateSeats(input));

module.exports = {checkSeat, updateSeats};