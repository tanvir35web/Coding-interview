var leftRightDifference = function (nums) {
    leftSumArr = [0];
    rightSumArr = [0];
    leftSum = 0;
    rightSum = 0;
    newRightSumArr = [];
    resultArr = [];

    for (i = 0; i < nums.length - 1; i++) {
        leftSum += nums[i];
        leftSumArr.push(leftSum);
    }

    for (i = nums.length - 1; i > 0; i--) {
        rightSum += nums[i];
        rightSumArr.push(rightSum);
    }

    for (i = rightSumArr.length - 1; i >= 0; i--) {
        newRightSumArr.push(rightSumArr[i]);
    }

    for (i = 0; i < nums.length; i++) {
        
        if (leftSumArr[i] > newRightSumArr[i]) {
            result = leftSumArr[i] - newRightSumArr[i];
        } else {
            result = newRightSumArr[i] - leftSumArr[i];
        }
        resultArr.push(result);
    }

    return resultArr;

};

console.log(leftRightDifference([10, 4, 8, 3]));
