var runningSum = function (nums) {
    let sum = 0;
    const result = [];

    for (i = 0; i < nums.length; i++) {
        sum += nums[i];
        result.push(sum);
    }
    return result;
};

const nums = [1, 2, 3, 4];
console.log(runningSum(nums));
