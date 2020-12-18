const fs = require('fs');

const input = fs.readFileSync('day-12/day-12-input.txt').toString().split('\r\n');
console.log(input);

const moveShip = (ship, instr) => {
	const action = instr[0];
	const units = parseInt(instr.slice(1));
	//console.log('Action: ' + action + ' : ' + 'Units: ' + units);

	if(action === 'E') {
		ship.position[0] += units;
	} else if(action === 'W') {
		ship.position[0] -= units;
	} else if(action === 'N') {
		ship.position[1] += units;
	} else if(action === 'S') {
		ship.position[1] -= units;
	} else if(action === 'R') {
		if(ship.orientation === 'N') {
			if(units === 90) {
				ship.orientation = 'E';
			} else if(units === 180) {
				ship.orientation = 'S';
			} else if(units === 270) {
				ship.orientation = 'W';
			};
		} else if (ship.orientation === 'E') {
			if(units === 90) {
				ship.orientation = 'S';
			} else if(units === 180) {
				ship.orientation = 'W';
			} else if(units === 270) {
				ship.orientation = 'N';
			};
		} else if (ship.orientation === 'S') {
			if(units === 90) {
				ship.orientation = 'W';
			} else if(units === 180) {
				ship.orientation = 'N';
			} else if(units === 270) {
				ship.orientation = 'E';
			};
		} else if (ship.orientation === 'W') {
			if(units === 90) {
				ship.orientation = 'N';
			} else if(units === 180) {
				ship.orientation = 'E';
			} else if(units === 270) {
				ship.orientation = 'S';
			};
		};
	} else if(action === 'L') {
		if(ship.orientation === 'N') {
			if(units === 90) {
				ship.orientation = 'W';
			} else if(units === 180) {
				ship.orientation = 'S';
			} else if(units === 270) {
				ship.orientation = 'E';
			};
		} else if (ship.orientation === 'E') {
			if(units === 90) {
				ship.orientation = 'N';
			} else if(units === 180) {
				ship.orientation = 'W';
			} else if(units === 270) {
				ship.orientation = 'S';
			};
		} else if (ship.orientation === 'S') {
			if(units === 90) {
				ship.orientation = 'E';
			} else if(units === 180) {
				ship.orientation = 'N';
			} else if(units === 270) {
				ship.orientation = 'W';
			};
		} else if (ship.orientation === 'W') {
			if(units === 90) {
				ship.orientation = 'S';
			} else if(units === 180) {
				ship.orientation = 'E';
			} else if(units === 270) {
				ship.orientation = 'N';
			};
		};
	} else if(action === 'F') {
		if(ship.orientation === 'E') {
			ship.position[0] += units;
		} else if(ship.orientation === 'W') {
			ship.position[0] -= units;
		} else if(ship.orientation === 'N') {
			ship.position[1] += units;
		} else if(ship.orientation === 'S') {
			ship.position[1] -= units;
		};
	};
	return ship;
};

let ship = {position: [0, 0], orientation: 'E'};
for(let i = 0; i < input.length; i++) {
	ship = moveShip(ship, input[i]);
	console.log(`Position: ${ship.position} - Orientation: ${ship.orientation}`);
};

console.log(Math.abs(ship.position[0]) + Math.abs(ship.position[1]));

//moveShip(null, 'R90');

module.exports = {moveShip};