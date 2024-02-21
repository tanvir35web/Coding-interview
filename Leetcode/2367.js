var arithmeticTriplets = function(nums, diff) {
    counter = 0;
    length = nums.length;
    for(i=0; i < length; i++) {
        for(j = i + 1; j < length; j++) {
            for(k = j + 1; k < length; k++) {
                if(nums[j] - nums[i] === diff && nums[k] - nums[j] === diff ) {
                    counter++;
                }
            }
        }
    }

    return counter;
};

console.log(arithmeticTriplets ([0,1,4,6,7,10], 3));