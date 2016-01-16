'use strict';
module.exports = function (buffer, limit) {
	limit = limit || 20;
	return buffer.toString('hex').split('')
		.reduce(function (arr, char) {
			if (arr.length && arr[arr.length - 1].length === 1) {
				arr[arr.length - 1] += char;
				if (arr.length && arr.length % limit === 0) {
					arr[arr.length - 1] += '\n';
				} else {
					arr[arr.length - 1] += ' ';
				}
			} else {
				arr.push(char);
			}
			return arr;
		}, []).join('').trim();
};
