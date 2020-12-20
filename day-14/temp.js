let input = '000000000000000000000000000000X1101X';

let solution = [];

const getAddresses = (startInd, newStr, base) => {
	for(let i = startInd; i < base.length; i++) {
		if(base[i] === 'X') {
			getAddresses(i + 1, newStr.slice(0,i) + '1', base);
			newStr += '0';
		} else {
			newStr += 'Z';
		};
	};
	solution.push(newStr);
};

getAddresses(0, '', input);

console.log(solution);