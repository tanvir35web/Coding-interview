var countPairs = function (nums, target) {
    count = 0;
    for(i=0; i < nums.length; i++) {
        for(j = i+1; j < nums.length; j++) {
            if(nums[i] + nums[j] < target) {
                count++;
            }
        }
    }

    return count;
};

nums = [-1,1,2,3,1];
console.log(countPairs(nums, 2));