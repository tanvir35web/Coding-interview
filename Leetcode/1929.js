var getConcatenation = function(nums) {
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        ans.push(nums[i]);
    }
    for (let i = 0; i < nums.length; i++) {
        ans.push(nums[i]);
    }
    return ans;

    // return nums.concat(nums)
};


let nums = [1, 2, 1];
console.log(getConcatenation(nums));
