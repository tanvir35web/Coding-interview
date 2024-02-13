var sumIndicesWithKSetBits = function (nums, k) {
    bin = [];
    sum = 0;

    for (i = 0; i < nums.length; i++) {
        bin.push(i.toString(2).split("1").length - 1);
        if (bin[i] === k) {
            sum += nums[i];
        }
    }
    return sum;
}; 

console.log(sumIndicesWithKSetBits([5,10,1,5,2], 1));