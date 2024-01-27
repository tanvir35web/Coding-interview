var differenceOfSum = function (nums) {
  arraySum = 0;
  digitSum = 0;

  for (i = 0; i < nums.length; i++) {
    arraySum += nums[i];
    digit = nums[i].toString();

    for (j = 0; j < digit.length; j++) {
      digitSum += +digit[j];
    }
  }

  difference = (arraySum - digitSum);

  return difference;
};

console.log(differenceOfSum([1, 15, 6, 3]));
