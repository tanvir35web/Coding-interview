var countKDifference = function (nums, k) {
    count = 0;
    for (i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                if (nums[i] - nums[j] === k) {
                    count++;
                }
            }
            if (nums[i] < nums[j]) {
                if (nums[j] - nums[i] === k) {
                    count++;
                }
            }
        }
    }
    return count;
};

console.log(countKDifference([3,2,1,5,4], 2));
