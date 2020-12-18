const fs = require('fs');

const input = fs.readFileSync('day-12/day-12-input.txt').toString().split('\r\n');
console.log(input);

const moveShip = (ship, waypoint, instr) => {
	const action = instr[0];
	const units = parseInt(instr.slice(1));
	//console.log('Action: ' + action + ' : ' + 'Units: ' + units);
	if(action === 'E') {
		waypoint.position[0] += units;
	} else if(action === 'W') {
		waypoint.position[0] -= units;
	} else if(action === 'N') {
		waypoint.position[1] += units;
	} else if(action === 'S') {
		waypoint.position[1] -= units;
	} else if(action === 'R') {
		if(units === 90) {
			let oldWaypointPosition = waypoint.position.slice(0);
			waypoint.position[0] = ship.position[0] + (oldWaypointPosition[1] - ship.position[1]);
			waypoint.position[1] = ship.position[1] + (ship.position[0] - oldWaypointPosition[0]);
		} else if(units === 180) {
			let oldWaypointPosition = waypoint.position.slice(0);
			waypoint.position[0] = ship.position[0] + (ship.position[0] - oldWaypointPosition[0]);
			waypoint.position[1] = ship.position[1] + (ship.position[1] - oldWaypointPosition[1]);
		} else if(units === 270) {
			let oldWaypointPosition = waypoint.position.slice(0);
			waypoint.position[0] = ship.position[0] - (oldWaypointPosition[1] - ship.position[1]);
			waypoint.position[1] = ship.position[1] - (ship.position[0] - oldWaypointPosition[0]);
		};
	} else if(action === 'L') {
		if(units === 90) {
			let oldWaypointPosition = waypoint.position.slice(0);
			waypoint.position[0] = ship.position[0] - (oldWaypointPosition[1] - ship.position[1]);
			waypoint.position[1] = ship.position[1] - (ship.position[0] - oldWaypointPosition[0]);
		} else if(units === 180) {
			let oldWaypointPosition = waypoint.position.slice(0);
			waypoint.position[0] = ship.position[0] + (ship.position[0] - oldWaypointPosition[0]);
			waypoint.position[1] = ship.position[1] + (ship.position[1] - oldWaypointPosition[1]);
		} else if(units === 270) {
			let oldWaypointPosition = waypoint.position.slice(0);
			waypoint.position[0] = ship.position[0] + (oldWaypointPosition[1] - ship.position[1]);
			waypoint.position[1] = ship.position[1] + (ship.position[0] - oldWaypointPosition[0]);
		};
	} else if(action === 'F') {
		let oldShipPosition = ship.position.slice(0);
		ship.position[0] += (waypoint.position[0] - ship.position[0]) * units;
		ship.position[1] += (waypoint.position[1] - ship.position[1]) * units;
		waypoint.position[0] = ship.position[0] + (waypoint.position[0] - oldShipPosition[0]);
		waypoint.position[1] = ship.position[1] + (waypoint.position[1] - oldShipPosition[1]);
	};
	return ship, waypoint;
};

let ship = {position: [0, 0]};
let waypoint = {position: [10, 1]}
for(let i = 0; i < input.length; i++) {
	console.log(`Ship position: ${ship.position} - Waypoint position: ${waypoint.position}`);
	moveShip(ship, waypoint, input[i]);
};

console.log(Math.abs(ship.position[0]) + Math.abs(ship.position[1]));

//moveShip(null, 'R90');

module.exports = {moveShip};