var smallerNumbersThanCurrent = function (nums) {
    result = [];
    for (i = 0; i < nums.length; i++) {
        counter = 0;
        tempValue = nums[i];
        for (j = 0; j < nums.length; j++) {
            if (tempValue > nums[j]) {
                counter++;
            }
        }
        result.push(counter);
    }
    return result;
};

const nums = [6,5,4,8];
console.log(smallerNumbersThanCurrent(nums));
