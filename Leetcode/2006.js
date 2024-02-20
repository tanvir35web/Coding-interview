var countKDifference = function(nums, k) {
    count = 0
    for(i=0; i < nums.length; i++) {
        for(j=i + 1; i < nums.length; j++){
            if(nums[i] - nums[j] === k) {
                count++;
            }

        }
    }

    return count;
};


console.log(countKDifference([1,2,2,1], 1));