function twoSum(number, target) {
    let result = [];
    for (let i = 0; i < number.length; i++) {
        for (let j = i + 1; j < number.length; j++) {
            if (number[i] + number[j] === target) {
                result.push(i, j);
            }
        }
    }
    return result;
}

console.log(twoSum([2, 7, 11, 15], 9));