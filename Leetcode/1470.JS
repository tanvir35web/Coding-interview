var shuffle = function (nums, n) {
  let arr1 = [];
  let arr2 = [];

  result = [];

  for (i = 0; i <= n - 1; i++) {
    arr1.push(nums[i]);
  }

  for (i = n; i < nums.length; i++) {
    arr2.push(nums[i]);
  }

  for (i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
    result.push(arr2[i]);
  }

  return result;
};

const nums = [2, 5, 1, 3, 4, 7];
console.log(shuffle(nums, 3));
