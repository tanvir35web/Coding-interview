const findMaxNumber = (array) => {
	let maxNumber = array[0];

	for (let i = 1; i < array.length; i++) {
		if (maxNumber < array[i]) {
			maxNumber = array[i];
		}
	}
	
	return maxNumber;
};

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(findMaxNumber(numbers));