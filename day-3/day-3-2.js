const fs = require('fs');

const input = fs.readFileSync('./day-3-input.txt').toString().split('\r\n');
const slope = [1,3]; // row, column
const slopesArr = [[1,1], [1,3], [1,5], [1,7], [2,1]];

console.log(input);

//return the character and the end position after one move given a map, a slope and a starting position
//warp to column 0 if columns exceeded
//return undefined if rows exceeded
const move = (map, slope, start) => {
	const end = [start[0] + slope[0], start[1] + slope[1]];
	if(end[1] >= map[0].length) {
		end[1] = end[1] - map[0].length;
	};
	if(end[0] >= map.length) {
		return [undefined, undefined];
	};
	return [map[end[0]][end[1]], end];
};

//keep moving and count the trees along the way
//return the number of trees encountered
const countTrees = (map, slope) => {
	let counter = 0;
	let currentPos = [0,0];
	let currentChar = ['.'];
	while(currentChar != undefined) {
		//console.log(currentPos + ' : ' + currentChar);
		[currentChar, currentPos] = move(map, slope, currentPos);
		if(currentChar === '#') {
			counter += 1;
		};
	};
	return counter;
};

//console.log(move(input, slope, [1,3]));
//console.log(countTrees(input, slope));

let treeCountsArr = [];

for(let i = 0; i < slopesArr.length; ++i) {
	treeCountsArr.push(countTrees(input, slopesArr[i]));
};

console.log(treeCountsArr);
console.log(treeCountsArr.reduce((acc,curr) => {return acc * curr}));

module.exports = countTrees;