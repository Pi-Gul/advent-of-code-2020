const fs = require('fs');
const input = fs.readFileSync('day-11/day-11-input.txt').toString().split('\r\n').map((line) => {return line.split('')});
console.log(input);

const checkSeat = (input, seatPos) => {
	//console.log('Seat position: ' + seatPos);
	const seatRow = seatPos[0];
	const seatCol = seatPos[1];
	let seat = input[seatRow][seatCol];
	if(seat === '.') {
		return seat;
	};
	let occupied = [];
	//console.log('Seat: ' + seat);
	
	//Check the column above.
	if(seatRow > 0) {
		for(let i = seatRow-1; i >= 0; i--) {
			if(input[i][seatCol] === '#') {
				//console.log('Found occupied: column above');
				occupied.push([i, seatCol]);
				i = -1;
			} else if(input[i][seatCol] === 'L') {
				i = -1;
			};
		};
	};
	//Check the column below.
	if(seatRow < input.length-1) {
		for(let i = seatRow+1; i <= input.length-1; i++) {
			if(input[i][seatCol] === '#') {
				//console.log('Found occupied: column below');
				occupied.push([i, seatCol]);
				i = input.length+1;
			} else if(input[i][seatCol] === 'L') {
				i = input.length+1;
			};
		};
	};
	//Check the row to the left.
	if(seatCol > 0) {
		for(let i = seatCol-1; i >= 0; i--) {
			if(input[seatRow][i] === '#') {
				//console.log('Found occupied: row left');
				occupied.push([seatRow, i]);
				i = -1;
			} else if(input[seatRow][i] === 'L') {
				i = -1;
			};
		};
	};
	//Check the row to the right.
	if(seatCol < input[0].length-1) {
		for(let i = seatCol+1; i <= input[0].length-1; i++) {
			if(input[seatRow][i] === '#') {
				//console.log('Found occupied: row right');
				occupied.push([seatRow, i]);
				i = input[0].length+1;
			} else if(input[seatRow][i] === 'L') {
				i = input[0].length+1;
			};
		};
	};
	//Check the left-up diagonal.
	if(seatRow > 0 && seatCol > 0) {
		let j = seatCol;
		for(let i = seatRow-1; i >= 0; i--) {
			j -= 1;
			if(input[i][j] === '#') {
				//console.log('Found occupied: left up');
				occupied.push([i, j]);
				i = -1;
			} else if(input[i][j] === 'L') {
				i = -1;
			};
		};
	};
	//Check the right-up diagonal.
	if(seatRow > 0 && seatCol < input[0].length) {
		let j = seatCol;
		for(let i = seatRow-1; i >= 0; i--) {
			j += 1;
			if(input[i][j] === '#') {
				//console.log('Found occupied: right up');
				occupied.push([i, j]);
				i = -1;
			} else if(input[i][j] === 'L') {
				i = -1;
			};
		};
	};
	//Check the left-down diagonal.
	if(seatRow < input.length-1 && seatCol > 0) {
		let j = seatCol;
		for(let i = seatRow+1; i <= input.length-1; i++) {
		j -= 1;
			if(input[i][j] === '#') {
				//console.log('Found occupied: left down');
				occupied.push([i, j]);
				i = input.length+1;
			} else if(input[i][j] === 'L') {
				i = input.length+1;
			};
		};
	};
	//Check the right-down diagonal.
	if(seatRow < input.length-1 && seatCol < input[0].length-1) {
		let j = seatCol;
		for(let i = seatRow+1; i <= input.length-1; i++) {
			j += 1;
			if(input[i][j] === '#') {
				//console.log('Found occupied: right down');
				occupied.push([i, j]);
				i = input.length+1;
			} else if(input[i][j] === 'L') {
				i = input.length+1;
			};
		};
	};	

	//Check whether the state of the seat changes.
	if(occupied.length === 0) {
		seat = '#';
	} else if(occupied.length >= 5) {
		seat = 'L';
	};
	//console.log('Occupied: ' + occupied + ' : ' + 'Length: ' + occupied.length + ' : ' + 'Seat: ' + seat);
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
	console.log(input);
	while(currArr != oldArr) {
		//console.log(`Old: ${oldArr} - Current: ${currArr}`);
		oldArr = currArr;
		input = updateSeats(input);
		console.log(input.map((line) => {return line.join('')}));
		currArr = input.map((row) => {return row.join('')}).join('');
	};
	return currArr;
};

console.log(getSolution(input).split('').filter((chr) => {return chr === '#'}).length);
//console.log(updateSeats(input));

//console.log(updateSeats(input));
//console.log(checkSeat(input, [0,0]));

module.exports = {checkSeat, updateSeats};