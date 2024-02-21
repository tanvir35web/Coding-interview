// var findClosestNumber = function (nums) {
//     var arr = [];

//     for (var i = 0; i < nums.length; i++) {
//         if (nums[i] > 0) {
//             arr.push(nums[i] - 0);
//         } else {
//             arr.push(0 - nums[i]);
//         }
//     }

//     var minIndex = 0;

//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] < arr[minIndex]) {
//             minIndex = i;
//         }
//     }

//     result = nums[minIndex];

//     return result;
// };

var findClosestNumber = function (nums) {
    let diff = null;
    let closestNumber = null;

    for (let i = 0; i < nums.length; i++) {
        let currentDiff = Math.abs(nums[i]);

        if (diff === null || currentDiff < diff || (currentDiff === diff && nums[i] > closestNumber)) {
            diff = currentDiff;
            closestNumber = nums[i];
        }
    }
    return closestNumber;
};

console.log(findClosestNumber([-4, 3, -2, 15, 1, 9, 4, 8]));
