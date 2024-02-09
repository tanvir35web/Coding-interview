var arithmeticTriplets = function(nums, diff) {
    counter = 0;
    for(i=0; i < nums.length; i++) {
        for(j = i + 1; j < nums.length; j++) {
            for(k = j + 1; k < nums.length; k++) {
                if(nums[j] - nums[i] === diff && nums[k] - nums[j] === diff ) {
                    counter++;
                }
            }
        }
    }

    return counter;
};

console.log(arithmeticTriplets ([0,1,4,6,7,10], 3));